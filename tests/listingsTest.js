describe('Testing Angularjs suite', function(){

    beforeEach(module('eCommerce'));

    var testController;

    beforeEach(inject(function ($controller) {
        scope = {};

        testController = $controller('eCommerceCtrl', {$scope: scope});

    }));
    describe('Testing title1', function(){
        it('should initialize Controller', function(){
            expect(testController.vm).toBeDefined();
        });
    });

});