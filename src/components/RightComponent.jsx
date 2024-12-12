import React, { useEffect, useState } from 'react'
import { Box, Grid } from '@mui/material';

import Product from './Product';

const RightComponent = ({clickedCategories}) => {
  const [products , setProduct] = useState([]);
  console.log({products});
  

  useEffect(()=>{
    const fetchCategoryProduct = async()=>{
      const response = await fetch(`https://fakestoreapi.com/products/category/${clickedCategories}`);
      const data = await response.json();
      if(data){
        setProduct(data);
      }
    }
    fetchCategoryProduct();

  } , [ clickedCategories])

  return (
   <Box sx={{padding:'30px'}}>
    <Grid container >
      {
        products && products.map((product , index)=>(
          <Grid item md={3} key={index}>
             <Product product={product} />
          </Grid>
        ))
      }

    </Grid>

   </Box>
  )
}

export default RightComponent
