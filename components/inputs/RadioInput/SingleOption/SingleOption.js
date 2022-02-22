const SingleOption = ({
  data,
  idx,
  setActiveOption,
  activeOption,
  setConditional,
}) => {
  const { image, label, conditional } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setActiveOption(value);
    if (conditional) {
      setConditional([conditional]);
    } else {
      setConditional(false);
    }
  };
  return (
    <>
      <div className="col-md-4">
        <label
          className={`step-box-content bg-white text-center relative-position ${
            activeOption == label || activeOption == idx ? "active" : ""
          }`}
        >
          <span className="step-box-icon">
            <img src={image} />
          </span>
          <span className="step-box-text">{label}</span>
          {conditional?.type ? <span>{conditional.type}</span> : null}
          <span className="service-check-option">
            <span>
              <input
                id="condition1"
                type="radio"
                name="service_name"
                defaultValue={label}
                defaultChecked={activeOption == label || activeOption == idx}
                onChange={handleChange}
              />
            </span>
          </span>
        </label>
      </div>
    </>
  );
};
export default SingleOption;
