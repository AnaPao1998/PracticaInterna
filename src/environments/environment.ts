// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAaoIfMj6nIJ1DF2VPvmcLT9W0bheiRAIM",
    authDomain: "database-17b16.firebaseapp.com",
    databaseURL: "https://database-17b16.firebaseio.com",
    projectId: "database-17b16",
    storageBucket: "database-17b16.appspot.com",
    messagingSenderId: "1000599862754"
  }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
