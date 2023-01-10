const nameClient = document.querySelector(".contact_form_name");
const email = document.querySelector(".contact_form_email");
const bt = document.querySelector(".contact_form_btn");
const textArea = document.querySelector(".contact_form_message");
const subject = document.querySelector(".contact_form_subject");



const validatioName = ( name ) => {
  try {
    if ( name == '') throw "name is empty!"
    if ( name.length > 50 ) throw "name maximum 50 caracters" 
  } catch (error) {
    alert("Error msg: " + error )
  } finally {
    return name;
  }
}

const validationEmail = ( email ) => {
  const regex = /[a-z0-9_]+@\w+\.[a-z]+\w{2,3}/gi;
  try {
    if ( email == '') throw "Email is empty!";
    if ( !regex.test( email ) ) throw "xxxx@dominio.com";
  } catch (error) {
    alert("Error msg: " + error )
  } finally {
    return email;
  }
}

const validatioSunject = ( subject ) => {
	try {
    if ( subject == '') throw "subject is empty!";
    if ( subject.length > 50 ) throw "subject maximum 50 caracters" 
  } catch (error) {
    alert("Error msg: " + error )
  } finally {
    return subject;
  }
}

const validatioTextArea = ( text ) => {
  try {
    if ( text == '') throw "textarea is empty!";
    if ( text.length > 300 ) throw "textarea maximum 50 caracters" 
  } catch ( error ) {
    alert( "Error msg: " + error)
  } finally {
    return text;
  }
}

bt.addEventListener( "click", ( event ) => {
  event.preventDefault();
  validatioName( nameClient.value );
  validationEmail( email.value );
  validatioTextArea( textArea.value );
	validatioSunject( subject.value );
})


