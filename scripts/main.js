let popup = document.querySelector('.popup');
let openPopup = document.querySelector('.info__edit');
let closePopup = document.querySelector('.popup__close');

openPopup.addEventListener('click', toggleClass);

closePopup.addEventListener('click', toggleClass);

function toggleClass() {
  popup.classList.toggle('popup_opened');
}

popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    toggleClass();
  }
})
