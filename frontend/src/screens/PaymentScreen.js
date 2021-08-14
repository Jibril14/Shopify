import React, { useState, useEffect } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutStep'
import { savePaymentMethod } from '../store/actions/cartActions'  

function PaymentScreen({ history }) {

    const cart = useSelector(state => state.shippingAddress)
    const { shippingAddress } = cart

    const dispatch = useDispatch()

    const [paymentMethod, setPaymentMethod] = useState('Paypal')
   
    if (!shippingAddress.address) {
        history.push('/shipping')
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>Select Payment Method</Form.Label>
                    <Col>
                      


                        <Form.Check
                            type='radio'
                            label='Paypal'
                            id='paypal'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >

                        </Form.Check>

                        
                        <Form.Check
                            type='radio'
                            label='Paystack'
                            id='paystack'
                            name='paymentMethod'
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>

                        <Form.Check
                            type='radio'
                            label='Fluterwave'
                            id='fluterwave'
                            name='paymentMethod'
                            
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                        </Form.Check>

                    </Col>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default PaymentScreen
