import React from 'react'
import Error from './Error'

const Quiz_Syno = ({handleCheck,handleNext,handleQuit,handleSelect,error,setError,userSynonym,setUserSynonym,QuestionCount,options_syno,selected}) => {
  return (
    <div className='quiz'>
    
    <div className="quizbox">
        {error  && <Error>{error} </Error>}

        <p>The Synonym of {userSynonym[userSynonym.length - QuestionCount]?.word} is ...</p>

        <div className="options">
          {options_syno.map((i) => (
            <button
              onClick={() => handleCheck(i)}
              className={`singleOption ${selected && handleSelect(i)}`}
              key={i}
              disabled={selected}
            >
              {" "}
              {i}
            </button>
          ))}
        </div>

        <div className="button">
          <button
            type="button"
            
            onClick={handleQuit}
          >
            Quit
          </button>
          <button
            type="button"
            
            onClick={handleNext}
          >
            Next Question
          </button>
        </div>
      </div>
    
    
    
    
    
    
    
    
    </div>
  )
}

export default Quiz_Syno