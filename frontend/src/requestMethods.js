import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2Q1ZWQ3Njc1ZmI4NWUzYWQ1MTMzMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1Nzc4MzU1OCwiZXhwIjoxNjU4MDQyNzU4fQ.qw3G7qa7ul8sW2KbLryegjubr13_2ynIxvrTQyQGol8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
