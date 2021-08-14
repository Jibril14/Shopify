import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Product from '../Product';
import {Row, Col } from 'react-bootstrap';
import { listProducts } from '../store/actions/productActions';
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel';

    
 const Homescreen = ({history}) => {
    const dispatch = useDispatch();
    let productLists = useSelector(state =>state.productList);
    let {error, loading, products, page, pages} = productLists
    let keyword = history.location.search
      
      useEffect(()=>{
       dispatch(listProducts(keyword))
 
  }, [dispatch, keyword])
 
    return(

     <div>
        {!keyword && <ProductCarousel />}
         <h1>Top selling Products</h1>
      {loading ? <Loader/>
          : error ? <Message variant='danger'>{error}</Message>
              : 
              <div className="Smallscreen">
              <Row>
                  {products.map(product => (
                      <Col key={product._id}  sm={6} md={6} lg={4} xl={3}>
                          <Product product={product} />
                      </Col>
                  ))}
              </Row>
              <Paginate page={page} pages={pages} keyword={keyword} />
          </div>
    
    }
        
     </div>
    );

}

export default Homescreen;