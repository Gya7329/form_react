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
  if (name === "name" || name === "gender") {
    const re = /^[a-zA-Z ]{2,30}$/;
    const isValid = value.match(re);
    if (isValid) {
      setError({ name: "" } || { name: "" });
    } else {
      setError(
        { name: "name is not valid" } || { name: "gender is not valid" }
      );
    }
  }
  if (name === "gender") {
    const re = /^[a-zA-Z ]{1,10}$/;
    const isValid = value.match(re);
    if (isValid) {
      setError({ gender: "" });
    } else {
      setError(
        { gender: "gender is not valid" } || { name: "gender is not valid" }
      );
    }
  }
};

export const nextValidation = (error = {}) =>
  Object.keys(error).some((key) => Boolean(error[key]));
