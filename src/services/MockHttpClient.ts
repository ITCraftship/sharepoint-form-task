import { ISPList, IContactList, ISPLists } from "./service.interface";

export default class MockHttpClient {
  private static _items: ISPList[] = [
    {Title: 'Mock list', Id: '1' },
    {Title: 'Mock list 2', Id: '2' },
    {Title: 'Mock list 3', Id: '3' },
    {Title: 'Mock list 4', Id: '4' },
  ];


  public static get(): Promise<ISPList[]> {
    return new Promise<ISPList[]>((resolve) => {
      resolve(MockHttpClient._items)
    });
  }
}


export class MockHttpClientList {
  private static _items: IContactList[] = [
    {  Attachments: true,
      AuthorId: 1,
      CellPhone: "",
      Comments: "",
      Company: "ITcrafship",
      ComplianceAssetId: 1,
      ContentTypeId: "",
      Created: "",
      EditorId: 2,
      Email: "amatelic93@gmail.com",
      FileSystemObjectType: 0,
      FirstName: "matelic",
      FullName: "anze matelic",
      GUID: "sadfdjopsdf",
      HomePhone: "",
      ID: 121,
      Id: 121,
      JobTitle: "programmer",
      Modified: "",
      OData__UIVersion: "",
      ServerRedirectedEmbedUri: "",
      ServerRedirectedEmbedUrl: "",
      Title: "anze",
      WebPage: "",
      WorkAddress: "",
      WorkCity: "",
      WorkCountry: "",
      WorkFax: "",
      WorkPhone: "",
      WorkState: "",
      WorkZip: "",
      Salary: 1970,
    },

    {  Attachments: true,
      AuthorId: 1,
      CellPhone: "",
      Comments: "",
      Company: "OHC",
      ComplianceAssetId: 1,
      ContentTypeId: "",
      Created: "",
      EditorId: 2,
      Email: "tomaz.rutar@gmail.com",
      FileSystemObjectType: 0,
      FirstName: "rutar",
      FullName: "tomaz rutar",
      GUID: "#v2ad21ds3",
      HomePhone: "",
      ID: 122,
      Id: 122,
      JobTitle: "truck driver",
      Modified: "",
      OData__UIVersion: "",
      ServerRedirectedEmbedUri: "",
      ServerRedirectedEmbedUrl: "",
      Title: "tomaz",
      WebPage: "",
      WorkAddress: "",
      WorkCity: "",
      WorkCountry: "",
      WorkFax: "",
      WorkPhone: "",
      WorkState: "",
      WorkZip: "",
      Salary: 2500,
    }
  ];


  public static get(): Promise<IContactList[]> {
    return new Promise<IContactList[]>((resolve) => {
      resolve(MockHttpClientList._items);
    });
  }
}



