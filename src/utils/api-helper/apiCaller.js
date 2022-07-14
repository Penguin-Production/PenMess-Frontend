import axios from "axios";

const ApiCaller = (method, endpoint, headers = {}, params = {}, body = {}) => {
  console.log(process.env.REACT_APP_API_URL);
  return axios({
    method: method,
    url: process.env.REACT_APP_API_URL + endpoint,
    headers: headers,
    params: params,
    data: body,
  });
};

export const get = (endpoint, headers, params) => {
  return ApiCaller("GET", endpoint, headers, params);
};

export const post = (endpoint, body, headers, params) => {
  return ApiCaller("POST", endpoint, headers, params, body);
};

export const put = (endpoint, body, headers, params) => {
  return ApiCaller("PUT", endpoint, headers, params, body);
};

export const remove = (endpoint, body, headers, params) => {
  return ApiCaller("delete", endpoint, headers, params, body);
};
