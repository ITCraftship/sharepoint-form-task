import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version, Environment, EnvironmentType } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';

import * as strings from 'SharepointCandidatesWebPartStrings';
import ValidationForm from './components/ValidationForm';
import { IValidationFormProps } from './components/IValidationFormProps';

export interface ValidationFormWebPartProps extends IValidationFormProps {
}

export default class ValidationFormWebPart extends BaseClientSideWebPart<IValidationFormProps> {

  public render(): void {
    const element: React.ReactElement<IValidationFormProps> = React.createElement(
      ValidationForm,
      {
        name: this.properties.name,
        username: this.properties.username,
        email: this.properties.email,
        company: this.properties.company,
        salary: this.properties.salary,
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('name', {
                  label: 'Name'
                }),
                PropertyPaneTextField('surname', {
                  label: 'Surname'
                }),
                PropertyPaneTextField('email', {
                  label: 'Email',
                }),
                PropertyPaneTextField('company', {
                  label: 'Company',
                }),
                PropertyPaneTextField('Salary', {
                  label: 'Salary',
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
