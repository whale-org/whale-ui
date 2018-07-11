import * as React from 'react';

export default class Modal extends React.Component<any, any> {
  render () {
    return (
      <dialog open={true}>
        This is a modal dialog 😀
      </dialog>
    );
  }
}
