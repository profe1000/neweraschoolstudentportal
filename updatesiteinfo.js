const fs = require("fs");
const sitepath = "./samples_var/newera/";

// Replace Prod Environment
fs.copyFile(
  `${sitepath}env.prod.sample`,
  "./src/environments/environment.prod.ts",
  (err) => {
    if (err) throw err;
    console.log("Prod Environment Replaced");
  }
);


// Replace Sample Environment
fs.copyFile(
  `${sitepath}env.sample`,
  "./src/environments/environment.ts",
  (err) => {
    if (err) throw err;
    console.log("Sample Environment Replace");
  }
);


// Replace Theme File
fs.copyFile(
  `${sitepath}variables.scss`,
  "./src/theme/variables.scss",
  (err) => {
    if (err) throw err;
    console.log("Theme File Replace");
  }
);


// Replace CSS File
fs.copyFile(
  `${sitepath}w3.css`,
  "./src/assets/css/w3.css",
  (err) => {
    if (err) throw err;
    console.log("Css File Replace");
  }
);


// Replace Firebase json
fs.copyFile(`${sitepath}firebase.json`, "./firebase.json", (err) => {
  if (err) throw err;
  console.log("Firebase Json Replace");
});


// Replace Firebase src
fs.copyFile(`${sitepath}a.firebaserc`, "./.firebaserc", (err) => {
  if (err) throw err;
  console.log("Firebase Src Replace");
});

