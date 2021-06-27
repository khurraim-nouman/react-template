import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';
import Profit from './Components/Profit/Profit'

function App() {
  return (
    <>
    <Navbar />
    <div className='container-fluid'>

      <div className='row'>
        <div className='col-sm-3 col-md-3 col-lg-3 col-12' id='sidebar'>
            <Sidebar />
        </div>

        <div className='col-sm-9 col-md-9 col-lg-9 col-12'>
            <Profit />
        </div>

      </div>
    </div>
   </> 
  );
}

export default App;
