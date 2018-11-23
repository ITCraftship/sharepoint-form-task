import * as React from 'react';

export interface IListProperty {
  list: any[];
}

export default class ListItemComponent extends React.Component<IListProperty, {}> {


  static defaultProps: {
    list: any[];
  }

  private renderItem(item) {
    return (
      <tr key={item.ID}>
        <td >{item.ID}</td>
        <td>{item.Title}</td>
        <td>{item.FirstName}</td>
        <td>{item.Email}</td>
        <td>{item.Company}</td>
        <td>{item.Salary}</td>
      </tr>
    );
  }

  public render(): React.ReactElement<any> {
    return (
      <table>
        <thead>
          <tr>
            <td>Id</td><td>Name</td><td>Surname</td><td>Email</td><td>Company</td><td>Salary</td>
          </tr>
        </thead>
        <tbody>
          {this.props.list.map(this.renderItem)}
        </tbody>
      </table>
    );
  }
}
