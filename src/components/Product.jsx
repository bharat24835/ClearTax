import React from 'react'
import { Card , CardContent , CardMedia , CardActions, Box, Typography, Button } from '@mui/material'

const Product = ({product}) => {
  return (
    <Box sx={{width:'300px' }} >
    <Card>
      <CardMedia 
      image={`${product.image}`}
      component={'img'}
      alt={`${product.title}`}
      height='100px'
      width='100px'

      />
      <CardContent>
        <Typography variant='body2'>{product.description.slice(0,30)}...</Typography>
      </CardContent>
      <CardActions>
      <Button variant='outlined'>Add to Cart</Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default Product
