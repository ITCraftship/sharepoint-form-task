export interface ISharepointCandidatesProps {
  description: string;
  text: string;
  test1: boolean;
  test2: string;
  test3: boolean;
}

export interface ISPLists {
  value: ISPList[];
}

export interface ISPList {
  Title: string;
  Id: string;
}


export interface IContactList {
  name: string;
  surname: string;
  company: string;
  Id: string;
}
