 const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.message'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextAreaInput);

function onTextAreaInput(event) {
    const message = event.currentTarget.message;

    localStorage.setItem('feedback-msg', message);
}