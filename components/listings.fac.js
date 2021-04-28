(function(){
    "use strict";

    angular.module("eCommerce")
           .factory("eCommerceFactory", function($http){

            function getListings(){
                return $http.get('data/listings.json');
            }
            return{
                getListings : getListings
            }

           })
})();