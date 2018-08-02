import * as Popper from "popper.js";
import * as React from "react";
import { Input } from "../Input";

export interface ISelectProps {
  value: string;
}

export class Select extends React.Component<ISelectProps, any> {

  private inputRef: React.RefObject<any>;

  constructor(props) {
    super(props);
    this.inputRef = React.createRef<HTMLInputElement>();
  }


  public render() {
    return (
      <div>
        <Input
          ref={this.inputRef}
          value={"text"}
        />


      </div>
    );
  }
}
