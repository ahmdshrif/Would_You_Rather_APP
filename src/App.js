import React from 'react';
import './App.css';
// import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Header from './components/common/Header'
import 'react-loading-bar/dist/index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import LeaderBoard from './components/pages/LeaderBoard'
import NewQustion from './components/pages/NewQustion'
import SignIn from './components/pages/SignIn'
import questions from './components/pages/qustiuon';
import { getUsers, } from "./actions/authAction";
import { getQuestions } from "./actions/qustionAction";
class App extends React.Component {
  async componentDidMount() {
    await this.props.getUsers()
    await this.props.getQuestions()

  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='container'>
            <Header />
            {this.props.login === true
              ?
              <Route path='/' component={SignIn} />

              : <div className="body">
                <Route path='/' exact component={Home} />
                <Route path='/add' exact component={NewQustion} />
                <Route path='/leaderboard' exact component={LeaderBoard} />
                <Route path='/questions/:id' component={questions} />
              </div>}
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

function mapStateToProps({ auth }) {
  return {
    login: auth.loginUser === null
  }
}

export default connect(mapStateToProps, { getUsers, getQuestions })(App)