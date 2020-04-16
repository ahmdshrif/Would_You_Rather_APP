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
import { getUsers } from "./actions/authAction";
class App extends React.Component {
  async componentDidMount() {
    await this.props.getUsers()
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

              : <div>
                <Route path='/' exact component={Home} />
                <Route path='/newqustion' exact component={NewQustion} />
                <Route path='/leaderBoard' exact component={LeaderBoard} />
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

export default connect(mapStateToProps, { getUsers })(App)