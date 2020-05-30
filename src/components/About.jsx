import React, { Component } from 'react'
import {Container,Col,Image} from 'react-bootstrap';
import './About.css'

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/dog-people.jpg" className="header-image"/>
                <Container>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/person-1.jpg" className="about-profile-pic" circleRounded/>
                        <h3>Frank The thank </h3>
                        <p>Anyone can paint Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet odio laborum voluptas pariatur ipsum officia! Dolore omnis amet natus odit maiores? Ipsam asperiores ut cupiditate est nulla consequuntur deserunt quam?

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia rem cum obcaecati beatae quos. Cumque soluta facere eaque, nobis iusto ut enim similique modi, vitae tempore dolores sapiente et possimus!</p>
                        </p>
                    </Col>
                </Container>
            </div>
        )
    }
}
