'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Search, PawPrint, Sparkles, Shield, Swords, BookOpen, ChevronRight, Leaf, Heart, Menu } from 'lucide-react';
import { pets } from '../data/pets';

export default function Home() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(pets[0]);
  const [tab, setTab] = useState('attributes');
  const filtered = useMemo(() => pets.filter(p => `${p.name} ${p.type} ${p.race}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return (
    <main className="shell">
      <header className="topbar">
        <div className="brand"><div className="brand-mark"><PawPrint size={23}/></div><div><div className="brand-title">PET FOREST <span>GLOBAL</span></div><div className="brand-sub">COMMUNITY PET ENCYCLOPEDIA</div></div></div>
        <div className="top-links"><span className="online-dot"/> COMMUNITY DATABASE <span className="version">BETA 0.1</span></div>
        <button className="menu-button" aria-label="Menu"><Menu size={20}/></button>
      </header>

      <section className="hero">
        <div className="hero-copy"><div className="eyebrow"><Sparkles size={14}/> THE PLAYER'S FIELD GUIDE</div><h1>Discover your<br/><em>perfect companion.</em></h1><p>Explore pet attributes, combat stats, and skills to plan your journey through Pet Forest.</p></div>
        <div className="hero-orbit"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="hero-seal"><PawPrint size={42}/></div><span className="spark spark-a">✦</span><span className="spark spark-b">✧</span></div>
      </section>

      <div className="section-heading"><div><div className="eyebrow">FIELD GUIDE / DATABASE</div><h2>Pet Directory</h2></div><div className="pet-count"><strong>{pets.length.toString().padStart(2,'0')}</strong><span> PETS DOCUMENTED</span></div></div>

      <section className="directory-layout">
        <aside className="sidebar panel">
          <div className="side-title"><BookOpen size={17}/> PET INDEX</div>
          <label className="search-box"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search pets..."/></label>
          <div className="filter-label">COLLECTION <span>({filtered.length})</span></div>
          <div className="pet-list">
            {filtered.map(p=><button key={p.id} onClick={()=>{setSelected(p);setTab('attributes')}} className={`pet-list-item ${selected.id===p.id?'active':''}`}><span className="mini-paw"><PawPrint size={15}/></span><span className="pet-list-name">{p.name}<small>{p.type}</small></span><ChevronRight size={16}/></button>)}
            {filtered.length===0&&<div className="empty">No pets match that search.</div>}
          </div>
          <div className="sidebar-note"><Leaf size={16}/><span>New discoveries are added as the community documents them.</span></div>
        </aside>

        <section className="profile panel">
          <div className="profile-banner"><span>COMPANION RECORD</span></div>
          <div className="profile-main">
            <div className="portrait-wrap"><div className="portrait-frame"><Image src={selected.image} alt={selected.name} fill sizes="(max-width: 700px) 80vw, 280px" className="pet-image" priority/></div><div className="portrait-caption"><span className="rarity-star">✦ ✦ ✦</span><span>{selected.rarity} COMPANION</span></div></div>
            <div className="identity"><div className="type-tag"><Leaf size={13}/>{selected.type}</div><h3>{selected.name}</h3><div className="identity-rule"/><div className="quick-facts"><div><span>MAX LEVEL</span><strong>{selected.maxLevel}</strong></div><div><span>RACE</span><strong>{selected.race}</strong></div><div><span>INTIMACY</span><strong className="hearts">{'♥'.repeat(selected.intimacy)}</strong></div></div><div className="profile-hint"><Sparkles size={15}/> Stats recorded at maximum level</div></div>
          </div>
          <div className="tabs" role="tablist"><button className={tab==='attributes'?'selected':''} onClick={()=>setTab('attributes')}><Shield size={16}/> ATTRIBUTES</button><button className={tab==='skills'?'selected':''} onClick={()=>setTab('skills')}><Sparkles size={16}/> SKILLS</button><button className={tab==='combat'?'selected':''} onClick={()=>setTab('combat')}><Swords size={16}/> COMBAT DATA</button></div>
          {tab==='attributes'&&<div className="tab-content"><div className="content-title"><div><span className="eyebrow">GROWTH PROFILE</span><h4>Base Attributes</h4></div><span className="level-pill">LV. {selected.maxLevel}</span></div><div className="attribute-table"><div className="table-head"><span>ATTRIBUTE</span><span>BASE VALUE</span><span>GROWTH</span></div>{selected.attributes.map(a=><div className="attribute-row" key={a.name}><span className="attribute-name"><b>{a.name}</b>{a.label}</span><strong>{a.value.toLocaleString()}</strong><span className="growth-value">{a.growth.toLocaleString()}</span></div>)}</div><p className="table-footnote">Base values and growth values are shown separately, as displayed in the in-game Pet Info panel.</p></div>}
          {tab==='skills'&&<div className="tab-content"><div className="content-title"><div><span className="eyebrow">ABILITY LOADOUT</span><h4>Pet Skills</h4></div><span className="level-pill">{selected.skills.length} SKILLS</span></div><div className="skill-list">{selected.skills.filter(s=>s.innate).map(s=><div className="skill-row" key={s.name}><div className="skill-icon"><Image src={s.icon} alt={`${s.name} icon`} width={42} height={42}/></div><div className="skill-info"><strong>{s.name}</strong><span>Level {s.level}</span><p className="skill-description">{s.description || 'Description not provided yet.'}</p></div><div className="skill-level">LV. {s.level}</div></div>)}</div><p className="table-footnote">Only innate skills are listed here. Additional and social skills are excluded.</p></div>}
          {tab==='combat'&&<div className="tab-content"><div className="content-title"><div><span className="eyebrow">BATTLE PROFILE</span><h4>Combat Statistics</h4></div><span className="level-pill">MAX LEVEL</span></div><div className="combat-grid">{selected.combat.map(c=><div className="combat-stat" key={c.name}><span>{c.name}</span><strong>{c.value}</strong></div>)}</div></div>}
          <div className="record-footer"><span><Heart size={14}/> COMMUNITY-MAINTAINED RECORD</span><span>MORE PETS COMING SOON</span></div>
        </section>
      </section>
      <footer className="footer"><div className="footer-brand">PET FOREST <b>GLOBAL</b> / PETDEX</div><p>Fan-made reference project. Not affiliated with the game developers.</p><span>BUILT FOR THE COMMUNITY ✦</span></footer>
    </main>
  );
}
