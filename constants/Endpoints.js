export class Endpoints {
  static BASE_URL = "https://api.tagmumbai.com";

  static USERS_URL = `${Endpoints.BASE_URL}/users`;

  static BLOG_URL = `${Endpoints.BASE_URL}/blogs`;

  static QUERIES_URL = `${Endpoints.BASE_URL}/queries`;

  static EVENTS_URL = `${Endpoints.BASE_URL}/events`;

  static FACULTY_URL = `${Endpoints.BASE_URL}/faculty`;

  static MENTOR_LIST = `${Endpoints.FACULTY_URL}?type=Mentor`;

  static WPL_LIST = `${Endpoints.FACULTY_URL}?type=WPL`;

  static PROMOTIONAL_URL = `${Endpoints.BASE_URL}/promotional`;

  static IG_MEDIA_URL =
    "https://graph.instagram.com/me/media?fields=media_url,thumbnail_url,caption,timestamp,username,permalink&limit=15";

  static IG_ME_URL =
    "https://graph.instagram.com/me?fields=username,media_count&limit=5";

  static IG_TOKEN_REFRESH =
    "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=";
}
