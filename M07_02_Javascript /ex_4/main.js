var myName = [
    { firstName: "A", },
    { firstName: "L" },
    { firstName: "E" },
    { firstName: "S" },
    { firstName: "S" },
    { firstName: "A" },
    { firstName: "N" },
    { firstName: "D" },
    { firstName: "R" },
    { firstName: "O" },
    { firstName: "" },


    { firstName: "P", },
    { firstName: "O" },
    { firstName: "R" },
    { firstName: "C" },
    { firstName: "U" },

];

var userFullnames = myName.map(function(element) {
    return `${element.firstName}`;
})

console.log(userFullnames);
document.write(userFullnames);