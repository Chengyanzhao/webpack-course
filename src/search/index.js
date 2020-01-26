'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import logo from '../images/logo.png'

class Search extends React.Component {

  render() {
    debugger
    return <div className="search-text">
      Search Text<img src={logo} />
    </div>
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
)