import React from "react";
import { MultiStepForm, Step } from "react-multi-form";
import { questions } from "./questions";
import { answers } from "./questions";
var stepQuestions = questions.filter(
  (question, index) => index % 2 === 1 && question
);
function App() {
  const [active, setActive] = React.useState(1);
  const [sum , setSum] = React.useState(new Array(48).fill(0));
  React.useEffect(() => {
    console.log(sum);
    }, [sum])
  return (
    <React.Fragment>
      <MultiStepForm activeStep={active}>
        {stepQuestions.map((question, index) => {
          return (
            <Step label={index + 1}>
              <h3 className="text-center">{question}</h3>
              {Object.entries(answers).map(([key, value]) => {
                        return <button className="answer-btn" onClick={()=>{
                          let newArr = [...sum];
                          newArr[index] = value;
                          setSum(newArr);
                          setActive(active + 1);
                        }}>{value}</button>;
                      })}
              <div className="wrapper-button">
              {
                active!== 1&& (
                  <button
                className="previous-question"
                onClick={() => setActive(active - 1)}
              >
                Prev
              </button>
                )
              }
              {active !== 48 && (
                <button
                  className="next-question"
                  onClick={() => setActive(active + 1)}
                >
                  Next
                </button>
              )}
              </div>
            </Step>
          );
        })}
      </MultiStepForm>
    </React.Fragment>
  );
}

export default App;
