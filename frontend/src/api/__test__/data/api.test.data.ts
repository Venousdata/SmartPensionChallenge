export const expectedPostParams = {
  order: "asc",
  sortBy: "view",
};

export const postBodyData = [
  { path: "/home", view: 78, uniqueView: 23 },
  { path: "/help_page/1", view: 80, uniqueView: 23 },
  { path: "/about", view: 81, uniqueView: 21 },
  { path: "/index", view: 82, uniqueView: 23 },
  { path: "/contact", view: 89, uniqueView: 23 },
  { path: "/about/2", view: 90, uniqueView: 22 },
];

export const postBodyResponseData = [
  "/webpageviews",
  postBodyData,
  {
    baseURL: "http://localhost:8080/",
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:3000",
      "Content-Type": "application/json",
    },
  },
];
