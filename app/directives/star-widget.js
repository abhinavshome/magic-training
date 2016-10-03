booksCart.directive('starWidget', function() {
    return {
        templateUrl: 'templates/star-widget.html',
        link: function(scope, element, attributes) {
            //Step1: initial rendering
            function drawStars(numOfStars) {
                scope.stars = [];

                for (var i = 0; i < 5; i++) {
                    var star = i < numOfStars ? 1 : 0;
                    scope.stars.push(star);
                }
            }
            drawStars(scope.book.rating);


            //Step2: 1st way of 2 way data binding
            scope.$watch('book.rating', function(newVal, oldVal) {
                drawStars(newVal);
            });

            //Step3: 2nd way of 2 way data binding
            scope.updateStars = function(index) {
                drawStars(index + 1);
                scope.book.rating = index + 1;
            }

        }
    }
})
