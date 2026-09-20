'use client'

import { useEffect, useState } from 'react'
import {
  AlertTriangle,
  ArrowRight,
  Bell,
  BookOpen,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileText,
  Flame,
  Globe2,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  Menu,
  MessageSquare,
  Moon,
  MoreHorizontal,
  Newspaper,
  PhoneCall,
  Search,
  ShieldCheck,
  Siren,
  Sun,
  ThumbsUp,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

type Theme = 'light' | 'dark'

const projects = [
  { name: 'Isiolo–Mandera Development Corridor', status: 'Active construction', location: 'Isiolo → Mandera', budget: 'KSh 18.6B', progress: 42, color: 'green' },
  { name: 'Nairobi River Regeneration', status: 'Community review', location: 'Nairobi County', budget: 'KSh 4.3B', progress: 68, color: 'amber' },
  { name: 'Mombasa Water Resilience Programme', status: 'Procurement', location: 'Mombasa County', budget: 'KSh 2.1B', progress: 18, color: 'blue' },
]

const resources = [
  { icon: HeartHandshake, name: 'Huduma Centre — GPO', type: 'Essential services', meta: 'Mon–Fri · 8:00–17:00', color: 'green' },
  { icon: Flame, name: 'Nairobi Fire Station', type: 'Emergency response', meta: 'Open 24 hours', color: 'red' },
  { icon: Landmark, name: 'Ajira Digital Hub', type: 'Youth & digital work', meta: 'Mon–Sat · 8:00–18:00', color: 'purple' },
]

export default function Page() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mobileNav, setMobileNav] = useState(false)
  const [activeTab, setActiveTab] = useState('Overview')
  const [upvoted, setUpvoted] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const [reportSent, setReportSent] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <div className="flex items-center gap-3">
            <button className="mr-1 rounded-lg p-2 lg:hidden" onClick={() => setMobileNav(!mobileNav)} aria-label="Toggle navigation"><Menu className="size-5" /></button>
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm"><ShieldCheck className="size-5" /></div>
            <div><div className="font-display text-[17px] font-bold tracking-tight">Civic<span className="text-primary">Lens</span></div><div className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:block">See. Question. Act.</div></div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {['Overview', 'Projects', 'Safety & Response', 'Resources'].map((item) => <button key={item} onClick={() => setActiveTab(item)} className={activeTab === item ? 'text-primary' : 'text-muted-foreground transition-colors hover:text-foreground'}>{item}</button>)}
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm font-medium sm:flex"><Globe2 className="size-4 text-muted-foreground" /> EN <ChevronDown className="size-3.5 text-muted-foreground" /></button>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Toggle theme">{theme === 'light' ? <Moon className="size-[18px]" /> : <Sun className="size-[18px]" />}</button>
            <button className="relative rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Notifications"><Bell className="size-[18px]" /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" /></button>
            <div className="ml-1 hidden size-9 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-900 sm:flex">AK</div>
          </div>
        </div>
      </header>

      {mobileNav && <div className="fixed inset-0 z-30 bg-background p-6 pt-24 lg:hidden"><button className="absolute right-5 top-5 rounded-lg p-2" onClick={() => setMobileNav(false)} aria-label="Close navigation"><X /></button><nav className="flex flex-col gap-6 text-lg font-semibold">{['Overview', 'Projects', 'Safety & Response', 'Resources'].map(item => <button className="text-left" key={item} onClick={() => { setActiveTab(item); setMobileNav(false) }}>{item}</button>)}</nav></div>}

      <main className="mx-auto max-w-[1440px] px-5 pb-16 pt-8 lg:px-10 lg:pt-12">
        <section className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-primary"><span className="size-2 rounded-full bg-primary" /> Live public brief</div><h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">What&apos;s happening<br className="hidden sm:block" /> in our communities.</h1><p className="mt-4 max-w-xl text-base leading-7 text-muted-foreground">A clearer view of public projects, safety response, and the resources available to you — built for participation, not just observation.</p></div>
          <button onClick={() => setReportOpen(true)} className="flex w-fit items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[0_8px_24px_-10px] shadow-primary transition-transform hover:-translate-y-0.5"><Siren className="size-4" /> Report an issue <ArrowRight className="size-4" /></button>
        </section>

        <div className="mb-8 flex gap-1 overflow-x-auto border-b border-border text-sm font-semibold"><button className="whitespace-nowrap border-b-2 border-primary px-4 pb-3 text-primary">Today&apos;s brief</button><button className="whitespace-nowrap px-4 pb-3 text-muted-foreground hover:text-foreground">Trending projects</button><button className="whitespace-nowrap px-4 pb-3 text-muted-foreground hover:text-foreground">Community pulse</button></div>

        <section className="grid gap-5 xl:grid-cols-[1.45fr_0.85fr]">
          <article className="group relative min-h-[370px] overflow-hidden rounded-2xl bg-[#12382e] text-white shadow-sm"><img src="/ndio-road.png" alt="Road construction in northern Kenya" className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#09251f] via-[#09251f]/35 to-transparent" /><div className="relative flex min-h-[370px] flex-col justify-between p-6 sm:p-8"><div className="flex items-center justify-between"><span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold backdrop-blur">Featured project</span><span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-100"><span className="size-2 animate-pulse rounded-full bg-emerald-300" /> Updated 14 min ago</span></div><div><div className="mb-3 flex items-center gap-2 text-xs font-semibold text-emerald-200"><MapPin className="size-3.5" /> Northern Kenya · Transport</div><h2 className="max-w-xl font-display text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">The road that will connect Isiolo to Mandera.</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/75">Following the proposed corridor from Isiolo, through Modogashe and Wajir, to El-Wak and Mandera. Here&apos;s what the public record says so far.</p><div className="mt-6 flex flex-wrap items-center gap-3"><button className="rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-[#12382e]">Explore project</button><button className="flex items-center gap-2 rounded-lg border border-white/25 px-4 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"><MessageSquare className="size-4" /> 248 conversations</button></div></div></div></article>

          <div className="flex flex-col rounded-2xl border border-border bg-card p-6"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Community signals</p><h3 className="mt-1 font-display text-xl font-bold">The pulse this week</h3></div><TrendingUp className="size-5 text-primary" /></div><div className="mb-6 flex items-end gap-3"><span className="font-display text-5xl font-bold tracking-tight">72%</span><span className="mb-1.5 text-sm font-semibold text-primary">↑ 8.4% this month</span></div><div className="mb-6 flex h-24 items-end gap-2">{[35, 48, 42, 65, 55, 76, 68, 86, 72, 92, 78, 96].map((height, i) => <div key={i} className="flex-1 rounded-t-sm bg-primary/15" style={{ height: `${height}%` }}><div className="h-full rounded-t-sm bg-primary" style={{ opacity: i > 8 ? 1 : 0.35 + i / 24 }} /></div>)}</div><div className="space-y-3 border-t border-border pt-4 text-sm"><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><span className="size-2 rounded-full bg-primary" /> Projects being followed</span><span className="font-bold">1,284</span></div><div className="flex items-center justify-between"><span className="flex items-center gap-2 text-muted-foreground"><span className="size-2 rounded-full bg-amber-400" /> Issues resolved</span><span className="font-bold">86%</span></div></div></div>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Public money, public record</p><h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Projects worth watching</h2></div><button className="hidden items-center gap-1 text-sm font-bold text-primary sm:flex">View all <ArrowRight className="size-4" /></button></div><div className="space-y-3">{projects.map(project => <div key={project.name} className="rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md sm:p-5"><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start"><div><div className="mb-2 flex flex-wrap items-center gap-2"><span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${project.color === 'green' ? 'bg-primary/10 text-primary' : project.color === 'amber' ? 'bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300' : 'bg-blue-100 text-blue-800 dark:bg-blue-400/15 dark:text-blue-300'}`}>{project.status}</span><span className="text-xs text-muted-foreground">{project.location}</span></div><h3 className="font-semibold">{project.name}</h3></div><button className="self-end rounded-lg p-1.5 text-muted-foreground hover:bg-muted sm:self-start"><MoreHorizontal className="size-5" /></button></div><div className="mt-5 flex items-center gap-4"><div className="h-2 flex-1 overflow-hidden rounded-full bg-muted"><div className="h-full rounded-full bg-primary" style={{ width: `${project.progress}%` }} /></div><span className="text-xs font-bold">{project.progress}%</span><span className="hidden text-xs text-muted-foreground sm:block">{project.budget}</span></div></div>)}</div></div>

          <aside><div className="mb-4 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Know where to go</p><h2 className="mt-1 font-display text-2xl font-bold tracking-tight">Nearby resources</h2></div><MapPin className="size-5 text-primary" /></div><div className="space-y-3">{resources.map(({ icon: Icon, ...resource }) => <div key={resource.name} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3.5"><div className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${resource.color === 'red' ? 'bg-red-100 text-red-700 dark:bg-red-400/15 dark:text-red-300' : resource.color === 'purple' ? 'bg-purple-100 text-purple-700 dark:bg-purple-400/15 dark:text-purple-300' : 'bg-primary/10 text-primary'}`}><Icon className="size-5" /></div><div className="min-w-0 flex-1"><h3 className="truncate text-sm font-semibold">{resource.name}</h3><p className="text-xs text-muted-foreground">{resource.type} · {resource.meta}</p></div><ArrowRight className="size-4 text-muted-foreground" /></div>)}</div><button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary/40 py-3 text-sm font-bold text-primary hover:bg-primary/5"><Search className="size-4" /> Find a service near you</button></aside>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-[#f5f0e7] p-6 dark:bg-[#28291f]"><Newspaper className="mb-8 size-6 text-amber-700 dark:text-amber-300" /><p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">In the news</p><h3 className="font-display text-xl font-bold leading-tight">What governments plan to build next.</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Read the public notices and media reports behind proposed projects.</p><button className="mt-5 flex items-center gap-2 text-sm font-bold text-foreground">Read the briefing <ArrowRight className="size-4" /></button></div><div className="rounded-2xl bg-primary p-6 text-primary-foreground"><FileText className="mb-8 size-6" /><p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary-foreground/70">Have your say</p><h3 className="font-display text-xl font-bold leading-tight">Public participation is open.</h3><p className="mt-2 text-sm leading-6 text-primary-foreground/75">Share your view on the Nairobi River regeneration plan before 30 September.</p><button className="mt-5 flex items-center gap-2 text-sm font-bold">Join the conversation <ArrowRight className="size-4" /></button></div><div className="rounded-2xl border border-border bg-card p-6"><AlertTriangle className="mb-8 size-6 text-red-600" /><p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Safety alert</p><h3 className="font-display text-xl font-bold leading-tight">Know what to do before help arrives.</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Simple, verified guidance for fire, flooding, and other emergencies.</p><button onClick={() => setReportOpen(true)} className="mt-5 flex items-center gap-2 text-sm font-bold">Open safety guide <ArrowRight className="size-4" /></button></div></section>

        <section className="mt-10 rounded-2xl border border-border bg-card p-5 sm:p-7"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><div className="flex items-start gap-4"><div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300"><Users className="size-5" /></div><div><h2 className="font-display text-xl font-bold">A platform for accountability</h2><p className="mt-1 max-w-2xl text-sm leading-6 text-muted-foreground">CivicLens is built to make information easier to find, questions easier to ask, and responses easier to track.</p></div></div><button className="flex items-center gap-2 whitespace-nowrap text-sm font-bold text-primary">How it works <CircleHelp className="size-4" /></button></div></section>
      </main>

      {reportOpen && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 backdrop-blur-sm sm:items-center sm:p-4"><div className="w-full max-w-lg rounded-t-2xl bg-background p-6 shadow-2xl sm:rounded-2xl"><div className="mb-6 flex items-start justify-between"><div><div className="mb-2 inline-flex rounded-lg bg-red-100 p-2 text-red-700 dark:bg-red-400/15 dark:text-red-300"><PhoneCall className="size-5" /></div><h2 className="font-display text-2xl font-bold">Report an issue</h2><p className="mt-1 text-sm text-muted-foreground">Your report will be routed to the right response team.</p></div><button onClick={() => { setReportOpen(false); setReportSent(false) }} className="rounded-lg p-2 hover:bg-muted"><X className="size-5" /></button></div>{reportSent ? <div className="rounded-xl border border-primary/20 bg-primary/5 p-5 text-center"><div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check /></div><h3 className="font-display text-lg font-bold">Case opened: CL-28491</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">A response team has been notified. You can track progress from your CivicLens activity feed.</p><button onClick={() => setReportOpen(false)} className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">Done</button></div> : <><div className="grid grid-cols-2 gap-2"><button className="rounded-xl border border-red-300 bg-red-50 p-4 text-left dark:border-red-400/30 dark:bg-red-400/10"><Flame className="mb-2 size-5 text-red-600" /><span className="text-sm font-bold">Fire or rescue</span><span className="mt-1 block text-xs text-muted-foreground">Dispatch help now</span></button><button className="rounded-xl border border-border p-4 text-left hover:bg-muted"><ShieldCheck className="mb-2 size-5 text-primary" /><span className="text-sm font-bold">Safety concern</span><span className="mt-1 block text-xs text-muted-foreground">Report anonymously</span></button></div><textarea className="mt-4 min-h-24 w-full resize-none rounded-xl border border-input bg-background p-3 text-sm outline-none ring-primary focus:ring-2" placeholder="What happened? Include the location and any details that may help..." /><div className="mt-4 flex items-center justify-between gap-3"><span className="flex items-center gap-2 text-xs text-muted-foreground"><ShieldCheck className="size-4 text-primary" /> Your identity is protected</span><button onClick={() => setReportSent(true)} className="rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground">Submit report</button></div></>}</div></div>}
    </div>
  )
}
