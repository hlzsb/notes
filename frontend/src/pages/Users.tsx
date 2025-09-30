import React, { useEffect, useState } from 'react'
import { getUsers } from '../services/userService'
import type { User } from '../types/User'

export default function Users(){
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getUsers().then(setUsers).catch(e => setError(e.message))
  }, [])

  return (
    <main style={{ padding: 20 }}>
      <h2>Users</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {users.length === 0 && <li>No users - In the future there will be some</li>}
        {users.map(u => <li key={u.id}>{u.name} — {u.email}</li>)}
      </ul>
    </main>
  )
}
