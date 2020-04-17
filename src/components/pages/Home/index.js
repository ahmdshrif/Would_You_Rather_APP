import React from 'react'
import { connect } from 'react-redux'
import '../../../App.css'
import QustionCad from "./userCard";
import { withRouter } from 'react-router-dom'

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
    openQustions = (id) => {
        this.props.history.push(`/questions/${id}`)
    }
    render() {
        const { ansewerd, unanswead } = this.props
        const qustions = this.state.ansewerd ? ansewerd : unanswead

        return (
            <div >
                <div style={{ padding: 10, display: "flex", flexDirection: "row" }}>
                    <button onClick={this.clickunAnswerdQustion}>unasewered Qustion</button>
                    <button onClick={this.clickAnswerdQustion} >Asewered Qustion</button>
                </div>

                <div style={Styles.container}>
                    {Object.keys(qustions).map((key, qustion) =>
                        <QustionCad author={this.props.users[qustions[key].author]} openQustions={this.openQustions} id={qustions[key].id} answered={this.state.ansewerd} key={key} subTitle={qustions[key].optionOne.text} />
                    )
                    }
                </div>
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

function getAnsweared(o1, o2) {

    return Object.keys(o1).filter(k => (k in o2))
        .reduce((obj, key) => {
            obj[key] = o1[key];
            return obj;
        }, {});

}
function getNotAnsweared(o1, o2) {

    return Object.keys(o1).filter(k => !(k in o2))
        .reduce((obj, key) => {
            obj[key] = o1[key];
            return obj;
        }, {});

}



function mapStateToProps({ qustions, auth }) {
    const { loginUser, users } = auth;
    // console.log("aaa",getAnsweared( qustions.AllQustions, loginUser.answers))
    var UserQuestions = loginUser.questions.reduce(function (acc, cur, i) {
        acc[cur] = cur;
        return acc;
    }, {});
    const AllQustions = getNotAnsweared(qustions.AllQustions, UserQuestions)

    return {
        users,
        ansewerd: getAnsweared(AllQustions, loginUser.answers),
        unanswead: getNotAnsweared(AllQustions, loginUser.answers),
    }
}

export default withRouter(connect(mapStateToProps)(Home))