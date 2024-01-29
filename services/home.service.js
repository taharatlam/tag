import axios from "axios";
import {Endpoints} from "../constants/Endpoints";

export function getPromotionalDetails() {
    return axios({
        method: "GET",
        url: `${Endpoints.PROMOTIONAL_URL}`,
        headers: {
            "content-type": "application/json",
        },
    });
}