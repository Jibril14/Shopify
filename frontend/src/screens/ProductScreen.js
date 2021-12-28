import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'; 
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { detailOfProducts } from '../store/actions/productActions';

const ProductScreen =({ match, history }) =>{
   
    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
 
    const productDetails = useSelector(state => state.productDetail)
    const { loading, error, product } = productDetails
 
    useEffect(() => {
      
      
 
        dispatch(detailOfProducts(match.params.id))
 
    }, [dispatch])

  
   
    const addToCartHandler = () =>{
       history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
     return(
      <div>
        <Link to='/' className='btn btn-light my-5'> Go Back</Link>
            {loading ?
                <Loader />
                :
                 <Row>
                     <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                     </Col>
         
                         <Col md={3}>
                             <ListGroup variant="flush">
                             <ListGroup.Item>
                                           <h3>{product.name}</h3>
                             </ListGroup.Item>
 
                             <ListGroup.Item>
                                           <Rating value={product.rating} text={`${product.reviewsNum} ratings`} color={'#D6C537'} />
                             </ListGroup.Item>
       
 
                                <ListGroup.Item>
                                        Price: NGR {product.price}
                                        </ListGroup.Item>
 
 
                                        <ListGroup.Item>
                                           Description: {product.description}
                                        </ListGroup.Item>
 
                                 </ListGroup>
                        </Col>
 
                  <Col md={3}>
                       <Card>
        <ListGroup variant='flush'>
           <ListGroup.Item>
            <Row>
          <Col>Price:</Col>
          <Col>
          <strong>NGR {product.price}</strong>
          </Col>
            </Row>
 
            </ListGroup.Item>
 
         
           <ListGroup.Item>
            <Row>
          <Col>Status:</Col>
          <Col>
 
          {product.numInStock > 0 ? 'In Stock': 'Out of Stock'}
          </Col>
            </Row>
            </ListGroup.Item>
 
 
 
           {product.numInStock > 0 &&(
          <ListGroup.Item>
               <Row>
                  <Col>Qty</Col>
                  <Col xs = 'auto' className='my-1'>
                  <Form.Control
                     as="select"
                     value={qty}
                     onChange={(e) =>setQty(e.target.value)}
                     >
                      {
 
                         [...Array(product.numInStock).keys()].map((x) => (
                            <option key={x +1} value = {x + 1}>
                               {x + 1}
                            </option>
                         ) )
                      } 
                  </Form.Control>
                  </Col>
               </Row>
          </ListGroup.Item>
           )}
            
         <ListGroup.Item>
             <Button onClick={addToCartHandler} className='btn-block' type='button' disabled={product.numInStock ===0}>Add to Cart </Button>
         </ListGroup.Item>
 
 
         </ListGroup>
        </Card>
    
    </Col>
    </Row>
     }
    
    </div>
     );
 }
 
 
 export default ProductScreen;
