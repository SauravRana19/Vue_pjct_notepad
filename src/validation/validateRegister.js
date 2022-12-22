import validator from "validator";
const validateRegister = (data) => {
  let errors = {};
  const { email, password, pswrepeat } = data;

  if (validator.isEmpty(email)) {
    errors.email = "Email field is required";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password field is required";
  }
  if (!validator.equals(password, pswrepeat)) {
    errors.pswrepeat = "Password should match";
  }
  if (validator.isEmpty(pswrepeat)) {
    errors.pswrepeat= "Password field is required.";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};
export default validateRegister ;
