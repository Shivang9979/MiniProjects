
import './App.css';
import data from './data.js';
import {useState} from 'react';
import Tours from './component/Tour.js';


function App( ) {
  const [tours, settours] = useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    settours(newTours);
  
  }
  if(tours.length===0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button onClick={()=>settours(data)}>
          Refresh 
        </button>

      </div>
    )
  }
  return (
    <div className="App">
     <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
