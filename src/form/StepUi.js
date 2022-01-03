export const StepUi = ({ activeIndex }) => {
  return (
    <div className="step-group">
      {[1, 2, 3].map((id, index) => (
        <span className={`step ${activeIndex === index && "active"} `}>
          {id}
        </span>
      ))}
    </div>
  );
};
