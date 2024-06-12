  //Function
  function validateForm() {
    var fname = document.forms["myContact"]["fname"].value;
    var email = document.forms["myContact"]["email"].value;
    var comment = document.forms["myContact"]["comment"].value;

    //First Name
    if (fname == "" || !/^[a-zA-Z]+$/.test(fname) || fname.length >= 25) {
      alert("Please enter a valid first name (letters only, less than 25 characters)");
      return false;
    }

    //Email
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email == "" || !emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return false;
    }

    //Comment
    if (comment == "" || comment.length < 1) {
      alert("Please enter a comment");
      return false;
    }

    return true; // Form validated
  }
