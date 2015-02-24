// console.log(angular.module('asd',[]).controller);
var app = angular.module('myApp',[]);

app.controller('MyController', function ($scope){
	$scope.person = {
		name: "Cyprian"
	};

	$scope.clock =  {
		now: new Date()
	}
	var updateClock = function() {
		$scope.clock.now = new Date();
	}
	setInterval(function(){
		$scope.$apply(updateClock);
	},1000);
	updateClock();
});

app.controller('FirstController', function ($scope) {
	$scope.counter = 0;

	$scope.add = function(amount){
		$scope.counter += amount;
	}

	$scope.substract = function(amount) {
		$scope.counter -= amount;
	}
});


app.controller('ParentController', function($scope){
	$scope.person={greeted: false};
});

app.controller('ChildController', function($scope){
	$scope.sayHello = function() {
		$scope.person.name = "Ari Lerner";
		$scope.person.greeted = true;
	}
	
});

app.controller('ExpressionController', ['$scope', '$parse', function($scope, $parse){
	$scope.$watch('expr', function(newVal, oldVal, scope){
		// console.log($scope);
		if(newVal !== oldVal){
			var parseFun = $parse(newVal);
			// console.log(scope)
			scope.parsedValue = parseFun($scope);
			// scope.parsedValue = newVal;

			// console.log('asd', scope);
		}
	});
}]);

app.controller('DemoController',['$scope','$filter', function($scope, $filter){
	$scope.name = $filter('lowercase')('testFILTERlowBIG');
}]);


app.filter('capitalize', function(){
	return function(input){
		if(input) {
			return input[0].toUpperCase() + input.slice(1);
		}
		// else return 'asd';
	};
});

app.controller('CustomFilterController', function($scope) {
	$scope.name = 'dupdappspdpapsd';
});
