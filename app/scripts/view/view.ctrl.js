(function() {
  angular
    .module('app.view')
    .controller('ViewCtrl', ViewCtrl);

  ViewCtrl.$inject = ['$mdSidenav'];

  /**
   * Controller for Application View
   *
   * @controller  ViewCtrl
   * @alias       vm
   * @param       $mdSidenav
   */
  function ViewCtrl($mdSidenav) {
    var vm = this;

    activate();

    ////////////

    /**
     * Constructor 
     */
    function activate() {
        return true;
    }

  }


})();