## sharepoint-application

This is where you include your WebPart documentation.

### Building the code

```bash
npm i

npm i -g gulp
gulp

// run this command before starting the server
 gulp trust-dev-cert // just select a password

 gulp serve
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.



## Resources used:
[Yotube resources](https://www.youtube.com/watch?v=S3tG2DE8tR8 )
[Microsoft blog](https://developer.microsoft.com/en-us/sharepoint/blogs/)
[PnP/PnPjs](https://pnp.github.io/pnpjs/documentation/getting-started/)
[Solution if https is not working](https://stackoverflow.com/questions/50164519/browser-cant-display-gulp-serve-sharepoint-workbench)
https://sharepoint.stackexchange.com/questions/230113/spfx-webpart-workbench-on-localhost-is-not-connecting

[Error with http2 module](https://sharepoint.stackexchange.com/questions/229327/workbench-page-shows-this-site-can-t-provide-a-secure-connection-on-creating-s)
