import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getData, getEvents } from './store/actions'
import HomePage from './pages/HomePage'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import EventPage from './pages/EventPage'
import EventInfo from './pages/EventPage/EventInfo'
import AboutUs from './pages/AboutUs'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    const getBody = () => dispatch(getData())
    getBody()
    const getEventList = () => dispatch(getEvents())
    getEventList()
  }, [dispatch])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/event" component={EventPage} exact />
        <Route path="/event/:eventId" component={EventInfo} exact />
        <Route path="/about" component={AboutUs} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={LogIn} exact />
      </Switch>
    </BrowserRouter>
  )
}

export default App
