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