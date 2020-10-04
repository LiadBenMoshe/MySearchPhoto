import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: " Client-ID uJaVogMmRx7vdJOQLnSVHWvOJ2aOVBgaysQDS0yW_hU",
  },
});
