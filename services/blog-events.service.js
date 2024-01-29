import axios from "axios";
import { Endpoints } from "../constants/Endpoints";

export function getAllBlogs(page, count) {
  return axios({
    method: "GET",
    url: `${Endpoints.BLOG_URL}?page=${page}&count=${count}&type=Published`,
    headers: {
      "content-type": "application/json",
    },
  });
}
export function getAllEvents(page, count) {
  return axios({
    method: "GET",
    url: `${Endpoints.EVENTS_URL}?page=${page}&count=${count}&type=Published`,
    headers: {
      "content-type": "application/json",
    },
  });
}

export function getSpecificEvents(id) {
  return axios({
    method: "GET",
    url: `${Endpoints.EVENTS_URL}/${id}`,
    headers: {
      "content-type": "application/json",
    },
  });
}
export function getSpecificBlog(id) {
  return axios({
    method: "GET",
    url: `${Endpoints.BLOG_URL}/${id}`,
    headers: {
      "content-type": "application/json",
    },
  });
}

export function getCommentsOnBlog(id, page, count) {
  return axios({
    method: "GET",
    url: `${Endpoints.BLOG_URL}/${id}/comments/?page=${page}&count=${count}`,
    headers: {
      "content-type": "application/json",
    },
  });
}

export function postCommentOnBlog(blogId, data) {
  return axios({
    method: "POST",
    url: `${Endpoints.BLOG_URL}/${blogId}/comments`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
}
export function getCommentsOnEvent(id, page, count) {
  return axios({
    method: "GET",
    url: `${Endpoints.EVENTS_URL}/${id}/comments/?page=${page}&count=${count}`,
    headers: {
      "content-type": "application/json",
    },
  });
}

export function postCommentOnEvent(blogId, data) {
  return axios({
    method: "POST",
    url: `${Endpoints.EVENTS_URL}/${blogId}/comments`,
    data: data,
    headers: {
      "content-type": "application/json",
    },
  });
}
