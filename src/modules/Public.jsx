import { useEffect, useState } from "react"
import axios from "axios"

const baseUrl = "http://localhost:8080"

export default function Public() {

  const [data, setData] = useState("loading...")

  useEffect(() => {
    console.log("calling public api endpoint")
    axios.get(baseUrl + "/public").then((res) => {
      console.log("response from public api endpoint: " + res)
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <h1>Public</h1>
      <p>{data}</p>
    </div>
  )
}