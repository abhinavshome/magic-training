booksCart.directive('starWidget', function() {
    return {
        templateUrl: 'templates/star-widget.html',
        scope: {
            item: "=",
            color: "@",
            onStarClick: '&'
        },
        link: function(scope, element, attributes) {
            // console.log(scope.item);
            // console.log(scope.color);
            // console.log(scope.onStarClick);
            
            //Step1: initial rendering
            function drawStars(numOfStars) {
                console.log('drawing stars', numOfStars);
                scope.stars = [];

                for (var i = 0; i < 5; i++) {
                    var star = i < numOfStars ? 1 : 0;
                    scope.stars.push(star);
                }
                console.log(scope.stars);
            }
            drawStars(scope.item.rating);


            //Step2: 1st way of 2 way data binding
            // $scope.$watch('item.rating', function(newVal, oldVal) {
            //     drawStars(newVal);
            // });

            //Step3: 2nd way of 2 way data binding
            scope.updateStars = function(index) {
                drawStars(index + 1);
                scope.item.rating = index + 1;
                scope.onStarClick({
                    numStar: index + 1
                });
            }

        }

    }
})
