import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreditImage from './CreditImage';
import { Link } from 'react-router-dom';
const Footer = ()=>{
return (
    <div>
       <footer>
     <Container  className="bg-footercol text-white fliud pt-3 text-muted">
       <Row >
         <Col className="text-center py-3">
          Copyright &copy; Shopify.
         </Col>
         <Col xs={1} className="image-center ">
             <CreditImage/>
         </Col>
         
         
         <Col className="text-center py-3">
         <Link to='/contact'  style={{textDecoration: 'none', paddingLeft: 12, color: '#fff', fontWeigt: 'bold' }} >
        Contact Developer.
         </Link>
         </Col>

       
        
       </Row>
     </Container>
       </footer>
    </div>
  );
}

export default Footer;