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
    ["components", "Components"],
    ["journeys", "Journeys"],
    ["gates", "Gates"],
    ["roadmap", "Roadmap"],
    ["metrics", "Metrics"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5 cursor-pointer">
          <div className="h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-slate-950/40">
            <img src="/logo.png" alt="KORVA" className="h-full w-full object-cover" />
          </div>
          <div className="font-display text-base font-extrabold tracking-tight">KORVA</div>
          <span className="hidden text-xs font-medium text-muted-foreground md:inline">Workforce Cloud</span>
        </a>
        <nav className="hidden items-center gap-1 lg:flex">
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground cursor-pointer">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-[color:var(--gold)]/30 bg-[color:var(--gold)]/10 px-2.5 py-1 text-xs font-medium text-[color:var(--gold)] md:inline">MVP Prototype</span>
          <a href="#lifecycle" className="rounded-lg bg-[image:var(--gradient-accent)] px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] cursor-pointer">Launch</a>
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
          <div className="mx-auto mb-8 flex justify-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/20 shadow-[0_20px_50px_rgba(223,172,108,0.15)] transition-transform hover:scale-[1.02] max-w-[200px] md:max-w-[240px]">
              <img src="/logo.png" alt="KORVA Logo" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
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

// ---------- Lifecycle Simulator ----------
const lifecycleSteps = [
  { step: 1, title: "Demand", icon: Briefcase, role: "Employer / Sponsor", desc: "Employer details their workforce requirements: job category, size, and budget." },
  { step: 2, title: "Commercial", icon: FileBarChart, role: "Finance Team", desc: "Engine calculates unit costs, wages, and KORVA margins to draft a proposal." },
  { step: 3, title: "Authorization", icon: UserCheck, role: "Operations Lead", desc: "Demand Coverage Controller (DCC) approves cohort training based on real jobs." },
  { step: 4, title: "Train", icon: GraduationCap, role: "Learner / LMS", desc: "Recruited candidates undergo intensive 4-week skills training in their field." },
  { step: 5, title: "Certify", icon: Award, role: "Assessor / Engine", desc: "Candidates pass knowledge, practical, and role-play tests to receive active credentials." },
  { step: 6, title: "Deploy", icon: Cloud, role: "Worker / Workstream", desc: "Certified specialists are deployed to jobs and start performing daily tasks." },
  { step: 7, title: "QA Check", icon: ShieldCheck, role: "QA Reviewer", desc: "Reviewers inspect and approve worker deliverables to release payments." },
  { step: 8, title: "Pay", icon: Wallet, role: "Finance Engine", desc: "Approved tasks automatically trigger mobile money or bank payouts to workers." },
  { step: 9, title: "Measure", icon: BarChart3, role: "Sponsors / Execs", desc: "Consolidated outcomes (income, retention, ROI) are reported to sponsors." }
];

function Lifecycle() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [companyName, setCompanyName] = useState("Afritech Solutions");
  const [category, setCategory] = useState("Customer Support");
  const [workersNeeded, setWorkersNeeded] = useState(10);
  const [budget, setBudget] = useState(45000);
  const [location, setLocation] = useState("Nigeria 🇳🇬");
  
  // Cost calculations
  const trainingCostPerWorker = 200;
  const overheadRatio = 0.2;
  const expectedHours = 480;
  const workerHourlyWage = 5;
  
  const proposedPrice = budget * 0.8; 
  const workerPayout = workersNeeded * expectedHours * workerHourlyWage;
  const overheadCost = workerPayout * overheadRatio;
  const platformMargin = proposedPrice - workerPayout - (workersNeeded * trainingCostPerWorker) - overheadCost;

  // Cohort Plan
  const [dccRationale, setDccRationale] = useState("High local client demand; signed contract covers 100% of seats.");
  
  // Learning
  const [learningProgress, setLearningProgress] = useState(0);
  const [isSimulatingLearning, setIsSimulatingLearning] = useState(false);

  // Assessments
  const [assessmentGraded, setAssessmentGraded] = useState(false);

  // Tasks
  const [tasksGenerated, setTasksGenerated] = useState(false);
  const [tasksCompletedCount, setTasksCompletedCount] = useState(0);
  const [workerTasks, setWorkerTasks] = useState<any[]>([
    { id: 2844, worker: "John Okafor", type: "Customer Response", score: 94, status: "Pending" },
    { id: 2845, worker: "Chioma Eze", type: "Billing Correction", score: 78, status: "Pending" },
    { id: 2846, worker: "Amara Tunde", type: "Technical Support", score: 97, status: "Pending" },
    { id: 2847, worker: "David Mensah", type: "Account Recovery", score: 91, status: "Pending" },
  ]);

  // QA
  const [qaDecisions, setQaDecisions] = useState<{ [key: number]: 'Approved' | 'Rework' }>({});
  const [qaSubmitted, setQaSubmitted] = useState(false);

  // Pay
  const [payoutMethod, setPayoutMethod] = useState("MTN Mobile Money");
  const [payoutStatus, setPayoutStatus] = useState<'Pending' | 'Processing' | 'Completed'>('Pending');

  // Stakeholder view tab
  const [impactTab, setImpactTab] = useState<'employer' | 'sponsor' | 'exec'>('employer');

  // Simulator controls
  const handleNextStep = (stepToComplete: number, nextStep: number) => {
    if (!completedSteps.includes(stepToComplete)) {
      setCompletedSteps(prev => [...prev, stepToComplete]);
    }
    setCurrentStep(nextStep);
  };

  const handleStepClick = (step: number) => {
    if (step === 1 || completedSteps.includes(step - 1) || completedSteps.includes(step)) {
      setCurrentStep(step);
    }
  };

  const startLearningSimulation = () => {
    setIsSimulatingLearning(true);
    setLearningProgress(0);
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setLearningProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        setIsSimulatingLearning(false);
      }
    }, 150);
  };

  const handleRestart = () => {
    setCurrentStep(1);
    setCompletedSteps([]);
    setCompanyName("Afritech Solutions");
    setCategory("Customer Support");
    setWorkersNeeded(10);
    setBudget(45000);
    setLocation("Nigeria 🇳🇬");
    setDccRationale("High local client demand; signed contract covers 100% of seats.");
    setLearningProgress(0);
    setAssessmentGraded(false);
    setTasksGenerated(false);
    setTasksCompletedCount(0);
    setWorkerTasks([
      { id: 2844, worker: "John Okafor", type: "Customer Response", score: 94, status: "Pending" },
      { id: 2845, worker: "Chioma Eze", type: "Billing Correction", score: 78, status: "Pending" },
      { id: 2846, worker: "Amara Tunde", type: "Technical Support", score: 97, status: "Pending" },
      { id: 2847, worker: "David Mensah", type: "Account Recovery", score: 91, status: "Pending" },
    ]);
    setQaDecisions({});
    setQaSubmitted(false);
    setPayoutStatus('Pending');
  };

  const activeStepInfo = lifecycleSteps[currentStep - 1];

  return (
    <section id="lifecycle" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="Interactive Flow Simulator" 
          title="KORVA™ Demand-First Operating Loop" 
          desc="Run through a live workforce lifecycle pilot. Experience each stage, from contract entry to payment and reporting." 
        />

        {/* 9-Step Horizontal Progress Stepper */}
        <div className="mb-12 overflow-x-auto py-4">
          <div className="flex min-w-[900px] items-center justify-between px-4">
            {lifecycleSteps.map((s, idx) => {
              const Icon = s.icon;
              const isCompleted = completedSteps.includes(s.step);
              const isActive = currentStep === s.step;
              const isSelectable = s.step === 1 || completedSteps.includes(s.step - 1) || completedSteps.includes(s.step);

              return (
                <div key={s.step} className="relative flex flex-col items-center flex-1">
                  {/* Connection Line */}
                  {idx < lifecycleSteps.length - 1 && (
                    <div 
                      className={`absolute left-[calc(50%+24px)] right-[calc(-50%+24px)] top-6 h-[2px] transition-colors duration-300 ${
                        completedSteps.includes(s.step) ? 'bg-primary shadow-[0_0_8px_var(--color-primary)]' : 'bg-white/10'
                      }`} 
                    />
                  )}

                  <button
                    onClick={() => handleStepClick(s.step)}
                    disabled={!isSelectable}
                    className={`relative z-10 grid h-12 w-12 place-items-center rounded-xl border transition-all duration-300 ${
                      isActive 
                        ? 'border-primary bg-primary/20 text-primary shadow-[var(--shadow-glow)] scale-110 cursor-pointer' 
                        : isCompleted
                          ? 'border-primary/60 bg-slate-900/80 text-primary hover:border-primary cursor-pointer'
                          : isSelectable
                            ? 'border-white/20 bg-slate-950/60 text-white/70 hover:border-white/40 hover:text-white cursor-pointer'
                            : 'border-white/5 bg-slate-950/20 text-white/20 cursor-not-allowed'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </button>

                  <div className="mt-3 text-center">
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      Step 0{s.step}
                    </div>
                    <div className={`mt-0.5 text-xs font-semibold ${isActive ? 'text-white' : 'text-white/50'}`}>
                      {s.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2-Column Working Area */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12">
          {/* Left Column: Info & Context */}
          <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-slate-950/40 p-8 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Workflow className="h-3.5 w-3.5" />
                Active Actor: {activeStepInfo.role}
              </div>

              <h3 className="font-display mt-6 text-2xl font-bold text-white">
                Step {activeStepInfo.step}: {activeStepInfo.title}
              </h3>
              
              <p className="mt-4 text-base leading-relaxed text-white/70">
                {activeStepInfo.desc}
              </p>

              {/* Step context detail from md wireframes */}
              <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Why this is Demand-First:</h4>
                <p className="text-xs text-white/60">
                  {currentStep <= 3 && "We confirm valid jobs, contract value, and deployment margins before any training program is authorized."}
                  {(currentStep >= 4 && currentStep <= 5) && "We train only target numbers needed to cover the employer's actual vacant slots, preventing resource wastage."}
                  {currentStep >= 6 && "Workers operate inside WorkCloud workflows. Tasks are directly linked to client work orders and are verified before payout is issued."}
                </p>
              </div>
            </div>

            {/* Inputs / Outputs Panel */}
            <div className="mt-8 rounded-2xl bg-slate-900/40 p-4 border border-white/5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-primary/80">Key Outputs Generated</div>
              <ul className="mt-2.5 space-y-1.5 text-xs text-white/80 list-inside list-disc">
                {currentStep === 1 && (
                  <>
                    <li>Qualified Demand Record</li>
                    <li>Sponsor profile created</li>
                    <li>Employer request documented</li>
                  </>
                )}
                {currentStep === 2 && (
                  <>
                    <li>Financial Proposal draft</li>
                    <li>Platform margin: ${Math.round(platformMargin).toLocaleString()}</li>
                    <li>Pricing terms approved</li>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <li>Authorized Cohort size: {workersNeeded + 2}</li>
                    <li>Demand Coverage Ratio: {((workersNeeded) / (workersNeeded + 2)).toFixed(2)}</li>
                    <li>Operations Gate Approval</li>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <li>LMS Course Completion profiles</li>
                    <li>Candidate learning logs</li>
                    <li>Ready for evaluation state</li>
                  </>
                )}
                {currentStep === 5 && (
                  <>
                    <li>Active & deployable certifications</li>
                    <li>QR verification codes created</li>
                    <li>Knowledge, Practical & Role-play scores</li>
                  </>
                )}
                {currentStep === 6 && (
                  <>
                    <li>Workstream capacity configured</li>
                    <li>Task queue assigned</li>
                    <li>Worker deliverables submitted</li>
                  </>
                )}
                {currentStep === 7 && (
                  <>
                    <li>QA audit logs</li>
                    <li>Individual quality scores</li>
                    <li>Payout eligibility records</li>
                  </>
                )}
                {currentStep === 8 && (
                  <>
                    <li>Worker earnings Ledger balances</li>
                    <li>Orchestrated payment instructions</li>
                    <li>Mobile money API receipt</li>
                  </>
                )}
                {currentStep === 9 && (
                  <>
                    <li>Consolidated Impact Evidence</li>
                    <li>Employment retention metrics</li>
                    <li>Employer satisfaction report</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Wireframe Mockup */}
          <div className="flex flex-col rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl lg:col-span-7">
            {/* Mockup Header bar */}
            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="rounded-lg bg-slate-950/60 px-3 py-1 text-[10px] font-mono text-white/50 border border-white/5">
                {currentStep === 1 && "korva.app/sponsor/demand"}
                {currentStep === 2 && "korva.app/finance/cost-engine"}
                {currentStep === 3 && "korva.app/ops/dcc"}
                {currentStep === 4 && "korva.app/lms/training"}
                {currentStep === 5 && "korva.app/certification/assessments"}
                {currentStep === 6 && "korva.app/workcloud/tasks"}
                {currentStep === 7 && "korva.app/ops/qa-review"}
                {currentStep === 8 && "korva.app/finance/payouts"}
                {currentStep === 9 && "korva.app/reports/impact"}
              </div>
            </div>

            {/* Mockup Content Panel */}
            <div className="flex-1">
              {/* STEP 1: DEMAND REQUEST FORM */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">🏢 Employer Demand Request</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <label className="block text-xs font-semibold text-white/60">Company / Sponsor Name</label>
                      <input 
                        type="text" 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-white focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-white/60">Work Category</label>
                        <select 
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-white focus:border-primary focus:outline-none"
                        >
                          <option value="Customer Support">Customer Support</option>
                          <option value="Data Operations">Data Operations</option>
                          <option value="Admin Operations">Admin Operations</option>
                          <option value="Research & Content">Research & Content</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/60">Target Location</label>
                        <select 
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2.5 text-white focus:border-primary focus:outline-none"
                        >
                          <option value="Nigeria 🇳🇬">Nigeria 🇳🇬</option>
                          <option value="Ghana 🇬🇭">Ghana 🇬🇭</option>
                          <option value="Kenya 🇰🇪">Kenya 🇰🇪</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-white/60">Workers Needed</label>
                        <input 
                          type="number" 
                          value={workersNeeded}
                          onChange={(e) => setWorkersNeeded(Number(e.target.value))}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-white focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-white/60">Total Budget ($)</label>
                        <input 
                          type="number" 
                          value={budget}
                          onChange={(e) => setBudget(Number(e.target.value))}
                          className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-white focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => handleNextStep(1, 2)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] cursor-pointer"
                    >
                      Submit Demand Request <Zap className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: COMMERCIAL APPROVAL */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">💰 Pricing & Proposal Engine</h4>
                  <div className="rounded-xl bg-slate-950/40 p-4 border border-white/5 space-y-2.5 text-xs">
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/60 font-semibold">Demand Summary:</span>
                      <span className="text-white font-bold">{workersNeeded} {category} specialists for {companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Worker Hourly Wage:</span>
                      <span className="text-white font-semibold">${workerHourlyWage}/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Total Hours (480 hrs/worker):</span>
                      <span className="text-white font-semibold">{(workersNeeded * expectedHours).toLocaleString()} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Worker Payout Pool:</span>
                      <span className="text-white font-semibold">${workerPayout.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Training Costs ($200/head):</span>
                      <span className="text-white font-semibold">${(workersNeeded * trainingCostPerWorker).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Operating Overhead (20%):</span>
                      <span className="text-white font-semibold">${overheadCost.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between border-t border-white/5 pt-2 font-semibold">
                      <span className="text-primary">Proposed Price (LOI):</span>
                      <span className="text-primary font-bold">${proposedPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-semibold">
                      <span className="text-emerald-400">Target KORVA Margin:</span>
                      <span className="text-emerald-400 font-bold">
                        ${platformMargin.toLocaleString()} ({Math.round((platformMargin / proposedPrice) * 100)}%)
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button 
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-xs font-semibold text-white/80 hover:bg-slate-950 hover:text-white cursor-pointer"
                    >
                      Request Changes
                    </button>
                    <button
                      onClick={() => handleNextStep(2, 3)}
                      className="flex-[2] inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                    >
                      Approve & Generate Proposal
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: COHORT AUTHORIZATION */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">⚙️ Cohort Authorization Controls</h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Expected Deployed</div>
                      <div className="font-display mt-1 text-2xl font-bold text-white">{workersNeeded}</div>
                    </div>
                    <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Target Trained</div>
                      <div className="font-display mt-1 text-2xl font-bold text-white">{workersNeeded + 2}</div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-amber-500">Demand Coverage Ratio (DCR):</span>
                      <span className="rounded bg-amber-500/10 px-2 py-0.5 text-xs font-mono font-bold text-amber-500">
                        {((workersNeeded) / (workersNeeded + 2)).toFixed(2)}
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-500/80 leading-relaxed">
                      DCR is below 1.0 (Cohort training is slightly larger than actual job pool to buffer candidate attrition). Operational justification is required to proceed.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/60">Operations Rationale</label>
                    <textarea 
                      value={dccRationale}
                      onChange={(e) => setDccRationale(e.target.value)}
                      rows={2}
                      className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2 text-xs text-white focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button 
                      onClick={() => handleNextStep(3, 4)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                    >
                      Authorize Cohort & Begin Training
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: LEARNER ONBOARDING & TRAINING */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">📱 Learner Course Simulator</h4>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs text-white/70">
                      <span>Cohort Progress:</span>
                      <span className="font-bold font-mono text-primary">{learningProgress}% Complete</span>
                    </div>
                    
                    <div className="h-3.5 w-full overflow-hidden rounded-full bg-slate-950/80 border border-white/10 p-[2px]">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-primary to-amber-500 transition-all duration-300"
                        style={{ width: `${learningProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Candidate List Mockup */}
                  <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 divide-y divide-white/5 text-xs max-h-[160px] overflow-y-auto">
                    {[
                      { name: "John Okafor", module: "Module 3: CRM Basics", p: learningProgress },
                      { name: "Chioma Eze", module: "Module 3: CRM Basics", p: Math.max(0, learningProgress - 10) },
                      { name: "Amara Tunde", module: "Module 4: Quality & SLA", p: Math.min(100, learningProgress + 5) },
                      { name: "David Mensah", module: "Module 2: Communication", p: Math.max(0, learningProgress - 20) }
                    ].map((c, i) => (
                      <div key={i} className="flex justify-between py-2 items-center">
                        <span className="text-white font-medium">{c.name}</span>
                        <span className="text-white/40">{c.p >= 100 ? "Finished" : c.module}</span>
                        <span className="font-mono text-primary font-semibold">{c.p >= 100 ? 100 : c.p}%</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    {learningProgress < 100 ? (
                      <button
                        onClick={startLearningSimulation}
                        disabled={isSimulatingLearning}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-5 py-3 text-xs font-semibold text-white hover:bg-slate-950 hover:border-primary shadow-md transition-all cursor-pointer disabled:cursor-not-allowed"
                      >
                        {isSimulatingLearning ? "Simulating Course..." : "Run Learning Course Simulation"}
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNextStep(4, 5)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                      >
                        Onboard Cohort to Assessment Engine
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 5: ASSESSMENT & CERTIFICATION */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">🎯 KORVA Certify™ Assessment</h4>
                  
                  <div className="grid gap-3 text-xs">
                    <div className="flex justify-between items-center rounded-xl bg-slate-950/40 p-3 border border-white/5">
                      <div>
                        <div className="font-semibold text-white">1. Knowledge Test</div>
                        <div className="text-[10px] text-white/50">20 MCQ Evaluation</div>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 ${assessmentGraded ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-white/40'}`}>
                        {assessmentGraded ? "PASSED (84%)" : "Pending"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center rounded-xl bg-slate-950/40 p-3 border border-white/5">
                      <div>
                        <div className="font-semibold text-white">2. Practical Live Scenario</div>
                        <div className="text-[10px] text-white/50">Ticket resolution sim</div>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 ${assessmentGraded ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-white/40'}`}>
                        {assessmentGraded ? "PASSED (91%)" : "Pending"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center rounded-xl bg-slate-950/40 p-3 border border-white/5">
                      <div>
                        <div className="font-semibold text-white">3. Role-Play Assessment</div>
                        <div className="text-[10px] text-white/50">Video assessor interview</div>
                      </div>
                      <span className={`rounded-full px-2 py-0.5 ${assessmentGraded ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-white/40'}`}>
                        {assessmentGraded ? "PASSED (88%)" : "Pending"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    {!assessmentGraded ? (
                      <button
                        onClick={() => setAssessmentGraded(true)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-5 py-3 text-xs font-semibold text-white hover:bg-slate-950 hover:border-primary shadow-md transition-all cursor-pointer"
                      >
                        Grade Candidate Assessments
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNextStep(5, 6)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                      >
                        Issue QR-Certificates & Deploy to WorkCloud
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 6: WORKCLOUD & DEPLOYMENT */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">🚀 WorkCloud™ Workstream</h4>
                  <div className="flex items-center justify-between text-xs text-white/60 bg-slate-950/40 px-4 py-2 border border-white/5 rounded-xl">
                    <span>Project: {companyName} support</span>
                    <span>Team Capacity: {workersNeeded} workers</span>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 divide-y divide-white/5 text-xs space-y-2.5">
                    <div className="flex justify-between items-center text-white/60 font-semibold border-b border-white/5 pb-2">
                      <span>Worker</span>
                      <span>Task Queue</span>
                      <span>Delivery Status</span>
                    </div>
                    {[
                      { name: "John Okafor", tasks: 4, status: tasksGenerated ? "In Progress" : "Idle" },
                      { name: "Chioma Eze", tasks: 5, status: tasksGenerated ? "In Progress" : "Idle" },
                      { name: "Amara Tunde", tasks: 3, status: tasksGenerated ? "In Progress" : "Idle" },
                      { name: "David Mensah", tasks: 4, status: tasksGenerated ? "In Progress" : "Idle" }
                    ].map((w, idx) => (
                      <div key={idx} className="flex justify-between py-1.5 items-center">
                        <span className="text-white font-medium">{w.name}</span>
                        <span className="font-mono text-primary font-bold">{tasksGenerated ? w.tasks : 0} tasks</span>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] ${tasksGenerated ? 'bg-amber-500/10 text-amber-500' : 'bg-white/5 text-white/40'}`}>
                          {w.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    {!tasksGenerated ? (
                      <button
                        onClick={() => setTasksGenerated(true)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-5 py-3 text-xs font-semibold text-white hover:bg-slate-950 hover:border-primary shadow-md transition-all cursor-pointer"
                      >
                        Generate & Assign Daily Tasks
                      </button>
                    ) : (
                      <button
                        onClick={() => handleNextStep(6, 7)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                      >
                        Submit Completed Deliverables for QA Review
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 7: QA REVIEW */}
              {currentStep === 7 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">🛡️ QA Review Console</h4>
                  
                  <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 divide-y divide-white/5 text-xs space-y-2">
                    <div className="flex justify-between items-center text-white/60 font-semibold border-b border-white/5 pb-2">
                      <span>Task #</span>
                      <span>Worker</span>
                      <span>Score</span>
                      <span>QA Decision</span>
                    </div>

                    {workerTasks.map((t) => (
                      <div key={t.id} className="flex justify-between py-2 items-center">
                        <span className="text-white/60 font-mono">#{t.id}</span>
                        <span className="text-white font-medium">{t.worker}</span>
                        <span className="font-mono text-primary font-bold">{t.score}/100</span>
                        
                        <div className="flex gap-1.5">
                          <button
                            onClick={() => setQaDecisions(prev => ({ ...prev, [t.id]: 'Approved' }))}
                            className={`rounded px-2.5 py-0.5 text-[10px] font-semibold border transition-all cursor-pointer ${
                              qaDecisions[t.id] !== 'Rework'
                                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40' 
                                : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'
                            }`}
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => setQaDecisions(prev => ({ ...prev, [t.id]: 'Rework' }))}
                            className={`rounded px-2.5 py-0.5 text-[10px] font-semibold border transition-all cursor-pointer ${
                              qaDecisions[t.id] === 'Rework'
                                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40' 
                                : 'bg-transparent text-white/40 border-white/10 hover:border-white/20'
                            }`}
                          >
                            Rework
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => handleNextStep(7, 8)}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                    >
                      Submit Decisions & Authorize Payout Ledger
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 8: EARNINGS & PAYOUTS */}
              {currentStep === 8 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">💰 Batch Payout Orchestrator</h4>
                  
                  <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 space-y-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-white/60">Payout Cohort Size:</span>
                      <span className="text-white font-bold">{workersNeeded} Specialists</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Total Hours Approved:</span>
                      <span className="text-white font-semibold">{(workersNeeded * expectedHours).toLocaleString()} hours</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-white/60">Batch Payout Total:</span>
                      <span className="text-white font-bold text-primary">${workerPayout.toLocaleString()}</span>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/60 mb-1">Select Payout Channel</label>
                      <select 
                        value={payoutMethod}
                        onChange={(e) => setPayoutMethod(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white focus:border-primary focus:outline-none"
                      >
                        <option value="MTN Mobile Money">MTN Mobile Money API</option>
                        <option value="Airtel Mobile Money">Airtel Money API</option>
                        <option value="Licensed Partner Bank">Commercial Bank Transfer</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2">
                    {payoutStatus === 'Pending' ? (
                      <button
                        onClick={() => {
                          setPayoutStatus('Processing');
                          setTimeout(() => setPayoutStatus('Completed'), 1500);
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-accent)] px-5 py-3 text-xs font-semibold text-primary-foreground shadow-[var(--shadow-glow)] hover:scale-[1.02] cursor-pointer"
                      >
                        Release Batch Payouts via API
                      </button>
                    ) : payoutStatus === 'Processing' ? (
                      <div className="w-full text-center py-3 text-xs font-semibold text-white/50 animate-pulse bg-slate-950/60 border border-white/10 rounded-xl">
                        Contacting API Provider & Processing Ledger Settlements...
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNextStep(8, 9)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-xs font-semibold text-slate-950 hover:bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-transform hover:scale-[1.02] cursor-pointer"
                      >
                        Payouts Complete. View Final Impact Report
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 9: IMPACT MEASUREMENT */}
              {currentStep === 9 && (
                <div className="space-y-4">
                  <h4 className="font-display text-lg font-bold text-white">📊 Consolidated Pilot Evidence</h4>
                  
                  {/* Reporting Tab buttons */}
                  <div className="flex gap-1 border-b border-white/5 pb-2">
                    {['employer', 'sponsor', 'exec'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setImpactTab(tab as any)}
                        className={`rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          impactTab === tab 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-white/60 hover:bg-white/5'
                        }`}
                      >
                        {tab === 'employer' && "🏢 Employer"}
                        {tab === 'sponsor' && "🏛️ Sponsor"}
                        {tab === 'exec' && "📈 Executive"}
                      </button>
                    ))}
                  </div>

                  {/* Report Card content */}
                  <div className="rounded-xl border border-white/5 bg-slate-950/40 p-4 text-xs space-y-2.5">
                    {impactTab === 'employer' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-white/60">Client / Partner Name:</span>
                          <span className="text-white font-bold">{companyName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60 font-semibold">Specialists Deployed:</span>
                          <span className="text-white font-bold text-primary">{workersNeeded} Workers</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Quality SLA Pass Rate:</span>
                          <span className="text-emerald-400 font-bold">94.2% (Passed)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Total Deliverables Met:</span>
                          <span className="text-white font-semibold">223 Completed tickets</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2 font-semibold">
                          <span className="text-white/60">Total Cost to Client:</span>
                          <span className="text-white">${proposedPrice.toLocaleString()}</span>
                        </div>
                      </>
                    )}

                    {impactTab === 'sponsor' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-white/60">Enrolled Learners:</span>
                          <span className="text-white font-bold">{workersNeeded + 2} Enrolled</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60 font-semibold">Direct Jobs Created:</span>
                          <span className="text-white font-bold text-primary">{workersNeeded} Employed</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Total Income Generated:</span>
                          <span className="text-emerald-400 font-bold">${workerPayout.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Employment Retention:</span>
                          <span className="text-white font-semibold">95% (Q3 2026)</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2 font-semibold">
                          <span className="text-white/60">Cost Per Job Outcome:</span>
                          <span className="text-white">
                            ${Math.round((workerPayout + (workersNeeded * trainingCostPerWorker) + overheadCost) / workersNeeded).toLocaleString()}
                          </span>
                        </div>
                      </>
                    )}

                    {impactTab === 'exec' && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-white/60">Gross Revenue:</span>
                          <span className="text-white font-bold">${proposedPrice.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold">
                          <span className="text-white/60">Worker Payout Pool:</span>
                          <span className="text-white text-rose-400 font-bold">-${workerPayout.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/60">Training & Overhead Expenses:</span>
                          <span className="text-white/60">-${(overheadCost + (workersNeeded * trainingCostPerWorker)).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t border-white/5 pt-2 font-semibold">
                          <span className="text-emerald-400">Net Platform Margin:</span>
                          <span className="text-emerald-400 font-bold">${platformMargin.toLocaleString()}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleRestart}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950/60 border border-white/10 px-5 py-3 text-xs font-semibold text-white hover:bg-slate-950 hover:border-primary transition-all cursor-pointer"
                    >
                      Restart Operating Loop Simulator
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SOW Key Components ----------
const componentsList = [
  {
    name: "KORVA Learn™",
    purpose: "Prepare workers for specified jobs",
    does: "Hosts learning content in LMS, tracks completion, provides support",
    helps: "Workers know exactly what to learn; employers know workers are prepared",
    measure: "80%+ course completion rate",
    icon: GraduationCap,
    color: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    name: "KORVA Certify™",
    purpose: "Create trusted proof of work readiness",
    does: "Sets standards, runs assessments, issues credentials",
    helps: "Employers trust workers are truly qualified (not just trained)",
    measure: "75%+ certification pass rate with quality assurance",
    icon: Award,
    color: "from-indigo-500/20 to-violet-500/20 border-indigo-500/30 text-indigo-400"
  },
  {
    name: "KORVA Talent™",
    purpose: "Make qualified workers discoverable & deployable",
    does: "Builds worker profiles with skills, certifications, availability",
    helps: "Match right workers to right jobs quickly",
    measure: "90%+ deployment rate of certified workers",
    icon: Star,
    color: "from-violet-500/20 to-purple-500/20 border-violet-500/30 text-violet-400"
  },
  {
    name: "KORVA Contract™",
    purpose: "Convert validated demand into controlled revenue",
    does: "Captures employer requests, pricing, contracts, work orders",
    helps: "Clear commercial terms prevent disputes; tracking ensures profitability",
    measure: "100% of deployments linked to signed contracts",
    icon: Briefcase,
    color: "from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400"
  },
  {
    name: "KORVA WorkCloud™",
    purpose: "Convert contracted work into managed output",
    does: "Assigns tasks, tracks progress, manages team, controls quality",
    helps: "Deliverables stay on-time, quality, within budget",
    measure: "95%+ on-time delivery; 90%+ quality acceptance",
    icon: Cloud,
    color: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400"
  },
  {
    name: "KORVA Pay™",
    purpose: "Record & orchestrate payment without being a bank",
    does: "Tracks earnings, creates payout instructions, sends to licensed providers",
    helps: "Workers get paid; auditable records; no unlicensed money holding",
    measure: "99%+ payout success rate; <1% failed transfers",
    icon: Wallet,
    color: "from-rose-500/20 to-orange-500/20 border-rose-500/30 text-rose-400"
  },
  {
    name: "KORVA Impact™",
    purpose: "Evidence employment, income, and program outcomes",
    does: "Collects data, calculates KPIs, creates dashboards",
    helps: "Everyone sees proof of what works; data drives decisions",
    measure: "Real-time reporting; 100% data accuracy",
    icon: BarChart3,
    color: "from-orange-500/20 to-amber-500/20 border-orange-500/30 text-orange-400"
  },
  {
    name: "KORVA Governance™",
    purpose: "Protect institutional integrity & procurement readiness",
    does: "Manages security, compliance, consent, policies, risk",
    helps: "Enterprise customers trust KORVA; regulatory compliance",
    measure: "Zero security breaches; 100% audit compliance",
    icon: ShieldCheck,
    color: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  }
];

function KeyComponents() {
  return (
    <section id="components" className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="Key Components" 
          title="The KORVA™ Product Taxonomy" 
          desc="KORVA's modular components are designed to coordinate labor supply with verified market demand under strict quality guarantees."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {componentsList.map((c) => {
            const Icon = c.icon;
            return (
              <div 
                key={c.name} 
                className={`group relative overflow-hidden rounded-2xl border bg-gradient-to-br ${c.color} p-6 bg-slate-950/20 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:bg-slate-900/40`}
              >
                <div className="flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-slate-900/60 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">{c.name}</h3>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">Purpose:</span>
                    <p className="text-white/80 mt-0.5">{c.purpose}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">What It Does:</span>
                    <p className="text-white/70 mt-0.5">{c.does}</p>
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Why It Helps:</span>
                    <p className="text-white/70 mt-0.5">{c.helps}</p>
                  </div>
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">Success Measure:</span>
                    <p className="text-amber-300/90 font-medium mt-0.5">{c.measure}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- SOW User Journeys ----------
const journeys = {
  employer: {
    title: "🏢 Employer Journey",
    desc: "How client companies leverage KORVA to scale support, operations, and technical teams.",
    steps: [
      { num: "01", title: "Submit Demand Request", details: "Employer enters specific talent requirements (job type, quantity, budget, target start date)." },
      { num: "02", title: "Receive Commercial Proposal", details: "KORVA responds with clear pricing, training timeline, and certification/quality guarantees within 48 hours." },
      { num: "03", title: "Review & Sign SOW", details: "Terms, budget, and Net 30 payment milestones are finalized and approved." },
      { num: "04", title: "Monitor Cohort Pipeline", details: "Track candidate onboarding, training progress, and certification rates in real-time." },
      { num: "05", title: "Worker Deployment", details: "Certified specialists start working on assignments directly within the WorkCloud interface." },
      { num: "06", title: "QA Check & Acceptance", details: "Employer reviews and accepts completed tasks, which triggers worker payout." },
      { num: "07", title: "Impact & Margin Reports", details: "Sponsor receives reports detailing tasks completed, quality ratings, and outcome ROI." }
    ]
  },
  worker: {
    title: "👤 Worker Journey",
    desc: "How local young talent accesses training, certifications, and high-quality income opportunities.",
    steps: [
      { num: "01", title: "Discover & Sign Up", details: "Candidates discover sponsored training cohorts and build basic profile (availability, interest)." },
      { num: "02", title: "4-Week LMS Training", details: "Complete CRM tools, Communication, Workplace safety, and Role-play scenarios." },
      { num: "03", title: "Skills Assessments", details: "Take knowledge, practical, and live video role-play tests to verify skills." },
      { num: "04", title: "Receive Certification", details: "Pass the exams to earn a verifiable, QR-coded KORVA Specialist Certification." },
      { num: "05", title: "WorkCloud Assignment", details: "Get assigned to a customer workstream and receive daily queues of paid tasks." },
      { num: "06", title: "Deliver & Get QA Approval", details: "Submit task outcomes, get feedback, and receive approval notifications." },
      { num: "07", title: "Earnings Ledger Payout", details: "Track earnings in real-time and request cash-out to MTN or Airtel Mobile Money." }
    ]
  },
  sponsor: {
    title: "🏛️ Sponsor/DFI Journey",
    desc: "How development finance institutions and donors fund youth employment programs at scale.",
    steps: [
      { num: "01", title: "Define Program Parameters", details: "Sponsor targets a specific budget (e.g. $100K) and target youth outcome quantity (e.g. 50 jobs)." },
      { num: "02", title: "Sign Funding Agreement", details: "KORVA coordinates matching demand cohorts. Payment is linked to certified outcomes." },
      { num: "03", title: "On-demand Cohort Sourcing", details: "Recruitment starts. Dashboard displays candidate enrollment status." },
      { num: "04", title: "Training Funding Release", details: "Funded training starts ($800 per student) to build certified cohorts." },
      { num: "05", title: "Employment Outcome Tracking", details: "Sponsors see live count of deployed workers and actual wages earned." },
      { num: "06", title: "Auditable Reporting", details: "Evidence of jobs created, Lives improved, and program ROI (e.g. 2.7x) is generated." },
      { num: "07", title: "Year-End Audit", details: "Independent verification of employment data and satisfaction metrics for renewal." }
    ]
  }
};

function UserJourneys() {
  const [activeTab, setActiveTab] = useState<"employer" | "worker" | "sponsor">("employer");
  const journeyData = journeys[activeTab];

  return (
    <section id="journeys" className="border-b border-border/40 py-24 bg-slate-950/20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader 
          eyebrow="User Experience" 
          title="Target User Journeys" 
          desc="Follow the step-by-step lifecycle for our core platform stakeholders: Employers, Workers, and Sponsors."
        />
        
        {/* Navigation Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {Object.entries(journeys).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-6 py-2.5 rounded-xl border text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === key 
                  ? "border-primary bg-primary/20 text-primary shadow-[var(--shadow-glow)]" 
                  : "border-white/10 bg-slate-950/40 text-white/60 hover:text-white hover:border-white/20"
              }`}
            >
              {data.title.split(" ")[0]} {data.title.split(" ").slice(1).join(" ")}
            </button>
          ))}
        </div>

        {/* Journey Display */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/30 p-8 shadow-[var(--shadow-elegant)] backdrop-blur-md">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-white">{journeyData.title}</h3>
            <p className="text-muted-foreground mt-2">{journeyData.desc}</p>
          </div>

          {/* Vertical Timeline */}
          <div className="relative border-l border-white/10 pl-6 ml-4 space-y-8">
            {journeyData.steps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet node */}
                <span className="absolute -left-[35px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-white/20 text-xs font-bold text-white group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                  {step.num}
                </span>
                
                {/* Content */}
                <div className="bg-slate-950/40 border border-white/5 rounded-xl p-4 transition-all duration-300 hover:border-white/15 hover:bg-slate-950/60">
                  <h4 className="font-display font-semibold text-white text-base">{step.title}</h4>
                  <p className="text-sm text-white/70 mt-1.5 leading-relaxed">{step.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- SOW Decision Gates ----------
const decisionGates = [
  {
    gate: "A",
    title: "Brand & Scope Gate",
    question: "Do we agree on what KORVA is?",
    owner: "Product Owner",
    action: "Build P0 scope locked, changes controlled",
    deliverable: "Product taxonomy & SOW finalized"
  },
  {
    gate: "B",
    title: "Pilot Demand Gate",
    question: "Do we have a real employer with real budget?",
    owner: "Operations Lead",
    action: "Can start recruiting workers immediately",
    deliverable: "Confirmed employer LOI & SOW"
  },
  {
    gate: "C",
    title: "Commercial Model Gate",
    question: "Can we price this profitably?",
    owner: "Finance Lead",
    action: "Financial model is realistic & auditable",
    deliverable: "Pricing rules, margins & contract model"
  },
  {
    gate: "D",
    title: "Institutional Trust Gate",
    question: "Can we operate compliantly?",
    owner: "Legal/Compliance Lead",
    action: "No regulatory risks; safeguards in place",
    deliverable: "Payment boundaries & certification governance"
  },
  {
    gate: "E",
    title: "Technical Readiness Gate",
    question: "Can we actually build this?",
    owner: "Technical Lead",
    action: "Development sprint 1 can start immediately",
    deliverable: "Provider selections, data model, prototype"
  }
];

function DecisionGates() {
  const [gatesState, setGatesState] = useState<{ [key: string]: boolean }>({
    A: true,
    B: true,
    C: true,
    D: true,
    E: true
  });

  const toggleGate = (key: string) => {
    setGatesState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="gates" className="border-b border-border/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="Phase 0 Approval" 
          title="Development Decision Gates" 
          desc="All 5 gates must be cleared and signed off before P0 Build engineering begins. Click on a gate to toggle authorization status."
        />

        <div className="grid gap-6 md:grid-cols-5 font-sans">
          {decisionGates.map((gate) => {
            const isCleared = gatesState[gate.gate];
            return (
              <div 
                key={gate.gate}
                onClick={() => toggleGate(gate.gate)}
                className={`cursor-pointer rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between h-full ${
                  isCleared 
                    ? "border-emerald-500/30 bg-emerald-950/10 shadow-[0_0_15px_rgba(16,185,129,0.05)] hover:border-emerald-500/50" 
                    : "border-rose-500/20 bg-rose-950/5 opacity-80 hover:border-rose-500/40"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">GATE {gate.gate}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      isCleared ? "bg-emerald-500/20 text-emerald-400" : "bg-rose-500/20 text-rose-400"
                    }`}>
                      {isCleared ? "Passed" : "Locked"}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{gate.title}</h3>
                  <p className="text-xs text-white/70 italic mb-4">"{gate.question}"</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5 text-[11px]">
                  <div>
                    <span className="font-semibold text-muted-foreground block uppercase">Owner:</span>
                    <span className="text-white/80">{gate.owner}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground block uppercase">Action if Passed:</span>
                    <span className="text-white/80">{gate.action}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-muted-foreground block uppercase">Key Deliverable:</span>
                    <span className="text-primary">{gate.deliverable}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------- SOW Implementation Roadmap ----------
const roadmapPhases = [
  {
    phase: "Phase 0",
    title: "Definition & Setup",
    timeline: "Weeks 1-4",
    status: "Active",
    tasks: [
      "Taxonomy definition & gate signs",
      "Draft UI/UX mockups & wireframes",
      "Finalize pilot SOW & commercials",
      "Lock data models & third-party integrations"
    ]
  },
  {
    phase: "Phase 1",
    title: "Core Platform MVP",
    timeline: "Weeks 5-12",
    status: "Upcoming",
    tasks: [
      "Implement LMS & course hosting",
      "Deploy basic certification engine",
      "Build worker profile databases",
      "Integrate basic SMS/WhatsApp bots"
    ]
  },
  {
    phase: "Phase 2",
    title: "WorkCloud & Contracts",
    timeline: "Weeks 13-20",
    status: "Planned",
    tasks: [
      "Deploy WorkCloud task manager",
      "Launch contract/SOW demand console",
      "Implement QA review pipeline",
      "Introduce ledger-based payout workflows"
    ]
  },
  {
    phase: "Phase 3",
    title: "DFI Analytics & Launch",
    timeline: "Weeks 21-26",
    status: "Planned",
    tasks: [
      "Deploy Impact dashboard for sponsors",
      "Enable Mobile Money cash-out via partners",
      "Begin first pilot cohort recruitment",
      "Execute independent third-party audits"
    ]
  }
];

function ImplementationRoadmap() {
  return (
    <section id="roadmap" className="border-b border-border/40 bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="Development Roadmap" 
          title="Implementation Schedule" 
          desc="Our 26-week milestone schedule leading to pilot deployment and donor validation."
        />

        <div className="grid gap-6 md:grid-cols-4">
          {roadmapPhases.map((phase) => (
            <div 
              key={phase.phase} 
              className="rounded-2xl border border-white/10 bg-slate-900/30 p-6 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-primary tracking-wider uppercase">{phase.phase}</span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  phase.status === "Active" 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : phase.status === "Upcoming"
                    ? "bg-indigo-500/20 text-indigo-400 border border-indigo-500/20"
                    : "bg-white/5 text-white/40 border border-white/5"
                }`}>
                  {phase.status}
                </span>
              </div>
              <h3 className="font-display font-bold text-lg text-white">{phase.title}</h3>
              <span className="text-xs text-muted-foreground mt-1 block">{phase.timeline}</span>
              
              <ul className="mt-6 space-y-2.5 text-xs text-white/80">
                {phase.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SOW Success Metrics ----------
function SuccessMetrics() {
  return (
    <section id="metrics" className="border-b border-border/40 py-24 bg-slate-950/20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader 
          eyebrow="Verification" 
          title="Donors & Sponsors Success Metrics" 
          desc="KORVA tracks these five primary outcome pillars to demonstrate real impact and compliance."
        />

        <div className="grid gap-6 md:grid-cols-5 font-sans">
          {[
            {
              title: "Verified Jobs Created",
              target: "10,000+ jobs by Y3",
              desc: "Individuals deployed on active SOW-supported contracts.",
              method: "Linked contracts & daily WorkCloud check-ins",
              pct: 85,
              color: "text-blue-400"
            },
            {
              title: "Verified Income Generated",
              target: "$150+ average monthly earnings",
              desc: "Direct digital payout tracking to workers.",
              method: "MTN & Airtel mobile money ledger logs",
              pct: 92,
              color: "text-indigo-400"
            },
            {
              title: "Enterprise Demand Match",
              target: "90%+ fulfillment rate",
              desc: "Fulfilling corporate demand requests.",
              method: "SOW contract sign-off & cohort size matching",
              pct: 78,
              color: "text-violet-400"
            },
            {
              title: "Learner Success",
              target: "80%+ course completion",
              desc: "Completion of LMS training material.",
              method: "KORVA Learn™ system metrics",
              pct: 90,
              color: "text-pink-400"
            },
            {
              title: "Employer Satisfaction",
              target: "90%+ task acceptance",
              desc: "Quality approval rating by client employers.",
              method: "Post-task review & QA verification loops",
              pct: 94,
              color: "text-emerald-400"
            }
          ].map((metric) => (
            <div 
              key={metric.title} 
              className="rounded-2xl border border-white/10 bg-slate-900/30 p-6 shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-base text-white mb-2">{metric.title}</h3>
                <span className={`text-sm font-semibold ${metric.color} block mb-3`}>{metric.target}</span>
                <p className="text-xs text-white/70 leading-relaxed mb-4">{metric.desc}</p>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/5 text-[11px]">
                <div>
                  <span className="font-semibold text-muted-foreground block uppercase">Verification Method:</span>
                  <span className="text-white/80">{metric.method}</span>
                </div>
                <div>
                  <div className="flex justify-between font-semibold text-muted-foreground uppercase mb-1">
                    <span>Performance</span>
                    <span className="text-white">{metric.pct}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-slate-950 border border-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[image:var(--gradient-hero)]" style={{ width: `${metric.pct}%` }} />
                  </div>
                </div>
              </div>
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
              <div className="h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-slate-950/40">
                <img src="/logo.png" alt="KORVA" className="h-full w-full object-cover" />
              </div>
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
        <KeyComponents />
        <UserJourneys />
        <DecisionGates />
        <ImplementationRoadmap />
        <SuccessMetrics />
      </main>
      <Footer />
    </div>
  );
}