import * as ClassNames from "classnames";
import * as React from "react";

import "./Table.css";

type CellRender = (text: string, record: object) => JSX.Element;

export interface IColumnProps {
  title: string | React.SFC;
  dataIndex?: string;
  key: string;
  render?: CellRender;
}

// 接口参考的ant-design的定义，column里定义各列的渲染方法
export interface ITableProps {
  dataSource: object[];
  columns: IColumnProps[];
}

export class Table extends React.Component<ITableProps> {

  private static renderBodyTd(row: object, dataIndex: string | undefined, render?: CellRender ) {
    if (render) {
      return render(dataIndex ? row[dataIndex] : "", row);
    }
    return dataIndex ? row[dataIndex] : "";
  }

  private static renderHeadTd(col: IColumnProps) {
    return typeof col.title === "string" ?
        col.title :
        <col.title />;
  }

  public render() {
    const { columns, dataSource } = this.props;
    const classes = ClassNames("hn-table", {["hn-table-stripped"]: true});
    // 渲染主表格
    return (
      <table className={classes}>
        <thead>
          <tr>
            {
              columns.map((col, index) => (
                <td key={index}>
                  {Table.renderHeadTd(col)}
                </td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataSource.map((row, index) => (
              <tr key={index}>
                {this.renderBodyRow(row, columns)}
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  private renderBodyRow(row: object, columns: IColumnProps[]) {
    return columns.map((col, index) => (
      <td key={index}>
        {Table.renderBodyTd(row, col.dataIndex, col.render)}
      </td>
    ));
  }
}
