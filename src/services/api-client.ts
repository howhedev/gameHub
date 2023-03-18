import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "688315b2a412444baf2b71d441dd1b06",
  },
});
