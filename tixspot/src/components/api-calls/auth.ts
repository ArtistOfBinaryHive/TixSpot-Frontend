import axios from "axios"

export async function login(email: string, password: string) {
  let data = new FormData()
  data.append("email", email)
  data.append("password", password)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/login",
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

export async function register(email: string, password: string) {
  let data = new FormData()
  data.append("email", email)
  data.append("password", password)
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/register",
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
