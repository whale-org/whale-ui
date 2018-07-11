import * as React from 'react';
import ReactDOM from 'react-dom';


export interface PortalProps {
  onChildrenMounted?: () => void;
}

export interface PortalState {
  hasMounted: boolean;
}

export default class Portal extends React.Component<PortalProps, PortalState> {

  private portalElement: HTMLElement;

  render () {
    if (this.state.hasMounted) {
      return ReactDOM.createPortal(this.portalElement, this.props.children);
    } else {
      return null;
    }
  }

  componentDidMount () {
    this.portalElement = this.createPortalElement();
    this.setState({hasMounted: true}, this.props.onChildrenMounted);
  }

  createPortalElement():HTMLElement {
    const portalElement = document.createElement('div');
    document.appendChild(portalElement);
    portalElement.classList.add('whale-portal-container');
    return portalElement;
  }
}