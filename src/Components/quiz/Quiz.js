import React from 'react'
import Error from './Error'


const Quiz = ({handleCheck,handleNext,handleQuit,handleSelect,error,setError,userAntonym,setUserAntonym,count,options,selected}) => {



    console.log(options);
    console.log(userAntonym)

  return (
    <div className='quiz'>
     <div className="aquizbox">
        {error  && <Error>{error} </Error>}

        <p>The Antonym of {userAntonym[userAntonym.length - count]?.word} is ...</p>

        <div className="option">
          {options.map((i) => (
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

        <div className="buttons">
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

export default Quiz