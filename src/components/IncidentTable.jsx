function Badge({children,tone}){return <span className={`badge ${tone}`}>{children}</span>}

export default function IncidentTable({incidents}){
  if(!incidents.length) return <div className="empty-state">No incidents found.</div>
  const sev={Critical:'danger',High:'warning',Medium:'info',Low:'neutral'}
  const stat={Open:'danger',Investigating:'warning',Resolved:'success'}
  return <div className="table-wrap"><table>
    <thead><tr><th>ID</th><th>Equipment</th><th>Issue</th><th>Severity</th><th>Status</th><th>Reported</th></tr></thead>
    <tbody>{incidents.map(i=><tr key={i.id}>
      <td className="mono">{i.id}</td><td><strong>{i.equipment}</strong></td><td>{i.description}</td>
      <td><Badge tone={sev[i.severity]}>{i.severity}</Badge></td>
      <td><Badge tone={stat[i.status]}>{i.status}</Badge></td><td>{i.reportedDate}</td>
    </tr>)}</tbody>
  </table></div>
}
