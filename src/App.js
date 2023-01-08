import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./Components/Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTour] = useState([]);
  console.log(tours);
 
const removeTours =(id)=>{
  const newTours =tours.filter((item)=>item.id !== id);
  console.log(newTours)
  setTour(newTours)
};
   
  const fetchTours = async () => {
    setLoading(true);
try{
  const response = await fetch(url);
  const tours = await response.json();
  setTour(tours)
  setLoading(false);
  // console.log(tours);
}
catch(error){
  setLoading(false);
  console.log(error);
}
   
   
    // console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if(tours.length === 0){

    return(
      <main>
        <div  className="title">
          <h2>No Tours Left</h2>
          <button onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )

  }
  return (
    <div>
      <Tours  tours={tours} removeTours={removeTours}/>
    </div>
  );
}

export default App;
