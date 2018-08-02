import * as React from "react";
import { TabTitle } from "./TabTitle";

import { isElementOfType } from "../utils";

import "./TwoTabs.css";

export interface ITabProps {
  tabName: string;
  tabId: string;
}

// tabElement 类型,
export type TabElement = React.ReactElement<ITabProps & { children: React.ReactNode}>;

export const Tab: React.SFC<ITabProps> = ({ children, tabId, tabName }) => (
  <div>
    {children}
  </div>
);


export interface ITwoTabsProps {
  activeId?: string;
}

export interface ITwoTabsState {
  activeId?: string;
}

export class TwoTabs extends React.Component<ITwoTabsProps, ITwoTabsState> {

  public static defaultProps: Partial<ITwoTabsProps> = {
    activeId: "",
  };

  public state = {
    activeId: "",
  };

  public render() {
    const tabs = this.getTabChildren();
    return (
      <div className="hn-tabs">
        {this.renderTitles(tabs)}
        {this.renderTabContent(tabs)}
      </div>
    );
  }

  public componentDidMount() {
    this.setState({activeId: this.props.activeId});
  }

  private getTabChildren() {
    return React.Children.toArray(this.props.children).filter((child: React.ReactChild) => {
      return isElementOfType(child, Tab);
    }) as TabElement[];
  }

  private renderTitles = (tabs: TabElement[]): JSX.Element => {
    const { activeId } = this.state;
    return (
      <div className="hn-tab-title">
        {
          tabs.map((tab, index) => (
            <TabTitle
              key={tab.props.tabId + index}
              tabName={tab.props.tabName}
              tabId={tab.props.tabId}
              onTabClick={this.tabTitleOnClicked}
              activeId={activeId}
            />
          ))
        }
      </div>
    );
  }

  private renderTabContent = (tabs: TabElement[]): React.ReactNode => {
    const { activeId } = this.state;
    return (
      <div className="hn-tab-content">
        {
          tabs.filter((tab) => (tab.props.tabId === activeId))
          .map((tab) => tab.props.children)
        }
      </div>
    );
  }

  private tabTitleOnClicked = (tabId: string) => {
    this.setState({activeId: tabId});
  }
}
