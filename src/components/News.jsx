import React, { Component } from 'react'
import './News.css'
import {Container,Row,Col,Image} from 'react-bootstrap'

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/mountain-man.jpg" className="header-image"/>
                <Container>
                    <h2>News</h2>
                    <Row>
                    <Col xs={12} sm={8} className="main-section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus labore modi, accusantium rem et tenetur asperiores officia nostrum harum dolor animi voluptates eum facilis, recusandae ipsum dolorem, eligendi corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus labore modi, accusantium rem et</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos tenetur ad in labore sit harum quo totam neque magni? Sit dicta quia quae! Magnam perferendis consectetur voluptatum quidem! Blanditiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente temporibus labore modi, accusantium rem et.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet odio, pariatur ex voluptatibus asperiores similique fuga sequi corporis molestiae mollitia voluptatum quis deleniti obcaecati cupiditate. Saepe obcaecati amet accusamus consectetur.</p>
                    </Col>
                    <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/dog-people.jpg"/>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eveniet ullam eaque reprehenderit deleniti magnam ducimus voluptate molestiae, eligendi unde, laudantium repudiandae! Minus magnam praesentium rerum possimus voluptatem mollitia fugit.</p>
                     </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
