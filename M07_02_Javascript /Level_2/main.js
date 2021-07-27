//define variable of the e-mail array
var email_array = ["nick@hotmail.com", "nick@gmail.es", "nick@yahoo.uk", "bob@hotmail.com", "bob@gmail.com", "matt@hotmail.com", "test@hotmail.com", "lay@gmail.com", "file@yahhoo.com", "terry@test.com", "rich@email.com"];

var filtered = email_array.filter(function(email) {

    return email.endsWith('@hotmail.com') || email.endsWith('@gmail.com') || email.endsWith('@gmail.es');
});

console.log(filtered);
document.write(filtered);