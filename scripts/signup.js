var form = document.querySelector("#signUp");
    form.addEventListener("submit", createUser);

    var userArray = JSON.parse(localStorage.getItem("userData")) || [];
    function createUser(e) {
      e.preventDefault();
      var userObj = {
        name: form.user.value,
        contact: form.number.value,
        email: form.email.value,
        password: form.password.value,
      };
      userArray.push(userObj);
      localStorage.setItem("userData", JSON.stringify(userArray));
      form.user.value = "";
      form.number.value = "";
      form.email.value = "";
      form.password.value = "";
      alert("Account created successfully🎉🎉, Now you can log in😊");
      window.location.href = "login.html";

      console.log(userArray)
    }

