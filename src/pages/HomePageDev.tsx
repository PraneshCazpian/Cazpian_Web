import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Cloud,
  Database,
  GitBranch,
  Layers,
  Lock,
  Play,
  Server,
  Settings,
  Sparkles,
  ToggleLeft,
} from "lucide-react";

// Simple UI component replacements
const Card = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white/5 border border-white/10 rounded-2xl ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pb-4 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={`text-white font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

const CardContent = ({ children, className = "", ...props }: { children: React.ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

const Button = ({ 
  children, 
  variant = "default", 
  size = "default", 
  className = "", 
  asChild = false,
  onClick,
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "secondary" | "outline" | "ghost"; 
  size?: "default" | "sm" | "lg"; 
  className?: string; 
  asChild?: boolean;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variantClasses = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50",
    ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50"
  };
  
  const sizeClasses = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-lg"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (asChild) {
    return <div className={classes} {...(props as React.HTMLAttributes<HTMLDivElement>)}>{children}</div>;
  }
  
  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ 
  children, 
  variant = "default", 
  className = "", 
  ...props 
}: { 
  children: React.ReactNode; 
  variant?: "default" | "secondary" | "destructive" | "outline"; 
  className?: string; 
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const variantClasses = {
    default: "bg-indigo-600 text-white",
    secondary: "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50",
    destructive: "bg-red-500 text-white",
    outline: "border border-slate-200 text-slate-900 dark:border-slate-800 dark:text-slate-50"
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  );
};

/**
 * Cazpian — Homepage
 *
 * Notes:
 * - Tailwind classes assumed (dark mode variants enabled).
 * - Replace placeholder links (#) with real routes.
 * - Swap the hero <video> poster/src with your screencast (<=1.5MB).
 * - Add SEO tags in your app shell <head>:
 *   <title>Cazpian – Open Lakehouse Platform for Analytics, Pipelines & AI Agents</title>
 *   <meta name="description" content="Open-standards lakehouse control-plane for governed compute, unified catalogs, and AI agents—across cloud and on-prem." />
 *   <link rel="canonical" href="https://cazpian.ai/" />
 *   <meta property="og:title" content="Cazpian – Open Lakehouse Platform for Analytics, Pipelines & AI Agents" />
 *   <meta property="og:description" content="Iceberg-first analytics with governed compute and Day-2 automation." />
 *   <meta property="og:type" content="website" />
 *   <meta name="twitter:card" content="summary_large_image" />
 */

function useDarkToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);
  return { dark, setDark } as const;
}

const TechBadge = ({ label }: { label: string }) => (
  <Badge
    variant="secondary"
    className="text-sm sm:text-base px-3 py-1 rounded-xl bg-muted/60"
  >
    {label}
  </Badge>
);

const Section = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

export default function HomePageDev() {
  const { dark, setDark } = useDarkToggle();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Top Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/70 border-b border-white/5">
        <Section className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-indigo-600 grid place-content-center shadow-lg shadow-indigo-600/30">
              <Sparkles className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight text-lg">cazpian</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#product" className="hover:text-white">Product</a>
            <a href="#solutions" className="hover:text-white">Solutions</a>
            <a href="#architecture" className="hover:text-white">Architecture</a>
            <a href="#docs" className="hover:text-white">Docs</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#changelog" className="hover:text-white">Changelog</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={() => setDark(!dark)}>
              <ToggleLeft className="h-4 w-4 mr-2" />
              <span>{dark ? "Dark" : "Light"}</span>
            </Button>
            <Button
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <a href="#demo">Book a Demo</a>
            </Button>
            <Button asChild>
              <a href="#start">Start Free</a>
            </Button>
          </div>
        </Section>
      </header>

      {/* HERO */}
      <Section id="hero" className="pt-14 sm:pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Open Lakehouse Platform for Analytics, Pipelines & AI Agents
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-2xl">
              Launch governed compute, unify your data catalogs, and add AI agents to automate engineering—so analytics and pipelines ship faster across cloud and on-prem.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button size="lg" asChild>
                <a href="#start">Start Free</a>
              </Button>
              <Button size="lg" variant="secondary" className="border border-white/10" asChild>
                <a href="#demo">Book a Demo</a>
              </Button>
              <Button size="lg" variant="ghost" className="text-slate-300 hover:text-white" asChild>
                <a href="#tour" className="inline-flex items-center">
                  <Play className="h-4 w-4 mr-2" />
                  See 2-min Tour
                </a>
              </Button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-300">
              <Chip>Open-standards</Chip>
              <Chip>Spark Connect & Submit</Chip>
              <Chip>Iceberg-native Governance</Chip>
              <Chip>AI Agents</Chip>
              <Chip>Metalake layer</Chip>
              <Chip>Multi-engine (Spark/Trino/Flink)</Chip>
              <Chip>Kubernetes-first</Chip>
              <Chip>On-prem Kubernetes</Chip>
              <Chip>Tagging & Discovery</Chip>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <video
                className="w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                poster="https://placehold.co/960x540/0f172a/ffffff?text=Cazpian+2%27min+Tour"
              >
                <source src="" type="video/mp4" />
              </video>
              <div className="absolute bottom-3 left-3 text-xs text-slate-300 bg-black/40 backdrop-blur px-2 py-1 rounded-full">
                Replace with product screencast (≤1.5MB)
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Built on standards */}
      <Section id="standards" className="py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-center text-sm text-slate-300">Built on open standards & cloud-native tech</p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-3 place-items-center">
            {[
              "Apache Iceberg",
              "Apache Arrow",
              "Apache Spark",
              "Apache Polaris",
              "Kubernetes",
              "Azure Storage",
              "AWS S3",
              "Google Cloud Storage",
              "MinIO",
            ].map((label) => (
              <TechBadge key={label} label={label} />
            ))}
          </div>
        </div>
      </Section>

      {/* Engines */}
      <Section id="engines" className="py-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-center text-sm text-slate-300">Multi-engine ready</p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">Apache Spark</span>
            <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">Trino</span>
            <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">Flink</span>
          </div>
        </div>
      </Section>

      {/* Compute targets */}
      <Section id="compute-targets" className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Compute targets</h2>
          <p className="mt-2 text-slate-300">
            Kubernetes is first-class, with AWS managed computes today and GCP/Azure on the roadmap.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                <Cloud className="h-5 w-5" /> Kubernetes (first-class)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Elastic, policy-aware clusters with profile-driven sizing, secrets, and network guardrails.{" "}
              <strong className="text-white">EKS today; GKE/AKS on the roadmap</strong>.
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                <Server className="h-5 w-5" /> AWS managed computes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Run on <strong className="text-white">EC2</strong>, <strong className="text-white">EMR</strong>, and{" "}
              <strong className="text-white">EMR on EKS</strong> with the same governance, profiles, and observability.
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                <Layers className="h-5 w-5" /> Cross-cloud & on-prem
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Support for <strong className="text-white">on-prem Kubernetes</strong> with private registries, your CNI/ingress,
              and S3-compatible storage (e.g., MinIO).{" "}
              <strong className="text-white">GCP (GKE/Dataproc)</strong> and{" "}
              <strong className="text-white">Azure (AKS + managed Spark)</strong> on the roadmap.
            </CardContent>
          </Card>

          <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Tagging & Discovery
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300">
              Search across catalogs with business tags and keywords; quickly find tables, filesets, and views.
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Why Cazpian */}
      <Section id="product" className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Why teams choose Cazpian</h2>
          <p className="mt-2 text-slate-300">Open, governed, and ready for Day-2 operations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Governed Spark Anywhere"
            body={
              <>
                Long-running <strong className="text-white">Spark Connect</strong> workspaces and{" "}
                <strong className="text-white">submit jobs</strong> (batch & streaming) on EKS/EC2/EMR and on-prem Kubernetes
                with policy-aware restarts.
              </>
            }
          />
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Iceberg-First Catalogs"
            body={
              <>
                Polaris &amp; Gravitino out-of-the-box; Glue/Hive/RDBMS connectors; views &amp; table property enforcement with
                full auditability.
              </>
            }
          />
          <FeatureCard
            icon={<Settings className="h-5 w-5" />}
            title="Day-2 Ops Automation"
            body={
              <>
                Maintenance schedules (compaction, snapshot expiry, orphan cleanup), right-size hints, cost controls, and safe
                config/JAR rollouts.
              </>
            }
          />
        </div>
      </Section>

      {/* Metalake */}
      <Section id="metalake" className="py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Metalake layer — one source of truth</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Unified metadata & governance"
            body="One place for orgs, catalogs, roles, and policies; engines read from a single source of truth."
          />
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Discovery & lineage"
            body="Discover data and AI assets with audit-ready lineage and access logs, and tag data assets for faster search."
          />
          <FeatureCard
            icon={<Lock className="h-5 w-5" />}
            title="Multi-tenant boundaries"
            body="Org/workspace isolation with policies applied once and respected everywhere."
          />
        </div>
      </Section>

      {/* Catalogs */}
      <Section id="catalogs" className="py-12">
        <SectionHeader
          title="Catalogs, unified"
          subtitle="Use any catalog with the Workspace Analytics Engine and run federated queries via Apache Spark."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Cloud className="h-5 w-5" />}
            title="Storage Catalogs"
            body="Configure S3, MinIO or any S3-compatible object storages, Google Cloud Storage, or Azure Storage as catalogs and query alongside other sources."
          />
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Fileset Catalogs"
            body="Apache Gravitino filesets: represent objects as catalogs → namespaces → filesets → files; great for ML/AI data access."
          />
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Iceberg Catalogs"
            body="All Iceberg types (JDBC/Hive/REST) as external catalogs—or choose Cazpian Managed Polaris with policies, governance, and RBAC."
          />
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Relational Catalogs"
            body="Connect any JDBC database (Postgres, MySQL, Oracle, and more) and federate via Spark."
          />
        </div>
        <div className="text-center mt-6">
          <Button variant="outline" asChild>
            <a href="#docs/catalogs">See Catalogs docs</a>
          </Button>
        </div>
      </Section>

      {/* Iceberg Performance & Maintenance */}
      <Section id="iceberg-performance" className="py-12">
        <SectionHeader
          title="Iceberg performance & maintenance"
          subtitle="Policy-driven maintenance with reporting to keep queries fast and storage lean."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Settings className="h-5 w-5" />}
            title="Maintenance policies"
            body="Compaction, snapshot expiration, orphan-file cleanup, and metadata compaction."
          />
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Performance reporting"
            body="Read/write metrics, table & datafile stats, pruning effectiveness, and cost signals."
          />
          <FeatureCard
            icon={<Cloud className="h-5 w-5" />}
            title="Automation & SLAs"
            body="Schedules, guardrails, and alerts to keep tables optimized over time."
          />
        </div>
      </Section>

      {/* How it works */}
      <Section id="solutions" className="py-12">
        <SectionHeader title="How it works" subtitle="Three steps to governed analytics on your cloud." />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Layers className="h-5 w-5" />,
              title: "Connect your catalogs",
              body:
                "Storage, Fileset, Iceberg (incl. managed Polaris), and Relational. Bring your own buckets, keys, and JDBC.",
            },
            {
              icon: <Cloud className="h-5 w-5" />,
              title: "Launch compute (Spark, Trino, Flink)",
              body:
                "Metalake catalogs auto-available in engines; Spark Connect workspaces or Spark jobs/streams via profiles and policies.",
            },
            {
              icon: <Lock className="h-5 w-5" />,
              title: "Apply governance",
              body: "Policies, monitoring, audit trails, automated maintenance and rollbacks.",
            },
          ].map((c, i) => (
            <FeatureCard key={i} icon={c.icon} title={c.title} body={c.body} />
          ))}
        </div>
      </Section>

      {/* SQL Editor with AI */}
      <Section id="sql-editor" className="py-12">
        <SectionHeader
          title="SQL Editor with AI Assistance"
          subtitle="Rich editor connected to T-shirt sized Analytics Engine clusters with end-to-end AI help."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Text-to-SQL & Prepared Questions"
            body="Generate SQL from natural language, auto-draft prepared questions, and refine prompts inline."
          />
          <FeatureCard
            icon={<Settings className="h-5 w-5" />}
            title="Diagnostics & Optimization"
            body="Query failure analysis, plan recommendations, and compute resource optimization suggestions."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Observability & Insights"
            body="Spark execution metrics & lineage, result-set analysis with AI, and instant insights summaries."
          />
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Iceberg-aware Performance"
            body="AI recommendations for table stats, partition/sort hints, and pruning to improve read performance."
          />
          <FeatureCard
            icon={<Cloud className="h-5 w-5" />}
            title="Right-sizing & Cost"
            body="Cluster T-shirt sizing guidance (executors/CPU/memory) with cost impact estimates."
          />
        </div>
      </Section>

      {/* Web IDE & Notebooks */}
      <Section id="notebooks" className="py-12">
        <SectionHeader
          title={
            <>
              Web IDE &amp; Notebooks{" "}
              <span className="text-slate-400 text-base align-middle">(coming soon)</span>
            </>
          }
          subtitle="A full VS Code–style experience in the browser—polyglot notebooks on governed, right-sized compute."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Settings className="h-5 w-5" />}
            title="VS Code-style editor"
            body="Tabs, terminals, Git, and smart autocomplete for SQL, Python, and Scala."
          />
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="Polyglot notebooks"
            body="Mix SQL & code, preview DataFrames, and promote notebooks to scheduled jobs."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="AI pair-programmer"
            body="Text-to-code, error explain, plan recommendations, and instant visualizations."
          />
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          Works with your compute profiles and catalog permissions.
        </p>
        <div className="text-center mt-6">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <a href="#notebooks/preview">Join the Notebooks Preview</a>
          </Button>
        </div>
      </Section>

      {/* BI Connectivity */}
      <Section id="bi" className="py-12">
        <SectionHeader
          title="BI Connectivity"
          subtitle="Connect your favorite BI tools to governed data—without new silos."
        />
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="JDBC & ODBC drivers"
            body="Works with Tableau, Power BI, Excel, and more via a single endpoint."
          />
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Fast & reliable"
            body="Columnar transport, streaming results, and query cancel for large dashboards."
          />
          <FeatureCard
            icon={<Lock className="h-5 w-5" />}
            title="Governed access"
            body="RBAC, policies, and audit from the metalake—consistent across engines."
          />
        </div>
        <p className="mt-4 text-center text-sm text-slate-400">
          Works with Tableau · Power BI · Excel · DBeaver · Superset
        </p>
        <div className="text-center mt-6">
          <Button
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
            asChild
          >
            <a href="#docs/bi-connectivity">See BI setup guides</a>
          </Button>
        </div>
      </Section>

      {/* Browse & Preview */}
      <Section id="browse" className="py-12">
        <SectionHeader
          title="Browse & Preview"
          subtitle="End-to-end catalog explorer with Iceberg details and data previews."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<Layers className="h-5 w-5" />}
            title="End-to-end navigation"
            body="Catalog → Namespace → Table / Fileset → Files, with permissions and audit."
          />
          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Iceberg details"
            body="Schemas, snapshots, properties, partition/sort specs, and operations history."
          />
          <FeatureCard
            icon={<Database className="h-5 w-5" />}
            title="Data preview"
            body="Preview CSV, JSON, Parquet, ORC, and Avro with schema explorer and sampling."
          />
          <FeatureCard
            icon={<Sparkles className="h-5 w-5" />}
            title="Tagging & Discovery"
            body="Search across catalogs with business tags and keywords; quickly find tables, filesets, and views."
          />
        </div>
      </Section>

      {/* Architecture */}
      <Section id="architecture" className="py-12">
        <SectionHeader title="Architecture at a glance" subtitle="Control-Plane · Data-Plane · Agent-Plane" />
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
                <ShieldIcon /> Control-Plane
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-300 space-y-2">
              <Bullet>Metalake (single source of truth)</Bullet>
              <Bullet>RBAC, SSO (OIDC), audit</Bullet>
              <Bullet>Catalog Registry & Policies</Bullet>
              <Bullet>Secrets via Infisical / cloud KMS</Bullet>
            </CardContent>
          </Card>

          <FeatureCard
            icon={<Server className="h-5 w-5" />}
            title="Data-Plane"
            body={
              <>
                <Bullet>Compute Profiles: Connect / Jobs / Streams</Bullet>
                <Bullet>Targets: Kubernetes (EKS &amp; on-prem; GKE/AKS roadmap), AWS EC2, EMR, EMR on EKS</Bullet>
                <Bullet>Right-sizing &amp; cost controls</Bullet>
              </>
            }
            asCard
          />

          <FeatureCard
            icon={<GitBranch className="h-5 w-5" />}
            title="Agent-Plane"
            body={
              <>
                <Bullet>Cazpian AI guidance &amp; runbooks</Bullet>
                <Bullet>Embeddings (pgvector) for docs &amp; metrics</Bullet>
                <Bullet>Recommendations &amp; smart tooling</Bullet>
              </>
            }
            asCard
          />
        </div>

        <div className="text-center mt-6">
          <Button variant="outline" asChild>
            <a href="#docs">Read the Architecture guide</a>
          </Button>
        </div>
      </Section>

      {/* Use cases */}
      <Section id="use-cases" className="py-12">
        <SectionHeader title="Use cases" subtitle="What teams build with Cazpian" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Self-service Analytics Workspaces", desc: "Always-on Spark Connect with governed access and audit." },
            { title: "Batch & Streaming Pipelines", desc: "Spark submit jobs and structured streaming on your cloud." },
            { title: "Iceberg Governance & Maintenance", desc: "Policy-driven compaction, snapshot/orphan expiry, property enforcement." },
            { title: "Cost Optimization & Right-Sizing", desc: "Profiles, hints, stop/hibernate/resume for predictable spend." },
            { title: "Multi-Catalog Unification", desc: "Polaris/Gravitino alongside Glue/Hive/Postgres/MySQL, with tagging and global search." },
            { title: "AI Agents & Agent Studio", desc: "Text-to-SQL, embeddings, dynamic agents; MCP integrations and automated runbooks." },
          ].map((u, i) => (
            <Card key={i} className="bg-white/[0.04] border-white/10 rounded-2xl">
              <CardHeader>
                <CardTitle className="text-white text-base sm:text-lg font-semibold">{u.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300">{u.desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Momentum / Social proof */}
      <Section id="changelog" className="py-12">
        <div className="rounded-3xl border border-white/10 p-6 bg-gradient-to-br from-white/[0.03] to-white/[0.01]">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">We ship fast</h3>
              <p className="mt-2 text-slate-300">
                Follow our changelog for weekly improvements to compute profiles, catalog integrations, and governance.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild><a href="#start">Start Free</a></Button>
                <Button variant="secondary" className="border border-white/10" asChild><a href="#demo">Book a Demo</a></Button>
              </div>
            </div>
            <div className="md:col-span-1">
              <ul className="text-sm text-slate-300 space-y-2 list-disc list-inside">
                <li>New: Polaris + DuckDB quickstart</li>
                <li>Improved: Right-size hints for EC2</li>
                <li>Beta: Streaming profiles for Connect</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section id="start" className="py-16">
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to launch governed Spark &amp; Iceberg?
          </h3>
          <p className="mt-2 text-slate-300">
            Open-standards · Spark Connect &amp; Submit · Iceberg-native Governance
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button size="lg" asChild><a href="#signup">Start Free</a></Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              asChild
            >
              <a href="#demo">Book a Demo</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <Section className="grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">cazpian</span>
            </div>
            <p className="text-slate-400">Self-hosted (on-prem or cloud) or SaaS — your choice.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1 text-slate-300">
              <li><a href="#product" className="hover:text-white">Compute</a></li>
              <li><a href="#product" className="hover:text-white">Catalogs</a></li>
              <li><a href="#product" className="hover:text-white">Governance</a></li>
              <li><a href="#product" className="hover:text-white">Agents</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-slate-300">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#changelog" className="hover:text-white">Changelog</a></li>
              <li><a href="#security" className="hover:text-white">Security</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul className="space-y-1 text-slate-300">
              <li><a href="#docs" className="hover:text-white">Docs</a></li>
              <li><a href="#blog" className="hover:text-white">Blog</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#status" className="hover:text-white">Status</a></li>
            </ul>
          </div>
        </Section>
        <Section className="pt-6 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Cazpian. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#terms" className="hover:text-slate-300">Terms</a>
            <a href="#privacy" className="hover:text-slate-300">Privacy</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}

/* --- Small helpers --- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1">
      <Check className="h-4 w-4 text-emerald-400" />
      {children}
    </span>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  asCard,
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  body: React.ReactNode;
  asCard?: boolean;
}) {
  if (asCard) {
    return (
      <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
            {icon} {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-slate-300">{body}</CardContent>
      </Card>
    );
  }
  return (
    <Card className="bg-white/[0.04] border-white/10 rounded-2xl">
      <CardHeader>
        <CardTitle className="text-white text-base sm:text-lg font-semibold flex items-center gap-2">
          {icon} {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-slate-300">{body}</CardContent>
    </Card>
  );
}

function SectionHeader({
  title,
  subtitle,
}: {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-300">{subtitle}</p> : null}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span>{children}</span>
    </div>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-white"
    >
      <path d="M12 2l7 4v6c0 5-3.5 9.3-7 10-3.5-.7-7-5-7-10V6l7-4z" />
    </svg>
  );
}
