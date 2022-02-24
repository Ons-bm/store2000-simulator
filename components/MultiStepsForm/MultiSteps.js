import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

export default function MultiSteps({
  tabActive,
  setTabActive,
  setFinalData,
  finalData,
}) {
  const steps = [
    <Step1
      key={tabActive}
      setTabActive={setTabActive}
      setFinalData={setFinalData}
      finalData={finalData}
    />,
    <Step2
      key={tabActive}
      setTabActive={setTabActive}
      setFinalData={setFinalData}
      finalData={finalData}
    />,
    <Step3
      key={tabActive}
      setTabActive={setTabActive}
      setFinalData={setFinalData}
      finalData={finalData}
    />,
    <Step4
      key={tabActive}
      setTabActive={setTabActive}
      setFinalData={setFinalData}
      finalData={finalData}
    />,
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
