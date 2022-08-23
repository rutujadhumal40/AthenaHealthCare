const { default: axios } = require("axios");
const express = require("express");
const utils = require("./utils");

const PORT = process.env.PORT || 5000;

const app = express();
utils.get_access_token();

const clientID = "0oaeb95cxduUU6IZA297";
utils.get_access_token().then((data) => {
  console.log("EPIC_access_token", data);
  const accessToken = data.access_token;
  axios
    .get("https://api.preview.platform.athenahealth.com/v1/195900/patients", {
      // .get("https://api.preview.platform.athenahealth.com/v1/195900/ping", {
      headers: { Authorization: `Bearer ${accessToken}` },
      params: { dob: "03/19/1996", guarantordob: "03/19/1996" },
    })
    .then((data) => {
      console.log("DATA!!!!!!!", data.data);
    })
    .catch(function (err) {
      console.log("ERROR", err);
    });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT} ...`);
});
