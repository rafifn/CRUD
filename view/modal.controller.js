(function(){
  angular
  .module('app')
  .controller('ModalController',function(DashboardController){
    var vm = this;
    vm.modal = [];
    
    initialize();
    
    function initialize(){
      getModal();
    }
    
    function getAccounts(){
      vm.modal = DashboardController.getModal();
    }
  }
})();