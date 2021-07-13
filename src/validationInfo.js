function validateInfo(user) {
  let errors = {};

  if (!user.Name.trim()) {
    errors.Name = "Username Required";
  }

  if (!user.Address) {
    errors.Address = "Address Required";
  }
  if (user.Phone.length == 0) {
    errors.Phone = "Phone Number Required";
  } else if (user.Phone.length < 11) {
    errors.Phone = "Phone number should be 11 digits long";
  } else if (!/[0-9]/.test(user.Phone)) {
    errors.Phone = "Invalid Phone Number";
  }

  if (!user.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.email)) {
    errors.email = "Invalid Email Address";
  }
  if (!user.Password) {
    errors.Password = "Password Required";

    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
  } else if (user.Password) {
    errors.Password = "Password should be 8 or more characters long";
  }

  if (!user.ConfirmPassword) {
    errors.ConfirmPassword = "Password Required";
  } else if (user.ConfirmPassword !== !user.password) {
    errors.ConfirmPassword = "Confirm Password must match password";
  }

  return errors;
}

export { validateInfo };
