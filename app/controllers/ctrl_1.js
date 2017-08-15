store_app.controller("ctrl_1", function($scope){
	
	$scope.data = model; // каталог товаров

	$scope.addToBag = function(i) { 
		$scope.$broadcast("selection", $scope.data[i]); // 1
		console.log( "Название товара: " + $scope.data[i].model );
	}
	
	$scope.$on("number", function(event, x){ // 4
		$scope.sum = x; 
		if ( $scope.sum > 0 ) {
			$scope.removeElem = true;
		} else {
			$scope.removeElem = false;
		}
	});

});

