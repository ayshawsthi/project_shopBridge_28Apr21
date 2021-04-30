(function(){
    "use strict";

    // angular.module("eCommerce")
        app.factory("eCommerceFactory", function($http){

            function getListings(){
                return $http.get('data/listings.json');
            }
            return{
                getListings : getListings
            }

           })
})();