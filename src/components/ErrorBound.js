import React, { Component } from "react";

class ErrorBound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>no people or items to show</p>;
    }
    return this.props.children;
  }
}
export default ErrorBound;
