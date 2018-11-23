import { SPHttpClient, SPHttpClientResponse, SPHttpClientConfiguration } from '@microsoft/sp-http';
import MockHttpClient from '../../lib/webparts/sharepointCandidates/mockHttpClient';
import { IWebPartContext } from '@microsoft/sp-webpart-base';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { MockHttpClientList } from './MockHttpClient';
import { ISPLists, ISPList, IContactList } from './service.interface';


export class SharePointAPI {

  constructor(private context: IWebPartContext) {}


  fetchLists(): Promise<ISPLists<ISPList>> {

    const promise = Promise.resolve({ value: [] });

    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + '/_api/web/lists', SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) =>  response.json());
    }

    return MockHttpClient.get()
      .then((data: ISPList[]) => {
        const listData: ISPLists<ISPList> = { value: data };
        return listData;
      }) as Promise<ISPLists<ISPList>>;

  }

  getByType(type: string): Promise<ISPLists<IContactList>> {
    if (Environment.type === EnvironmentType.SharePoint || Environment.type === EnvironmentType.ClassicSharePoint) {
      return this.context.spHttpClient.get(`${this.context.pageContext.web.absoluteUrl}/_api/web/Lists/GetByTitle('${type}')/Items`, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) =>  response.json());
    }

    return MockHttpClientList.get()
      .then((data: any[]) => {
        const listData: any= { value: data };
        return listData;
      }) as Promise<ISPLists<IContactList>>;
  }

  addByType(type:string, content: any) {
    var newItemUrl = `_api/Web/Lists/GetByTitle('${type}')/Items`;
    var metadata =
        {
        __metadata:
          {
            'type': `SP.Data.Candidate1ListItem`
        },
        ...content
    };

    return this.context.spHttpClient.post(`${this.context.pageContext.web.absoluteUrl}/${newItemUrl}`, SPHttpClient.configurations.v1, {
      headers: {
        'Accept': 'application/json;odata=nometadata',
        'Content-type': 'application/json;odata=verbose',
        'odata-version': ''
      },
      body: JSON.stringify(metadata),
    })
    .then((response: SPHttpClientResponse) =>  response.json());
  }
}
