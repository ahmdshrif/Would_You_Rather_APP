import React from 'react'
import { connect } from 'react-redux';
import UserCard from './UserCard';
import image from '../../../images/user.jpg';


class LeaderBoard extends React.Component {


  render() {
    return (
      <div style={Styles.container}>
        <div className="ripple" />
        <UserCard image={image} name={"ahmed"} answerQustions={55} createQustions={3} points={5} />
        <UserCard image={image} name={"ahmed"} answerQustions={55} createQustions={3} points={5} />
        <UserCard image={image} name={"ahmed"} answerQustions={55} createQustions={3} points={5} />
      </div>

    );
  }
}

const Styles = { container: { dispaly: "flex", flex: 1, }, }

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(LeaderBoard)