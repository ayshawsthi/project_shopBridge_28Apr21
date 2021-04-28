(function(){

    "use strict";
    // only a reference to module, creation is already done.
    angular.module("eCommerce")
           .controller("eCommerceCtrl",function($scope,eCommerceFactory,$mdSidenav,$mdToast,$mdDialog){

            // Fake API call from a local JSON for handling asynchronus calls in JavaScript through Promises
            // Using eCommerceFactory service for making this API call reusable and can be altered as required in diff components
            eCommerceFactory.getListings().then(function(listings){
                $scope.listings = listings.data;

                //For giving the dropdown to filter according to the category
                $scope.categories = getCategories($scope.listings);
            });

            // Faking contact details for the user adding the listing
            var contact = {
                name: "Victor Hugh",
                phone : "+ 91 9123567435",
                email: "victorHugh@email.com"
            }



            $scope.openSidebar = function(){
                $mdSidenav('left').open();
            }

            $scope.closeSidebar = function(){
                $mdSidenav('left').close();
            }

            $scope.saveListing = function(listing){
                if(listing){
                    listing.contact = contact;
                    // here 'listing is what user inputs'
                    $scope.listings.push(listing);
                    $scope.listing = {};
                    $scope.closeSidebar();   
                    showToast("Listing Saved!");
                }
            }

            $scope.saveEditListing = function(){
                $scope.editing = false;
                $scope.listing = {};
                $scope.closeSidebar();
                showToast("Listing Edited!");
            }

            // Here 'listing' is for fetching current data in form, kept same to be generic
            $scope.editListing = function(listing){
                $scope.editing = true;
                $scope.openSidebar();
                $scope.listing = listing;
            }

            $scope.deleteListing = function(listing, event){
                var confirm = $mdDialog.confirm()
                      .title('Are you sure you want to delete' + listing.title + '?')
                      .targetEvent(event)
                      .ok('Yes')
                      .cancel('No');
                      // Including a promise which waits for user response 'Yes' or 'No
                $mdDialog.show(confirm).then(function(){
                    var index = $scope.listings.indexOf(listing);
                    $scope.listings.splice(index, 1);
                }, function(){

                });
            }


            function showToast(message){
                $mdToast.show(
                    $mdToast.simple()
                            .textContent(message)
                            .position('bottom, right')
                            .hideDelay(4000)
                );
            }

            function getCategories(listings){

                var categories = [];

                // Angular built-in helper which let us iterate over arrays
                angular.forEach(listings, function(item){
                    angular.forEach(item.categories, function(category){
                        categories.push(category)
                    });
                });
                return _.uniq(categories);

            }


           
           });
})();