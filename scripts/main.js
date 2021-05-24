let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.info__edit-button');
let closePopup = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__input_type_name');
let aboutPopup = document.querySelector('.popup__input_type_about');
let formPopup = document.querySelector('.popup__form');
let nameInfo = document.querySelector('.info__name');
let aboutInfo = document.querySelector('.info__about');
  
function addPopupClass() {
  popup.classList.add('popup_opened');
  nameInput.value = nameInfo.textContent;
  aboutPopup.value = aboutInfo.textContent;
}

function removePopupClass() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  aboutInfo.textContent = aboutPopup.value;
  removePopupClass();
}

openPopup.addEventListener('click', addPopupClass);
closePopup.addEventListener('click', removePopupClass);

formPopup.addEventListener('submit', formSubmitHandler);



/* с этим пока не разобрался
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    togglePopupClass();
  }
})
*/

