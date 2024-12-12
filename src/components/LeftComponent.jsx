import React, { useEffect, useState } from 'react'
import { Box ,Stack} from '@mui/material'
import Category from './Category';

const LeftComponent = ({setClickedCategories}) => {

  const[categories , setCategories ]  = useState([]);
  // console.log({categories});
  

  useEffect(()=>{
    const fetchCategory = async()=>{
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      if(data){
        setCategories(data);
      }
    }
    fetchCategory();

  } , [])


  return (
    <Box sx={{height:'90vh' , position:'relative'  , width:'250px' , marginTop:'100px', }} >
       
       
      <Stack sx={{ gap:'20px' , width:'100%'}} alignItems='center' alignContent='center'>
      {/* <h3>Bharar</h3> */}
       {
        categories && categories.map((category , index)=>(
          <Category key={index} title={category}  setClickedCategories = {setClickedCategories} />
        ))
       }

      </Stack>
      
    </Box>
  )
}

export default LeftComponent
