import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentQ, setCurrentQ] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [correctA, setCorrectA] = useState(0);

  const HandelClick = (isCorrect) => {

    if(isCorrect === true){

      setCorrectA(correctA + 1)
 
     }

    const nextQ = currentQ + 1

    if(nextQ < questions.length){

    setCurrentQ(nextQ);

    }else{

      setShowScore(true);

    }

  }


  const Reset = () => {

    setShowScore(false)
    setCorrectA(0);
    setCurrentQ(0)

  }

	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
        <>
				<div className='score-section'>You scored {correctA} out of {questions.length}</div>
        <button onClick={Reset}>Reset</button>
        </>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQ +1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQ].questionText}</div>
					</div>
					<div className='answer-section'>
						{
             
             questions[currentQ].answerOptions.map(a=>{

               return(

                   <button onClick={()=>HandelClick(a.isCorrect)}>{a.answerText}</button>

               )

               })


            }
					</div>
				</>
			)}
		</div>
	);
}