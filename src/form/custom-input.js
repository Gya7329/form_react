import PhoneInput from "react-phone-input-2";

export const Input = ({
  name: formName,
  handleBlur,
  error,
  form,
  handleChange,
  disabled
}) => {
  const name = formName.toLowerCase();
  return (
    <>
      <div class="form-group">
        <label htmlFor={name}>{formName}</label>
        {name === "phone" ? (
          <PhoneInput className="phone-input"
            country={"in"}
            value={form.phone}
            onChange={(phone) =>
              handleChange({
                target: {
                  name: "phone",
                  value: phone
                }
              })
            }
          />
        ) : (
          <input
            value={form[name]}
            name={name}
            onChange={handleChange}
            type="email"
            onBlur={handleBlur}
            disabled={disabled}
          />
        )}
      </div>
      <div>{error[name]}</div>
    </>
  );
};

Input.defaultProps = {
  error: {}
};

export const Heading = ({ name }) => {
  return (
    <h1 className="form-group flex-center" name={name}>
      {name}
    </h1>
  );
};
