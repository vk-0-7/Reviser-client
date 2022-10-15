import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Result.css'

const Resultsyno = ({ synscore, QuestionCount }) => {

    
    ChartJS.register(ArcElement, Tooltip, Legend);
    
     const data = {
      labels: ['Incorrect', 'Correct'],
      datasets: [
        {
          label: '# of Votes',
          data: [QuestionCount-synscore,synscore],
          backgroundColor: [
            'rgb(255, 153, 148)',
            
            'rgb(198, 255, 179)',
            
          ],
          borderColor: [
            'rgb(255, 31, 0)',
            
            'rgb(0, 204, 0)',
            
          ],
          borderWidth: 2,
        },
      ],
    };
    


  return (
    <div className="main-div"
      
    >
     <p className="text"
    
     >your score is {synscore}/{QuestionCount}</p>
     <Pie  className="chart" data={data} />;
    </div>
  );
};

export default Resultsyno;
