import Button from "./Button";
const Buttons = ({ step, setTabActive }) => {
  return (
    <div className="actions">
      <ul>
        {step != "1" ? (
          <li>
            <Button title="Précedent" step={step} setTabActive={setTabActive} />
          </li>
        ) : null}

        {step == "4" ? (
          <li>
            <Button title="Envoyer" step={step} setTabActive={setTabActive} />
          </li>
        ) : (
          <li>
            <Button title="Suivant" step={step} setTabActive={setTabActive} />
          </li>
        )}
      </ul>
    </div>
  );
};
export default Buttons;
