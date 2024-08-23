import { useState } from "react"
import axios from "axios"

const useFetch = (path) => {
    const [response, setResponse] = useState(null)
    const BASE_URL = "https://users-crud.academlo.tech"

    const getData = () => {
      const url = `${BASE_URL}${path}`
      axios.get(url)
      .then((res) => setResponse(res.data))
      .catch((error) => console.error(error))
    }

    const postData = (data) => {
      const url = `${BASE_URL}${path}`
      console.log(url)
      axios.post(url, data)
      .then((res) => {
        console.log(res.data)
        setResponse([response, res.data])
      })
      .catch((error) => console.log(error))
    }

    const deleteData = (id) => {
      const url = `${BASE_URL}${path}${id}/`
      axios.delete(url)
      .then((res) => {
        console.log(res.data)
        setResponse(response.filter((user) => 
          user.id !== id ))
      })
      .catch((error) => console.error(error))
    }

    const patchData = (id, data) => {
      const url = `${BASE_URL}${path}${id}/`
      axios.patch(url, data)
      .then((res) => {
        console.log(res.data)
        setResponse(response.map((user) => (user.id === id ? res.data : user)))
      })
      .catch((error) => error.console(error))
    }
    

    return [getData, response, postData, deleteData, patchData]
}

export default useFetch
