import * as ClassNames from "classnames";
import * as React from "react";

export interface ITabTitleProps {
  tabName: string;
  tabId: string;
  activeId: string;
  onTabClick: (id: string, e?: React.MouseEvent<HTMLElement> ) => void;
}

export class TabTitle extends React.PureComponent<ITabTitleProps> {
  public render() {
    const { tabId, tabName, activeId } = this.props;
    const classes = this.getTabTitleClassNames(activeId, tabId);
    return (
      <span
        className={classes}
        onClick={this.handleTabClick}
      >
        {tabName}
      </span>
    );
  }

  private handleTabClick = (e: React.MouseEvent<HTMLElement>) => {
    if (this.props.onTabClick) {
      this.props.onTabClick(this.props.tabId, e);
    }
  }

  private getTabTitleClassNames = (activeId: string | undefined, currentId: string): string => {
    return ClassNames("hn-tab-title-item", { active: activeId === currentId });
  }
}
