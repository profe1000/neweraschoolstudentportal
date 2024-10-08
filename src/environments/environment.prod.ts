export enum resultTypeDBId {
  nurseryResult = 1,
  basicResult = 2,
  juniorSecResult = 3,
  seniorSecondaryResult = 4,
}

export const environment = {
  production: true,
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
