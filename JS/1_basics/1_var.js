const accountId = 123;
let accEmail = "ahha.gmail.com";
var password = "234"; // prefer not to use var.

//accountId = 2; // not allowed because it is declared as const.
accEmail = "dwfa";
password = "211r1f";

console.log(accountId);
console.log(accEmail);
console.log(password);

// Better way to print multiple objects.

console.table([accEmail,accountId,password]);

