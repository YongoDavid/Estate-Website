// document.addEventListener('DOMContentLoaded', function () {
//   const itemsPerPage = 3; // Adjust as needed
//   const items = document.querySelectorAll('.AREAONE');
//   const totalItems = items.length;
//   const pageCount = Math.ceil(totalItems / itemsPerPage);

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

const formContainer = document.createElement('div')
const formlabel = document.createElement('label')
formlabel.innerText = 'NAME:'
const nameTag = document.createElement('Input')
nameTag.setAttribute('type', 'text')
nameTag.setAttribute('placeholder')
formContainer 