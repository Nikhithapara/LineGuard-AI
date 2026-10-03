import { useState } from 'react'
import { Bot, ShieldAlert, Sparkles } from 'lucide-react'
import { generateTroubleshooting } from '../services/troubleshootingService'

export default function Troubleshoot(){
  const [query,setQuery]=useState('CNC spindle vibration above 7000 RPM')
  const [loading,setLoading]=useState(false)
  const [result,setResult]=useState(null)
  const [error,setError]=useState('')

  async function run(){
    if(query.trim().length<6){
      setError('Describe the equipment problem in a little more detail.')
      return
    }
    setError(''); setLoading(true); setResult(null)
    try{ setResult(await generateTroubleshooting(query)) }
    catch{ setError('Troubleshooting guidance could not be generated. Please retry.') }
    finally{ setLoading(false) }
  }

  return <div className="page-narrow">
    <div className="page-heading"><span className="eyebrow">AI-ASSISTED TROUBLESHOOTING</span>
    <h2>Find grounded next steps from similar incidents.</h2>
    <p>This local demo matches problem language to approved mock maintenance guidance and historical cases.</p></div>

    <div className="card assistant-card">
      <div className="assistant-title"><Bot size={22}/><strong>Describe the issue</strong></div>
      <textarea rows="4" value={query} onChange={e=>setQuery(e.target.value)}/>
      {error&&<div className="inline-error">{error}</div>}
      <button onClick={run} className="primary-btn" disabled={loading}><Sparkles size={17}/>{loading?'Analyzing...':'Generate guidance'}</button>
    </div>

    {loading&&<div className="card loading-state">Reviewing approved maintenance guidance and similar incidents...</div>}

    {result&&<div className="result-stack">
      <div className="card">
        <div className="result-header">
          <div><span className="eyebrow">MATCHED GUIDANCE</span><h3>{result.title}</h3></div>
          <span className="badge success">{result.confidence} confidence</span>
        </div>
        <p>{result.summary}</p>
        <ol className="steps-list">{result.steps.map(step=><li key={step}>{step}</li>)}</ol>
        <div className="source-line">Source: {result.source}</div>
      </div>

      <div className="card safety-result"><ShieldAlert size={22}/><div><strong>Safety boundary</strong><p>{result.disclaimer}</p></div></div>

      <div className="card">
        <span className="eyebrow">SIMILAR HISTORICAL INCIDENTS</span><h3>Related cases</h3>
        {result.similar.length?result.similar.map(i=><div className="similar-item" key={i.id}>
          <div><strong>{i.id} · {i.equipment}</strong><p>{i.description}</p></div>
          <span className="badge neutral">{i.status}</span>
        </div>):<div className="empty-state">No close historical matches were found.</div>}
      </div>
    </div>}
  </div>
}
