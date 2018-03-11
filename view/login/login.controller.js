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
        localStorage.setItem("token", "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1MjA3OTg1NTh9.jZtix9qHZVv8kchSSzbOMAM74n0JnzhJ4cD_rLT3zNY");

        
      })
    }  
})