
import './App.css'
import Navbar from './components/Navbar'
import Button  from '@mui/material/Button';
import BottomNavigation from '@mui/material/BottomNavigation'



function App() {

  return (
    <>
      <Navbar />
      <div className=' container my-10'>
        <Button className='' variant="outlined">Text</Button>
        <Button variant="contained" color="primary">
          cancel
        </Button>
        
      </div>
    </>
  )
}

export default App
