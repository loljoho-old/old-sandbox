(function() {
  angular
    .module('app.core')
    .config(mdThemeConfig);

  mdThemeConfig.$inject = ['$mdThemingProvider'];
  /**
   * Configure Theme Colours
   * @param   $mdThemingProvider
   */
  function mdThemeConfig($mdThemingProvider) {

    /**
     * Default Theme Colours
     */
    $mdThemingProvider.theme('default')
      // shades 500, 300, 800, A100
      .primaryPalette('indigo')

      // shades 400, 300, 800, A100
      .accentPalette('pink')

      // shades 500, 300, 800, A100
      .warnPalette('red')

      // white
      .backgroundPalette('grey');

  }


})();