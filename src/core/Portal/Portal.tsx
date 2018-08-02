import * as React from "react";
import * as ReactDOM from "react-dom";
import "./Portal.css";

export interface IPortalProps {
  onChildrenMounted?: () => void;
}

export interface IPortalState {
  hasMounted: boolean;
}

export class Portal extends React.Component<IPortalProps, IPortalState> {

  public state: IPortalState = { hasMounted: false };

  private portalElement: HTMLElement;

  public render() {
    if (this.state.hasMounted) {
      return ReactDOM.createPortal(this.props.children, this.portalElement);
    } else {
      return null;
    }
  }

  public componentDidMount() {
    this.portalElement = this.createPortalElement();
    this.setState({hasMounted: true}, this.props.onChildrenMounted);
  }

  public createPortalElement(): HTMLElement {
    const portalElement = document.createElement("div");
    document.body.appendChild(portalElement);
    portalElement.classList.add("whale-portal-container");
    return portalElement;
  }
}
