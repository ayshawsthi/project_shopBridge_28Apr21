angular.module("eCommerce",["ngMaterial","angularUtils.directives.dirPagination","ui.router","ngMessages"])
       .config(function($mdThemingProvider, $stateProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');

            // Defining states for listing, newListings, editListings

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
                .state('listings.edit',{
                    url:'/edit/:id',
                    templateUrl: 'components/edit/listings.edit.tpl.html',
                    controller: 'editListingsCtrl as vm',
                    params: {
                        listing: null
                    }
                })
        })
       