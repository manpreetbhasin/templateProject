import { Component } from 'preact';
export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
            <span className="symbol"><img src="../assets/images/logo.svg" alt=""/></span><span className="title">Phantom</span>
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
