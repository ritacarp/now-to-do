// pwdController.js
const generatePassword = require('password-generator');


exports.index = function(req, res, next) {
   const count = 5;

     // Generate some passwords
     const passwords = Array.from(Array(count).keys()).map(i =>
       generatePassword(12, false)
     )

     // Return them as json
     res.json(passwords);

  console.log(`Sent ${count} passwords`);
}
