const editPopup = document.querySelector('.popup_type_edit');
const openEditPopup = document.querySelector('.info__edit-button');
const closePopup = document.querySelector('.popup__close');
const nameEditInput = document.querySelector('.popup__input_type_name');
const aboutEditInput = document.querySelector('.popup__input_type_about');
const formEditPopup = document.querySelector('.popup__form');
const nameInfo = document.querySelector('.info__name');
const aboutInfo = document.querySelector('.info__about');

const likeButton = document.querySelector('.element__like');

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameInfo.textContent = nameEditInput.value;
  aboutInfo.textContent = aboutEditInput.value;
  removeOpenPopupClass(editPopup);
}

function addOpenPopupClass(popup) {
  popup.classList.add('popup_opened');
};
function removeOpenPopupClass(popup) {
  popup.classList.remove('popup_opened');
};

openEditPopup.addEventListener('click', addOpenPopupClass(editPopup));
closePopup.addEventListener('click', removeOpenPopupClass(editPopup));
formEditPopup.addEventListener('submit', formSubmitHandler);

likeButton.addEventListener('click', (evt) => {
  evt.target.classList.toggle('element__like_active');
});


//nameEditInput.value = nameInfo.textContent;
//aboutEditInput.value = aboutInfo.textContent;

/* с этим пока не разобрался
popup.addEventListener('click', function(event) {
  if(event.target === event.currentTarget) {
    togglePopupClass();
  }
})
*/

