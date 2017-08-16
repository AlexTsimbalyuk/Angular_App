store_app.controller("ctrl_1", function($scope){
	
	$scope.data = model; // каталог товаров

	$scope.addToBag = function(i) { 
	
		$scope.$broadcast("selection", $scope.data[i]); // 1->
		console.log( "Название товара: " + $scope.data[i].model );
	}
	
	$scope.$on("number", function(event, x){ // ->2
	
		var round = angular.element(document.querySelector(".header__bag--round"));
		
		$scope.sum = x; 
		
		if ( $scope.sum > 0 && $scope.sum < 10 ) {
			
			$scope.removeElem = true;
			round.css("padding", "3px 7px");
			
		} else if ( $scope.sum > 9 ){
			
			$scope.removeElem = true;
			round.css("padding", "3px 3px");
			
		} else {
			
			$scope.removeElem = false;
			
		}
	});
});