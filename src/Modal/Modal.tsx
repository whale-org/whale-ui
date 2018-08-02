import * as React from "react";
import { Portal } from "../Core/Portal";

import TransitionComponent from "../TransitionComponent";
import {ExitedHandler} from "../TransitionComponent/TransitionComponent";
import "./Modal.css";

export interface IModalProps {
  show: boolean;
  onExited?: ExitedHandler;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export class Modal extends React.PureComponent<IModalProps> {

  private static BODY_RELATIE_CLASS = "hn-body-relative";

  public body: HTMLBodyElement;


  public render() {
    const { children, show, onExited, style, onClick } = this.props;
    return (
      <Portal>
        <TransitionComponent
          onClick={onClick}
          style={style}
          onExited={onExited}
          show={show}
          transitionClass="hn-modal"
          timeout={{enter: 300, exit: 150}}>
            {children}
        </TransitionComponent>
      </Portal>
    );
  }

  public componentWillMount() {
    const documentBody = document.querySelector("body");
    if (documentBody) {
      this.body = documentBody;
      if (this.props.show) {
        this.addBodyClass();
      }
    }
  }

  public componentDidUpdate() {
    if (this.props.show) {
      this.addBodyClass();
    } else {
      this.removeBodyClass();
    }
  }

  private addBodyClass() {
    if (this.body) {
      this.body.classList.add(Modal.BODY_RELATIE_CLASS);
    }
  }

  private removeBodyClass() {
    if (this.body) {
      this.body.classList.remove(Modal.BODY_RELATIE_CLASS);
    }
  }

  // public compo

  public componentWillUnmount() {
    // tslint:disable-next-line
    console.log('modal will unmounted!!');
    if (this.body) {
      this.body.classList.remove("hn-body-relative");
    }
  }
}
