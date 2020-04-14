import React from 'react'
import { connect } from 'react-redux'
import '../../../App.css'
import QustionCad from "./userCard";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ansewerd: false,
        }
    }
    clickunAnswerdQustion = () => {
        this.setState({ ansewerd: false })
    }
    clickAnswerdQustion = () => {
        this.setState({ ansewerd: true })
    }
    render() {
        return (
            <div >
                <div style={{padding :10,display:"flex" , flexDirection:"row"}}>
                    <button onClick={this.clickunAnswerdQustion}>unasewered Qustion</button>
                    <button onClick={this.clickAnswerdQustion} >Asewered Qustion</button>
                </div>
                {this.state.ansewerd ?
                    <div style={Styles.container}>
                    <QustionCad />
                    <QustionCad />
                    <QustionCad />
                    </div>                    :
                    <div style={Styles.container}>
                    <QustionCad />
                    </div>
                    }
            </div>

        );
    }
}


const Styles = {
    container: {
        paddingTop: 20,
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300,
        flexDirection: "column"

    },
}


function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(Home)