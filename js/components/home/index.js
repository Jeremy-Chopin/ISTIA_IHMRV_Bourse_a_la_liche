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
                {this.renderRedirect()}
                <button className="btnToConfig" onClick={this.setRedirect}>Passez à la configuration</button>
            </div>
        );
    }
}
export default Home;