import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(){
    return(
        <div className ="card">
        <img src ="https://images.indianexpress.com/2023/12/CAT-2023-topper-Rachit-Dhanania.jpg?w=640 "></img>
        <div className="card-body">
        <h5 className="card-title">Product</h5>
        <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>
    </div>
    );
}

/*import * as React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container mt-4">
      <div className='row'>
        <div className='col-md-4'>
          <Card/>
        </div>
        <div className='col-md-4'>
          <Card/>
        </div>
        <div className='col-md-4'>
          <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
*/
