import React from 'react'
import { connect } from 'react-redux'
import '../../../App.css'
import Background from '../../../images/user.jpg';


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption: ""
    }
  }
  handleOptionChange = (value) => {
    this.setState({
      selectedOption: value
    });
  }
  render() {
    return (
      <div style={Styles.container}>

        <div className="w3-card-2" style={Styles.card}>
          <div className="w3-card" style={Styles.cardHeder}>{"Welcome To would you rather App "}</div>
          <div style={Styles.cardSectionContainer}>
            <div>sign In</div>
              <select style={{flex:1 , width :"70%"}} value={"none"}
              // onChange={}
              >
                <option value="user1">user1</option>
                <option value="user2">user2</option>
                <option value="user3">user3</option>
              </select>

            <button style={Styles.submitButton} className="w3-btn w3-block">Sign In</button>


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
    padding: 20,

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
    width: "80%",

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


function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(Home)