import React, { Component } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Posts from './WP/Posts';
import About from './WP/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    state = {
        posts: [],
        about_content: '',
        gravatar: 'https://s.gravatar.com/avatar/3bbd5c6e1b3190a72350bbb9b31dfb2d?s=200'
    }

    getWpPosts = () => {
        const endpoint = 'https://itumulak.com/wp-json/wp/v2/posts';

        fetch(endpoint)
            .then((response) => response.json())
            .then((posts) => {
                this.setState({posts: posts})
            });
    }

    getWpAbout = () => {
      const endpoint = 'https://itumulak.com/wp-json/wp/v2/pages/1451/';

        fetch(endpoint)
            .then((response) => response.json())
            .then((post) => {
                this.setState({about_content: post.content.rendered})
            });
    }

    componentDidMount() {
        this.getWpPosts();
        this.getWpAbout();
    }

    render() {
        console.log(this.state.about_content);
        return (
            <div className="App">
                <header className="App-header">
                    <About logo={this.state.gravatar}>
                        {this.state.about_content}
                    </About>
                </header>
                <Container>
                    <Row>
                        {this.state.posts.map((postDatum) => {
                          return (<Posts {...postDatum} />);
                        })}
                    </Row>
                </Container>
                <div style={{textAlign: 'center'}}>
                    <p><i>This page is created by React and content is fetch remotely.</i></p>
                </div>
            </div>
        );
    }
}

export default App;
