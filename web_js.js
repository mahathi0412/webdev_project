const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  let no_data = true;

  if (
    formData.name !== "" ||
    formData.email !== "" ||
    formData.message !== ""
  ) {
    no_data = false;

    console.group("*******Contact Me*******");
    if (formData.username !== "") {
      console.log("Name:", formData.name);
    } else {
      console.log("Name:", "no submission");
    }

    if (formData.email !== "") {
      console.log("Email:", formData.email);
    } else {
      console.log("Email:", "no submission");
    }

    if (formData.email !== "") {
      console.log("Message:", formData.message);
    } else {
      console.log("Message:", "no submission");
    }

    console.groupEnd();
  }
  if (no_data) {
    console.log("You must enter some data to submit this form.");
  }

  alert("Message sent. Thank you!");
  form.reset();
});
