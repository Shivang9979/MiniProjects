import {Navbar} from './component/Navbar'
import { FilterData } from './component/FilterData';
import { Cards } from './component/Cards';
import { filterData,apiUrl } from './data';
import { Spinner } from './component/Spinner';
import {  toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [Courses, setCourses] = useState([])
  const [Loading, setLoading] = useState(true)
  const [Category, setCategory] = useState(filterData[0].title)
  async function fetchData(){
    setLoading(true);
    try{
      const response=await fetch(apiUrl);
      const output=await response.json();
      setCourses(output.data)
      
    }
    catch(e){
      toast.error('Some thing is wrong')
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  return (
    <div className='bg-[#57534e] h-[100vh]'>
      <div >
      <Navbar></Navbar>
      </div>
      <div>
        <FilterData filterData={filterData} Category={Category} setCategory={setCategory}></FilterData>

      </div>
      <div >
        { Loading ? (<Spinner></Spinner>):(<Cards Courses={Courses} Category={Category}></Cards>)}
      </div>
    </div>
  );
}

export default App;
