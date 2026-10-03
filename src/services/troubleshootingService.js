import { troubleshootingKnowledge } from '../data/knowledgeBase'
import { getIncidents } from './incidentService'

export async function generateTroubleshooting(query){
  await new Promise(r=>setTimeout(r,800))
  const q=query.toLowerCase()
  const match=troubleshootingKnowledge.find(item=>item.keywords.some(k=>q.includes(k))) || troubleshootingKnowledge[0]
  const similar=getIncidents().filter(i=>{
    const text=`${i.equipment} ${i.category} ${i.description}`.toLowerCase()
    return match.keywords.some(k=>text.includes(k))
  }).slice(0,3)
  return {
    ...match,
    similar,
    confidence: similar.length>=2?'High':'Medium',
    disclaimer:'Decision-support only. Follow approved maintenance procedures, lockout/tagout requirements, and site safety rules. Escalate to a qualified technician when required.'
  }
}
