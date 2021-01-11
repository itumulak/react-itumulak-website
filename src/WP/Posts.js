import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

class Posts extends Component
{
    render() {
        return (
            <Col md={{span: 10, offset: 1}}>
                <h1>{this.props.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{__html: this.props.content.rendered}} />
                <br />
                <hr />
            </Col>
        )
    }
}

export default Posts;