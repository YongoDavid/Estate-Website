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

// Create the container for new properties 

function createPropertyElement(property) {
    // create the main container 
    let propertyElement = document.createElement('div')
    propertyElement.classList.add('AREAONE');

    // create and style the image element
    let imgElement = document.createElement('img');
    imgElement.src = "images/House1.png"
    imgElement.alt = '';
    imgElement.width = '250px';
    imgElement.classList.add('img-property1')
    propertyElement.appendChild(imgElement)

    // create and style the title element 
    let titleElement = document.createElement('h2');
    titleElement.textContent = property.Address;
    titleElement.classList.add('title-property1');
    propertyElement.appendChild(titleElement);

    // create and style the type element 
    let typeElement = document.createElement('p');
    typeElement.textContent = property.Room;
    typeElement.classList.add('type-property1')
    propertyElement.appendChild(typeElement);

    let priceElement = document.createElement('div');
    priceElement.classList.add('Price');
    let priceParagraph = document.createElement('p')
    priceParagraph.textContent = property.price;
    priceElement.appendChild(priceParagraph);
    propertyElement.appendChild(propertyElement);

    // Create and style the footer area
    let footerArea = document.createElement('div');
    footerArea.classList.add('Area-footer-line');
    // footerArea.setAttribute('position', 'absolute')
    // footerArea.setAttribute('z-index','1')
    // ... create and style other footer elements
    propertyElement.appendChild(footerArea);

    // Create and style the footer content
    let footerContent = document.createElement('div');
    footerContent.classList.add('Area-footer');
    // ... create and style other footer content elements
    propertyElement.appendChild(footerContent);

    // Add the property element to the document
    let propertyListContainer = document.getElementById('propertyListContainer');
    propertyListContainer.appendChild(propertyElement);
}
createPropertyElement()


// function updatePropertyList(property) {
//     const propertyListContainer = document.getElementById('propertyListContainer');

//     property.forEach(function (property, index) {
//         // creat a container for each property 
//         let propertyElement = document.createElement
//     })
// }