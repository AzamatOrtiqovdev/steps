import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // always use const, dont't use let
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function hundlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function hundleNext() {
    if (step < 3) setStep((s) => s + 1);
    // do not change the variable in the useState manualy like --> step = step + 1;
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((isOpen) => !isOpen)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={hundlePrevious}
            >
              previous
            </button>
            <button
              style={{ background: "#7950f2", color: "#fff" }}
              onClick={hundleNext}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
