import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data))
  }, [])

  function setNewQuestionList(newList){
    return setQuestions([...questions, newList])
  }

  function setQuestionsAfterDelete(newList){
    return setQuestions(newList)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm setQuestions={setNewQuestionList}/> : <QuestionList questions={questions} setQuestionsAfterDelete={setQuestionsAfterDelete}/>}
    </main>
  );
}

export default App;
