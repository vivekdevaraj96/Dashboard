import React from 'react'
import BaseApp from './BaseApp'
import { Card, Button } from 'react-bootstrap'

const Buttons = () => {
  return (
    <div>       
            <BaseApp>
            <div className="Buttonsheader"><h1>Buttons</h1> </div>

            <div className='splittwo'>
                <div><Card>
      <Card.Header>Circle Buttons</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          Use Font Awesome Icons (included with this theme package) along with the circle buttons as shown in the examples below!
          </p>
          <h5>.btn-circle</h5>
          <Button variant="primary" className="btn-circle">Primary</Button>{' '}
          <Button variant="success" className="btn-circle">Success</Button>{' '}
          <Button variant="info" className="btn-circle">Info</Button>{' '}          
          <Button variant="warning" className="btn-circle">Warning</Button>{' '}
          <Button variant="danger" className="btn-circle">Danger</Button>{' '}
          <br/>
          <br/>
          
          <h5>.btn-circle .btn-sm</h5>
          <Button variant="primary" className="btn-circle btn-sm">Primary</Button>{' '}
          <Button variant="success" className="btn-circle  btn-sm">Success</Button>{' '}
          <Button variant="info" className="btn-circle  btn-sm">Info</Button>{' '}          
          <Button variant="warning" className="btn-circle  btn-sm">Warning</Button>{' '}
          <Button variant="danger" className="btn-circle  btn-sm">Danger</Button>{' '}
          <br/>
          <br/>
          <h5>.btn-circle .btn-lg</h5>
          <Button variant="primary" className="btn-circle btn-lg">Primary</Button>{' '}
          <Button variant="success" className="btn-circle btn-lg">Success</Button>{' '}
          <Button variant="info" className="btn-circle btn-lg">Info</Button>{' '}          
          <Button variant="warning" className="btn-circle btn-lg">Warning</Button>{' '}
          <Button variant="danger" className="btn-circle btn-lg">Danger</Button>{' '}
          
        </blockquote>
      </Card.Body>
    </Card></div>



                <div><Card>
      <Card.Header>Split Buttons with Icon</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
          Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.
          </p>
          <p><Button variant="primary" className="btn-circle btn-lg btn-icon-split"><span>Primary</span></Button>{' '}</p>
          <p><Button variant="success" className="btn-circle btn-lg">Success</Button>{' '}</p>
          <p><Button variant="info" className="btn-circle btn-lg">Info</Button>{' '}</p>
          <p><Button variant="warning" className="btn-circle btn-lg">Warning</Button>{' '}</p>
          <p><Button variant="danger" className="btn-circle btn-lg">Danger</Button>{' '}</p>
          <p><Button variant="secondary">Secondary</Button>{' '}</p>
          <p><Button variant="light">Light</Button>{' '}</p>

          
          
          
        </blockquote>
      </Card.Body>
    </Card></div>
                
            </div>          
            </BaseApp>
    </div>
  )
}

export default Buttons