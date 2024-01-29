import axios from "axios";
import { Endpoints } from "../constants/Endpoints";

export function postQuery(data, type) {
  return axios({
    method: "POST",
    url: `${Endpoints.QUERIES_URL}`,
    data: { ...data, type },
    headers: {
      "content-type": "application/json",
    },
  });
}
