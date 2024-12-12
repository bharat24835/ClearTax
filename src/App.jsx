import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Stack } from '@mui/material'
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import { Category } from '@mui/icons-material'
function App() {
  const [count, setCount] = useState(0)
  const[clickedCategories , setClickedCategories] = useState('');
  console.log({clickedCategories});
  

 

  return (
    <>
     <NavBar/>
     <Stack direction='row' marginTop='40px' >
        <LeftComponent setClickedCategories = {setClickedCategories} />
        <RightComponent clickedCategories = {clickedCategories} />  
     </Stack>
    
    </>
  )
}

export default App
