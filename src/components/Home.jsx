import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron,Row,Container,Col,Image,Button} from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
          <Container className="mt-3">
              <Jumbotron>
                <h2>Welcome to Sereal Koding</h2>
                <p>This is how to build website with react ,react-router ,adn react-bootstrap</p>    
              </Jumbotron>
              <Link to="/about">
                    <Button bsStyle="primary p-2">About</Button>
                </Link>
                <Row className="show-grid text-center mt-4">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-1.jpg" roundedCircle className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree, we'll send him to washington, these little son of</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-2.jpg" roundedCircle className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree, we'll send him to washington, these little son of</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/person-3.jpg" roundedCircle className="profile-pic"/>
                        <h3>Frank</h3>
                        <p>That's a crooked tree, we'll send him to washington, these little son of</p>
                    </Col>
                </Row>
          </Container>
        )
    }
}
