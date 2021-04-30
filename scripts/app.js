var app = angular.module("eCommerce",['ngMaterial',"angularUtils.directives.dirPagination","ui.router","ngMessages"])
      app.config(function($mdThemingProvider, $stateProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');

            // Defining states for listing, newListings, editListings

            $stateProvider
                .state('listings',{
                    url: '/listings',
                    templateUrl: 'app/listings/listings.tpl.html',
                    controller: 'eCommerceCtrl as vm'
                })
                .state('listings.new',{
                    url:'/new',
                    templateUrl: 'app/new/listings.new.tpl.html',
                    controller: 'newListingsCtrl as vm'
                })
                .state('listings.edit',{
                    url:'/edit/:id',
                    templateUrl: 'app/edit/listings.edit.tpl.html',
                    controller: 'editListingsCtrl as vm',
                    params: {
                        listing: null
                    }
                })
        })
       