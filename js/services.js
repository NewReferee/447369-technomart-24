var servicesToggleDelivery = document.querySelector('.services-toggle-delivery');
var servicesToggleGuarantee = document.querySelector('.services-toggle-guarantee');
var servicesToggleCredit = document.querySelector('.services-toggle-credit');

var toggleInnerDelivery = document.querySelector('.toggle-inner-delivery');
var toggleInnerGuarantee = document.querySelector('.toggle-inner-guarantee');
var toggleInnerCredit = document.querySelector('.toggle-inner-credit');

servicesToggleDelivery.addEventListener('focus', function () {
	toggleInnerGuarantee.classList.add('toggle-inner-hidden');
	toggleInnerCredit.classList.add('toggle-inner-hidden');
	toggleInnerDelivery.classList.remove('toggle-inner-hidden');
})

servicesToggleGuarantee.addEventListener('focus', function () {
	toggleInnerDelivery.classList.add('toggle-inner-hidden');
	toggleInnerCredit.classList.add('toggle-inner-hidden');
	toggleInnerGuarantee.classList.remove('toggle-inner-hidden');
})

servicesToggleCredit.addEventListener('focus', function () {
	toggleInnerGuarantee.classList.add('toggle-inner-hidden');
	toggleInnerDelivery.classList.add('toggle-inner-hidden');
	toggleInnerCredit.classList.remove('toggle-inner-hidden');
})