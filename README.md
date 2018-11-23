# Sharepoint form app


## High-level overview


You are tasked with creating a simple SharePoint application for 
adding and displaying user contacts(list form + chart form).


## Checklist
 
- Create a SharePoint service which will allow us to fetch and add new contacts to our SharePoint .

When creating and accessing you SharePoint API
the name of your contacts list is your Firstname and secondName joined in CamelCase.

Example
```
// contact list name
AnzeMatelic
// Api Example
_api/Web/Lists/GetByTitle('AnzeMatelic')/Items`
```


- Create a react form which will submit a new contact to our SharePoint instance with the SharePoint service + Create select input which will fetch the data from the SharePoint API and displayed it on the form (SharePoint list URL ```/_api/web/Lists/GetByTitle('Company')/Items```)

- Create a react list which will display all out contacts data which we will fetch with our SharePoint API 
- Lastly create a pie chart where you display the salary of the contacts(for help user chartjs library)
+
## Startup instructions:

The project uses NPM and NodeJS version 8.9.0. Ideally user NVM which will select and fetch the correct version.

setting up the project
```
npm i -g gulp
npm i
```

Creating ssh certificate
```
 gulp trust-dev-cert
```

Starting the application
```
npm start
```
Navigate to:
local version -> https://localhost:4321/temp/workbench.html:

live version -> https://{sharepoint domain}.sharepoint.com/_layouts/15/workbench.aspx

By default you already have a web component generate for sharepoint ```sharepointCandidates```
the component is accesible unde ```src/webparts/sharepointCandidates```


## Resources used:
- [Yotube resources](https://www.youtube.com/watch?v=S3tG2DE8tR8 )
- [Microsoft blog](https://developer.microsoft.com/en-us/sharepoint/blogs/)
- [Error with http2 module](https://sharepoint.stackexchange.com/questions/229327/workbench-page-shows-this-site-can-t-provide-a-secure-connection-on-creating-s)
