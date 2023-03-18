import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5dae94da36f4235a8391fdd90f418c5",
  },
});
