import React from "react";
import axios from "axios";
import { message } from "antd";
const BASE_URL = "https://dap-back.herokuapp.com/api";
// const BASE_URL = "http://localhost:3000/api";

export const _axios = async ({
  method,
  endpoint,
  data,
  fromData,
  absolute,
}) => {
  let token = localStorage.getItem("token");
  return axios({
    method,
    url: absolute ? endpoint : `${BASE_URL}/${endpoint}`,
    data,
    headers: {
      Accept: "application/json",
      "Content-Type": fromData ? "multipart/form-data" : "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).catch((e) => {
      if (!e.response) {
        message.error("No internet connection, please check your network");
    } else {
      throw e;
    }
  });
};

export const useAsyncHook = ({
  endpoint,
  method,
  absolute = false,
  fromData,
  action,
}) => {
  const [result, setResult] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getQuery = async (qdata) => {
    try {
      setLoading(true);
      const response = await _axios({
        method,
        absolute,
        endpoint,
        data: qdata,
        fromData: fromData || false,
      });
      setLoading(false);
      setResult(response.data.data);
      if (action) {
        action(response.data.data);
      }
    message.info(response.data.message)
      return response.data.data;
    } catch (error) {
      setLoading(false);
      throw error.response ? error.response.status : null;
    }
  };
  return [getQuery, result, loading];
};
