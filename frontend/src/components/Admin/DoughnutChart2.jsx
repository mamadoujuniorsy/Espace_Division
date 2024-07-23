import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip,Legend);
const DoughnutChart2 = (props) => {
  const data = {
    labels:['stagiaires acceptés', 'stagiaires refusés'],
    datasets: [{
      label: 'poll',
      data:[3, 6],
      backgroundColor:['green', 'red'],
      borderColor:['green', 'red'],
    }]
  }
  const options={


  }
  return (
    <div className='w-[100%] h-[100%]'>
      <Doughnut 
        data={data}
        options={options}
      />  
    </div>
  )
}

export default DoughnutChart2
