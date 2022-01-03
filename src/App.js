import { useState } from "react";
import { Heading } from "./form/custom-input";
import { Step1 } from "./form/step1";
import { Step2 } from "./form/step2";
import { Step3 } from "./form/step3";
import { StepUi } from "./form/StepUi";
import { nextValidation, validation } from "./form/Validation";
import "./styles.scss";

const STEPS = {
  DETAILS: "details",
  MORE_DETAILS: "more_details",
  PREVIEW: "preview"
};

const STEPS_ARR = Object.values(STEPS);
const FORM = {
  name: "",
  email: "",
  phone: "",
  gender: "",
  address: ""
};

export default function App() {
  const [state, setState] = useState({
    step: STEPS.DETAILS
  });

  const [form, setForm] = useState(FORM);
  const [error, setError] = useState(FORM);

  const handleSetError = (value) => {
    setError((pre) => ({ ...pre, ...value }));
  };
  const handleChange = (event) => {
    console.log(event);
    const { value, name } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    handleSetError({ [name]: "" });
    console.log(name);
  };

  const handleBlur = (event) => {
    validation(event, handleSetError);
  };

  const getStep = (step) => {
    const { DETAILS, MORE_DETAILS, PREVIEW } = STEPS;
    switch (step) {
      case DETAILS:
        return (
          <>
            <Heading name="Details" />
            <Step1 {...{ handleChange, form, error, handleBlur }} />
          </>
        );
      case MORE_DETAILS:
        return (
          <>
            <Heading name="More Details" />
            <Step2 {...{ handleChange, form, handleBlur, error }} />
          </>
        );
      case PREVIEW:
        return <Step3 {...{ form }} />;
      default:
        return null;
    }
  };
  console.log(form);

  const getIndex = () => STEPS_ARR.findIndex((step) => step === state.step);

  const setBackPrev = (isNext) => {
    let index = getIndex();
    index = isNext ? index + 1 : index - 1;
    setState((prev) => ({ ...prev, step: STEPS_ARR[index] }));
  };

  const next = () => {
    setBackPrev(true);
  };

  const previous = () => {
    setBackPrev(false);
  };

  const submit = () => {};

  //helper

  const pick = (state, fields) =>
    fields.reduce((acc, field) => {
      acc[field] = state[field];
      return acc;
    }, {});

  const getFormValid = (form) => {
    const details = ["name", "email", "phone"];
    const moreDetails = ["gender", "address"];
    switch (state.step) {
      case STEPS.DETAILS:
        return pick(form, details);
      case STEPS.MORE_DETAILS:
        return pick(form, moreDetails);
      default:
        return form;
    }
  };

  return (
    <div className="field">
      <StepUi activeIndex={getIndex()} />
      {getStep(state.step)}
      {state.step !== STEPS.DETAILS && (
        <button className="back" onClick={previous}>
          Back
        </button>
      )}
      {state.step !== STEPS.PREVIEW && (
        <button
          className="next "
          onClick={next}
          disabled={
            nextValidation(error) || !nextValidation(getFormValid(form))
          }
        >
          Next
        </button>
      )}
      {state.step === STEPS.PREVIEW && (
        <button className="next " onClick={submit}>
          Submit
        </button>
      )}
    </div>
  );
}
