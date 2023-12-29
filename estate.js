document.addEventListener('DOMContentLoaded', function () {
    function processForm() {
        let Name = document.getElementById('NameArea').value;
        let Address = document.getElementById('AddressArea').value;
        let UnitNumber = document.getElementById('UnitArea').value;
        let City = document.getElementById('CityArea').value;
        let State = document.getElementById('StateArea').value;
        let Room = document.getElementById('RoomArea').value;
        let Price = document.getElementById('PriceArea').value;
        let Description = document.getElementById('DescriptionArea').value;

        displayData(Name, Address, UnitNumber, City, State, Room, Price, Description); {
            console.log('Processing')
        }
    
        // Save data to localStorage
        let savedata = {
            Name: Name,
            Address: Address,
            UnitNumber: UnitNumber,
            City: City,
            State: State,
            Room: Room,
            Price: Price,
            Description: Description
        };

        localStorage.setItem('savedata', JSON.stringify(savedata));
    };

    function displayData() {
        let getData = localStorage.getItem('savedata')
        let savedata = JSON.parse(getData)

        console.log('savedata', savedata)
        
        // check if there is data 
        if (getData) {
            let savedata = JSON.parse(getData)
            console.log('savedata', savedata)

            updatePropertyList(savedata)
        } else {
            console.log('No data found')
        }
    };
    processForm()
    // Attach the processForm function to the form submission
    let form = document.getElementById('Uploadbtn'); // Replace 'yourFormId' with the actual ID of your form
    form.addEventListener('click' ,processForm)
});

// function updatePropertyList(properties) {
//     const PropertyListContainer = document.getElementById('propertyListContainer')

//     properties.forEach(function (properties) {
//         let propertyElement = document.getElementById('property1')
//         let theaddress = document.getElementById('title-property1')
//         let roomType = document.getElementById('type-property1')
//         let roomPrice = document.getElementById('price-property1')

//         // the footer area 
//         let footerArea = document.getElementById('footer-property1')
//         let footerLine = document.getElementById('fp1-line1')
//         let footerflex = document.getElementById('flexp1-line')
//         let footerLine2 = document.getElementById('fp1-line2')
//         let footerLine3 = document.getElementById('fp1-line3')

//     })
// }

function createPropertyElement(displayData) {
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