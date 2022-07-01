import React from "react";

function QuestionItem({ question , onItemDelete}) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index, ) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(question){
    const id = question.id
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onItemDelete(question))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDelete(question)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
