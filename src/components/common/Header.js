import React from 'react';

import '../../App.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authAction'

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

                {this.props.user !==null &&
                    <div style={{ display: "flex", flexDirection: "row", }} className="Navigation_Button" >
                        <div style={{ minWidth: 220, color: "deepskyblue" }}  >
                            {"Welcom " + this.props.user}
                        </div>
                        <button
                            onClick={() => {
                                this.props.logoutUser()
                                this.props.history.push("./")
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


function mapStateToProps({ auth, }) {
    const { loginUser } = auth;
    return {
        user: loginUser == null ? null: loginUser.name
    }
}


export default withRouter(connect(mapStateToProps, { logoutUser })(Header));
