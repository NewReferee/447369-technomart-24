var messageShow = document.querySelector('.contacts-message');
var messagePopup = document.querySelector('.modal-message');
var messageClose = messagePopup.querySelector('.cross');
var messageForm = messagePopup.querySelector('.message-form');
var messageName = messageForm.querySelector('[name=message-name]');
var messageEmail = messageForm.querySelector('[name=message-email]');
var messageText = messageForm.querySelector('[name=message-text]');

var mapShow = document.querySelector('.map-thumbnail');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.cross');

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem('messageName');
} catch (err) {
	isStorageSupport = false;
}

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (messagePopup.classList.contains('modal-show')) {
			messagePopup.classList.remove('modal-show');
			messagePopup.classList.remove('modal-error');
		}
		if (mapPopup.classList.contains('modal-show')) {
			mapPopup.classList.remove('modal-show');
		}
	}
})

messageShow.addEventListener ('click', function (evt) {
	evt.preventDefault();
	messagePopup.classList.add('modal-show');
	if (isStorageSupport) {
		messageName.value = localStorage.getItem('messageName');
		messageEmail.value = localStorage.getItem('messageEmail');
	}
})

messageClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	messagePopup.classList.remove('modal-show');
	messagePopup.classList.remove('modal-error');
})

messageForm.addEventListener('submit', function (evt) {
	if (!messageName.value || !messageEmail.value || !messageText.value) {
		evt.preventDefault();
		messagePopup.classList.remove('modal-error');
		messagePopup.offsetWidth = messagePopup.offsetWidth;
		messagePopup.classList.add('modal-error');	
	}
	else if (isStorageSupport) {
		localStorage.setItem('messageName', messageName.value);
		localStorage.setItem('messageEmail', messageEmail.value);
	}
})

mapShow.addEventListener ('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.add('modal-show');
})

mapClose.addEventListener('click', function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove('modal-show');
})

