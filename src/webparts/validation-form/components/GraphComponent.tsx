import * as React from 'react';
import { Pie as PieChart} from 'react-chartjs';
import * as  randomHexColor from'random-hex-color';

interface IGraphData {
  value: number;
  label: string;
}

export default class GraphComponent extends React.Component<any, {}> {

  defaultProps = {
    data: [],
    chartOptions: {}
  };

  private parseData(item: any): any {

    return item.map(value => {
      return {
        value: value.Salary,
        label: value.Title,
        color:  randomHexColor()
      };
    });
  };

  public render(): React.ReactElement<any> {
    const data= this.parseData(this.props.data || []);
    return (
      <div>
        <PieChart data={data} options={this.props.chartOptions}/>
      </div>
    );
  }

}
