import Button from "./Button";
const Buttons = ({ step, setTabActive }) => {
  return (
    <div className="actions">
      <ul>
        <li>
          <Button title="Précedent" step={step} setTabActive={setTabActive} />
        </li>
        <li>
          <Button title="Suivant" step={step} setTabActive={setTabActive} />
        </li>
      </ul>
    </div>
  );
};
export default Buttons;
