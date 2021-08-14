
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader'
import Message from '../components/Message'
import classes from '../index.module.css'

import FormContainer from '../components/FormContainer';
import { register } from '../store/actions/userActions';




const Registration = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegistration = useSelector(state => state.userRegistration)
    const { error, loading, userInfo } = userRegistration

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])





    const submitHandler = (e) => {
        e.preventDefault()
       
        if (password != confirmpassword) {
            setMessage('Passwords do not match!')
        } else {
            dispatch(register(name, email, password))
        }

    }
    //my action was also passed in to update the name
    // what i dispatch is my action
    return(
        <div className={classes.divtopmargin}>
        <FormContainer >
       <h4>Enter Your Information below</h4>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

        
            <Form.Group controlId='name'>
                <Form.Label>  </Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
                <Form.Label> </Form.Label>
                <Form.Control
                    required
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>  </Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='passwordConfirm'>
                <Form.Label></Form.Label>
                <Form.Control
                    required
                    type='password'
                    placeholder='Confirm Password'
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Register
            </Button>

        </Form>

        <Row className='py-3'>
            <Col>
                Have an Account? <Link
                    to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                    Sign In
                    </Link>
            </Col>
        </Row>
    </FormContainer >
    </div>
    );
}

export default Registration;
