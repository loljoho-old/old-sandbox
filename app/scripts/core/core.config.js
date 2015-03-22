(function() {
  angular
    .module('app.core')
    //.config(mdThemeConfig)
    .config(mdIconConfig);

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
      .accentPalette('purple')

      // shades 500, 300, 800, A100
      .warnPalette('red')

      // white
      .backgroundPalette('grey');

  }

  //mdIconConfig.$inject = ['$mdIconProvider'];
  /**
   * Configure Icon Set
   * @param   $mdIconProvider
   *
  function mdIconConfig($mdIconProvider) {
  */
      /**
       * Default Icon Set
       *
      $mdIconProvider.defaultIconSet('.bower_components/material-design-icons/')
  }*/


})();