const SelectInput = ({ data }) => {
  const { title, options } = data;
  return (
    <div className="language-select">
      {title ? <h3>{title}</h3> : null}

      <select name="languages">
        {options?.length
          ? options.map((option) => {
              return <option key={option.id}>{option.label}</option>;
            })
          : null}
      </select>
    </div>
  );
};

export default SelectInput;
