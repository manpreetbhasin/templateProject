import React from 'react'

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
            <span className="symbol"><img src="images/logo.svg" alt=""/></span><span className="title">Phantom</span>
          </a>

          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>

        </div>
      </header>)
  }
}
