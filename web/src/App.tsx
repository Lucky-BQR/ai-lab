import { useEffect, useState } from 'react'

interface Health {
  status: string
  service: string
  time: string
}

function App() {
  const [health, setHealth] = useState<Health | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/health')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json() as Promise<Health>
      })
      .then(setHealth)
      .catch((e: Error) => setError(e.message))
  }, [])

  return (
    <main>
      <h1>AI Lab</h1>
      {health && (
        <p>
          后端 <b>{health.service}</b> 状态：{health.status}（{new Date(health.time).toLocaleString()}）
        </p>
      )}
      {error && <p className="error">后端未连通：{error}（先启动 server）</p>}
      {!health && !error && <p>连接后端中…</p>}
    </main>
  )
}

export default App
