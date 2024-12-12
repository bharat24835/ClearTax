import React from 'react'
import { Button } from '@mui/material'

const Category = ({title , setClickedCategories}) => {

  const handleClick = (e , value )=>{
    setClickedCategories(value);
  }

  return (
    <Button variant='contained' size='large' sx={{width:'200px'}}  onClick={(e)=>{handleClick(e ,`${title}`)}}>
      {title}
    </Button>
  )
}

export default Category
