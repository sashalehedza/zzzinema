import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

import '../styles/Product.min.css'

const Product = ({ product }) => {
  return (
    <Card className='Product-styles my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className='img' src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/Product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.category}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
