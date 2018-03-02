import React from 'react'
import { withRouter } from 'react-router'

const Footer = props => {
  console.log(props.history)
  return <div>{props.history.location.pathname}</div>
}

export default withRouter(Footer)
