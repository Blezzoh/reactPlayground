import React, { Component } from "react";

const displayPages = [
  "select Accounts",
  "create Consumer",
  "create new consumer"
];
const styleOut = {
  display: "none"
};
const styleIn = {};
export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: displayPages,
      activePage: displayPages[0]
    };
  }
  setNextPage() {
    const { pages, activePage } = this.state;
    const index = pages.indexOf(activePage);
    const len = pages.length;
    if (index + 1 < len) {
      this.setState({ activePage: pages[index + 1] });
    }
  }
  isNextDisabled = () => {
    const { pages, activePage } = this.state;
    return pages.indexOf(activePage) === pages.length - 1;
  };
  isPreviousDisabled = () => {
    const { pages, activePage } = this.state;
    return pages.indexOf(activePage) === 0;
  };
  setPreviousPage() {
    const { pages, activePage } = this.state;
    const index = pages.indexOf(activePage);
    if (index - 1 >= 0) {
      this.setState({ activePage: pages[index - 1] });
    }
  }
  isVisible = index => {
    return this.state.pages[index] === this.state.activePage;
  };
  render() {
    const { isVisible } = this;
    const isNextDisabled = this.isNextDisabled();
    const isPreviousDisabled = this.isPreviousDisabled();
    return (
      <div>
        <div style={isVisible(0) ? styleIn : styleOut}>
          we are displaying one
        </div>
        <div style={isVisible(1) ? styleIn : styleOut}>
          we are displaying two
        </div>
        <div style={isVisible(2) ? styleIn : styleOut}>
          we are displaying three
        </div>
        <div>
          <button
            disabled={isPreviousDisabled}
            onClick={() => this.setPreviousPage()}
          >
            back
          </button>
          <button disabled={isNextDisabled} onClick={() => this.setNextPage()}>
            next
          </button>
        </div>
      </div>
    );
  }
}
