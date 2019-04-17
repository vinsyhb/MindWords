import axios from "axios";

const hostUrl = "http://localhost:3000";
export const makeRequest = (url, options) => {
  options.url = hostUrl + url;
  options.headers = { "content-type": "application/json" };
  return axios(options);
};
