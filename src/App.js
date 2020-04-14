import React from 'react';
import './App.css';
// import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import Header from './components/common/Header'
import 'react-loading-bar/dist/index.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/pages/allqustions'
import LeaderBoard from './components/pages/LeaderBoard'
import NewQustion from './components/pages/NewQustion'
import SignIn from './components/pages/SignIn'
class App extends React.Component {
  state = {
    show: false
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className='container'>
            <Header />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Home} />
                <Route path='/newqustion' exact component={NewQustion} />
                <Route path='/leaderBoard' exact component={LeaderBoard} />
                <Route path='/signIn' exact component={SignIn} />
              </div>}
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)