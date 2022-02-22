import MultiSteps from "./MultiStepsForm/MultiSteps";
import StepsArea from "./Steps/StepsArea";
import { useState } from "react";


export default function Index({ }) {
    const [tabActive,setTabActive] = useState(0);
    return (
       <>
        <div className="clearfix" />
        <div className="wrapper">
            <StepsArea setTabActive={setTabActive} tabActive={tabActive}/>
            <MultiSteps tabActive={tabActive} setTabActive={setTabActive}/>
        </div>
       </>
    )
}