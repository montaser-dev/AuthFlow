import { useEffect, useState } from "react"
import axiosClient from '../axios-client';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, [])

  const getUsers= () => {
    axiosClient.get('/users')
   }
  return (
    <div>
      Users
      </div>
  )
}
