import { Navbar } from './Navbar'

export function Header({ activeTab, setActiveTab }) {
  return (
    <header className="site-header">
      <div className="logo-area">
        <span className="brand-title">ORALYNK</span>
        <span className="brand-subtitle">Clinica Ruedas Dental System</span>
      </div>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
    </header>
  )
}