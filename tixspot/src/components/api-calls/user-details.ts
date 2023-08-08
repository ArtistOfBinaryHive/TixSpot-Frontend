import axios from "axios"

export default async function getUserDetails(token: string) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/user/details",
    headers: { authorization: `bearer ${token}` },
  }
  try {
    const response = await axios.request(config)
    return response.data
  } catch (error) {
    return error
  }
}
