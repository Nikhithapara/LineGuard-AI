import { initialIncidents } from '../data/incidents'
const STORAGE_KEY='lineguard-incidents'

export function getIncidents(){
  const stored=localStorage.getItem(STORAGE_KEY)
  if(!stored){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(initialIncidents))
    return initialIncidents
  }
  try{return JSON.parse(stored)}catch{return initialIncidents}
}

export function saveIncident(incident){
  const incidents=getIncidents()
  const record={...incident,id:`INC-${1050+incidents.length}`,status:'Open',reportedDate:new Date().toISOString().slice(0,10)}
  const updated=[record,...incidents]
  localStorage.setItem(STORAGE_KEY,JSON.stringify(updated))
  return record
}
