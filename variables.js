const account_id = 25368; // can't be changed
let account_email = "zakariya@gmail.com";
var account_password = "1234";
account_city = "Surat";
let account_state;

// account_id = 5; // Not allowed

account_email = "bombaywala@email.com";
account_password = "525252";
account_city = "Mumbai";

/*
Prefer not to use var
because of issue in block scope and functional scope
 */

console.table([
  account_id,
  account_email,
  account_password,
  account_city,
  account_state,
]);
