import axios from "axios";

const API = axios
  .get("https://codingapple1.github.io/shop/data3.json")
  .then((response) => {
    console.log(response.data);
  })
  .catch(() => {
    console.log("실패ㅜㅜ");
  });

export default API;
