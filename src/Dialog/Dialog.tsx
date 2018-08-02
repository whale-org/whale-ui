import * as ClassNames from "classnames";
import * as React from "react";
import Button from "../Button";
import {Modal} from "../Modal";

import TransitionComponent from "../TransitionComponent/TransitionComponent";
import "./Dialog.css";

export interface IDialogProps {
  /*对话框的标题*/
  title?: string;
  /*对话框是否显示*/
  show?: boolean;
  /*处理对话框点击确认时候的逻辑*/
  onDialogConfirm?: React.MouseEventHandler<HTMLElement>;
  /*处理对话框触发取消时候的逻辑*/
  onDialogClose?: React.MouseEventHandler<HTMLElement>;
}

// 通用dialog插件
export default class Dialog extends React.Component<IDialogProps> {

  public static defaultProps: IDialogProps = {
    show: false,
    title: "对话框",
  };

  public state = {
    style: "hide",
  };

  private styles = {
    ["show"]: {},
    ["hide"]: {visibility: "hidden"},
  };

  public render() {
    const classes = ClassNames("hn-dialog");
    const {show, children, title, onDialogClose, onDialogConfirm} = this.props;
    const modalShow = typeof show !== "undefined" ? show : false;
    return (
      <Modal
        onClick={this.handleModalClick}
        style={this.styles[this.state.style]}
        onExited={this.onModalExited}
        show={modalShow}>
        <TransitionComponent
          onClick={this.handleDialogClick}
          show={modalShow}
          transitionClass={classes}
          delay={20}
          timeout={{enter: 300, exit: 150}}>
          <div className="hn-dialog-close">关闭</div>
          <div className="hn-dialog-header">{title}</div>
          <div className="hn-dialog-body">
            {children}
          </div>
          <div className="hn-dialog-footer center">
            <Button
              onClick={onDialogClose}
              large
              border>
              取消
            </Button>

            <Button
              onClick={onDialogConfirm}
              large
              primary>
              确定
            </Button>

          </div>
        </TransitionComponent>
      </Modal>
    );
  }

  public componentDidMount() {
    if (this.props.show) {
      this.showModal();
    } else {
      this.hideModal();
    }
  }

  public componentDidUpdate(prevProps: IDialogProps) {
    if (this.props.show === true && this.state.style !== "show") {
      this.showModal();
    }
  }

  private onModalExited = () => {
    this.hideModal();
  }

  private hideModal() {
    this.setState({style: "hide"});
  }

  private showModal() {
    this.setState({style: "show"});
  }

  private handleDialogClick: React.MouseEventHandler<HTMLElement> = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  /*处理modal背景被点击时，调用onDialogClose*/
  private handleModalClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const { onDialogClose } = this.props;
    if (onDialogClose) {
      onDialogClose(e);
    }
  }
}
