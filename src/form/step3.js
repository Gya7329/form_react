import { Step1 } from "./step1";
import { Step2 } from "./step2";

export const Step3 = ({ form, handleChange }) => {
  return (
    <div className="flex-center">
      <h1>Previews </h1>

      <Step1 form={form} value={form.value} disabled />
      <Step2 form={form} value={form.value} disabled />
    </div>
  );
};
