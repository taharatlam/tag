import axios from "axios";
import { Endpoints } from "../constants/Endpoints";

export function GetMentorList(page, count) {
    return axios({
        method: "GET",
        url: `${Endpoints.MENTOR_LIST}&page=${page}&count=${count}`,
        headers: {
            "content-type": "application/json",
        }
    });
}

export function GetWPLList(page, count) {
    return axios({
        method: "GET",
        url: `${Endpoints.WPL_LIST}&page=${page}&count=${count}`,
        headers: {
            "content-type": "application/json",
        }
    });
}
