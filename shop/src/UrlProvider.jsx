import React from 'react'
import PropTypes from 'prop-types'

export default class UrlProvider extends React.Component {
  //3/ We must say what type of parameter will be passed by the context ...
  static childContextTypes = {
    url: PropTypes.string.isRequired
  }

  //4/ ... and what kind of props we expect
  static propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  //5/ This function will be called to retrieve the context.
  getChildContext() {
    return {
      url: this.props.url
    }
  }

  //3/ By default we render only children
  render() {
    return this.props.children
  }
}
