import React from "react";
import Nav from "../Nav/nav.component";
import "./portfolio..styles.scss";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: "",
      transactions: [],
      sum: 0
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      console.log(user);
      const { balance, transactions } = user.data.attributes;
      console.log(transactions);
      this.setState({ balance: balance });
      this.setState({ transactions: transactions });
      let sum = 0;
      transactions.forEach(element => {
        sum += element.price
      });
      this.setState({ sum: sum });
    }
  }
  render() {

    return (
      <div>
        <Nav />
        <div className="portfolio">
          <table className="table">
            <tbody>
              <tr>
                <td>&#09;</td>
                <td></td>
              </tr>
              <tr style={{ border: "none" }}>
                <td>
                  <h1>Portfolio(${this.state.sum})</h1>
                  <table className="table table-hover">
                    <tbody>
                      {this.state.transactions.map(item => {
                        return (
                          <tr key={item.id}>
                            <td style={{ border: "none" }}>{item.ticker}</td>
                            <td style={{ border: "none" }}> - {item.qty} Shares</td>
                            <td style={{ border: "none" }}>${item.price}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <h2>Cash - ${this.state.balance}</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Portfolio;
