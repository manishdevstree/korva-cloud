import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Award,
  BarChart3,
  Briefcase,
  CheckCircle2,
  ClipboardCheck,
  Cloud,
  DollarSign,
  FileBarChart,
  GraduationCap,
  LayoutDashboard,
  LineChart as LineIcon,
  MapPin,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Workflow,
  Zap,
} from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Filler,
  Tooltip,
  Legend,
);

// ---------- Animated counter ----------
function useCountUp(target: number, duration = 1600, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);
  return val;
}

function Stat({ label, value, prefix = "", suffix = "", start }: { label: string; value: number; prefix?: string; suffix?: string; start: boolean }) {
  const v = useCountUp(value, 1800, start);
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 backdrop-blur-md transition-colors hover:border-primary/30 hover:bg-white/[0.06]">
      <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
        {prefix}
        {v.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.15em] text-white/60">{label}</div>
    </div>
  );
}

// ---------- Section header ----------
function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {desc && <p className="mt-3 text-base text-muted-foreground">{desc}</p>}
    </div>
  );
}

// ---------- Nav ----------
function Nav() {
  const items = [
    ["lifecycle", "Workflow"],
    ["demand", "Demand"],
    ["learner", "Learners"],
    ["talent", "Talent"],
    ["workcloud", "WorkCloud"],
    ["pay", "Pay"],
    ["analytics", "Analytics"],
    ["admin", "Admin"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Cloud className="h-5 w-5" />
          </div>
          <div className="font-display text-base font-extrabold tracking-tight">KORVA</div>
          <span className="hidden text-xs font-medium text-muted-foreground md:inline">Workforce Cloud</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2.5 py-1 text-xs font-medium text-[color:var(--gold)] md:inline">MVP Prototype</span>
          <a href="#admin" className="rounded-lg bg-[image:var(--gradient-accent)] px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]">Launch</a>
        </div>
      </div>
    </header>
  );
}

// ---------- Hero ----------
function Hero() {
  const [start, setStart] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setStart(true), 200);
    return () => clearTimeout(t);
  }, []);
  return (
    <section id="top" className="relative overflow-hidden bg-[color:var(--slate)]">
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-aurora)" }} />
      <div className="absolute inset-0 opacity-[0.12]" style={{ backgroundImage: "linear-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.4) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary shadow-[0_0_12px_currentColor]" />
            Discovery + Prototype MVP
          </div>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.02] text-white md:text-7xl">
            KORVA <span className="bg-gradient-to-r from-[color:var(--primary)] via-white to-[color:var(--gold)] bg-clip-text text-transparent">Workforce Cloud</span>
          </h1>
          <p className="mt-6 text-lg text-white/75 md:text-xl">
            Transforming Learning Into Workforce Opportunities — a unified platform connecting employer demand, training, certification, and earnings across global markets.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#lifecycle" className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]">
              <Workflow className="h-4 w-4" /> View Workflow
            </a>
            <a href="#demand" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10">
              Explore Platform <Zap className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Stat label="Learners" value={5000} start={start} />
            <Stat label="Certifications" value={1250} start={start} />
            <Stat label="Work Assignments" value={850} start={start} />
            <Stat label="Earnings Tracked" value={250000} prefix="$" start={start} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Lifecycle ----------
const lifecycle = [
  { icon: Briefcase, label: "Demand Intake", color: "from-blue-500 to-indigo-500" },
  { icon: CheckCircle2, label: "Commercial Approval", color: "from-indigo-500 to-violet-500" },
  { icon: UserCheck, label: "Learner Onboarding", color: "from-violet-500 to-purple-500" },
  { icon: GraduationCap, label: "Learning", color: "from-purple-500 to-fuchsia-500" },
  { icon: ClipboardCheck, label: "Assessment", color: "from-fuchsia-500 to-pink-500" },
  { icon: Award, label: "Certification", color: "from-pink-500 to-rose-500" },
  { icon: Star, label: "Talent Profile", color: "from-rose-500 to-orange-500" },
  { icon: Cloud, label: "WorkCloud Tasks", color: "from-orange-500 to-amber-500" },
  { icon: ShieldCheck, label: "QA Review", color: "from-amber-500 to-emerald-500" },
  { icon: Wallet, label: "Earnings Ledger", color: "from-emerald-500 to-teal-500" },
  { icon: FileBarChart, label: "Reporting", color: "from-teal-500 to-cyan-500" },
];

function Lifecycle() {
  return (
    <section id="lifecycle" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Workforce Lifecycle" title="From demand to earnings — one connected flow" desc="Every stage of the workforce journey, orchestrated across a single platform." />
        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
          />
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {lifecycle.map((step, i) => (
              <div
                key={step.label}
                className="group relative rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-elegant)]"
              >
                <div className="flex items-center justify-between">
                  <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${step.color} text-white shadow-md ring-1 ring-white/10`}>
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs font-bold tabular-nums text-muted-foreground/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/80">
                  Step {i + 1}
                </div>
                <div className="mt-1 font-display text-sm font-semibold leading-snug text-foreground">
                  {step.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Demand Dashboard ----------
function KpiCard({ icon: Icon, label, value, trend, accent }: { icon: any; label: string; value: string; trend: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
      <div className="flex items-start justify-between">
        <div className={`grid h-10 w-10 place-items-center rounded-xl ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full bg-[color:var(--emerald)]/10 px-2 py-0.5 text-xs font-medium text-[color:var(--emerald)]">{trend}</span>
      </div>
      <div className="mt-4 font-display text-3xl font-bold text-foreground">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

const demandCards = [
  { title: "Solar Technicians", country: "Kenya", qty: 500, status: "Approved", flag: "🇰🇪" },
  { title: "Healthcare Support Workers", country: "Ghana", qty: 250, status: "Review", flag: "🇬🇭" },
  { title: "Construction Workers", country: "Nigeria", qty: 800, status: "Approved", flag: "🇳🇬" },
  { title: "Logistics Operators", country: "South Africa", qty: 320, status: "Approved", flag: "🇿🇦" },
  { title: "Agritech Field Agents", country: "Rwanda", qty: 180, status: "Review", flag: "🇷🇼" },
  { title: "Renewable Energy Engineers", country: "Egypt", qty: 410, status: "Approved", flag: "🇪🇬" },
];

function DemandSection() {
  return (
    <section id="demand" className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Employer Demand" title="Real-time visibility into global workforce demand" desc="Monitor open demands, approvals, capacity, and active deployments in one operational dashboard." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <KpiCard icon={Briefcase} label="Open Demands" value="42" trend="+12%" accent="bg-primary/10 text-primary" />
          <KpiCard icon={CheckCircle2} label="Approved Demands" value="118" trend="+8%" accent="bg-[color:var(--indigo)]/10 text-[color:var(--indigo)]" />
          <KpiCard icon={Activity} label="Active Projects" value="36" trend="+5%" accent="bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" />
          <KpiCard icon={Users} label="Workforce Capacity" value="5,000" trend="+22%" accent="bg-amber-500/10 text-amber-600" />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {demandCards.map((d) => (
            <div key={d.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[image:var(--gradient-card)] opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {d.flag} {d.country}
                  </div>
                  <h3 className="font-display mt-2 text-lg font-semibold text-foreground">{d.title}</h3>
                </div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${d.status === "Approved" ? "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" : "bg-amber-500/10 text-amber-600"}`}>{d.status}</span>
              </div>
              <div className="relative mt-5 flex items-end justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Quantity</div>
                  <div className="font-display text-2xl font-bold">{d.qty.toLocaleString()}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Fulfillment</div>
                  <div className="font-display text-2xl font-bold text-primary">{40 + (d.qty % 50)}%</div>
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                <div className="h-full rounded-full bg-[image:var(--gradient-hero)]" style={{ width: `${30 + (d.qty % 60)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Learner Journey ----------
const journey = [
  { label: "Profile Created", pct: 100 },
  { label: "Training Started", pct: 85 },
  { label: "Assessment Completed", pct: 72 },
  { label: "Certified", pct: 64 },
  { label: "Work Ready", pct: 58 },
];

function LearnerSection() {
  return (
    <section id="learner" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Learner Journey" title="From enrolment to work-ready" desc="A guided experience that turns training milestones into certified, deployable talent." />

        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <div className="grid gap-3 md:grid-cols-5">
            {journey.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[image:var(--gradient-hero)] font-display text-sm font-bold text-white shadow-md">{i + 1}</div>
                  <div className="text-sm font-medium text-foreground">{s.label}</div>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-[color:var(--emerald)] transition-all" style={{ width: `${s.pct}%` }} />
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground">{s.pct}% complete</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { title: "Solar PV Installation", progress: 78, score: 92, badge: "Certified" },
              { title: "Healthcare Foundations", progress: 64, score: 88, badge: "In Progress" },
              { title: "Workplace Safety", progress: 100, score: 95, badge: "Certified" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-background p-5">
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary"><GraduationCap className="h-5 w-5" /></div>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${c.badge === "Certified" ? "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" : "bg-primary/10 text-primary"}`}>{c.badge}</span>
                </div>
                <h4 className="font-display mt-4 text-base font-semibold">{c.title}</h4>
                <div className="mt-4 space-y-3 text-sm">
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground"><span>Training</span><span>{c.progress}%</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-secondary"><div className="h-full rounded-full bg-primary" style={{ width: `${c.progress}%` }} /></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground"><span>Assessment Score</span><span>{c.score}%</span></div>
                    <div className="mt-1 h-1.5 rounded-full bg-secondary"><div className="h-full rounded-full bg-[color:var(--emerald)]" style={{ width: `${c.score}%` }} /></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Talent Profile ----------
function TalentSection() {
  const skills = [
    { label: "Technical Skills", value: 92 },
    { label: "Compliance Training", value: 95 },
    { label: "Work Readiness", value: 89 },
  ];
  return (
    <section id="talent" className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Talent Profile" title="A verified profile for every worker" desc="Skills, certifications, and readiness — quantified and ready for deployment." />
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-start gap-5">
              <div className="relative">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-[image:var(--gradient-hero)] font-display text-2xl font-bold text-white shadow-[var(--shadow-elegant)]">AO</div>
                <span className="absolute -bottom-1 -right-1 grid h-7 w-7 place-items-center rounded-full border-2 border-card bg-[color:var(--emerald)] text-white"><ShieldCheck className="h-3.5 w-3.5" /></span>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold">Amara Okonkwo</h3>
                <p className="text-sm text-muted-foreground">Solar PV Technician · Lagos, Nigeria 🇳🇬</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Solar PV", "Electrical", "Safety", "Diagnostics"].map((s) => (
                    <span key={s} className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">{s}</span>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Readiness</div>
                <div className="font-display text-3xl font-bold text-[color:var(--emerald)]">92</div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="flex justify-between text-sm"><span className="font-medium">{s.label}</span><span className="text-muted-foreground">{s.value}%</span></div>
                  <div className="mt-1.5 h-2 rounded-full bg-secondary"><div className="h-full rounded-full bg-[image:var(--gradient-hero)]" style={{ width: `${s.value}%` }} /></div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Solar PV L2", "Safety Cert", "First Aid"].map((c) => (
                <div key={c} className="rounded-xl border border-border bg-background p-3 text-center">
                  <Award className="mx-auto h-6 w-6 text-[color:var(--indigo)]" />
                  <div className="mt-1 text-xs font-medium">{c}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              { name: "Kwame Asante", role: "Healthcare Support · Accra 🇬🇭", score: 88, skills: ["Patient Care", "First Aid", "Records"] },
              { name: "Naledi Dlamini", role: "Logistics Operator · Johannesburg 🇿🇦", score: 90, skills: ["Routing", "Fleet", "Safety"] },
              { name: "Yusuf El-Sayed", role: "Renewable Energy · Cairo 🇪🇬", score: 94, skills: ["Wind", "Solar", "Grid"] },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] font-display text-sm font-bold text-white">{p.name.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1">
                  <div className="font-display text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.role}</div>
                  <div className="mt-1.5 flex flex-wrap gap-1">
                    {p.skills.map((s) => <span key={s} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">{s}</span>)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Score</div>
                  <div className="font-display text-xl font-bold text-primary">{p.score}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- WorkCloud Kanban ----------
const kanban = {
  Available: { color: "primary", tasks: [
    { title: "Solar Installation", site: "Nairobi Site B", priority: "High" },
    { title: "Site Inspection", site: "Lagos Phase 2", priority: "Medium" },
  ]},
  Assigned: { color: "indigo", tasks: [
    { title: "Equipment Setup", site: "Accra Hub", priority: "High" },
    { title: "Maintenance Review", site: "Cairo Plant", priority: "Low" },
  ]},
  Completed: { color: "emerald", tasks: [
    { title: "Safety Audit", site: "Johannesburg", priority: "Medium" },
    { title: "Quality Verification", site: "Kigali Field", priority: "High" },
  ]},
} as const;

function WorkCloudSection() {
  return (
    <section id="workcloud" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="WorkCloud" title="Task management across the field" desc="Allocate, track, and verify work across geographies — Kanban-style, real-time." />
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(kanban).map(([col, data]) => (
            <div key={col} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${col === "Available" ? "bg-primary" : col === "Assigned" ? "bg-[color:var(--indigo)]" : "bg-[color:var(--emerald)]"}`} />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">{col} Tasks</h3>
                </div>
                <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">{data.tasks.length}</span>
              </div>
              <div className="mt-4 space-y-3">
                {data.tasks.map((t) => (
                  <div key={t.title} className="group rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:shadow-md">
                    <div className="flex items-start justify-between">
                      <div className="font-medium text-sm">{t.title}</div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${t.priority === "High" ? "bg-rose-500/10 text-rose-600" : t.priority === "Medium" ? "bg-amber-500/10 text-amber-600" : "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]"}`}>{t.priority}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3 w-3" />{t.site}</div>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <div className="flex -space-x-1">
                        {[1,2,3].map(i => <div key={i} className="grid h-6 w-6 place-items-center rounded-full border-2 border-card bg-[image:var(--gradient-hero)] text-[10px] font-bold text-white">{String.fromCharCode(64+i)}</div>)}
                      </div>
                      <span className="text-muted-foreground">2d ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- QA Section ----------
function QASection() {
  const steps = [
    { label: "Submitted", count: 124, icon: ClipboardCheck, color: "bg-primary/10 text-primary" },
    { label: "Under Review", count: 36, icon: ShieldCheck, color: "bg-amber-500/10 text-amber-600" },
    { label: "Approved", count: 312, icon: CheckCircle2, color: "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" },
  ];
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="QA Workflow" title="Quality assurance built into every deliverable" desc="A structured review pipeline ensures every output meets compliance and quality standards." />
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.label} className="relative rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className={`mb-4 inline-grid h-12 w-12 place-items-center rounded-xl ${s.color}`}><s.icon className="h-6 w-6" /></div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="font-display mt-1 text-3xl font-bold">{s.count}</div>
              {i < steps.length - 1 && <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block" />}
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm text-muted-foreground">Pass Rate</div>
            <div className="font-display mt-1 text-4xl font-bold text-[color:var(--emerald)]">94.2%</div>
            <div className="mt-3 h-2 rounded-full bg-secondary"><div className="h-full rounded-full bg-[color:var(--emerald)]" style={{ width: "94%" }} /></div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm text-muted-foreground">Review Queue</div>
            <div className="font-display mt-1 text-4xl font-bold text-primary">36</div>
            <div className="mt-3 text-xs text-muted-foreground">Avg. resolution time · 1.4 days</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm text-muted-foreground">Compliance Score</div>
            <div className="font-display mt-1 text-4xl font-bold text-[color:var(--indigo)]">A+</div>
            <div className="mt-3 text-xs text-muted-foreground">ISO-aligned · audited monthly</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Pay Ledger ----------
function PaySection() {
  const tx = [
    { who: "Amara Okonkwo", task: "Solar PV Installation · Nairobi", amount: 320, status: "Completed", date: "Today" },
    { who: "Kwame Asante", task: "Healthcare Outreach · Accra", amount: 180, status: "Pending", date: "Today" },
    { who: "Naledi Dlamini", task: "Logistics Route Audit · JHB", amount: 250, status: "Completed", date: "Yesterday" },
    { who: "Yusuf El-Sayed", task: "Wind Turbine Inspection · Cairo", amount: 410, status: "Pending", date: "Yesterday" },
    { who: "Chidinma Obi", task: "Site Safety Review · Lagos", amount: 145, status: "Completed", date: "2 days ago" },
  ];
  return (
    <section id="pay" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="KORVA Pay" title="Workforce earnings ledger" desc="A transparent record of earnings, payouts, and transactions across the workforce. Not a banking system — an operational ledger." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Task Earnings", value: "$750", icon: DollarSign, color: "bg-primary/10 text-primary" },
            { label: "Pending Payout", value: "$250", icon: Wallet, color: "bg-amber-500/10 text-amber-600" },
            { label: "Completed Payouts", value: "$500", icon: CheckCircle2, color: "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" },
          ].map((k) => (
            <div key={k.label} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className={`inline-grid h-10 w-10 place-items-center rounded-xl ${k.color}`}><k.icon className="h-5 w-5" /></div>
              <div className="mt-4 text-sm text-muted-foreground">{k.label}</div>
              <div className="font-display mt-1 text-3xl font-bold">{k.value}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="border-b border-border px-6 py-4">
            <h3 className="font-display text-base font-semibold">Ledger Transactions</h3>
          </div>
          <div className="divide-y divide-border">
            {tx.map((t, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-secondary/40">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[image:var(--gradient-hero)] text-xs font-bold text-white">{t.who.split(" ").map(n => n[0]).join("")}</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">{t.who}</div>
                  <div className="text-xs text-muted-foreground">{t.task}</div>
                </div>
                <div className="hidden text-xs text-muted-foreground md:block">{t.date}</div>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${t.status === "Completed" ? "bg-[color:var(--emerald)]/10 text-[color:var(--emerald)]" : "bg-amber-500/10 text-amber-600"}`}>{t.status}</span>
                <div className="w-24 text-right font-display text-base font-bold tabular-nums">${t.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Analytics ----------
function AnalyticsSection() {
  const grid = (color: string) => ({ color, drawTicks: false });
  const baseAxis = {
    grid: { color: "rgba(255,255,255,0.06)", drawTicks: false },
    ticks: { color: "rgba(255,255,255,0.55)", font: { family: "Inter", size: 11 } },
    border: { display: false },
  };
  const commonOpts: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: "#0a0f1f", padding: 10, cornerRadius: 8, borderColor: "rgba(255,255,255,0.08)", borderWidth: 1 } },
    scales: { x: baseAxis, y: baseAxis },
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [{
      label: "Learners",
      data: [800, 1200, 1900, 2400, 3100, 3800, 4400, 5000],
      borderColor: "rgb(94,234,212)",
      backgroundColor: "rgba(94,234,212,0.18)",
      tension: 0.4, fill: true, pointBackgroundColor: "#0a0f1f", pointBorderColor: "rgb(94,234,212)", pointBorderWidth: 2, pointRadius: 4,
    }],
  };

  const barData = {
    labels: ["Solar", "Health", "Construct.", "Logistics", "Agri", "Energy"],
    datasets: [{
      label: "Certs", data: [220, 180, 310, 140, 95, 305],
      backgroundColor: "rgba(251,191,36,0.85)", borderRadius: 8, borderSkipped: false,
    }],
  };

  const doughnutData = {
    labels: ["Completed", "In Progress", "Available"],
    datasets: [{
      data: [520, 220, 110],
      backgroundColor: ["rgb(94,234,212)", "rgb(167,139,250)", "rgb(251,191,36)"],
      borderWidth: 0, hoverOffset: 8,
    }],
  };

  const areaData = {
    labels: ["W1","W2","W3","W4","W5","W6","W7","W8"],
    datasets: [{
      label: "Earnings", data: [12,18,24,31,42,55,68,82],
      borderColor: "rgb(167,139,250)", backgroundColor: "rgba(167,139,250,0.20)",
      tension: 0.45, fill: true, pointRadius: 0,
    }],
  };

  const cards = [
    { label: "Monthly Active Learners", value: "5,000", trend: "+18%", icon: Users },
    { label: "Certifications Issued", value: "1,250", trend: "+24%", icon: Award },
    { label: "Task Completion Rate", value: "92.4%", trend: "+3.2%", icon: Target },
    { label: "Total Earnings Tracked", value: "$250K", trend: "+31%", icon: TrendingUp },
  ];

  return (
    <section id="analytics" className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Analytics" title="Operational intelligence at a glance" desc="Real-time KPIs across workforce growth, certifications, task completion, and revenue." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div key={c.label} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><c.icon className="h-4.5 w-4.5" /></div>
                <span className="rounded-full bg-[color:var(--emerald)]/10 px-2 py-0.5 text-xs font-medium text-[color:var(--emerald)]">{c.trend}</span>
              </div>
              <div className="font-display mt-4 text-2xl font-bold">{c.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ChartCard title="Workforce Growth" subtitle="Cumulative learners onboarded" icon={LineIcon}>
            <Line data={lineData} options={commonOpts} />
          </ChartCard>
          <ChartCard title="Certifications Issued" subtitle="By workforce category" icon={Award}>
            <Bar data={barData} options={commonOpts} />
          </ChartCard>
          <ChartCard title="Task Completion" subtitle="Status distribution" icon={CheckCircle2}>
            <Doughnut data={doughnutData} options={{ responsive: true, maintainAspectRatio: false, cutout: "65%", plugins: { legend: { position: "bottom" as const, labels: { color: "rgba(255,255,255,0.65)", font: { family: "Inter" } } } } }} />
          </ChartCard>
          <ChartCard title="Revenue / Earnings" subtitle="Weekly earnings tracked ($K)" icon={TrendingUp}>
            <Line data={areaData} options={commonOpts} />
          </ChartCard>
        </div>
      </div>
    </section>
  );
}

function ChartCard({ title, subtitle, icon: Icon, children }: { title: string; subtitle: string; icon: any; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="font-display text-base font-semibold">{title}</h3>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="h-4 w-4" /></div>
      </div>
      <div className="h-64">{children}</div>
    </div>
  );
}

// ---------- Admin Control Center ----------
function AdminSection() {
  const tiles = [
    { label: "User Management", icon: Users, count: "5,218 users", color: "from-blue-500 to-indigo-500" },
    { label: "Demand Approvals", icon: CheckCircle2, count: "42 pending", color: "from-indigo-500 to-violet-500" },
    { label: "Certification Controls", icon: Award, count: "1,250 issued", color: "from-violet-500 to-purple-500" },
    { label: "Reporting Center", icon: FileBarChart, count: "32 reports", color: "from-emerald-500 to-teal-500" },
    { label: "System Settings", icon: Settings, count: "All systems OK", color: "from-slate-600 to-slate-800" },
    { label: "Activity Logs", icon: Activity, count: "Live", color: "from-amber-500 to-orange-500" },
  ];
  return (
    <section id="admin" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Admin Control Center" title="Operate the entire platform from one console" desc="Manage users, approvals, certifications, and reporting from a single command surface." />
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between border-b border-border bg-background/60 px-6 py-4">
            <div className="flex items-center gap-3">
              <LayoutDashboard className="h-5 w-5 text-primary" />
              <span className="font-display text-sm font-semibold">Admin Console</span>
              <span className="rounded-full bg-[color:var(--emerald)]/10 px-2 py-0.5 text-xs font-medium text-[color:var(--emerald)]">● Live</span>
            </div>
            <div className="hidden gap-2 md:flex">
              {["Overview", "Operations", "Compliance", "Finance"].map((t, i) => (
                <button key={t} className={`rounded-lg px-3 py-1.5 text-xs font-medium ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-secondary"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <div key={t.label} className="group cursor-pointer rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
                <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${t.color} text-white shadow-md`}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold">{t.label}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{t.count}</p>
                <div className="mt-4 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">Open module →</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Architecture ----------
const arch = [
  { label: "Employer", icon: Briefcase },
  { label: "Demand Engine", icon: Target },
  { label: "Training & Certification", icon: GraduationCap },
  { label: "Talent Profile", icon: Star },
  { label: "WorkCloud Tasks", icon: Cloud },
  { label: "QA Validation", icon: ShieldCheck },
  { label: "Earnings Ledger", icon: Wallet },
  { label: "Reporting", icon: BarChart3 },
];

function ArchitectureSection() {
  return (
    <section className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader eyebrow="MVP Architecture" title="How KORVA fits together" desc="A connected stack — from employer demand to reporting — purpose-built for workforce orchestration." />
        <div className="space-y-3">
          {arch.map((a, i) => (
            <div key={a.label}>
              <div className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-white shadow-md">
                  <a.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Layer {String(i + 1).padStart(2, "0")}</div>
                  <div className="font-display text-lg font-semibold">{a.label}</div>
                </div>
                <div className="hidden text-xs text-muted-foreground md:block">Active</div>
                <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--emerald)] shadow-[0_0_12px_currentColor]" />
              </div>
              {i < arch.length - 1 && (
                <div className="my-1 flex justify-center">
                  <div className="h-5 w-px bg-gradient-to-b from-border via-primary/40 to-border" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  return (
    <footer className="bg-[color:var(--slate)] py-16 text-white/80">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-hero)] text-white shadow-[var(--shadow-elegant)]"><Cloud className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-lg font-bold text-white">KORVA Workforce Cloud</div>
                <div className="text-xs text-white/60">Discovery & Prototype MVP</div>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm text-white/70">
              Prototype created for workflow validation, stakeholder review, and MVP planning. All data shown is illustrative.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Workflow Validation</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">Stakeholder Review</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">MVP Planning</span>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} KORVA · Transforming Learning Into Workforce Opportunities.
        </div>
      </div>
    </footer>
  );
}

// ---------- Page ----------
export function KorvaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Lifecycle />
        <DemandSection />
        <LearnerSection />
        <TalentSection />
        <WorkCloudSection />
        <QASection />
        <PaySection />
        <AnalyticsSection />
        <AdminSection />
        <ArchitectureSection />
      </main>
      <Footer />
    </div>
  );
}