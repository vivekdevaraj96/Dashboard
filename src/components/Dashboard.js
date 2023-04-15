import React from 'react'
import BaseApp from './BaseApp'
import Chart from 'chart.js/auto';


const Dashboard = () => {


  var data=[{color:"primary",head:"Earnings (Monthly)",value:"$40,000"},
            {color:"Success",head:"Earnings (Annual)",value:"$215,000"},
            {color:"Info",head:"Tasks",value:"50%"},
            {color:"Warning",head:"Pending Requests",value:"18"}]

  const pie=[{name:"Direct",value:55},
              {name:"Social",value:30},
              {name:"Referral",value:15}

        ]            

  return (
    <div><BaseApp>
      <div className='Dashboardheader'><div><h1>Dashboard</h1></div><div><button type="button" class="btn btn-primary">Generate Report</button></div>
</div>

<div className='Dashboardrow1'>
    {data.map((a)=>(
      <div style={{border:"2px solid black" , width:"250px" , height:"75px"}}><p>{a.head}</p>
            <h5>{a.value}</h5>
      </div>
    ))}

</div>
    </BaseApp></div>
  )
}

export default Dashboard