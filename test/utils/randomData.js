function randomWarehouseName() {

    const names = [
        "Central",
        "North",
        "South",
        "East",
        "West",
        "Prime",
        "Metro",
        "Sky",
        "River",
        "Oak"
    ];

    return `${names[Math.floor(Math.random() * names.length)]}${Math.floor(Math.random() * 10000)}`;
}


function randomRegisterName() {

    const names = [
        "POS",
        "Retail",
        "Counter",
        "Express",
        "Checkout",
        "Terminal"
    ];

    return `${names[Math.floor(Math.random() * names.length)]}${Math.floor(Math.random() * 10000)}`;
}


function randomTableName() {

    return `Table_${Math.floor(Math.random() * 10000)}`;
}


function randomPrefix() {

    const prefixes = [
        "Oak",
        "River",
        "Sky",
        "Prime",
        "Metro",
        "North",
        "South",
        "East",
        "West",
        "Blue"
    ];

    return prefixes[
        Math.floor(Math.random() * prefixes.length)
    ];
}


function randomAmount(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;
}


function randomNote() {

    const notes = [
        "Opening Cash",
        "Closing Cash",
        "Float",
        "Adjustment",
        "Deposit",
        "Petty Cash"
    ];

    return notes[
        Math.floor(Math.random() * notes.length)
    ];
}


function randomEmail() {

    return `warehouse${Date.now()}@gmail.com`;
}


function randomPhone() {

    let phone = "";

    for (let i = 0; i < 10; i++) {
        phone += Math.floor(Math.random() * 10);
    }

    return phone;
}


function randomCourseName() {

    const names = [
        "Main",
        "Dessert",
        "Drinks",
        "Starters",
        "Salads",
        "Pizza",
        "Pasta",
        "Seafood",
        "Grill",
        "Specials"
    ];

    return names[
        Math.floor(Math.random() * names.length)
    ];
}


module.exports = {
    randomWarehouseName,
    randomRegisterName,
    randomTableName,
    randomPrefix,
    randomAmount,
    randomNote,
    randomEmail,
    randomPhone,
    randomCourseName
};