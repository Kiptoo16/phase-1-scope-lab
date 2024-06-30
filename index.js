
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; 
}


function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; 
}

const leastFavoriteCustomer = 'someone'; 

function changeLeastFavoriteCustomer() {
  
  leastFavoriteCustomer = 'new person'; 
}

console.log(customerName); bob
upperCaseCustomerName();
console.log(customerName); BOB

setBestCustomer();
console.log(bestCustomer); bob

overwriteBestCustomer();
console.log(bestCustomer); bob

console.log(leastFavoriteCustomer); 