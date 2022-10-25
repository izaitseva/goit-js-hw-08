const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextAreaInput);

function onFormSubmit(event) {
    event.preventDefault();

    console.log("submit");
}

function onTextAreaInput(event) {
    const message = event.currentTarget.value;

    localStorage.setItem('feedback-msg', message);
}