// document.addEventListener('DOMContentLoaded', function () {
//   const itemsPerPage = 3; // Adjust as needed
//   const items = document.querySelectorAll('.AREAONE');
//   const totalItems = items.length;
//   const pageCount = Math.ceil(totalItems / itemsPerPage);

// const { json } = require("body-parser");

//   const paginationContainer = document.createElement('div');
//   paginationContainer.classList.add('pagenationArea');

// for (let i = 1; i <= pageCount; i++) {
//   const pageButton = document.createElement('li');
//   pageButton.textContent = i;

//   if (i === 1) {
//     pageButton.classList.add('pageF');
//   } else if (i === pageCount) {
//     pageButton.classList.add('pageN');
//   } else {
//     pageButton.classList.add(`page${i}`);
//   }

//   pageButton.addEventListener('click', function (event) {
//     const clickedPage = parseInt(event.target.textContent);
//     showPage(clickedPage);
//   });

//   paginationContainer.appendChild(pageButton);
// }

    
//   document.querySelector('.Area2').appendChild(paginationContainer);

//   function showPage(pageNumber) {
//     const startIndex = (pageNumber - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     items.forEach((item, index) => {
//       if (index >= startIndex && index < endIndex) {
//         item.style.display = 'block';
//       } else {
//         item.style.display = 'none';
//       }
//     });

//     updatePaginationStyles(pageNumber);
//   }

//   function updatePaginationStyles(currentPage) {
//     const pageButtons = document.querySelectorAll('.pagenationArea li');
//     pageButtons.forEach((button, index) => {
//       if (index + 1 === currentPage) {
//         button.classList.add('active');
//       } else {
//         button.classList.remove('active');
//       }
//     });
//   }

//   // Show the first page by default
//   showPage(1);
// });

// document.addEventListener('DOMContentLoaded', function () {
//     function processForm() {
//     let Name = document.getElementById('NameArea').value;
//     let Address = document.getElementById('AddressArea').value;
//     let UnitNumber = document.getElementById('UnitArea').value;
//     let City = document.getElementById('CityArea').value;
//     let State = document.getElementById('StateArea').value;
//     let Room = document.getElementById('RoomArea').value;
//     let Price = document.getElementById('PriceArea').value;
//     let Discription = document.getElementById('DiscriptionArea').value;
        
//         displayData(Name, Address, UnitNumber, City, State, Room, Price, Discription); {
//             console.log('Data sent')
//         } 

//         let savedata = {
//             Name: Name,
//             Address: Address,
//             UnitNumber: UnitNumber,
//             City: City,
//             State: State,
//             Room: Room,
//             Price: Price,
//             Discription: Discription
//         };

//         localStorage.setItem('savedata',JSON.stringify(savedata))
//     };
//      processForm()

//     function displayData() {
//         let getData = localStorage.getItem('savedata')
//         let savedata = JSON.parse(getData)
        
//         console.log('SENT' ,savedata )
//     }

//     let submit = document.querySelector('.Uploadbtn')
//     submit.addEventListener('click', processForm)
    
//     displayData()
// })

// NOW THE FORM IS COLLECTING INFORMATIOON \\



// document.addEventListener('DOMContentLoaded', function () {
//     function processForm() {
//         let Name = document.getElementById('NameArea').value;
//         let Address = document.getElementById('AddressArea').value;
//         let UnitNumber = document.getElementById('UnitArea').value;
//         let City = document.getElementById('CityArea').value;
//         let State = document.getElementById('StateArea').value;
//         let Room = document.getElementById('RoomArea').value;
//         let Price = document.getElementById('PriceArea').value;
//         let Description = document.getElementById('DescriptionArea').value; // Corrected the variable name
        
//         // Display data in the console
//         console.log('Data sent:', Name, Address, UnitNumber, City, State, Room, Price, Description);

//         // Save data to localStorage
//         let savedata = {
//             Name: Name,
//             Address: Address,
//             UnitNumber: UnitNumber,
//             City: City,
//             State: State,
//             Room: Room,
//             Price: Price,
//             Description: Description // Corrected the property name
//         };

//         localStorage.setItem('savedata', JSON.stringify(savedata));
//     }

//     function displayData() {
//         let getData = localStorage.getItem('savedata');
//         if (getData) {
//             let savedata = JSON.parse(getData);
//             console.log('Data retrieved:', savedata);
//         } else {
//             console.log('No data available');
//         }
//     }

//     // Attach the processForm function to the form submission
//     let form = document.getElementById('Uploadbtn'); // Replace 'yourFormId' with the actual ID of your form
//     form.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent the default form submission
        
//     processForm(); // Call the processForm function
//     displayData(); // Display data after submission
//     });

//     // Call displayData once on page load
//     // displayData();

    
// });


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
    

        let newPropertyHTML = `
        <div class="AREAONE" id="property_new">
            <img id="img_property_new" src="images/House6-image.png" alt="" width="250px">
            <h2 id="title_property_new">${Name}, ${Address}</h2>
            <p id="type_property_new">${Room}</p>
            <div class="Price" id="price_property_new">
                <p>${Price}/month</p>
            </div>
            <!-- Add other elements based on your structure -->

            <div id="footer-property6">
                    <div id="fp-line"><img src="images/Area-Footer-line1.png" alt="" width="250px"></div>
                    <div id="flexp-line">
                        <div id="fp-line2"><img src="images/Area-Footer-line2.png" alt="" height="53px">
                        </div>
                        <div id="fp-line3"><img src="images/Area-Footer-line3.png" alt="" height="53px">
                        </div>
                    </div>
        </div>
    `;


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

        console.log('savedata' , savedata)
    };
    processForm()
    // Attach the processForm function to the form submission
    let form = document.getElementById('Uploadbtn'); // Replace 'yourFormId' with the actual ID of your form
    form.addEventListener('click' ,processForm)
});
