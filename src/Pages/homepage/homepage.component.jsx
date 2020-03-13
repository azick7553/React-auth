import React from "react";
import Portfolio from "../../components/portfolio/portfolio.component";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <div>
        <Portfolio user={this.props.user} />
      </div>
    );
  }
}
export default HomePage;
