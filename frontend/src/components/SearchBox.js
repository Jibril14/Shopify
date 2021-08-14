import React, { useState } from 'react'
import { Button, Form , Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <div>
        <Form onSubmit={submitHandler} inline>
        <Row>
            <Col>
            <Form.Control
                type='text'
                placeholder="search product"
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
          </Col>
          <Col>
            <Button
                type='submit'
                variant='outline-success'
                className='p-1'
            >
                Search
            </Button>
            </Col>
            </Row>
        </Form>
        </div>
    )
}

export default SearchBox
