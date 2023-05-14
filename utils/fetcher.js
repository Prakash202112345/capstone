import axios from "axios"

export const getSingleStudent = async (data) => {
  return await axios.get(process.env.NEXT_PUBLIC_BASE_URL + '/api/getSingleStudent', {
    headers: {
      "Content-Type": "application/json",
    },
    params: {
      id: data.id
    }

  }).then((response) => {
    return response
  }).catch((error) => {
    return error
  })
}