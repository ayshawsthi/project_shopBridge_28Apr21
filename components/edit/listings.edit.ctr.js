(function(){

    "use strict"

    angular.module('eCommerce')
           .controller('editListingsCtrl', function($mdSidenav, $timeout, $scope, $state, eCommerceFactory){

                var vm =this;

                vm.closeSidebar = closeSidebar;
                vm.saveEditListing = saveEditListing;
                vm.listing = $state.params.listing;

                $timeout(function(){
                    $mdSidenav('left').open();
                },2000)

                //Watching the close event and changing the route to default
                $scope.$watch('vm.sidenavOpen', function(sidenav){
                    if (sidenav === false){
                        $mdSidenav('left').close().then(function(){
                            $state.go('listings');
                        })
                    }
                });

                // Passing the message to showToast
                function saveEditListing(){
                    $scope.$emit('editSaved', 'Edit Saved!');
                    vm.sidenavOpen = false
                }

                function closeSidebar(){
                    vm.sidenavOpen = false;
                }
            })

})();