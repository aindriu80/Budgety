
// Budget Controller
var budgetController = (function(){
    // Some code
})();

// UI Controller
var UIController = (function() {
    // Some code
})();

// Global App Controller
var controller = (function(budgeCtrl, UICtrl){
    var ctrlAddItem = function() {
       
       // 1. Get the filled input data

       // 2. Get the item to the budget controller

       // 3. Add the item to the UI

       // 4. Calculate the budget

       // 5. Display the budget on the UI
       console.log('So it works!');

    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);   

    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);

