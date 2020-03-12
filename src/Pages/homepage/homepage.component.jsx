import React from "react";
import Portfolio from "../../components/portfolio/portfolio.component";
class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ""
    };
  }
  componentWillMount() {
    const { history } = this.props;
    const userInLocalStroge = localStorage.getItem("user");
    if (!userInLocalStroge) {
      history.push("/login");
    } else {
      try {
        const { data } = JSON.parse(userInLocalStroge);
        this.setState({ user: data });
      } catch (error) {}
    }
  }
  render() {
    return (
      <div>
        <Portfolio />
      </div>
    );
  }
}
export default HomePage;
