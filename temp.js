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
            key={question + "x"}
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
<div className="wrapper-button" key={101}>
  {active2 !== 1 && (
    <button
      className="prev-question"
      onClick={() => setActive2(active2 - 1)}
    >
      Prev
    </button>
  )}
  {active2 <=9 && (
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
            key={question + 18}
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
<div className="wrapper-button" key={"100"}>
  {active3 !== 1 && (
    <button
      className="prev-question"
      onClick={() => setActive3(active3 - 1)}
    >
      Prev
    </button>
  )}
  {active3 <=30 && (
    <button
      className="next-question"
      onClick={() => setActive3(active3 + 1)}
    >
      Next
    </button>
  )}
  {
    active3 === 31 && (
      <button
        className="next-question"
        onClick={submitHandler}
      >
        Submit
      </button>
    )
  }
</div>
</MultiStepForm>