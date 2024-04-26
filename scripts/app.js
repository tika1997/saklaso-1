alert("ვებსაიტი დღეს არ იმუშავებს");
let gender = prompt("შეიყვანეთ თქვენი სქესი (male or female):");


if (gender === "male") {
    document.write("თქვენ ხართ მამარობითი სქესის");
} 
 else {
    document.write("თქვენ არ ხართ მდედრობითი სქესის");
}

let userconfirm = confirm("გაქვთ თუ არა მართის მოწმობა")

console.log(userconfirm);
if (userconfirm===true){
    document.write("გამოცდაზე გასვლა არ გესაჭიროებათ")
}else {
    document.write("გამოცდაზე გასვლა გესაჭიროებათ")
}