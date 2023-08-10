import axios from "axios"

export async function googleAuth(token: string) {
  let data = new FormData()
  data.append("token", token)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/auth/google",
    headers: {},
    data: data,
    withCredentials: true,
  }

  try {
    const response = await axios.request(config)
    return response.data
  } catch (error) {
    return error
  }
}
