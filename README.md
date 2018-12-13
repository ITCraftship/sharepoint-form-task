# Sharepoint form app


## High-level overview


You are tasked with creating a simple SharePoint application for 
adding and displaying user contacts(list form + chart form).


## Checklist
 
- Create a SharePoint service which will allow us to fetch and add new contacts to our SharePoint

When creating and accessing you SharePoint API the name of your contacts list is a GUID, that was sent to you by e-mail along with test invitation.

Example
```
// contact list name
7a65970dd8c842f697e33d659d241d10
// Api Example:
_api/Web/Lists/GetByTitle('7a65970dd8c842f697e33d659d241d10')/Items`
// SharePoint URL example:
https://itcraftship.sharepoint.com/Lists/7a65970dd8c842f697e33d659d241d10/AllItems.aspx
```


- Create a react form which will submit a new contact to our SharePoint instance with the SharePoint service + Create select input which will fetch the data from the SharePoint API and displayed it on the form (SharePoint list URL `/_api/web/Lists/GetByTitle('Company')/Items`):
  - add validation of required fields before the user can click Save (1 point)
  - add e-mail format validation (1 point)
  - add salary number validation (1 point)
  - add a dropdown with companies fetched from another list at `/_api/web/Lists/GetByTitle('Company')/Items` (1 points)
  - save a contact once user clicks **Save** and the data is valid (1 points)

- Create a react list which will display all added contacts data in the list fetched via SharePoint API (2 points)
- Create a pie chart where you display the salary of the contacts (for example use chartjs library) (3 points)

See a video with instructions here:
[https://youtu.be/RZzw74KSp1I](https://youtu.be/RZzw74KSp1I)

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

live version -> https://itcraftship.sharepoint.com/_layouts/15/workbench.aspx

By default you already have a web component generate for sharepoint ```sharepointCandidates```
the component is accesible under ```src/webparts/sharepointCandidates```


## Resources used:
- [Yotube resources](https://www.youtube.com/watch?v=S3tG2DE8tR8 )
- [Microsoft blog](https://developer.microsoft.com/en-us/sharepoint/blogs/)
- [Error with http2 module](https://sharepoint.stackexchange.com/questions/229327/workbench-page-shows-this-site-can-t-provide-a-secure-connection-on-creating-s)
