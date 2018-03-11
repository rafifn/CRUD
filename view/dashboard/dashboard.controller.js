  angular
.module('app')
.controller('DashboardController', function($scope, $http, $stateParams) {

	var url = "https://test-binar.herokuapp.com/v1/products/"
	var headers = {
		headers : {'Authorization' : localStorage.getItem ('token') }
	} 
	var contentType = {
		headers : {'Content-Type' : 'application/json'}
	}
	var data = JSON.stringify({
        "id": $scope.id,
        "name": $scope.name,
        "price": $scope.price
    });

	$http.get(url,headers).then(function (response)
	{
		$scope.result = response.data.result;
	});

	$scope.addData = function () {

		$http.post(url,data,headers).then(function (response)
		{
			console.log(response)
	    	$scope.result = response.data.result;
	    });
 	}

 	$http.put(url + $stateParams.id,data,headers).then(function(response)
    {
    	console.log(response)
    	$scope.result = response.data.result;
    	console.log($scope.result);
    	
    });
		// Get the modal
	var modal = document.getElementById('myModal');

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	function btn() {
	    modal.style.display = "block";
	}

	// When the user clicks on <span> (close), close the modal
	function span() {
	    modal.style.display = "none";
	}
});