let properties = JSON.parse(localStorage.getItem('properties')) || [];

function extractFormData() {
    // Get form elements by their ids
    let name = document.getElementById("NameArea").value;
    let address = document.getElementById("AddressArea").value;
    let unit = document.getElementById("UnitArea").value;
    let city = document.getElementById("CityArea").value;
    let state = document.getElementById("StateArea").value;
    let roomType = document.getElementById("RoomArea").value;
    let price = document.getElementById("PriceArea").value;
    let description = document.getElementById("DescriptionArea").value;

    // validate the form 
    if (!name || !address || !unit || !city || !state || !roomType || !price || !description) {
        alert('Please fill all required fields!');
        return null; // Stop further processing if validation fails
    }

    // Create an object to store the extracted data
    let propertyData = {
        name: name,
        address: address,
        unit: unit,
        city: city,
        state: state,
        roomType: roomType,
        price: price.toString(),
        description: description
    };

    // Optionally, you can reset the form after extracting the data
    // document.getElementById("propertyForm").reset();

    return propertyData;
}

const submitform = document.getElementById('Uploadbtn');
submitform.addEventListener('click', function (event) {
    // prevent default submission behavior 
    event.preventDefault();

    let propertyData = extractFormData();
    if (propertyData) {
        // Transform data if needed
        let transformedData = {
            Address: propertyData.address,
            Room: propertyData.roomType,
            Price: propertyData.price
        };

        // Push new properties 
        properties.push(transformedData);
        localStorage.setItem('properties', JSON.stringify(properties));
    }
});


// console.log('Data stored in local storage:', JSON.parse(localStorage.getItem('properties')));
//         console.log(localStorage.getItem('properties'));
//         console.log(localStorage.length);
//         window.addEventListener('storage', function (e) {
//             console.log('Storage event:', e);
//         });

// CREATING ELEMENTS FOR THE NEW PROPERTY 

function createPropertyElement(propertyData) {
    let propertyListContainer = document.createElement('div')
    propertyListContainer.classList.add('Area2');

    let propertyElement = document.createElement('div')
    propertyElement.classList.add('AREAONE');
    propertyElement.innerHTML = `
            <div>
                <img src="images/House3.png" alt="" width="250px">
                <h2 id="title-property1" ${properties.length}>${propertyData.address}</h2>
                <p id="type-property1" ${properties.length}>${propertyData.roomType}</p>
                <div class="price" id="price-property1" ${properties.length}>
                    <p>$${propertyData.price}/month</p>
                </div>

                <!-- Additional property details -->
                <div class="Area-footer-line" id="footer-property${properties.length + 1}">
                    <div class="Line1" id="fp${properties.length + 1}-line">
                        <img src="images/Area-Footer-line1.png" alt="" width="250px">
                    </div>
                    <div class="flexLine" id="flexp${properties.length + 1}-line">
                        <div class="Line2" id="fp${properties.length + 1}-line2">
                            <img src="images/Area-Footer-line2.png" alt="" height="53px">
                        </div>
                        <div class="Line3" id="fp${properties.length + 1}-line3">
                            <img src="images/Area-Footer-line3.png" alt="" height="53px">
                        </div>
                    </div>
                </div>

                <div class="Area-footer">
                    <div class="AF1" id="af${properties.length + 1}-END">
                        <p><img src="images/Bed.svg" alt="">${2}</p>
                    </div>
                    <div class="AF1" id="af${properties.length + 1}-END">
                        <p><img src="images/Shower.svg" alt="">${2}</p>
                    </div>
                    <div class="AF1" id="af${properties.length + 1}-END">
                        <p><img src="images/Size.svg" alt="">${2}</p>
                    </div>
                </div>

            </div>

            <!-- End of additional property details -->

        `
    // Append the new property element to the list
    let propertyList = document.getElementById('propertyListContainer'); // Update this with your actual property list container ID
    propertyList.appendChild(propertyElement);
    propertyList.appendChild(propertyListContainer);
}
// createPropertyElement(propertyData)
// Event listener for form submission 
const submitButton = document.getElementById('Uploadbtn');
submitButton.addEventListener('click', function handleFormSubmission(event) {
    event.preventDefault();

    let propertyData = extractFormData();
    if (propertyData) {
        // push new property data too loocal storage 
        properties.push(propertyData)
        localStorage.setItem('properties', JSON.stringify(properties));

        // update the total pages 
       


        // ADD NEW PROPERTY TO THE LIST 
        createPropertyElement(propertyData)
    }
})

// TRYING TO POOITION NEW PROERTY CONTAINER 