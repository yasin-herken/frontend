import React from "react";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { MultiStepForm, Step } from "react-multi-form";
import { questions, answers } from "../../questions";
import { Dialog } from "primereact/dialog";
import { publicRequest } from "../../Requests/RequestsMethods";
import { useDispatch } from "react-redux";
import { logout } from "../../Features/User/userSlice";
import { useNavigate } from "react-router-dom";
var stepQuestions = questions.filter(
  (question, index) => index % 2 === 1 && question
);

var questions1 = stepQuestions.slice(0, 9);
var questions2 = stepQuestions.slice(9, 18);
var questions3 = stepQuestions.slice(18, 48);
const Dashboard = ({ user }) => {
  const [visible, setVisible] = React.useState(false);

  const [active1, setActive1] = React.useState(1);
  const [active2, setActive2] = React.useState(1);
  const [active3, setActive3] = React.useState(1);

  const [sum1, setSum1] = React.useState(new Array(9).fill(0));
  const [sum2, setSum2] = React.useState(new Array(9).fill(0));
  const [sum3, setSum3] = React.useState(new Array(30).fill(0));

  const [message1, setMessage1] = React.useState("");
  const [message2, setMessage2] = React.useState("");
  const [message3, setMessage3] = React.useState("");
  const [message4, setMessage4] = React.useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async () => {
    try {
      const res = await publicRequest.post("/dehb", {
        id: user.id,
        question1: sum1.reduce((prev, curr) => prev + curr, 0),
        question2: sum2.reduce((prev, curr) => prev + curr, 0),
        question3: sum3.reduce((prev, curr) => prev + curr, 0),
      });
      if (res?.data?.success) {
        setVisible(true);
        setMessage1(res?.data?.data[0].value);
        setMessage2(res?.data?.data[1].value);
        setMessage3(res?.data?.data[2].value);
        setMessage4(res?.data?.data[3].value);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const hideDialog = () => {
    setVisible(false);
  };
  return (
    <React.Fragment>
      <Dialog
        visible={visible}
        header="ADHD Test Result"
        style={{ width: "50vw" }}
        onHide={hideDialog}
      >
        <div className="p-grid p-fluid">
          <div className="p-col-12 p-md-12">
            <p>{message1}</p>
            <p>{message2}</p>
            <p>{message3}</p>
            <p>{message4}</p>
            {message4 === "Yüksek düzeyde DEHB." && (
              <p style={{ backgroundColor: "red" }}>
                You should go to the doctor.
              </p>
            )}
          </div>
        </div>
      </Dialog>
      <div className="container" style={{ background: "transparent" }}>
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">ADHD Test</h1>
            <h2 className="text-center">
              Welcome{" "}
              {typeof user?.username === "string"
                ? user?.username.toUpperCase()
                : null}
            </h2>
            <div
              className="text-center close-btn"
              style={{ width: "100px" }}
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              Logout
            </div>
          </div>
        </div>
        <MultiStepForm activeStep={active1}>
          {questions1.map((question, index) => {
            return (
              <Step label={index + 1} key={index}>
                <h3 className="text-center">{question}</h3>
                {Object.entries(answers).map(([key, value]) => {
                  return (
                    <button
                      key={key + index + value}
                      className="answer-btn"
                      onClick={() => {
                        let newArr = [...sum1];
                        newArr[index] = value;
                        setSum1(newArr);
                        setActive1(active1 + 1);
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </Step>
            );
          })}
          <div className="wrapper-button not-hidden">
            {active1 !== 1 && (
              <button
                className="prev-question"
                onClick={() => setActive1(active1 - 1)}
              >
                Prev
              </button>
            )}
            {active1 <= 9 && (
              <button
                className="next-question"
                onClick={() => setActive1(active1 + 1)}
              >
                Next
              </button>
            )}
          </div>
        </MultiStepForm>

        <MultiStepForm activeStep={active2}>
          {questions2.map((question, index) => {
            return (
              <Step label={index + 1 + 9} key={question + "z"}>
                <h3 className="text-center" key={index + 9}>
                  {question}
                </h3>
                {Object.entries(answers).map(([key, value]) => {
                  return (
                    <button
                      key={key + value + index + 9}
                      className="answer-btn"
                      onClick={() => {
                        let newArr = [...sum2];
                        newArr[index] = value;
                        setSum2(newArr);
                        setActive2(active2 + 1);
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </Step>
            );
          })}
          <div className="wrapper-button not-hidden" key={101}>
            {active2 !== 1 && (
              <button
                className="prev-question"
                onClick={() => setActive2(active2 - 1)}
              >
                Prev
              </button>
            )}
            {active2 <= 9 && (
              <button
                className="next-question"
                onClick={() => setActive2(active2 + 1)}
              >
                Next
              </button>
            )}
          </div>
        </MultiStepForm>
        <MultiStepForm activeStep={active3}>
          {questions3.map((question, index) => {
            return (
              <Step label={index + 1 + 18} key={question + 18}>
                <h3 className="text-center" key={question + 18}>
                  {question}
                </h3>
                {Object.entries(answers).map(([key, value]) => {
                  return (
                    <button
                      key={key + value + index + 18}
                      className="answer-btn"
                      onClick={() => {
                        let newArr = [...sum3];
                        newArr[index] = value;
                        setSum3(newArr);
                        setActive3(active3 + 1);
                      }}
                    >
                      {value}
                    </button>
                  );
                })}
              </Step>
            );
          })}
          <div className="wrapper-button not-hidden" key={"100"}>
            {active3 !== 1 && (
              <button
                className="prev-question"
                onClick={() => setActive3(active3 - 1)}
              >
                Prev
              </button>
            )}
            {active3 <= 30 && (
              <button
                className="next-question"
                onClick={() => setActive3(active3 + 1)}
              >
                Next
              </button>
            )}
            {active3 === 31 && (
              <button className="next-question" onClick={submitHandler}>
                Submit
              </button>
            )}
          </div>
        </MultiStepForm>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
