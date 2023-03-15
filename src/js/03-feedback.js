import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    message: document.querySelector('textarea')}

const DATA_STORAGE = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormFill, 500));

onDataRefill();

function onFormSubmit(evt){
    evt.preventDefault();
    if((refs.email.value)&&(refs.message.value)) {
        evt.currentTarget.reset();
        localStorage.removeItem(DATA_STORAGE);
        console.log(formData)
    }
    else {
        alert ("Будь ласка, заповніть всі поля")
    }
}

function onFormFill (evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(DATA_STORAGE, JSON.stringify(formData))
}

function onDataRefill(){
    const savedData = localStorage.getItem(DATA_STORAGE);
    if(savedData) {
    const savedDataObj = JSON.parse(savedData);
    refs.email.value = savedDataObj.email;
    refs.message.value = savedDataObj.message;
}}

