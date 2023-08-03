import axios from "axios"

export default async function getEvents() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/events/getall",
    headers: {},
  }

  try {
    const response = await axios.request(config)
    return response.data
  } catch (error) {
    return error
  }
}

// //import like this
// import getEvents from "../components/api-calls/events"

// //example of how to call this function
// useEffect(() => {
//     const call=async () => {
//       const events= await getEvents()
//       console.log(events)
//     }
//     call()
//   }, [])
