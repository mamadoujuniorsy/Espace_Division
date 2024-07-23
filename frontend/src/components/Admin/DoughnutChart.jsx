import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip,Legend);
const DoughnutChart = (props) => {
  const data = {
    labels:['anciens', 'nouveaux'],
    datasets: [{
      label: 'poll',
      data:[3, 6],
      backgroundColor:['lightgreen', 'purple'],
      borderColor:['lightgreen', 'purple'],
    }]
  }
  const options={


  }
  return (
    <div className='w-[50%] h-[50%]'>
      <Doughnut 
        data={data}
        options={options}
      />  
    </div>
  )
}

export default DoughnutChart
