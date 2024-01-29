import { Endpoints } from "../constants/Endpoints";
import { Keys } from "../constants/keys";
import axios from "axios";

export async function getInstagramData() {
    const url = `${Endpoints.IG_MEDIA_URL}&access_token=${Keys.IG_ACCESS_TOKEN}`;
    const profileDataUrl = `${Endpoints.IG_ME_URL}&access_token=${Keys.IG_ACCESS_TOKEN}`;
    let responseObject = {
        media: [],
        profile: undefined,
    }
    try {
        responseObject = await fetchData(url, profileDataUrl)
    } catch (err) {
        console.log("Error on fetching IG posts: ", err);
        // if (err?.code === 190 || err?.type === 'IGApiUnauthorizedException') {
        await refreshIgToken()
        responseObject = await fetchData(url, profileDataUrl)
        // }
    }
    return responseObject
}

async function fetchData(mediaUrl, profileUrl) {
    const responseObject = {
        media: [],
        profile: undefined,
    }
    const result = await axios.get(mediaUrl);
    responseObject.media = result.data?.data?.map((item) => {
        return {
            caption: item.caption,
            id: item.id,
            media_url: item.media_url || item.thumbnail_url,
            thumbnail: item?.thumbnail_url,
            permalink: item.permalink,
            timestamp: item.timestamp,
            username: item.username,
        };
    })
    const profileResult = await axios.get(profileUrl);
    responseObject.profile = {
        media_count: profileResult.data?.media_count,
        username: profileResult.data?.username,
        profileUrl: `https://www.instagram.com/${profileResult.data?.username}/`,
    }
    return responseObject
}

async function refreshIgToken() {
    const url = `${Endpoints.IG_TOKEN_REFRESH}${Keys.IG_ACCESS_TOKEN}`
    try {
        await axios.get(url)
    } catch (err) {
        console.log(`ERROR on refreshing IG Token: ${err.message}/n${err}`)
        return false
    }

    return true
}