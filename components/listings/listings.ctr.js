(function(){

    "use strict";
    // only a reference to module, creation is already done.
    angular.module("eCommerce")
           .controller("eCommerceCtrl",function($scope, eCommerceFactory, $state, $mdSidenav, $mdToast, $mdDialog){
            
            var vm =this;
            
            vm.openSidebar = openSidebar;
            vm.closeSidebar = closeSidebar;
            vm.editListing = editListing;
            vm.deleteListing = deleteListing;

            vm.listings;
            vm.categories;

            // Fake API call from a local JSON for handling asynchronus calls in JavaScript through Promises
            // Using eCommerceFactory service for making this API call reusable and can be altered as required in diff components
            eCommerceFactory.getListings().then(function(listings){
                vm.listings = listings.data;

                //For giving the dropdown to filter according to the category
                vm.categories = getCategories(vm.listings);
            });

            // Getting the data from child controller i.e listings.new.tpl.html
            $scope.$on('newListing', function(event, listing){
                listing.id = vm.listings.length + 1;
                vm.listings.push(listing);
                showToast('Listing Saved!');
            });

            // Getting the data from child controller i.e listings.edit.tpl.html
            $scope.$on('editSaved', function(event, message){
                showToast(message);
            });

            function openSidebar(){
                $state.go('listings.new');
            }

            function closeSidebar(){
                $mdSidenav('left').close();
            }

            // Here 'listing' is for fetching current data in form, kept same to be generic
            function editListing(listing){
                // Passing routeParams
                $state.go('listings.edit',{
                    id : listing.id,
                    listing : listing
                });
            }

            function deleteListing(listing, event){
                var confirm = $mdDialog.confirm()
                      .title('Are you sure you want to delete' + listing.title + '?')
                      .targetEvent(event)
                      .ok('Yes')
                      .cancel('No');
                      // Including a promise which waits for user response 'Yes' or 'No
                $mdDialog.show(confirm).then(function(){
                    var index = vm.listings.indexOf(listing);
                    vm.listings.splice(index, 1);
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