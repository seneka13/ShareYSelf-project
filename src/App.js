import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getData } from './store/actions'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import EventPage from './pages/EventPage'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getBody = () => dispatch(getData())
    getBody()
  }, [dispatch])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/event" component={EventPage} exact />
        {/* <Route path="/resume" component={Articles} exact />
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

export default App
