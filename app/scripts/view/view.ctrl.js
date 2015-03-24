(function() {
  angular
    .module('app.view')
    .controller('ViewCtrl', ViewCtrl);

  ViewCtrl.$inject = ['$mdSidenav', '$mdBottomSheet'];

  /**
   * Controller for Application View
   *
   * @controller  ViewCtrl
   * @alias       vm
   * @param       $mdSidenav
   * @param       $mdBottomSheet
   */
  function ViewCtrl($mdSidenav, $mdBottomSheet) {
    var vm = this;

    activate();

    ////////////

    /**
     * Constructor 
     */
    function activate() {
        return true;
    }

    vm.showMenu = function() {
      $mdBottomSheet.show({
        template:     '<md-bottom-sheet><h1>Menu</h1></md-bottom-sheet>',
        controller:   'MenuCtrl',
        controllerAs: 'mc'
      });
    }
    vm.toggleNav = function() {
      $mdSidenav('left').toggle();
    }

  }


})();