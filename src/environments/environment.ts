
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export enum resultTypeDBId {
  nurseryResult = 1,
  basicResult = 2,
  juniorSecResult = 3,
  seniorSecondaryResult = 4,
}

export const environment = {
  production: false,
  apiUrl: "https://student.neweramodelschools.com/",
  remoteLogoUrl:
    "https://student.neweramodelschools.com/files/sitefiles/neweralogo.jpg",
    sampleSignature:
    "https://student.neweramodelschools.com/files/signatureimage/signature.png",
  localLogoUrl: "assets/images/neweralogo.jpg",
  schoolName: "New Era Model School",
  schoolAddress: "97 Jakpa Road Effurun, Delta State",
  paystackUrl: "",
  resultTypeIdDB: resultTypeDBId,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
