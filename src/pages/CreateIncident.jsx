import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { equipment } from '../data/equipment'
import { saveIncident } from '../services/incidentService'

const initial={equipment:'',category:'',severity:'',description:'',reporter:''}

export default function CreateIncident(){
  const [form,setForm]=useState(initial)
  const [errors,setErrors]=useState({})
  const [saved,setSaved]=useState(null)

  function validate(){
    const e={}
    if(!form.equipment)e.equipment='Select equipment.'
    if(!form.category.trim())e.category='Enter an incident category.'
    if(!form.severity)e.severity='Select severity.'
    if(form.description.trim().length<15)e.description='Provide at least 15 characters of detail.'
    if(!form.reporter.trim())e.reporter='Enter the reporter name.'
    setErrors(e)
    return Object.keys(e).length===0
  }

  function submit(ev){
    ev.preventDefault()
    setSaved(null)
    if(!validate())return
    const record=saveIncident(form)
    setSaved(record); setForm(initial); setErrors({})
  }

  function field(name,value){
    setForm(p=>({...p,[name]:value}))
    setErrors(p=>({...p,[name]:undefined}))
  }

  return <div className="page-narrow">
    <div className="page-heading"><span className="eyebrow">INCIDENT CAPTURE</span><h2>Create a manufacturing incident</h2>
    <p>Capture enough context for technicians to triage the issue without rework.</p></div>

    {saved&&<div className="success-banner"><CheckCircle2 size={20}/> Incident {saved.id} created successfully.</div>}

    <form className="card form-card" onSubmit={submit}>
      <div className="form-grid">
        <label>Equipment
          <select value={form.equipment} onChange={e=>field('equipment',e.target.value)}>
            <option value="">Select equipment</option>{equipment.map(x=><option key={x.id}>{x.name}</option>)}
          </select>{errors.equipment&&<small className="error">{errors.equipment}</small>}
        </label>
        <label>Category
          <input value={form.category} onChange={e=>field('category',e.target.value)} placeholder="e.g., Vibration, Sensor, Motor"/>
          {errors.category&&<small className="error">{errors.category}</small>}
        </label>
        <label>Severity
          <select value={form.severity} onChange={e=>field('severity',e.target.value)}>
            <option value="">Select severity</option><option>Low</option><option>Medium</option><option>High</option><option>Critical</option>
          </select>{errors.severity&&<small className="error">{errors.severity}</small>}
        </label>
        <label>Reporter
          <input value={form.reporter} onChange={e=>field('reporter',e.target.value)} placeholder="Name or badge ID"/>
          {errors.reporter&&<small className="error">{errors.reporter}</small>}
        </label>
      </div>
      <label>Problem description
        <textarea rows="6" value={form.description} onChange={e=>field('description',e.target.value)} placeholder="Describe symptoms, timing, alarms, operating conditions, and what changed..."/>
        {errors.description&&<small className="error">{errors.description}</small>}
      </label>
      <div className="form-actions"><span className="muted">Required fields are validated before submission.</span>
      <button className="primary-btn" type="submit">Create incident</button></div>
    </form>
  </div>
}
