import React from "react";
import { Button } from "react-bootstrap";
import './nav.styles.scss';

class Nav extends React.Component {
  logOutHandler = () => {
    // localStorage.clear();
    console.log(this.props);
  };
  render() {
    return (
      <div className="nav-buttons-right"  style={{  }}>
        <Button variant="outline-dark"  onClick={this.logOutHandler}>Portfolio</Button>
        <Button variant="outline-dark"  onClick={this.logOutHandler}>Transactions</Button>
        <Button variant="outline-primary"  onClick={this.logOutHandler}>Log out</Button>
      </div>
    );
  }
}
export default Nav;
