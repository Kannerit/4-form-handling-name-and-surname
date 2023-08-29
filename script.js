console.log('script is running!');
const submitForm =(event)=> {
    event.preventDefault();

    let firstName = document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');


    console.log(`Name: ${firstName.value}, Last Name: ${lastName.value}`);
}
let form = document.getElementById('form');

form.addEventListener('submit', submitForm);

