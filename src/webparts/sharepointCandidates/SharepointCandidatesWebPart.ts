import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneDropdown,
  PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'SharepointCandidatesWebPartStrings';
import SharepointCandidates from './components/SharepointCandidates';
import { ISharepointCandidatesProps } from './components/ISharepointCandidatesProps';

export interface ISharepointCandidatesWebPartProps extends ISharepointCandidatesProps {}


const styles = {
  listItem: {},
  list: {}
};

export default class SharepointCandidatesWebPart extends BaseClientSideWebPart<ISharepointCandidatesWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISharepointCandidatesProps > = React.createElement(
      SharepointCandidates,
      {
        description: this.properties.description,
        text: this.properties.text,
        test1: this.properties.test1,
        test2: this.properties.test2,
        test3: this.properties.test3
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
                PropertyPaneTextField('description', {
                  label: 'Description'
                }),
                PropertyPaneTextField('text', {
                  label: 'Multi Text Field',
                  multiline: true
                }),
                PropertyPaneCheckbox('test', {
                  text: 'Checkbox',
                }),
                PropertyPaneDropdown('test2', {
                  label: 'Dropdown',
                  options: [
                    { key: '1', text: 'One' },
                    { key: '2', text: 'Two' },
                    { key: '3', text: 'Three' },
                    { key: '4', text: 'Four' },
                  ]
                }),
                PropertyPaneToggle('test3', {
                  label: 'Toggle',
                  onText: 'On',
                  offText: 'Off'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
