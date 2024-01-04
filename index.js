// function getFormData() {
//     let Name = document.getElementById('NameAddress')
//     let Address = document.getElementById('AddressArea')
//     let UnitNumber = document.getElementById('UnitArea')
//     let City = document.getElementById('CityArea')
//     let State = document.getElementById('StateArea')
//     let Room = document.getElementById('RoomArea')
//     let Price = document.getElementById('PriceArea')
//     let Description = document.getElementById('DescriptionArea')

//     return {
//         Name,
//         Address,
//         UnitNumber,
//         City,
//         State,
//         Room,
//         Price,
//         Description
//     } 
//     const propertyInfo = getFormData()
// }
// getFormData()
 
// let listOfProperties = document.getElementById('propertyListContainer')
// listOfProperties = []

// const addProperty = (ev) => {
//     ev.prevenDefault(); //  stop the form form submiting
//     let property = {
//         Address: `${Address}`,
//         Rooom: `${Room}`,
//         Price: `${Price}`
//     }

//     listOfProperties.push(property)
//     document.forms[0].reset() // clear the form for next entries 

//     // Run if check
//     // if (Name) {
//     //     Name.includes(!value)
        
//     // }
    
//     localStorage.setItem('addNewProperty', JSON.stringify(listOfProperties))
// }   


// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('Uploadbtn').addEventListener('click' , addProperty)
// })




function getFormData() {
    // Use value property to get the actual value of the input elements
    let Name = document.getElementById('NameArea').value;
    let Address = document.getElementById('AddressArea').value;
    let UnitNumber = document.getElementById('UnitArea').value;
    let City = document.getElementById('CityArea').value;
    let State = document.getElementById('StateArea').value;
    let Room = document.getElementById('RoomArea').value;
    let Price = document.getElementById('PriceArea').value;
    let Description = document.getElementById('DescriptionArea').value;

    // Return an object with properties and values
    return {
        Name,
        Address,
        UnitNumber,
        City,
        State,
        Room,
        Price,
        Description
    };
}

// This line is not needed, as it is unreachable due to the return statement above
// const propertyInfo = getFormData();

let listOfProperties = []; // Use let instead of reassigning to an HTML element

const addProperty = (ev) => {
    ev.preventDefault(); // Correct the typo in 'preventDefault'

    // Use getFormData to get the property information
    let property = getFormData();

    // Fix typos in property object keys ('Address' and 'Rooom')
    property = {
        Address: property.Address,
        Room: property.Room,
        Price: property.Price
    };

    listOfProperties.push(property);
    // getFormData[0].reset(); // Clear the form for next entries

    // Remove the unnecessary if-check block

    localStorage.setItem('addNewProperty', JSON.stringify(listOfProperties));
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Uploadbtn').addEventListener('click', addProperty);
});

// WHEN I AM BACK I NEED TO FIGURE OUT HOW TO MAKE THIS PROPERTIES APPEAR ON THE LIST 