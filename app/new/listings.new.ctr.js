(function(){

    "use strict"

    // angular.module('eCommerce')
        app.controller('newListingsCtrl', function($mdSidenav, $timeout, $scope, $state){

            var vm =this;

            vm.closeSidebar = closeSidebar;
            vm.saveListing = saveListing;

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

            function closeSidebar(){
                vm.sidenavOpen = false
            }

            // Passing the data to parent controller
            function saveListing(listing){
                if(listing){
                    // Faking contact details for the user adding the listing
                    listing.contact = {
                        name: "Victor Hugh",
                        phone : "+ 91 9123567435",
                        email: "victorHugh@email.com"
                    }
                    $scope.$emit('newListing', listing);
                    vm.sidenavOpen = false;
                }
            }

           })

})();