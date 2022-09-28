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


  const [lastScore, setLastScore] = useState([]);

  const [currentQ, setCurrentQ] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [correctA, setCorrectA] = useState(0);

  const [name, setName] = useState('');

  const [start, setStart] = useState(false);



  const HandelClick = (isCorrect) => {

    if(isCorrect === true){

      setCorrectA(correctA + 1)
 
     }

    const nextQ = currentQ + 1

    if(nextQ < questions.length){

    setCurrentQ(nextQ);

    }else{

      setShowScore(true)
      setLastScore([{Name: name, R: correctA}, ... lastScore])
	  console.log(lastScore);

    }

  }

  const Reset = () => {

    setShowScore(false)
    setCorrectA(0)
    setCurrentQ(0)
    setName('')
    setStart(false)

  }


  const HandelStart = (e) =>{

	e.preventDefault();

	setStart(true)

	console.log(lastScore)

  }

  console.log(lastScore)

	return (

		<div className='app'>
			

			{showScore ? (
        <>
        <div className='wrap'>
			
				<div className='score-section'>You: scored {correctA} out of {questions.length}</div>

        <h5>Last score</h5>

        <ul>

              {

				lastScore.length !== 1 ?

                lastScore.slice(1).map(i=>{

                 return <li> {i.Name}: {i.R} out of {questions.length} </li>

                })

				: 

				<p>None</p>

              }

        </ul>

        <button className='reset' onClick={Reset}>Reset</button>
        </div>
        </>
			) : (

       start === false ? (

   
		<div className='formWrap'>

        <form onSubmit={HandelStart}>

       <input type="text" placeholder="name" onChange={i=>{setName(i.target.value)}}/>
       <button type='submit' className='reset'>Start</button>

       </form>

	   </div>



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
         
       )

			)}
		</div>
	);
}