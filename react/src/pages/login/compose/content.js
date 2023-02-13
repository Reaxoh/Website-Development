import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from "react";

import UserLogin from './userLogin';
import Registration from './userRegistration';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginContent = () => {
    const [authMode, setAuthMode] = useState("signin")

    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }

    if (authMode === "signin") {
        return (
            <Container>
                <Row className='fs-1 my-3'>
                    <Col className='text-center'>Already Registration?
                        <span className="link-primary" onClick={changeAuthMode}>Sign In</span>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="8" className='px-4'><Registration /></Col>
                </Row>
                <Row className='my-4'></Row>
            </Container>
        );
    }

    return (
        <Container>
            <Row className='fs-1 my-3'>
                <Col className='text-center'>NOT Registration?
                    <span className="link-primary" onClick={changeAuthMode}>Sign Up</span>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col md="8" className='px-4'><UserLogin /></Col>
            </Row>
            <Row className='my-4'></Row>
        </Container>
    );
}



export default LoginContent