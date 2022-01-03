export const validation = (e, setError) => {
  const { value, name } = e.target;
  if (name === "email") {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = value.match(re);
    if (isValid) {
      setError({ email: "" });
    } else {
      setError({ email: "email is not valid" });
    }
  } else {
    const haveValue = String(value).length;
    if (haveValue) {
      setError({ [name]: "" });
    } else {
      setError({ [name]: `Please Enter Valid ${name}` });
    }
  }
};
export const nextValidation = (error = {}) =>
  Object.keys(error).some((key) => Boolean(error[key]));
