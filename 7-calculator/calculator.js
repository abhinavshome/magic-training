//Calc 

var calculator = (function() {
    var operand1,
        operand2,
        operator,
        operators = ['+', '-', '/', '*'],
        commands = ['C', '='],
        result;

    function isNumber(input) {
        return !isNaN(input);
    }

    function isCommand(input) {
        return commands.indexOf(input) != -1;
    }

    function isOperator(input) {
        return operators.indexOf(input) != -1;
    }

    function erase() {
        result = null;
        operand1 = null;
        operand2 = null;
        operator = null;
    }

    function evaluate() {
        operand1 = parseInt(operand1);
        operand2 = parseInt(operand2);
        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }
        operand1 = null;
        operand2 = null;
        operator = null;
    }

    function showOnDisplay(str) {
        document.getElementsByTagName('input')[0].value = str;
    }

    function appendToDisplay(str) {
        document.getElementsByTagName('input')[0].value += str;
    }

    function handleDisplay(input) {
        if (isNumber(input) || isOperator(input)) {
            appendToDisplay(input);
        } else if (input == '=') {
            showOnDisplay(result);
        } else if (input == 'C') {
            showOnDisplay('');
        }
    }

    function process(input) {
        // if number
        if (isNumber(input)) {
            if (!operand1)
                operand1 = input;
            else
                operand2 = input;
        }

        // if operator
        else if (isOperator(input)) {
            operator = input;
        }

        // if command
        else if (isCommand(input)) {
            if (input == 'C')
                erase();
            else if (input == '=') {
                evaluate();
            }
        }

        handleDisplay(input);
    }

    return {
        process: process
    }


})();
