import React from 'react'
import { withRouter } from 'react-router'

const Footer = props => {
  return <div>{props.history.location.pathname}</div>
}

export default withRouter(Footer)
