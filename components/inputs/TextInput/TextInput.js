const TextInput = ({ title, placeholder }) => {
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
        />
      </div>
    </div>
  );
};

export default TextInput;
