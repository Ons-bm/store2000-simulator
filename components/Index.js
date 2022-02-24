import MultiSteps from "./MultiStepsForm/MultiSteps";
import StepsArea from "./Steps/StepsArea";
import { useState } from "react";

export default function Index({}) {
  const [tabActive, setTabActive] = useState(0);
  const [finalData, setFinalData] = useState([""]);
  console.log("final data", finalData);
  return (
    <>
      <div className="clearfix" />
      <div className="wrapper">
        <StepsArea setTabActive={setTabActive} tabActive={tabActive} />
        <MultiSteps
          tabActive={tabActive}
          setTabActive={setTabActive}
          setFinalData={setFinalData}
          finalData={finalData}
        />
      </div>
    </>
  );
}
