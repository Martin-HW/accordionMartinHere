import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Adding from "./Adding.js";

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
          <Adding
            questions={questions}
            setQuestions={(questions) => {
              setQuestions(questions);
            }}
          />
        </section>
      </div>
    </main>
  );
}

export default App;
