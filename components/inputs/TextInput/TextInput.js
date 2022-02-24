const TextInput = ({ title, placeholder, setResultData }) => {
  const handleChange = (e) => {
    setResultData(`${title} : ${e.target.value}`);
  };
  return (
    <div className="row">
      <div className="col-md-12 form-inner-area">
        {title ? (
          <label htmlFor="field">
            <p>{title}</p>
          </label>
        ) : null}

        <input
          type="text"
          name="field"
          className="form-control"
          minLength={2}
          placeholder={placeholder ?? ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextInput;
