import React from 'react';

import '../../App.css';
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signIn: true
        }
    }
    render() {
        return (

            <div className="Navigation_Heder">

                <button
                    type="submit" className="Navigation_Button"
                    onClick={() => this.props.history.push("./")}
                >
                    Home
                </button>
                <button className="Navigation_Button"
                    onClick={() => this.props.history.push("./newqustion")}
                >
                    New Qustion
                </button>
                <button className="Navigation_Button"
                    onClick={() => this.props.history.push("./leaderboard")}

                >Leader Board </button>

                {this.state.signIn &&
                    <div style={{ display: "flex", flexDirection: "row", flex: 2 }}>
                        <div className="Navigation_Button" style={{ color: "deepskyblue" }}  >
                            {"Welcom Ahmed"}
                        </div>
                        <button className="Navigation_Button"
                            onClick={() => {
                                this.props.history.push("./signin")
                                this.setState({ signIn: false })
                            }}
                        >
                            logout
                </button>
                    </div>
                }

            </div>
        )
    }
}


export default withRouter(Header);
