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

    

/*    $scope.flashCard = {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true},
            { text: 'Greg owns a cat', correct: false },
            { text: 'The name of Gregs pet dog', correct: false} 
                 ]
    };*/
 

}); // close FlashCardController



app.controller('MainController', function($scope){

	$scope.flashCards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ]
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ]
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ]
    }
	];

});

