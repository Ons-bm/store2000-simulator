const SelectInput = ({ data, setResultData }) => {
  const { title, options } = data;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResultData(`${title} : ${value}`);
  };
  return (
    <div className="language-select">
      {title ? <h3>{title}</h3> : null}

      <select name="languages">
        {options?.length
          ? options.map((option) => {
              return (
                <option
                  key={option.id}
                  defaultValue={title}
                  onChange={handleChange}
                >
                  {option.label}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default SelectInput;
