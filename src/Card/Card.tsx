import * as React from "react";
import "./Card.css";

export interface IHelloWorldProps {
    children?: React.ReactNode;
}

export default class HelloWorld extends React.Component<IHelloWorldProps, any> {
  public render() {
    return (
      <div className="whale-card">
        {this.props.children ? this.props.children : null}
      </div>
    );
  }
}
