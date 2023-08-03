import axios from "axios"

export default async function getArtists() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "http://172.105.53.42:8005/artists",
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
// import getArtists from "../components/api-calls/artists"

// //example of how to call this function
// useEffect(() => {
//     const call=async () => {
//       const artists= await getArtists()
//       console.log(artists)
//     }
//     call()
//   }, [])
