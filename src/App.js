import React from 'react'
import moment from 'moment'
import { getEvents } from './gcal'
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Calendar, momentLocalizer } from 'react-big-calendar'
const localizer = momentLocalizer(moment);

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }
  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }
  render () {
    return (
      <Calendar
        localizer={localizer}
        style={{height: '600px'}}
        events={this.state.events}
      />
    )
  }
}

export default App