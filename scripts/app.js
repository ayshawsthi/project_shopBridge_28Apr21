angular.module("eCommerce",["ngMaterial","angularUtils.directives.dirPagination","ui.router"])
       .config(function($mdThemingProvider, $stateProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');

            $stateProvider
                .state('listings',{
                    url: '/listings',
                    templateUrl: 'components/listings/listings.tpl.html',
                    controller: 'eCommerceCtrl as vm'
                })
        })
       