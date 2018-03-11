angular
.module('app')
.controller('AppController', function($scope, $state) {
  if (localStorage.getItem("token") == null) {
      alert ("Please insert email and password");
      window.location.href = "#!/";
    }
})