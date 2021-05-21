let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.info__edit');
let closePopup = document.querySelector('.popup__close');
let nameInput = document.querySelector('.popup__name');
let aboutPopup = document.querySelector('.popup__about');
let formPopup = document.querySelector('.popup__container')
let nameInfo = document.querySelector('.info__name');
let aboutInfo = document.querySelector('.info__about');
let savePopup = document.querySelector('.popup__submit')

function togglePopupClass() {
  popup.classList.toggle('popup_opened');
}

openPopup.addEventListener('click', togglePopupClass);
closePopup.addEventListener('click', togglePopupClass);

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.value = nameInfo.textContent;
  aboutPopup.value = aboutInfo.textContent;
}

formPopup.addEventListener('submit', formSubmitHandler);



popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    toggleClass();
  }
})
