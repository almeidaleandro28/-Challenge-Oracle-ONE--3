const nameClient = document.querySelector(".contact_form_name");
const email = document.querySelector(".contact_form_email");
const bt = document.querySelector(".contact_form_btn");


const validatioName = ( name ) => {
  try {
    if ( name == '') throw "empty!"
    if ( name.length > 10 ) throw "maximum 10 caracters" 
  } catch (error) {
    alert("Error msg: " + error )
  } finally {
    return name;
  }
}

const validationEmail = ( email ) => {
  const regex = /[a-z0-9_]+@\w+\.[a-z]+\w{2,3}/gi;
  try {
    if ( email == '') throw "empty!";
    if ( !regex.test( email ) ) throw "xxxx@dominio.com";
  } catch (error) {
    alert("Error msg: " + error )
  } finally {
    return email;
  }

}

bt.addEventListener( "click", ( event ) => {
  event.preventDefault();
  console.log( validatioName( nameClient.value ) );
  console.log( validationEmail( email.value ) );
})


