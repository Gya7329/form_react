import { Input } from "./custom-input";

export const Step2 = ({ disabled, form, handleChange, error, handleBlur }) => {
  return (
    <form class="flex-center">
      <div className="gender">
        <Input
          {...{
            name: "Gender",
            handleChange,
            handleBlur,
            error,
            form,
            disabled
          }}
        />
      </div>
      <div className="address">
        <Input
          {...{
            name: "Address",
            handleBlur,
            error,
            handleChange,
            form,
            disabled
          }}
        />
      </div>
    </form>
  );
};

Step2.defaultProps = {
  form: {}
};
