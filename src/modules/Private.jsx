import { useEffect, useState } from "react"
import axios from "axios"
import AuthService from "../services/auth.service"

const baseUrl = "http://localhost:8080"

export default function Private() {

  const [items, setItems] = useState("loading...")

  useEffect(() => {

    if (!AuthService.getCurrentUser()) {
      //window.location.href = "/login"
      console.log("not logged in")
      setItems("not logged in")
      return
    }
    console.log("calling private api endpoint")
    //get the JWT token
    const token = JSON.parse(localStorage.getItem("user")).token
    //create a header with the token
    const header = { headers: { Authorization: `Bearer ${token}` } }
    // call the API with the token in the header; {} is the empty request body
    axios.get(baseUrl + "/items/", {}, header).then((res) => {
      console.log("response from private api endpoint: " + res)
      setItems(res.data)
    })
  }, [])

  return (
    <>
      <h1>Private</h1>
      { items === "not logged in" && <p>{items}</p> }
      { items === "loading..." && <p>{items}</p> }
      { Array.isArray(items) &&
        <ul>
          { items.map((item, index) =>
            <li key={index}>{item.name}</li> )
          }
        </ul>
      }
    </>
  )
}