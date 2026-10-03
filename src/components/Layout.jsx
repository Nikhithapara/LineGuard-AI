import { NavLink } from 'react-router-dom'
import { Factory, LayoutDashboard, PlusCircle, Wrench, Boxes, Info, ShieldCheck } from 'lucide-react'

const links=[
  {to:'/',label:'Dashboard',icon:LayoutDashboard},
  {to:'/incidents/new',label:'New Incident',icon:PlusCircle},
  {to:'/troubleshoot',label:'AI Troubleshooting',icon:Wrench},
  {to:'/equipment',label:'Equipment',icon:Boxes},
  {to:'/about',label:'About',icon:Info}
]

export default function Layout({children}){
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><Factory size={24}/></div>
        <div><strong>LineGuard AI</strong><span>Manufacturing Support</span></div>
      </div>
      <nav>
        {links.map(({to,label,icon:Icon})=>
          <NavLink key={to} to={to} end={to==='/'} className={({isActive})=>isActive?'nav-link active':'nav-link'}>
            <Icon size={18}/>{label}
          </NavLink>
        )}
      </nav>
      <div className="safety-card">
        <ShieldCheck size={20}/>
        <div><strong>Safety first</strong><p>AI guidance supports—not replaces—approved maintenance procedures.</p></div>
      </div>
    </aside>
    <main className="main">
      <header className="topbar">
        <div><span className="eyebrow">OPERATIONS INTELLIGENCE</span><h1>LineGuard AI</h1></div>
        <div className="status-pill"><span></span> Local demo online</div>
      </header>
      <section className="content">{children}</section>
    </main>
  </div>
}
