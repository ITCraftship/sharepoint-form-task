import * as React from 'react';
import styles from './ValidationForm.module.scss';
import { IValidationFormProps } from './IValidationFormProps';
import GraphComponent from './GraphComponent';
import ListItemComponent from './ListComponent';
import { SharePointAPI } from '../../../services/sharefile-api';
import Link, { LinkedComponent } from 'valuelink'
import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/lib/tags'
import { FormInput } from './FormInput';


export interface IValidationState {
    name: string;
    surname: string;
    age: number;
    chartData: any[];
}

export default class ValidationForm extends React.Component<IValidationFormProps, any> {
  private shareApi: SharePointAPI;

  constructor(args) {
    super(args);

    this.shareApi = new SharePointAPI(this.props.context);

    this.state = {
      ...this.defaultState(),
      chartData: [],
    };
  }

  private defaultState() {
    return {
      Title: '',
      FirstName: '',
      Email: '',
      Company: '',
      Salary: 0,
    };
  }

  componentDidMount() {
    this.shareApi.getByType('Candidate1')
      .then((response: any) => {
        this.setState({
          ...this.state,
          chartData: response.value
        })
      })
      .catch(err => {
        console.error(err);
        alert('Sorry there was an error when fetching the data');
      });
  }

  handleChange(name: string, event: any) {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  }

  private handleSave() {
    const state = (Object as any).assign({}, this.state);
    delete state['chartData'];

    this.shareApi.addByType('Candidate1', state)
      .then(contact => {

        const { chartData } = this.state;

        chartData.push(contact);

        this.setState({
          ...this.defaultState(),
          chartData
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public render(): React.ReactElement<IValidationFormProps> {

    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


    const firstLink = Link.state(this, 'Title')
      .check(x => x, 'Name is required');

    const lastLink = Link.state(this, 'FirstName')
      .check(x => x, 'Name is required');

    const companyLink = Link.state(this, 'Company')
      .check(x => x, 'Name is required');

    const salaryLink = Link.state(this, 'Salary')
      .check(x => x >= 0, 'Value can not go below 0');

    const emailLink = Link.state(this, 'Email')
      .check(x => x, 'Email is required')
      .check(x => x.match(emailPattern), 'Must be valid e-mail');

    return (
      <div className={ styles.sharepointCandidates }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>

              <span className={ styles.title }>Form validation</span>

              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>


              <FormInput className={styles.input} label="User first name: " valueLink={ firstLink } type="text" />

              <FormInput className={styles.input} label="User last email: " valueLink={ lastLink } type="text" />

              <FormInput className={styles.input} label="User email: " valueLink={ emailLink } type="text" />

              <FormInput className={styles.input} label="User company: " valueLink={ companyLink } type="text" />

              <FormInput className={styles.input} label="User salary: " valueLink={ salaryLink } type="nubmer" />

              <div>
                <button disabled={ firstLink.error || lastLink.error || emailLink.error || companyLink.error || salaryLink.error } className={styles.button} onClick={this.handleSave.bind(this)}>Save</button>
              </div>

            </div>
          </div>
          <div className={ styles.row }>
            <GraphComponent data={this.state.chartData} />
          </div>
          <div className={ styles.row }>
            <ListItemComponent list={this.state.chartData} />
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }
}
