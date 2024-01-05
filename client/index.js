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
    console.log('name', Name)
    let Address = document.getElementById('AddressArea').value;
    console.log('address',Address)
    let UnitNumber = document.getElementById('UnitArea').value;
    console.log('unitnumber',UnitNumber)
    let City = document.getElementById('CityArea').value;
    console.log('city',City)
    let State = document.getElementById('StateArea').value;
    console.log('State',State)
    let Room = document.getElementById('RoomArea').value;
    console.log('Room',Room)
    let Price = document.getElementById('PriceArea').value;
    console.log('Price',Price)
    let Description = document.getElementById('DescriptionArea').value;
    console.log('Description',Description)

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

const listOfProperties = []; // Use let instead of reassigning to an HTML element

const  property = {
        Address: property.Address,
        Room: property.Room,
        Price: property.Price
    };
listOfProperties.push(property);
localStorage.setItem('addNewProperty', JSON.stringify(listOfProperties));


const addProperty = (ev) => {
    ev.preventDefault(); // Correct the typo in 'preventDefault'

    // getFormData[0].reset(); // Clear the form for next entries
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Uploadbtn').addEventListener('click', addProperty);
});

// WHEN I AM BACK I NEED TO FIGURE OUT HOW TO MAKE THIS PROPERTIES APPEAR ON THE LIST 

// Create the container for new properties 

function createPropertyElement(property) {

     if (!property || typeof property !== 'object') {
        console.error('Invalid property object:', property);
        return;
     }
    
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
    priceParagraph.textContent = property.Price;
    priceElement.appendChild(priceParagraph);
    propertyElement.appendChild(priceElement);

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
createPropertyElement(property)


function updatePropertyList() {
    const propertyListContainer = document.getElementById('propertyListContainer');

    property.forEach(function (property, index) {
        // creat a container for each property 
        let propertyElement = document.createElement('div');
        propertyElement.id = `property${index + 1}`;

        // create and append elements for property details 
        let theAddress = document.createElement('h2')
        theAddress.textContent = `Address: ${property.Address}`;

        let roomElement = document.createElement('p');
        roomElement.textContent = `Room: ${property.Room}`;

        let priceElement = document.createElement('div');
        priceElement.textContent = `Price: ${property.Price}`;

        propertyElement.appendChild(priceElement);
        propertyElement.appendChild(roomElement);
        propertyElement.appendChild(theAddress);
        // ... append other elements to propertyElement

        // Append the property container to the main container
        propertyListContainer.appendChild(propertyElement);
    });
}