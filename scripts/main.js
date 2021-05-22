let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.info__edit-button');
let closePopup = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__name');
let aboutPopup = document.querySelector('.popup__about');
let formPopup = document.querySelector('.popup__form');
let nameInfo = document.querySelector('.info__name');
let aboutInfo = document.querySelector('.info__about');
let savePopup = document.querySelector('.popup__submit-button')

function togglePopupClass() {
  popup.classList.toggle('popup_opened');
}

openPopup.addEventListener('click', togglePopupClass);
closePopup.addEventListener('click', togglePopupClass);

nameInput.value = nameInfo.textContent;
  aboutPopup.value = aboutInfo.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  aboutInfo.textContent = aboutPopup.value;
  togglePopupClass();
}

formPopup.addEventListener('submit', formSubmitHandler);




popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    togglePopupClass();
  }
})
