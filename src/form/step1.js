import PhoneInput from "react-phone-input-2";
import { Input } from "./custom-input";
import "react-phone-input-2/lib/style.css";

export const Step1 = ({ disabled, form, handleChange, handleBlur, error }) => {
  return (
    <>
      <form class="flex-center">
        <Input
          {...{
            name: "Email",
            form,
            handleBlur,
            error,
            handleChange,
            disabled
          }}
        />

        <Input
          {...{
            name: "Name",
            handleBlur,
            error,
            form,
            handleChange,
            disabled
          }}
        />
        <Input
          {...{
            name: "Phone",
            handleBlur,
            error,
            form,
            handleChange,
            disabled
          }}
        />
      </form>
    </>
  );
};

Step1.defaultProps = {
  form: {}
};
