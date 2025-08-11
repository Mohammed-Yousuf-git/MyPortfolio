import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  });

  useEffect(() => {
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme]);

  const projects = [
    {id:'lung', title:'Multimodal Lung Cancer Detection', subtitle:'X-rays + CT | Explainable AI', desc:'Ensemble multimodal pipeline using SHAP & Grad-CAM', tech:['PyTorch','CNNs','SHAP']},
    {id:'billing', title:'Medical Billing Automation', subtitle:'Charge entry & denial management', desc:'Automated workflows for billing', tech:['Python','NLP']},
    {id:'aqi', title:'Air Quality Intelligence Suite', subtitle:'AQI forecasting', desc:'Time-series models for AQI', tech:['LSTM','XGBoost']},
    {id:'halalflix', title:'Halalflix', subtitle:'Streaming + social', desc:'MVP for halal video community', tech:['React','Firebase']}
  ];

  return (
    <div className={theme==='dark'?'bg-slate-900 text-white min-h-screen':'bg-white text-slate-900 min-h-screen'}>
      <div className="max-w-5xl mx-auto p-8">
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center font-bold">MY</div>
            <div>
              <h1 className="text-xl font-semibold">Mohammed Yousuf</h1>
              <p className="text-sm opacity-70">AI/ML Engineer • Medical Imaging • IoT</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={()=>setTheme(theme==='dark'?'light':'dark')} className="px-3 py-2 rounded-md border">{theme==='dark'?'Light':'Dark'}</button>
            <a href="#contact" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Contact</a>
          </div>
        </header>

        <section className="grid md:grid-cols-2 gap-8 items-center my-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-400">I Build Intelligent Solutions That Work in the Real World</h2>
            <p className="mt-4 opacity-80">4th-year AI Engineering student building ML systems across medical imaging, healthcare automation, IoT and web apps.</p>
            <div className="mt-6 flex gap-3">
              <a href="#projects" className="px-4 py-2 rounded-md bg-indigo-600 text-white">View Projects</a>
            </div>
          </div>
          <motion.div whileHover={{scale:1.02}} className="rounded-2xl p-6 bg-white/5 border">
            <div className="h-56 rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 flex items-center justify-center text-white font-semibold">Interactive Visual</div>
            <p className="mt-4 text-sm opacity-80">Placeholder — replace with WebGL or Canvas.</p>
          </motion.div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
          <div className="space-y-4">
            {projects.map(p=>(
              <article key={p.id} className="p-4 rounded-xl border flex gap-4">
                <div className="w-24 h-16 rounded bg-slate-800/20 flex items-center justify-center">VIS</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{p.title}</h3>
                  <div className="text-sm opacity-80">{p.subtitle}</div>
                  <p className="mt-2 text-sm opacity-75">{p.desc}</p>
                  <div className="mt-2 flex gap-2 flex-wrap">{p.tech.map(t=><span key={t} className="text-xs px-2 py-1 rounded border">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="text-center opacity-70 py-6">© {new Date().getFullYear()} Mohammed Yousuf</footer>
      </div>
    </div>
  );
}
