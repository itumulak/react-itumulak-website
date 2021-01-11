import React, {Component} from 'react';
import { Col, Image } from "react-bootstrap";

class About extends Component
{
    render() {
        return (
            <Col md={{span: 6, offset: 3}}>
                <p>
                    <Image src={this.props.logo} roundedCircle />
                </p>
                <h1>Thanks for dropping by!</h1>
                <br/>
                <div dangerouslySetInnerHTML={{__html: this.props.children}} />
            </Col>
        )
    }
}

export default About;
