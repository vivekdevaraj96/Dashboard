import React from 'react'
import BaseApp from './BaseApp'


const Cards = () => {
    
  var data=[{color:"primary",head:"Earnings (Monthly)",value:"$40,000"},
  {color:"Success",head:"Earnings (Annual)",value:"$215,000"},
  {color:"Info",head:"Tasks",value:"50%"},
  {color:"Warning",head:"Pending Requests",value:"18"}]

const pie=[{name:"Direct",value:55},
    {name:"Social",value:30},
    {name:"Referral",value:15}

]    
  return (
    <div>
        <BaseApp>
        <div className="Buttonsheader"><h1>Cards</h1> </div>
        
        <div className='Dashboardrow1'>
    {data.map((a)=>(
      <div style={{border:"2px solid black" , width:"250px" , height:"75px"}}><p>{a.head}</p>
            <h5>{a.value}</h5>
      </div>
    ))}

</div>

<br/>
<br/>

<div className="splittwo">
<div class="card">
  <div class="card-header">
  Default Card Example 
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example. </p>
      
    </blockquote>
  </div>
</div>

<div class="card">
  <div class="card-header">
  Dropdown Card Example
  </div>
  <div class="card-body">
    <blockquote class="blockquote mb-0">
      <p>Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu. </p>
      
    </blockquote>
  </div>
</div>

</div>
        
        </BaseApp>
    </div>
  )
}

export default Cards