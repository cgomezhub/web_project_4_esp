
const popupProfile = document.getElementById('popup-profile');
const profileFormClose = document.querySelector('.form__close');
const profileFormInputName = document.querySelector('#text-input-name');
const profileFormInputAbout = document.querySelector('#text-input-about');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileAvatar = document.querySelector('.profile__avatar');

const buttonEdit = document.querySelector('.button-edit');
const buttonPlace = document.querySelector('.button-place');

const popupAdd = document.getElementById('popup-add');
const popupAddClose = document.getElementById('add-form-close');

const popupAddInputPlace = document.querySelector('#text-input-place');
const popupAddInputHttps = document.querySelector('#url-input-image');



const cards = document.querySelector('.cards');
const cardLink = document.querySelector('.card__link');
const cardName = document.querySelector('card__name')

const popupImageSelector = document.getElementById('popup-image');
const popupImage = document.querySelector('.popup__image');
const popupPlace = document.querySelector('.popup__place');
const imagesExpandClose = document.querySelector('.images-expand__close');

const formSelector = document.querySelector('.form');
const inputSelector = document.querySelector('.form__input');

const popup = document.querySelector('.popup');

const popups = document.querySelector('.popups');
const popupsImage = document.querySelector('.popups__image');
const popupsAdd = document.querySelector('.popups__add');
const popupsUserInfo = document.querySelector('.popups-user-info');

const buttonUserForm  = document.querySelector("#button-user-form");
const buttonAddForm  = document.querySelector("#button-add-form");


const popupErase = document.querySelector('.popup-erase');
const popupEraseConfirm = document.querySelector(".popup-erase__confirm");



const items = [
    {
      link:
        'https://images.unsplash.com/photo-1666831268439-376e34c4de0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
      name: 'Montana de Yosemite',
    },
    {
      link:
        'https://images.unsplash.com/photo-1618595723314-c54d51d6e043?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1220&q=80',
      name: 'Los Arcos',
    },
    {
      link:
        'https://images.unsplash.com/photo-1657589809154-8212431ee6c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Canon Bryce',
    },
    {
      link:
        'https://images.unsplash.com/photo-1615405147358-f17791e21fcd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      name: 'Parque Nacional Zion',
    },
    {
      link:
        'https://images.unsplash.com/photo-1678806922638-27bf485490ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80',
      name: 'Parque Nacional Denali',
    },

    {
      link:
        'https://images.unsplash.com/photo-1643252494989-81cd0b5bead2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      name: 'Gran Canon',
    },
];

export { buttonEdit, popupProfile, profileFormClose,profileFormInputName, profileFormInputAbout, buttonPlace, popupAdd,popupAddClose, popupAddInputPlace, popupAddInputHttps, cards, popupImageSelector, popupImage, popupPlace, imagesExpandClose};

export {formSelector, inputSelector};
export { items};
export {cardLink, cardName};
export {popup};
export {popups, popupsImage, popupsAdd, popupsUserInfo};
export {buttonAddForm, buttonUserForm};

export {profileName, profileAbout, profileAvatar}

export {popupErase, popupEraseConfirm};