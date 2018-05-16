angular
.module('app')
.controller('LoginController', function($scope, $http) {
    $scope.formsubmit = function () {

      var data = JSON.stringify({
        "email": $scope.email,
        "password": $scope.password
      });

      $http.post("https://test-binar.herokuapp.com/auth/login", data)
      .then(function(response) {
        console.log(response.data.status);
        if (response.data.status == "OK"){
          
          window.location.href = "?#!/app/dashboard";
          }
          else{
          alert("Email or Password incorrect");
          }
        localStorage.setItem("token", result.result.access_token);

        
      })
    }  
})