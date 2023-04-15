import React from 'react'
import BaseApp from './BaseApp'




const Borders = () => {
  return (
    <div><BaseApp>
    <div><h1>Border Utilities</h1></div>
    <div><p>Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</p></div>
    
    <div>

    <div class="card border border-left-primary">
    <div class="card-body">
    .border-left-primary 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-secondary 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-success 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-info 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-warning 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-danger 
    </div>
    </div>

    <div class="card">
    <div class="card-body">
    .border-left-dark 
    </div>
    </div>

    </div>
    </BaseApp></div>
  )
}

export default Borders