var budgetController = (function(){
    var x = 23;
    var add = function(a) {
        return x + a;        
    }
    return {
        publicTest: function(b){
            return (add(b));
        }
    }
})();

var UIController = (function() {
    // Some code
})();

var controller = (function(budgeCtrl, UICtrl){
    
    var z = budgeCtrl.publicTest(5);
    return {
        anotherPublicMethod: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);

