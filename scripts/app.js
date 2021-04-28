angular.module("eCommerce",["ngMaterial","angularUtils.directives.dirPagination"])
        .config(function($mdThemingProvider){
            $mdThemingProvider.theme('default')
                                .primaryPalette('indigo')
                                .accentPalette('orange');
        })
        .directive("helloWorld", function(){
            return{
                template:"<h1>{{message}}</h1>"
            }
        });