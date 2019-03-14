// component/home/index.js

import React from 'react';
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

class Home extends React.Component {

    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/configuration' />
        }
    }

    render() {
        return (
            <div className="body-home">
                <div className="home-title">
                    <h1 className="title-big">Bienvenue</h1>
                    <h2 className="title-medium">dans la Bourse à la Liche</h2>
                </div>
                    {this.renderRedirect()}
                <button className="btnToConfig btn btn-primary" onClick={this.setRedirect}>Passez à la configuration</button>
            </div>
        );
    }
}
export default Home;