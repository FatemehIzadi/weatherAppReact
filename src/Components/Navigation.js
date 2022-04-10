import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-bootstrap";

export default function Navigation() {
    return (
        <header>        
            <Container>
                <Row md={4}>
                    <Col><NavLink to="/">Lisbon</NavLink></Col>
                    <Col><NavLink to="/paris">Paris</NavLink></Col>
                    <Col><NavLink to="/sydney">Sydney</NavLink></Col>
                    <Col><NavLink to="/san-francisco">San Francisco</NavLink></Col>
                </Row>
            </Container>
        </header>
    )
}