  angular
.module('app')
.controller('DashboardController', function($scope, $rootScope, $http) {

	var url = "https://test-binar.herokuapp.com/v1/products/"
	var headers = {
		headers : {'Authorization' : localStorage.getItem ('token') }
	} 
	var config = {
		headers : {'Content-Type' : 'application/json'}
	}
	var data = JSON.stringify({
        "id": $scope.id,
        "name": $scope.name,
        "price": $scope.price,
        "imageurl": $scope.imageurl
    });
    


	$http.get(url, headers, config).then(function (response)
	{
		
		$scope.result = response.data.result;
		console.log(response.data.result)
	});


	$scope.add = function (data) {
		console.log(data)
		$http.post(url, data, headers, config).then(function (data)
		{
	
			console.log(data)
			$scope.result.push(data.data.result)
		});

	};

	
	$scope.delete = function (id) {
		$scope.ok = function () {
			$http.delete(url + id, headers, data, config).then(function(data)
			{
				console.log(data)
				$http.get(url, headers, config).then(function (response)
				{
					$scope.result = response.data.result;
					console.log(response.data.result)
				});
    		});
    	}
    }
	
    $scope.edit = function (id) {
    	$scope.submit = function () {
		 	$http.put(url + id, data, headers, config).then(function(data)
		    {
		    	console.log(data)
		    	$http.get(url, headers, config).then(function (response)
				{
					$scope.result = response.data.result;
					console.log(response.data.result)
				});
		    	
		    });
		}
	}
 	
		// Get the modal
	// var modal = document.getElementById('myModal');

	// // Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// // When the user clicks the button, open the modal 
	// function btn() {
	//     modal.style.display = "block";
	// }

	// // When the user clicks on <span> (close), close the modal
	// function span() {
	//     modal.style.display = "none";
	// }
});