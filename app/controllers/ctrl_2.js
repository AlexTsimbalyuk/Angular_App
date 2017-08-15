store_app.controller("ctrl_2", function($scope){
	
	$scope.data_buy = []; // купленные товары
	$scope.sum_buy = 0; // количество покупок 
	
	$scope.$on("selection", function(event, x){ // 2
	
		$scope.productBuy = x; 
		
		$scope.data_buy.push({ // 
            buyModel: $scope.productBuy.model, 
            buyPrice: $scope.productBuy.price,
            buyPicture: $scope.productBuy.picture,
        });
		
		$scope.sum_buy = $scope.data_buy.length;
		console.log("Колличество покупок " + $scope.sum_buy);
		
		$scope.sumPrice = 0; // общая стоимость покупок 
		
		for( var i = 0; i < $scope.data_buy.length; i++ ) {
			$scope.sumPrice += $scope.data_buy[i].buyPrice;
		}
		console.log("Общая стоимость покупок " + $scope.sumPrice);
		
		$scope.$emit("number", $scope.sum_buy); // 3
	});
	
	$scope.delFromBag = function(index) {
		
		$scope.sumPrice -= $scope.data_buy[index].buyPrice;

		$scope.data_buy.splice(index, 1);
		
		$scope.sum_buy = $scope.data_buy.length;
		
		$scope.$emit("number", $scope.sum_buy); // 3
	}
});















