document.addEventListener('DOMContentLoaded', function () {
    // Load existing data from localStorage
    let properties = JSON.parse(localStorage.getItem('properties')) || [];

    function processForm() {
        let Name = document.getElementById('NameArea').value;
        let Address = document.getElementById('AddressArea').value;
        let UnitNumber = document.getElementById('UnitArea').value;
        let City = document.getElementById('CityArea').value;
        let State = document.getElementById('StateArea').value;
        let Room = document.getElementById('RoomArea').value;
        let Price = document.getElementById('PriceArea').value;
        let Description = document.getElementById('DescriptionArea').value;

        // Save data to localStorage
        const property = {
            Name: Name,
            Address: Address,
            UnitNumber: UnitNumber,
            City: City,
            State: State,
            Room: Room,
            Price: Price,
            Description: Description
        };

        // Add the new property to the list
        properties.push(property);

        // Save the updated list back to localStorage
        localStorage.setItem('properties', JSON.stringify(properties));

        // Optional: Display a success message or update the UI
        console.log('Property added successfully!');
    };

    // Now you have the list of properties loaded from localStorage in the 'properties' variable
    // You can use this list to display existing properties on your page, if needed.
});


    // function displayData() {
    //     let getData = localStorage.getItem('savedata')
    //     let savedata = JSON.parse(getData)

    //     console.log('savedata', savedata)
        
    //     // check if there is data 
    //     // I DONT THINK I NEED TO CECK IF THERE IS DATA 
    //     // if (getData) {
    //     //     let savedata = JSON.parse(getData)
    //     //     console.log(savedata)

    //     //     updatePropertyList(savedata)
    //     // } else {
    //     //     console.log('No data found')
    //     // }
    // };
    // Attach the processForm function to the form submission
let form = document.getElementById(''); // Replace 'propertyForm' with the actual ID of your form
form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Call the processForm function when the form is submitted
    processForm();
});


// function updatePropertyList(properties) {

//     const propertyListContainer = document.getElementById('propertyListContainer');

//     properties.forEach(function (index) {
//         let propertyElement = document.createElement('div');
//         propertyElement.id = `property1${index + 1}`;
        
//         let theAddress = document.createElement('h2');
//         theAddress.id = `title-property${index + 1}`;
//         // ... create and append other elements

//         let Room = document.createElement('p')
//         Room.id = `type-property1${index + 1}`;

//         let Price = document.createElement('div')
//         Price.id = `price-property1${index + 1}`

//         propertyElement.appendChild(Price)
//         propertyElement.appendChild(Room)
//         propertyElement.appendChild(theAddress);
//         // ... append other elements to propertyElement

//         propertyListContainer.appendChild(propertyElement);
//     });
// }


function updatePropertyList(properties) {
    const propertyListContainer = document.getElementById('propertyListContainer');

    properties.forEach(function (property, index) {
        // Create a container for each property
        let propertyElement = document.createElement('div');
        propertyElement.id = `property${index + 1}`;

        // Create and append elements for property details
        let theAddress = document.createElement('h2');
        theAddress.textContent = property.Address; // Assuming Address is a property of your data
        // ... create and append other elements

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


function createPropertyElement(propertyData) {
    // Create the main container div
    let propertyElement = document.createElement('div');
    propertyElement.classList.add('AREAONE');

    // Create and style the image element
    let imgElement = document.createElement('img');
    imgElement.src = propertyData.imageSrc;
    imgElement.alt = '';
    imgElement.width = '250px';
    imgElement.classList.add('img-property');
    propertyElement.appendChild(imgElement);

    // Create and style the title element
    let titleElement = document.createElement('h2');
    titleElement.textContent = propertyData.title;
    titleElement.classList.add('title-property');
    propertyElement.appendChild(titleElement);

    // Create and style the type element
    let typeElement = document.createElement('p');
    typeElement.textContent = propertyData.type;
    typeElement.classList.add('type-property');
    propertyElement.appendChild(typeElement);

    // Create and style the price element
    let priceElement = document.createElement('div');
    priceElement.classList.add('Price');
    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = propertyData.price;
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
createPropertyElement()


// // I NEED TO LINK ALL THIS CODES TOGETHER AND MAKE SURE THEY ARE ALL WORKING 