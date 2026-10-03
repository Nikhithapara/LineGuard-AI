export default function MetricCard({label,value,helper}){
  return <div className="card metric-card">
    <span className="metric-label">{label}</span>
    <strong className="metric-value">{value}</strong>
    <span className="metric-helper">{helper}</span>
  </div>
}
