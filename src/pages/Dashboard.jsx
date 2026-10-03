import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, ArrowRight, Search } from 'lucide-react'
import MetricCard from '../components/MetricCard'
import IncidentTable from '../components/IncidentTable'
import { getIncidents } from '../services/incidentService'

export default function Dashboard(){
  const [query,setQuery]=useState('')
  const incidents=getIncidents()
  const filtered=useMemo(()=>{
    const q=query.toLowerCase()
    return incidents.filter(i=>`${i.id} ${i.equipment} ${i.category} ${i.description} ${i.status}`.toLowerCase().includes(q))
  },[incidents,query])
  const counts={
    total:incidents.length,
    open:incidents.filter(i=>i.status==='Open').length,
    critical:incidents.filter(i=>i.severity==='Critical').length,
    resolved:incidents.filter(i=>i.status==='Resolved').length
  }
  return <>
    <div className="hero">
      <div><span className="eyebrow">SHIFT OVERVIEW</span><h2>See risk early. Resolve incidents faster.</h2>
      <p>Track equipment issues, surface similar history, and give technicians grounded troubleshooting guidance.</p></div>
      <Link className="primary-btn" to="/incidents/new">Create incident <ArrowRight size={18}/></Link>
    </div>
    <div className="metrics-grid">
      <MetricCard label="Total incidents" value={counts.total} helper="Current local dataset"/>
      <MetricCard label="Open incidents" value={counts.open} helper="Require action"/>
      <MetricCard label="Critical" value={counts.critical} helper="Highest priority"/>
      <MetricCard label="Resolved" value={counts.resolved} helper="Closed successfully"/>
    </div>
    <div className="grid-two">
      <div className="card">
        <div className="section-header">
          <div><span className="eyebrow">RECENT INCIDENTS</span><h3>Operations queue</h3></div>
          <div className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search incidents..."/></div>
        </div>
        <IncidentTable incidents={filtered.slice(0,6)}/>
      </div>
      <div className="card attention-card">
        <div className="attention-icon"><AlertTriangle size={22}/></div>
        <span className="eyebrow">ATTENTION</span><h3>CNC Mill 07 vibration</h3>
        <p>Critical vibration was reported during spindle ramp-up. Review similar cases before increasing speed.</p>
        <Link className="text-link" to="/troubleshoot">Open AI troubleshooting <ArrowRight size={16}/></Link>
      </div>
    </div>
  </>
}
