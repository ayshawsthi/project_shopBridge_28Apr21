angular.module("eCommerce",["ngMaterial","angularUtils.directives.dirPagination","ui.router"])
       .config(function($mdThemingProvider, $stateProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');

            // Defining states

            $stateProvider
                .state('listings',{
                    url: '/listings',
                    templateUrl: 'components/listings/listings.tpl.html',
                    controller: 'eCommerceCtrl as vm'
                })
                .state('listings.new',{
                    url:'/new',
                    templateUrl: 'components/new/listings.new.tpl.html',
                    controller: 'newListingsCtrl as vm'
                })
        })
       