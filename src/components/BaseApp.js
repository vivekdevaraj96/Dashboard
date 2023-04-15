import React from 'react'
import { Accordion} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';



function BaseApp({children}) {
  const history=useHistory();
  return (
    <div id="viewport">
        <div className='col-2 leftbar'>
            <div><h3 onClick={()=>history.push("/")}>SB ADMIN <sup>2</sup></h3></div>

            <hr/>

            <div><h5 onClick={()=>history.push("/")}>Dashboard</h5></div>

            <hr/>

            <div>
                <span>INTERFACE</span>

      <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Components</Accordion.Header>
        <Accordion.Body>        
        <div class="list-group">
        <h6>CUSTOM COMPONENTS:</h6>
         <button type="button" class="list-group-item list-group-item-action" onClick={()=>history.push("/Buttons")}>Buttons</button>
         <button type="button" class="list-group-item list-group-item-action" onClick={()=>history.push("/Cards")}>Cards</button>
        </div>      
       </Accordion.Body>
      </Accordion.Item>    
      <Accordion.Item eventKey="1">
        <Accordion.Header>Utilities</Accordion.Header>
        <Accordion.Body>        
        <div class="list-group">
        <h6>CUSTOM UTILITIES:</h6>
         <button type="button" class="list-group-item list-group-item-action" onClick={()=>history.push("/Colors")}>Colors</button>
         <button type="button" class="list-group-item list-group-item-action" onClick={()=>history.push("/Borders")}>Borders</button>
         <button type="button" class="list-group-item list-group-item-action">Animations</button>
         <button type="button" class="list-group-item list-group-item-action">Other</button>
        </div>      
       </Accordion.Body>
      </Accordion.Item>   
    </Accordion>               

    </div>

    <hr/>

    <div>
                <span>ADDONS</span>

      <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Pages</Accordion.Header>
        <Accordion.Body>        
        <div class="list-group">
        <h6>LOGIN SCREENS:</h6>
         <button type="button" class="list-group-item list-group-item-action">Login</button>
         <button type="button" class="list-group-item list-group-item-action">Register</button>
         <button type="button" class="list-group-item list-group-item-action">Forgot Password</button>
         <h6>OTHER PAGES:</h6>
         <button type="button" class="list-group-item list-group-item-action">404 Page</button>
         <button type="button" class="list-group-item list-group-item-action">Blank Page</button>
        </div>      
       </Accordion.Body>
      </Accordion.Item> 
    </Accordion>               

    </div>

    <div><h5>Charts</h5></div>
    <div><h5>Tables</h5></div>
    <hr/>





        </div>

        <div className='col-10 rightbar'>

        <div>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ul class="nav justify-content-end">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="www.alert.com">Alerts center</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="www.alert.com">Message center</a>
               </li>
               
               <li class="nav-item">
                 <a class="nav-link disabled"  href="www.alert.com">Douglas McGee</a>
               </li>
          </ul>
          </div>

          
        </nav>

        </div>
        <div>
          {children}




        </div>





        </div>
    </div>
  );
}

export default BaseApp;