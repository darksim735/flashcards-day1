var app = angular.module('flashcards', []);

app.controller('FlashCardController', function($scope){    

// var answered;
// var realAnswer = false;
// var answeredCorrectly;


	$scope.answeredCorrectly;

	$scope.checkAnswer = function(thing){
		console.log("hello, function fired");
		console.log("answer: ",thing);
		console.log("answer_result: ",thing.correct);

		$scope.answeredCorrectly = 	thing.correct
		console.log("result: ",$scope.answeredCorrectly);		

		//console.log($scope.flashCard.correct);
		
		$scope.realAnswer = thing;
		$scope.answered = true;
		console.log("answered: ",answered);
	    console.log("realAnswer: ",realAnswer);

	};


//	$scope.answeredCorrectly = function(){
//		console.log("answered correctly fired");
//		return realAnswer;
//	};

    
    $scope.flashCard = {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true},
            { text: 'Greg owns a cat', correct: false },
            { text: 'The name of Gregs pet dog', correct: false} 
                 ]
                        };

});



