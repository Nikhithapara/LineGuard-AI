export default function About(){
  return <div className="page-narrow">
    <div className="page-heading"><span className="eyebrow">ABOUT THE PROJECT</span><h2>LineGuard AI</h2>
    <p>A manufacturing incident and troubleshooting assistant built as a second AI-assisted capstone application.</p></div>
    <div className="card prose-card">
      <h3>Purpose</h3><p>LineGuard AI helps operators, maintenance technicians, quality engineers, and supervisors capture incidents, review similar history, and access grounded troubleshooting guidance more quickly.</p>
      <h3>Workshop architecture</h3><p>The local version is built with React and Vite and uses browser localStorage plus structured mock maintenance guidance. It requires no paid API or external database, which makes the demo reliable and repeatable.</p>
      <h3>Production roadmap</h3><p>A production version would add a backend API, PostgreSQL, authentication and role-based access, document retrieval over approved maintenance manuals, audit logging, and cloud monitoring.</p>
    </div>
  </div>
}
