import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { func } from 'prop-types'
import { getData } from './store/actions'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

function App({ getBody }) {
  React.useEffect(() => {
    getBody()
  }, [getBody])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        {/* <Route path="/about" component={About} exact />
        <Route path="/resume" component={Articles} exact />
        <Route path="/contact" component={Video} exact />
        <Route path="/portfolio" component={Image} exact /> */}
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={LogIn} exact />

        {/* <Route path="/portfolio/contact-list" component={ContactList} exact />
        <Route path="/portfolio/contact-list/:contactId" component={ContactInfo} exact /> */}
      </Switch>
    </BrowserRouter>
  )
}

App.propTypes = {
  getBody: func,
}

const mapDispatchToProps = (dispatch) => ({
  getBody: () => dispatch(getData()),
})

export default connect(null, mapDispatchToProps)(App)
