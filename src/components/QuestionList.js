import React from "react";
import QuestionItem from "./QuestionItem";


function QuestionList({ questions , setQuestionsAfterDelete}) {
  console.log(questions)
  
  // function handleDeleteItem(deletedItem) {
  //   const updatedItems = items.filter((item) => item.id !== deletedItem.id);
  //   setItems(updatedItems);
  // }

  function onItemDelete(deletedQuestion){
    const updatedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestionsAfterDelete(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
        return(
          <QuestionItem key={question.id} question={question} onItemDelete={onItemDelete}/>
        )
      })}</ul>
    </section>
  );
}

export default QuestionList;
