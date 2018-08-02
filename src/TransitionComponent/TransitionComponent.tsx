import ClassNames from "classnames";
import * as React from "react";
import { Transition } from "react-transition-group";

export type ExitedHandler = (node: HTMLElement) => void;

export interface ITransitionComponentProps {
  /*动画组件的class: 例如 fade, ''*/
  transitionClass: string;
  timeout: number | { enter?: number, exit?: number };
  delay?: number;
  show?: boolean;
  onExited?: ExitedHandler;
  style?: object;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export interface ITransitionComponentState {
  show: boolean;
}

export default class TransitionComponent extends React.Component<ITransitionComponentProps, ITransitionComponentState> {

  public static defaultProps: Partial<ITransitionComponentProps> = {
    delay: 0,
  };

  public state = {
    show: false,
  };

  public childDidMount = () => {
    const delay = this.props.delay ? this.props.delay : 0;
    if (delay) {
      setTimeout(() => {
        if (typeof this.props.show !== "undefined") {
          this.setState({show: this.props.show});
        } else {
          this.setState({show: true});
        }
      }, delay);
    } else {
      if (typeof this.props.show !== "undefined") {
        this.setState({show: this.props.show});
      } else {
        this.setState({show: false});
      }
    }
  }

  public getTransitionClasses(status: string) {
    const { transitionClass } = this.props;
    return ClassNames([transitionClass, `${transitionClass}-${status}`]);
  }

  public render() {
    const { timeout, children, onExited, style, onClick } = this.props;
    const {show} = this.state;
    return (
      <Transition
        in={show}
        timeout={timeout}
        onExited={onExited}
        mountOnEnter={false}
      >
        {(status: string) => (
          <div
            onClick={onClick}
            style={style}
            className={this.getTransitionClasses(status)}
          >
            {children}
          </div>
        )}
      </Transition>
    );
  }

  public componentDidMount() {
    this.childDidMount();
  }

  public componentDidUpdate(prevProps: ITransitionComponentProps) {
    // update state.show
    if ((typeof prevProps.show !== "undefined") && this.props.show !== prevProps.show) {
      const comShow = typeof this.props.show !== "undefined" ? this.props.show : false;
      this.setState({show: comShow});
    }
  }
}
