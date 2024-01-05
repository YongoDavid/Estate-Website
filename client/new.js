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
        alert('Please fill all required feilds!')
    }
    // Create an object to store the extracted data
    let propertyData = {
        name: name,
        address: address,
        unit: unit,
        city: city,
        state: state,
        roomType: roomType,
        price: price,
        description: description
    };

    // You can now use the 'propertyData' object as needed (e.g., send it to the server, update UI, etc.)
    console.log(propertyData);

    // Optionally, you can reset the form after extracting the data
    document.getElementById("propertyForm").reset();
    
    // FROM HERE IS TO CREATE A BUTTON TO BE ABLE TO CLICK AND SAVE THE FORM DATA AND LINK IT TO THE SERVER 

    // CHATGPT ALREADY HELPING ME WE STOPPED AT IT SHOWING ME HOW I WILL STORE THIS TO MYY SERVER 
}