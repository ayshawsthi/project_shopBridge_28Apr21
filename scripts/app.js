angular.module("eCommerce",["ngMaterial","angularUtils.directives.dirPagination"])
        .config(function($mdThemingProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');
        })
       