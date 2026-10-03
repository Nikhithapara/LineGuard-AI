import { equipment } from '../data/equipment'
export default function Equipment(){
  return <>
    <div className="page-heading"><span className="eyebrow">ASSET OVERVIEW</span><h2>Equipment health</h2>
    <p>Review current status and last-service information for key production assets.</p></div>
    <div className="equipment-grid">{equipment.map(x=><div className="card equipment-card" key={x.id}>
      <div className="equipment-top"><div><span className="eyebrow">{x.area}</span><h3>{x.name}</h3></div>
      <span className={`badge ${x.health==='Good'?'success':x.health==='Attention'?'danger':'warning'}`}>{x.health}</span></div>
      <p>{x.type}</p><div className="equipment-meta"><span>Last service</span><strong>{x.lastService}</strong></div>
    </div>)}</div>
  </>
}
