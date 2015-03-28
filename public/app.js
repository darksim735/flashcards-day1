var app = angular.module('flashcards', []);

app.controller('FlashCardController', function($scope){    


$scope.checkAnswer = function(thing){
console.log("hello, function fired");
//console.log($scope.flashCard.correct);
console.log(thing);

};

    
    $scope.flashCard = {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true},
            { text: 'Greg owns a cat', correct: false },
            { text: 'The name of Gregs pet dog', correct: false} 
                 ]
                        };

});



