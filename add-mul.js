// Your task is to calculate the total budget required to buy electronics:

    // laptop = 35000 tk
    // tablet = 15000 tk
    // mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(laptop , tablet , mobile){
 let  laptopPrice = 3
 let  tabletPrice = 1
 let  mobilePrice = 2

 let laptopcost = laptopPrice * laptop
 let tabletcost = tabletPrice * tablet
 let mobilecost = mobilePrice * mobile

 let totalcost = laptopcost + mobilecost + tabletcost
 return totalcost


  }
   console.log( calculateElectronicsBudget( 3 ,4,4)) 
