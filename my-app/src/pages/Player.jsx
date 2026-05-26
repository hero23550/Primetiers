import { useParams } from "react-router-dom"
import { players } from "../data/players"

export default function Player() {
  const { id } = useParams()
  const player = players.find(p => p.id === id)

  if (!player) return <h2 style={{ padding: "30px" }}>Player not found</h2>

  return (
    <div style={{ padding: "30px" }}>
      <h1>{player.name}</h1>
      <p>Points: {player.points}</p>
      <p>Rank: #{players.sort((a,b)=>b.points-a.points).findIndex(p=>p.id===id)+1}</p>
    </div>
  )
}
