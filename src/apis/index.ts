import axios from "axios";

const PROXY = "https://62fdf3fea85c52ee482c6229.mockapi.io/api";

export async function getData(url: string) {
  try {
    const res = await axios.get(`${PROXY}/${url}`);
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export async function postData(url: string, props: object) {
  try {
    const res = await axios.post(`${PROXY}/${url}`, {
      ...props,
    });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export async function putData(url: string, props: object) {
  try {
    const res = await axios.put(`${PROXY}/${url}`, {
      ...props,
    });
    return res;
  } catch (error) {
    console.log("error", error);
  }
}

export async function deleteData(url: string) {
  await axios.delete(`${PROXY}/${url}`);
}
