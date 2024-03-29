import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import { Link} from 'react-router-dom'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { login} from '../actions/userActions'
import Loader from '../components/Loader'

const LoginScreen = ({ location, history}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error} = userLogin
    

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    },[userInfo, history, redirect])
    

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch login
        dispatch(login(email,password))

    }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            {error && <Message variant="danger">{error}</Message> }
            {loading && <Loader/>}
            <Form onSubmit={submitHandler} >
                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">Sign In</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
