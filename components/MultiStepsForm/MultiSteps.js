import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function MultiSteps({ tabActive, setTabActive }) {
  const steps = [
    <Step1 key={tabActive} setTabActive={setTabActive} />,
    <Step2 key={tabActive} setTabActive={setTabActive} />,
    <Step3 key={tabActive} setTabActive={setTabActive} />,
    <Step4 key={tabActive} setTabActive={setTabActive} />,
  ];
  return (
    <>
      <form
        className="multisteps-form__form"
        action="#"
        id="wizard"
        method="POST"
      >
        <div className="form-area position-relative">{steps[tabActive]}</div>
      </form>
    </>
  );
}
