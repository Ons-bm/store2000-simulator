const ProgressBar = ({ step }) => {
  const number = Number(step);
  return (
    <>
      <span className="step-no bottom-line">Étape {step}</span>
      <div className="step-progress float-right">
        <span>{step} de 4 </span>
        <div className="step-progress-bar">
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: number * 25 + "%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
