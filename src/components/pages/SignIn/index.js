import React from 'react'
import { connect } from 'react-redux'
import '../../../App.css'
import Background from '../../../images/user.jpg';
import { getUsers , loginUser } from "../../../actions/authAction";
class signin extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user:"null"
    }
  }
  async componentDidMount() {
    await this.props.getUsers()
  }

  signin =()=>{
    this.props.loginUser(this.props.users[this.state.user])
    // this.props.history.push("/")
  }
  render() {
    return (
      <div style={Styles.container} className="body">

        <div className="w3-card-2" style={Styles.card}>
          <div className="w3-card" style={Styles.cardHeder}>{"Welcome To would you rather App "}</div>
          <div style={Styles.cardSectionContainer}>
            <h1>Sign In</h1>
              <select style={{flex:1 , width :"70%"}} value={this.state.user}
              onChange={(e)=>this.setState({user:e.target.value})}
              >
                <option value={"null"} disabled> chose user</option>
                {  Object.keys(this.props.users).map((key,user)=>
                  <option key={key} value={key}>{key}</option> )}
              </select>

            <button onClick={this.signin} style={Styles.submitButton} className="w3-btn w3-block">Sign In</button>


          </div>
        </div>
      </div>

    );
  }
}


const Styles = {
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    minHeight: 300,
    marginTop:50,
  },
  card: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    maxWidth: "650px",
    borderRadius: 1
  },
  cardHeder: {
    borderWidth: 2,
    borderButtomRightRadius: 30,
    backgroundColor: "#6a4f4b",
    minHeight: 60,
    marginBottom: 6,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "500"
  },
  cardSectionContainer: {
    marginBottom: 20,
    marginTop: 20,
    width: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",


    flex: 1,
  },
  avatarSection: {
    flex: 1,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'contain',

    backgroundImage: `url(${Background})`,
    paddingRight: 15,
    borderRightWidth: 2,
    borderRightColor: "red",
    borderRightStyle: "dotted",
  },
  qustionSectionsContainer: {
    display: "flex",
    flexDirection: "column",
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  qustionSections: {
    flex: 1,

  },
  submitButton: {
    marginTop: 20,
    marginBottom: 30,
    height: 50,
    width: "70%",

    padding: 16,
    backgroundColor: "#b0003a",
    border: "none",
    color: "white",
    paddingLeft: "32px",
    paddingRight: "32px",
    paddingTop: "15px",
    paddingBottom: "15px",
    borderRadius: 10,
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",

  },
  inputDive: { display: "flex", alignItems: "center", marginBottom: 10 },
  input: { marginTop: 5, marginRight: 10 },
  lable: { fontSize: 25 }
}


function mapStateToProps({ auth , loginUser }) {
  const {users} = auth;
  console.log(users.type)
  return {
    users
  }
}

export default connect(mapStateToProps,{getUsers , loginUser})(signin)