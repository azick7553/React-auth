import React from "react";
import Nav from "../Nav/nav.component";
import { ReactForm } from "../form/form.component";
import "./portfolio..styles.scss";

class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      userId: 0,
      balance: "",
      portfolio: [],
      errorMessage: "",
      ticker: "",
      qty: ""
    };
    this.inputChangeHandler = e => {
      e.preventDefault();
      this.setState({ [e.target.id]: e.target.value });
    };
    this.handleSubmit = (event, data) => {
      event.preventDefault();
      const { ticker, qty } = data;

      fetch("http://localhost:3000/transactions", {
        method: "POST",
        body: JSON.stringify({
          ticker: ticker,
          qty: qty,
          user_id: this.state.userId
        }),
        headers: { "content-type": "application/json" }
      })
        .then(response => response.json())
        .then(responsePortfolio => {
          console.log(responsePortfolio);
          
          let { portfolio } = this.state;
          portfolio.push(responsePortfolio);

          var result = [];
          portfolio.reduce(function(res, value) {
            if (!res[value.ticker]) {
              res[value.ticker] = { ticker: value.ticker, shares: 0, price:0 };
              result.push(res[value.ticker]);
            }
            res[value.ticker].shares += value.shares;
            res[value.ticker].price += value.price;
            return res;
          }, {});

          this.setState({ portfolio: result });
        });
    };
  }
  componentDidMount() {
    const { id, attributes } = this.props.user;

    if (attributes) {
      const { balance } = attributes;
      console.log(balance);
      this.setState({ balance: balance });
      fetch(`http://localhost:3000/portfolio/${id}`, {
        method: "GET"
      })
        .then(response => response.json())
        .then(portfolio => {
          this.setState({ portfolio: portfolio });
        });
      this.setState({ userId: id });
    }
  }
  render() {
    const inputs = [
      {
        id: "ticker",
        placeholder: "Ticker",
        type: "text",
        divClassName: "col-md-3",
        inputGroupAddon: "tickerInput-addon",
        // inputIcon: <User color="white" />,
        onChange: this.inputChangeHandler,
        required: "required",
        ariaLabel: "ticker"
      },
      {
        id: "qty",
        placeholder: "Qty",
        type: "number",
        divClassName: "col-md-3",
        inputGroupAddon: "qty-addon",
        // inputIcon: <Key color="white" />,
        onChange: this.inputChangeHandler,
        required: "required",
        ariaLabel: "Qty"
      }
    ];
    return (
      <div>
        <Nav history={this.props} />
        <div className="portfolio">
          <table className="table">
            <tbody>
              <tr>
                <td>&#09;</td>
                <td></td>
              </tr>
              <tr style={{ border: "none" }}>
                <td>
                  <h1>Portfolio()</h1>
                  <table className="table table-hover">
                    <tbody>
                      {this.state.portfolio.map(item => {
                        return (
                          <tr key={item.id}>
                            <td style={{ border: "none" }}>{item.ticker}</td>
                            <td style={{ border: "none" }}>
                              {" "}
                              - {item.shares} Shares
                            </td>
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
                  <ReactForm
                    errorMessage={this.state.errorMessage}
                    handleSubmit={this.handleSubmit}
                    state={this.state}
                    inputs={inputs}
                    submitButtonText={"Buy"}
                  />
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
