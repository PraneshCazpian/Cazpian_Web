import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart3, 
  Users, 
  Brain, 
  Zap, 
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Database,
  Shield,
  Globe,
  Cloud,
  Server,
  Lock,
  Share2,
  Wifi,
  Layers,
  BookOpen,
  Target,
  Sparkles,
  Search,
  Filter,
  X,
  Grid3X3,
  List,
  ExternalLink,
  Clock,
  TrendingUp,
  Star,
  Eye,
  Maximize2
} from 'lucide-react';
import SVGIllustration from '../components/SVGIllustration';

interface UseCase {
  id: string;
  icon: React.ReactNode;
  title: string;
  category?: string;
  tags?: string[];
  complexity?: string;
  timeToValue?: string;
  popularity?: number;
  shortSummary: string;
  deepDive: string;
  capabilities: string[];
  architectureHighlights: string[];
  example: string;
  successMetrics: string[];
}

const SolutionsByUseCase: React.FC = () => {
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);

  const useCases = [
    {
      id: 'data-warehousing-analytics',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Data Warehousing & Analytics',
      category: 'Analytics',
      tags: ['data warehousing', 'analytics', 'real-time', 'governance'],
      complexity: 'Enterprise',
      timeToValue: '2-4 weeks',
      popularity: 5,
      shortSummary: 'Unify all enterprise data into a governed hub for lightning-fast real-time and historical analytics — without brittle ETL or silos.',
      deepDive: 'Combines Iceberg/Delta on object storage with columnar storage, vectorized execution, and query acceleration. Delivers sub-second queries on TB–PB datasets while enforcing fine-grained governance.',
      capabilities: [
        'Sub-second dashboards & ad-hoc queries',
        'Blend structured & semi-structured data without duplication',
        'Semantic layer for standardized metrics',
        'Serve BI, AI/ML, and apps from the same source'
      ],
      architectureHighlights: [
        'Iceberg/Delta formats, columnar layouts',
        'Reflections/materialized views for acceleration',
        'Row/column-level security, masking, RBAC',
        'Native ODBC/JDBC/Arrow Flight connectivity'
      ],
      example: 'Retail chain integrates POS, e-commerce, and supply chain data for daily price optimization.',
      successMetrics: [
        'Time-to-insight ↓ 80%',
        'Dashboard latency <1s',
        'Certified datasets ↑ 60%',
        'Query cost ↓ 35%'
      ]
    },
    {
      id: 'etl-data-integration',
      icon: <Layers className="h-8 w-8 text-indigo-600" />,
      title: 'ETL & Data Integration',
      category: 'Integration',
      tags: ['ETL', 'data integration', 'low-code', 'pipelines'],
      complexity: 'Mid-Market',
      timeToValue: '1-2 weeks',
      popularity: 4,
      shortSummary: 'Ingest, transform, and curate data from hundreds of sources with low-code orchestration.',
      deepDive: 'Drag-and-drop builder supports both batch and streaming ingestion with CDC for freshness. Schema validation and anomaly alerts ensure trust.',
      capabilities: [
        'Low-code pipelines with reusable transforms',
        'Data quality rules & alerts',
        'CDC-based incremental updates',
        'SLA enforcement with retries'
      ],
      architectureHighlights: [
        'Parallel execution framework',
        'Policy-aware staging zones',
        'Central logging, metrics, and autoscaling'
      ],
      example: 'Healthcare provider harmonizes EHR, claims, and labs for patient outcome analytics.',
      successMetrics: [
        'Pipeline runtime ↓ 40%',
        'Failed jobs ↓ 75%',
        'Freshness ↑ from hours to minutes',
        'DQ pass-rate ↑ 90%'
      ]
    },
    {
      id: 'business-intelligence',
      icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
      title: 'Business Intelligence (BI)',
      category: 'Analytics',
      tags: ['BI', 'dashboards', 'real-time', 'reporting'],
      complexity: 'All Sizes',
      timeToValue: '1-3 weeks',
      popularity: 5,
      shortSummary: 'Live, governed data in your BI tool — no extracts, no stale reports.',
      deepDive: 'Direct live connections eliminate extract lag. Semantic layer standardizes metrics; query pushdown & caching keep performance high.',
      capabilities: [
        'Native connections to Power BI/Tableau/Looker/Qlik',
        'Governed semantic layer',
        'Row/column-level masking',
        'Real-time alerts & subscriptions'
      ],
      architectureHighlights: [
        'Pushdown query execution',
        'Usage telemetry for optimization',
        'Adaptive caching & acceleration'
      ],
      example: 'Media company blends revenue & audience metrics for live programming optimization.',
      successMetrics: [
        'Query latency ↓ 65%',
        'Extract jobs ↓ 100%',
        'BI adoption ↑ 45%',
        'Report maintenance ↓ 50%'
      ]
    },
    {
      id: 'machine-learning-data-science',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: 'Machine Learning & Data Science',
      shortSummary: 'Build, train, and deploy AI/ML models directly on lakehouse data.',
      deepDive: 'Versioned feature store, GPU/CPU scaling, MLflow integration, and secure data access speed the ML lifecycle.',
      capabilities: [
        'JupyterLab, R, Spark integration',
        'Batch & streaming inference',
        'Experiment tracking & registry',
        'Feature governance'
      ],
      architectureHighlights: [
        'Feature lineage & versioning',
        'Secure execution environments'
      ],
      example: 'Bank deploys fraud detection model scoring in <50ms.',
      successMetrics: [
        'Time to first model ↓ 70%',
        'Inference latency <50ms',
        'Feature reuse ↑ 50%',
        'AUC ↑ 15%'
      ]
    },
    {
      id: 'real-time-analytics-streaming',
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Real-Time Analytics / Streaming',
      shortSummary: 'Turn events into decisions within seconds.',
      deepDive: 'Stream ingestion from Kafka, Pulsar, CDC sources. Incremental processing with windowed aggregations & ML scoring.',
      capabilities: [
        'Unified batch + streaming',
        'Anomaly detection',
        'Live dashboards & triggers'
      ],
      architectureHighlights: [
        'Streaming materialized views',
        'Event-driven processing'
      ],
      example: 'Telecom detects outages and triggers repairs in real time.',
      successMetrics: [
        'Latency ↓ 90%',
        'MTTR ↓ 60%',
        'Alert precision ↑ 30%'
      ]
    },
    {
      id: 'data-governance',
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Data Governance',
      shortSummary: 'Security and compliance built-in.',
      deepDive: 'Policy-as-code for RBAC, ABAC, masking, consent, and retention.',
      capabilities: [
        'Sensitive data tagging',
        'Audit-ready lineage',
        'Approval workflows'
      ],
      architectureHighlights: [
        'Git-versioned rules',
        'Unified governance for BI & ML'
      ],
      example: 'Hospital enforces HIPAA masking & consent org-wide.',
      successMetrics: [
        'Violations ↓ 80%',
        'Audit prep ↓ 50%',
        'Coverage ↑ 40%'
      ]
    },
    {
      id: 'data-lake-integration',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Data Lake Integration',
      shortSummary: 'Bring structured, semi-structured, and unstructured data into governed tables.',
      deepDive: 'Auto-crawls files in Parquet, ORC, JSON. Schema inference, evolution, and partition optimization.',
      capabilities: [
        'File compaction & tiering',
        'Schema evolution handling',
        'Query raw & curated data'
      ],
      architectureHighlights: [
        'Iceberg/Delta ACID compliance',
        'Hot/warm/cold storage tiers'
      ],
      example: 'Tech firm queries app logs for real-time RCA.',
      successMetrics: [
        'Onboarding ↓ 50%',
        'Small-file ratio ↓ 70%',
        'Query scan bytes ↓ 30%'
      ]
    },
    {
      id: 'open-data-sharing',
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: 'Open Data Sharing',
      shortSummary: 'Share live datasets securely without copies.',
      deepDive: 'Column/row-level sharing, time-travel access, and policy inheritance.',
      capabilities: [
        'Fine-grained access',
        'Cross-cloud consumption',
        'Versioned data sharing'
      ],
      architectureHighlights: [
        'Arrow Flight/Iceberg-based sharing',
        'Unified audit'
      ],
      example: 'Bank streams risk metrics to regulators.',
      successMetrics: [
        'Copies eliminated ↑ 100%',
        'Partner onboarding ↓ 60%',
        'SLA compliance ↑ 25%'
      ]
    },
    {
      id: 'regulatory-compliant-data-management',
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: 'Regulatory-Compliant Data Management',
      shortSummary: 'Meet GDPR, HIPAA, CCPA, SOX by design.',
      deepDive: 'Automates classification, retention, legal holds, and subject access requests.',
      capabilities: [
        'DPIA templates',
        'Right-to-erasure workflows',
        'Immutable audit'
      ],
      architectureHighlights: [
        'Policy packs',
        'Encryption at rest/in transit'
      ],
      example: 'FinServ automates AML reporting.',
      successMetrics: [
        'Audit findings ↓ 90%',
        'Compliance hours ↓ 40%',
        'Coverage ↑ 50%'
      ]
    },
    {
      id: 'hybrid-multi-cloud-integration',
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: 'Hybrid / Multi-Cloud Integration',
      shortSummary: 'Run anywhere, govern centrally.',
      deepDive: 'Cross-cloud queries, data residency, and cost-aware routing.',
      capabilities: [
        'Multi-region compute',
        'Federated catalog',
        'Data residency enforcement'
      ],
      architectureHighlights: [
        'Peered networks',
        'KMS integration'
      ],
      example: 'Bank keeps EU data in-region while centralizing analytics.',
      successMetrics: [
        'Egress cost ↓ 35%',
        'Cross-region latency ↓ 40%',
        'Compliance 100%'
      ]
    },
    {
      id: 'data-migration',
      icon: <Server className="h-8 w-8 text-indigo-600" />,
      title: 'Data Migration',
      shortSummary: 'Migrate from legacy platforms to a modern, open lakehouse with zero downtime.',
      deepDive: 'Cazpian handles bulk data loads and CDC-based incremental sync to ensure smooth cutover. Automated schema reconciliation and validation minimize risk.',
      capabilities: [
        'High-throughput parallel copy',
        'CDC for minimal downtime',
        'Side-by-side validation and rollback points'
      ],
      architectureHighlights: [
        'Checksums, referential integrity checks',
        'Metadata sync to new catalogs'
      ],
      example: 'Manufacturer moves from Netezza to Iceberg in a weekend cutover.',
      successMetrics: [
        'Downtime ↓ 90%',
        'Validation pass rate ↑ 98%',
        'Migration elapsed time ↓ 40%'
      ]
    },
    {
      id: 'ecommerce-analytics',
      icon: <ShoppingCart className="h-8 w-8 text-indigo-600" />,
      title: 'E-commerce Analytics',
      shortSummary: 'Track journeys, optimize conversions, and personalize at scale.',
      deepDive: 'Integrates clickstream, product, and marketing data for funnel analysis, churn modeling, and recommender features.',
      capabilities: [
        'Sessionization & funnel metrics',
        'CLV and churn models',
        'Real-time inventory and price signals'
      ],
      architectureHighlights: [
        'Identity stitching',
        'Marketing source connectors'
      ],
      example: 'Marketplace syncs inventory and updates partner channels instantly.',
      successMetrics: [
        'Conversion rate ↑ 15%',
        'Stockouts ↓ 40%',
        'Ad ROAS ↑ 25%'
      ]
    },
    {
      id: 'marketing-analytics',
      icon: <Target className="h-8 w-8 text-indigo-600" />,
      title: 'Marketing Analytics',
      shortSummary: 'Attribute campaigns, forecast ROI, and optimize spend with live data.',
      deepDive: 'Blends adtech, web, CRM, and email data with attribution models, cohorts, and budget forecasting.',
      capabilities: [
        'Multi-touch attribution',
        'LTV modeling',
        'Cohort analysis'
      ],
      architectureHighlights: [
        'Connectors for GA4, Ads, Salesforce',
        'Privacy-safe segmentation'
      ],
      example: 'D2C brand reallocates budget mid-campaign based on live ROI.',
      successMetrics: [
        'CPA ↓ 20%',
        'ROI ↑ 18%',
        'Campaign insight time ↓ 50%'
      ]
    },
    {
      id: 'self-service-bi',
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Self-Service BI',
      shortSummary: 'Empower business teams to explore data independently, safely.',
      deepDive: 'Governed data catalog with previews, popularity metrics, and trust badges. NLQ and guided SQL accelerate adoption.',
      capabilities: [
        'Searchable catalog with filters',
        'Guardrails for security & quota',
        'Built-in collaboration tools'
      ],
      architectureHighlights: [
        'Role-aware search',
        'Lineage visibility'
      ],
      example: 'Nonprofit managers track donor impact without IT tickets.',
      successMetrics: [
        'Self-serve queries ↑ 60%',
        'IT backlog ↓ 45%',
        'Analyst satisfaction ↑ 25%'
      ]
    },
    {
      id: 'data-mesh-data-fabric',
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Data Mesh & Data Fabric',
      shortSummary: 'Decentralize ownership, centralize interoperability.',
      deepDive: 'Domain teams publish certified data products into a shared semantic layer, with governance applied consistently.',
      capabilities: [
        'Product registry & SLAs',
        'Cross-domain lineage',
        'Federated query execution'
      ],
      architectureHighlights: [
        'Templates for data products',
        'Metadata federation'
      ],
      example: 'Enterprise creates marketing, sales, finance products consumed org-wide.',
      successMetrics: [
        'Time to new product ↓ 40%',
        'Reuse rate ↑ 35%',
        'Cross-domain defect rate ↓ 20%'
      ]
    },
    {
      id: 'genai-unstructured-data-analytics',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: 'GenAI & Unstructured Data Analytics',
      shortSummary: 'Extract insight from text, audio, video, and images with AI.',
      deepDive: 'Integrates OCR, transcription, vector search, and LLM-powered RAG into governed pipelines.',
      capabilities: [
        'Semantic search over vectorized data',
        'Summarization, sentiment, classification',
        'Guardrail-based retrieval for compliance'
      ],
      architectureHighlights: [
        'Vector indexes tied to source tables',
        'Prompt lineage and version control'
      ],
      example: 'Support analytics mines call transcripts for churn risk signals.',
      successMetrics: [
        'Search success ↑ 25%',
        'Handle time ↓ 15%',
        'CSAT ↑ 12%'
      ]
    },
    {
      id: 'secure-data-exchange',
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Secure Data Exchange',
      shortSummary: 'Encrypted, policy-driven data transfer with full auditability.',
      deepDive: 'Supports tokenized access, dynamic masking, and geofenced queries for sensitive datasets.',
      capabilities: [
        'Exchange contracts',
        'Detailed audit logging',
        'Federated catalog'
      ],
      architectureHighlights: [
        'HSM/KMS key management',
        'Policy enforcement at query time'
      ],
      example: 'Supplier shares BOM and QA data under masking rules.',
      successMetrics: [
        'Security incidents ↓ 95%',
        'Partner onboarding ↓ 40%',
        'Contract violations ↓ 80%'
      ]
    },
    {
      id: 'real-time-data-access',
      icon: <Zap className="h-8 w-8 text-indigo-600" />,
      title: 'Real-Time Data Access',
      shortSummary: 'Deliver the freshest data instantly to apps and analytics.',
      deepDive: 'CDC-based ingestion and in-memory acceleration ensure sub-second freshness SLAs.',
      capabilities: [
        'Join live + historical data in one query',
        'Virtualize APIs and queues',
        'Back-pressure and retry handling'
      ],
      architectureHighlights: [
        'Incremental snapshots',
        'Virtualized access layer'
      ],
      example: 'Ops sees instant order/inventory status for fulfillment.',
      successMetrics: [
        'Data lag ↓ 90%',
        'Freshness SLA ↑ 100%'
      ]
    },
    {
      id: 'real-time-iot-analytics',
      icon: <Wifi className="h-8 w-8 text-indigo-600" />,
      title: 'Real-Time / IoT Analytics',
      shortSummary: 'Analyze sensor and device data as it\'s generated.',
      deepDive: 'Supports windowed stats, geospatial joins, and predictive maintenance triggers.',
      capabilities: [
        'Geospatial analytics',
        'Device metadata joins',
        'Edge-to-lakehouse ingestion'
      ],
      architectureHighlights: [
        'Streaming materialized views',
        'Edge agents feeding Kafka'
      ],
      example: 'Factory predicts failures, reducing downtime.',
      successMetrics: [
        'Unplanned outages ↓ 40%',
        'Maintenance cost ↓ 20%'
      ]
    },
    {
      id: 'real-time-data-sharing',
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: 'Real-Time Data Sharing',
      shortSummary: 'Share live data feeds with partners & apps instantly.',
      deepDive: 'CDC- and stream-backed share tables with versioned replay.',
      capabilities: [
        'Exactly-once delivery',
        'Versioned access',
        'Policy inheritance'
      ],
      architectureHighlights: [
        'Share endpoints via Kafka/PubSub',
        'Cross-cloud support'
      ],
      example: 'Retail shares live inventory to marketplaces.',
      successMetrics: [
        'Partner integration time ↓ 50%',
        'Sync lag ↓ 80%'
      ]
    },
    {
      id: 'data-lake-analytics',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'Data Lake Analytics',
      shortSummary: 'Run warehouse-grade analytics directly on open lake storage.',
      deepDive: 'Interactive SQL with support for JSON, time-series, and geospatial.',
      capabilities: [
        'Batch + streaming queries',
        'Automatic reflections/materializations',
        'Cost-based optimization'
      ],
      architectureHighlights: [
        'Vectorized execution',
        'Adaptive caching'
      ],
      example: 'Retail runs basket affinity & promo lift analysis from lake.',
      successMetrics: [
        'Query time ↓ 60%',
        'Cache hit rate ↑ 25%'
      ]
    },
    {
      id: 'logical-data-warehouse-fabric',
      icon: <Layers className="h-8 w-8 text-indigo-600" />,
      title: 'Logical Data Warehouse / Fabric',
      shortSummary: 'Unify many sources into a virtual analytics layer.',
      deepDive: 'Define global schemas, virtual tables, and cache hot paths without moving data.',
      capabilities: [
        'CDC-based freshness',
        'Virtualized joins',
        'Semantic layer governance'
      ],
      architectureHighlights: [
        'Pushdown & adaptive caching',
        'Query plan monitoring'
      ],
      example: 'Holding company unifies finance across subsidiaries without migration.',
      successMetrics: [
        'Onboarding time ↓ 50%',
        'Data duplication ↓ 100%'
      ]
    },
    {
      id: 'advanced-data-science-workbench',
      icon: <Brain className="h-8 w-8 text-indigo-600" />,
      title: 'Advanced Data Science Workbench',
      shortSummary: 'Collaborative, reproducible data science in a secure environment.',
      deepDive: 'Versioned notebooks, secure service accounts, and experiment templates built into the lakehouse.',
      capabilities: [
        'A/B testing orchestration',
        'Feature pipeline reuse',
        'Experiment lineage'
      ],
      architectureHighlights: [
        'Secure secrets management',
        'End-to-end lineage'
      ],
      example: 'Life sciences teams analyze genomic + trial data reproducibly.',
      successMetrics: [
        'Experiment cycle time ↓ 40%',
        'Model reuse ↑ 30%'
      ]
    },
    {
      id: 'general-purpose-data-storage-query',
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: 'General-Purpose Data Storage & Query',
      shortSummary: 'Store anything, query everything — without heavy ops.',
      deepDive: 'Unified storage for structured, semi-structured, and unstructured data with SQL, APIs, and AI-driven assistants.',
      capabilities: [
        'Lifecycle policies & tiering',
        'Archival & restore',
        'Cost governance'
      ],
      architectureHighlights: [
        'Iceberg tables',
        'Compaction & clustering'
      ],
      example: 'Enterprise consolidates logs/configs into one query layer.',
      successMetrics: [
        'Storage cost ↓ 30%',
        'Restore time ↓ 50%'
      ]
    },
    {
      id: 'master-data-management',
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: 'Master Data Management (MDM)',
      shortSummary: 'Golden records for customers, products, and suppliers — trusted everywhere.',
      deepDive: 'Match/merge with survivorship rules, stewardship workflows, and API distribution.',
      capabilities: [
        'Fuzzy matching',
        'Approval workflows',
        'Enrichment from external sources'
      ],
      architectureHighlights: [
        'Versioned golden tables',
        'Policy-aware sharing'
      ],
      example: 'Manufacturer harmonizes part/supplier masters to fix BOM errors.',
      successMetrics: [
        'Duplicate rate ↓ 70%',
        'Match accuracy ↑ 25%'
      ]
    }
  ];

  // For the remaining use cases, I'll add category metadata inline
  const enhancedUseCases = useCases.map((useCase) => {
    // Add missing metadata for the remaining use cases
    if (!useCase.category) {
      const categoryMap: Record<string, {
        category: string;
        tags: string[];
        complexity: string;
        timeToValue: string;
        popularity: number;
      }> = {
        'machine-learning-data-science': { category: 'AI/ML', tags: ['ML', 'AI', 'data science', 'models'], complexity: 'Enterprise', timeToValue: '2-6 weeks', popularity: 4 },
        'real-time-analytics-streaming': { category: 'Analytics', tags: ['real-time', 'streaming', 'analytics'], complexity: 'Mid-Market', timeToValue: '2-4 weeks', popularity: 4 },
        'data-governance': { category: 'Governance', tags: ['governance', 'security', 'compliance'], complexity: 'Enterprise', timeToValue: '3-8 weeks', popularity: 3 },
        'data-lake-integration': { category: 'Integration', tags: ['data lake', 'integration', 'files'], complexity: 'All Sizes', timeToValue: '1-3 weeks', popularity: 4 },
        'open-data-sharing': { category: 'Sharing', tags: ['data sharing', 'collaboration'], complexity: 'Enterprise', timeToValue: '2-4 weeks', popularity: 3 },
        'regulatory-compliant-data-management': { category: 'Governance', tags: ['compliance', 'GDPR', 'HIPAA'], complexity: 'Enterprise', timeToValue: '4-12 weeks', popularity: 3 },
        'hybrid-multi-cloud-integration': { category: 'Infrastructure', tags: ['multi-cloud', 'hybrid'], complexity: 'Enterprise', timeToValue: '3-6 weeks', popularity: 2 },
        'data-migration': { category: 'Migration', tags: ['migration', 'modernization'], complexity: 'Enterprise', timeToValue: '4-16 weeks', popularity: 3 },
        'ecommerce-analytics': { category: 'Industry', tags: ['e-commerce', 'retail', 'analytics'], complexity: 'Mid-Market', timeToValue: '2-4 weeks', popularity: 4 },
        'marketing-analytics': { category: 'Industry', tags: ['marketing', 'attribution', 'ROI'], complexity: 'All Sizes', timeToValue: '1-3 weeks', popularity: 4 },
        'self-service-bi': { category: 'Analytics', tags: ['self-service', 'BI', 'catalog'], complexity: 'All Sizes', timeToValue: '1-2 weeks', popularity: 5 },
        'data-mesh-data-fabric': { category: 'Architecture', tags: ['data mesh', 'data fabric'], complexity: 'Enterprise', timeToValue: '6-16 weeks', popularity: 2 },
        'genai-unstructured-data-analytics': { category: 'AI/ML', tags: ['GenAI', 'unstructured data', 'AI'], complexity: 'Enterprise', timeToValue: '3-8 weeks', popularity: 4 },
        'secure-data-exchange': { category: 'Sharing', tags: ['data exchange', 'security'], complexity: 'Enterprise', timeToValue: '2-6 weeks', popularity: 2 },
        'real-time-data-access': { category: 'Analytics', tags: ['real-time', 'access', 'APIs'], complexity: 'Mid-Market', timeToValue: '1-3 weeks', popularity: 3 },
        'real-time-iot-analytics': { category: 'Industry', tags: ['IoT', 'real-time', 'sensors'], complexity: 'Enterprise', timeToValue: '3-6 weeks', popularity: 3 },
        'real-time-data-sharing': { category: 'Sharing', tags: ['real-time', 'data sharing'], complexity: 'Enterprise', timeToValue: '2-4 weeks', popularity: 2 },
        'data-lake-analytics': { category: 'Analytics', tags: ['data lake', 'analytics', 'SQL'], complexity: 'All Sizes', timeToValue: '1-4 weeks', popularity: 4 },
        'logical-data-warehouse-fabric': { category: 'Architecture', tags: ['data warehouse', 'virtualization'], complexity: 'Enterprise', timeToValue: '4-8 weeks', popularity: 3 },
        'advanced-data-science-workbench': { category: 'AI/ML', tags: ['data science', 'workbench', 'collaboration'], complexity: 'Enterprise', timeToValue: '2-6 weeks', popularity: 3 },
        'general-purpose-data-storage-query': { category: 'Storage', tags: ['storage', 'query', 'general purpose'], complexity: 'All Sizes', timeToValue: '1-2 weeks', popularity: 4 },
        'master-data-management': { category: 'Governance', tags: ['MDM', 'master data', 'golden records'], complexity: 'Enterprise', timeToValue: '4-12 weeks', popularity: 3 }
      };
      
      const metadata = categoryMap[useCase.id] || { category: 'Other', tags: [], complexity: 'All Sizes', timeToValue: '2-4 weeks', popularity: 3 };
      return { ...useCase, ...metadata };
    }
    return useCase;
  });

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Solutions', count: enhancedUseCases.length },
    { id: 'Analytics', name: 'Analytics & BI', count: enhancedUseCases.filter(uc => uc.category === 'Analytics').length },
    { id: 'AI/ML', name: 'AI & Machine Learning', count: enhancedUseCases.filter(uc => uc.category === 'AI/ML').length },
    { id: 'Integration', name: 'Data Integration', count: enhancedUseCases.filter(uc => uc.category === 'Integration').length },
    { id: 'Governance', name: 'Governance & Security', count: enhancedUseCases.filter(uc => uc.category === 'Governance').length },
    { id: 'Industry', name: 'Industry Solutions', count: enhancedUseCases.filter(uc => uc.category === 'Industry').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: enhancedUseCases.filter(uc => uc.category === 'Infrastructure').length },
    { id: 'Sharing', name: 'Data Sharing', count: enhancedUseCases.filter(uc => uc.category === 'Sharing').length }
  ];

  // Filtered and searched use cases
  const filteredUseCases = useMemo(() => {
    let filtered = enhancedUseCases;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(useCase => useCase.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(useCase => 
        useCase.title.toLowerCase().includes(term) ||
        useCase.shortSummary.toLowerCase().includes(term) ||
        useCase.tags?.some((tag: string) => tag.toLowerCase().includes(term)) ||
        useCase.deepDive.toLowerCase().includes(term)
      );
    }
    
    return filtered;
  }, [enhancedUseCases, selectedCategory, searchTerm]);

  const openModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUseCase(null);
  };

  // Enhanced useEffect for animations and keyboard handling
  useEffect(() => {
    // Trigger card animations on mount
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard events for modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900 py-16 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-indigo-200 dark:bg-indigo-800 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-normal opacity-20 animate-float-delayed"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            <div className="text-center lg:text-left space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                25+ Specialized Solutions
              </div>
              
              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Find Your Perfect
                  <span className="block text-indigo-600 dark:text-indigo-400">Data Solution</span>
            </h1>
                <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-none">
                  From data warehousing to AI/ML, discover how Cazpian solves your specific business challenges with purpose-built capabilities and industry-proven results.
            </p>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/book-meeting"
                  className="group bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
              >
                Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solutions"
                  className="group border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 px-8 py-4 rounded-xl hover:bg-indigo-600 hover:text-white dark:hover:text-white transition-all duration-300 font-semibold text-lg"
              >
                View All Solutions
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform inline" />
              </Link>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">25+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Use Cases</div>
            </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Insights</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-indigo-600 dark:text-indigo-400">1-2w</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time to Value</div>
                </div>
              </div>
            </div>
            
            {/* Hero Illustration */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <SVGIllustration 
                  name="data-analysis" 
                  width={500} 
                  height={500}
                  animated={true}
                  hoverEffect={true}
                  className="opacity-90 filter drop-shadow-2xl"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-blue-200 dark:from-indigo-800 dark:to-blue-800 rounded-full opacity-60 animate-pulse blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 rounded-full opacity-60 animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <SVGIllustration name="visual-data" width={48} height={48} className="mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Solutions By Use Cases
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Explore 25+ specialized solutions designed to address your specific data challenges. Use the search and filters below to find the perfect fit for your needs.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search solutions, technologies, or use cases..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:scale-105'
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 text-xs opacity-75">({category.count})</span>
                  </button>
                ))}
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'grid'
                        ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <Grid3X3 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all duration-200 ${
                      viewMode === 'list'
                        ? 'bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-400 shadow-sm'
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                    }`}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
                
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <Filter className="h-4 w-4" />
                  Filters
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Showing <span className="font-semibold text-indigo-600 dark:text-indigo-400">{filteredUseCases.length}</span> of <span className="font-semibold">{enhancedUseCases.length}</span> solutions
                {searchTerm && (
                  <span className="ml-2">
                    for "<span className="font-semibold">{searchTerm}</span>"
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Use Cases Grid/List */}
          <div className={`transition-all duration-500 ${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8' 
              : 'space-y-6'
          }`}>
            {filteredUseCases.map((useCase, index) => (
              <div
                key={useCase.id}
                className={`group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  animateCards ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${viewMode === 'list' ? 'flex items-start gap-6 p-6' : 'p-8'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`
                }}
               >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-20 translate-x-20 blur-xl"></div>
                
                <div className={`relative z-10 ${viewMode === 'list' ? 'flex-shrink-0' : ''}`}>
                  {/* Icon and Metadata */}
                  <div className={`${viewMode === 'list' ? 'mb-0' : 'mb-4'} flex ${viewMode === 'list' ? 'flex-col items-center' : 'items-start justify-between'}`}>
                    <div className={`group-hover:scale-110 transition-transform duration-300 ${viewMode === 'list' ? 'mb-4' : ''}`}>
                    {useCase.icon}
                  </div>
                    
                    {/* Metadata badges */}
                    <div className={`flex flex-wrap gap-1 ${viewMode === 'list' ? 'flex-col items-center' : 'mt-2'}`}>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                        <Clock className="h-3 w-3 mr-1" />
                        {useCase.timeToValue || '2-4 weeks'}
                      </span>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {useCase.complexity || 'All Sizes'}
                      </span>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${
                              i < (useCase.popularity || 3)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 dark:text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`relative z-10 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  {/* Title and Category */}
                  <div className="mb-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className={`font-bold text-gray-900 dark:text-white leading-tight ${viewMode === 'list' ? 'text-lg' : 'text-lg xl:text-xl'}`}>
                    {useCase.title}
                  </h3>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex-shrink-0">
                        {useCase.category || 'Solution'}
                      </span>
                    </div>
                    
                    {/* Tags */}
                    {useCase.tags && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {useCase.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-2 py-1 text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                        {useCase.tags.length > 2 && (
                          <span className="inline-block px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-md">
                            +{useCase.tags.length - 2} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Summary */}
                  <p className={`text-gray-600 dark:text-gray-300 leading-relaxed mb-4 ${viewMode === 'list' ? 'text-sm' : 'text-sm xl:text-base'}`}>
                    {useCase.shortSummary}
                  </p>
                  
                  {/* View Details Button */}
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => openModal(useCase)}
                      className="group/btn w-full flex items-center justify-center gap-2 text-sm font-medium text-indigo-600 hover:text-white dark:text-indigo-400 dark:hover:text-white transition-all duration-200 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-600 dark:hover:bg-indigo-600 px-4 py-3 rounded-lg border border-indigo-200 dark:border-indigo-800 hover:border-indigo-600"
                    >
                      <Eye className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                      <span>View Details</span>
                      <Maximize2 className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredUseCases.length === 0 && (
            <div className="text-center py-16">
              <div className="mb-4">
                <Search className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No solutions found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="cta-grid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cta-grid)" />
          </svg>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500 rounded-full mix-blend-multiply opacity-20 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply opacity-20 animate-float-delayed blur-xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <SVGIllustration name="development" width={80} height={80} className="text-white opacity-90" />
                <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Ready to Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Data Operations?
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Let our experts help you find the perfect solution for your use case and get you started with proven results in just weeks, not months.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link
                  to="/book-meeting"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:-translate-y-1 flex items-center"
                >
                  Schedule a Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="group border-2 border-white/50 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl hover:bg-white/20 hover:border-white transition-all duration-300 font-semibold text-lg"
                >
                  Contact Sales
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform inline" />
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Enterprise Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                  <div className="text-gray-400">Expert Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      {isModalOpen && selectedUseCase && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="flex min-h-full items-start justify-center p-4 py-8">
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] flex flex-col animate-in fade-in-0 slide-in-from-bottom-4 duration-300">
              {/* Header */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                      {selectedUseCase.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {selectedUseCase.title}
                      </h2>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">
                          {selectedUseCase.category || 'Solution'}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300">
                          <Clock className="h-4 w-4 mr-1" />
                          {selectedUseCase.timeToValue || '2-4 weeks'}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          {selectedUseCase.complexity || 'All Sizes'}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X className="h-6 w-6" />
                    </button>
                </div>
              </div>

              {/* Content - Scrollable Area */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-track-gray-100 dark:scrollbar-track-gray-700 scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-500 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-400">
                <div className="space-y-8">
                  {/* Summary */}
                  <div>
                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedUseCase.shortSummary}
                    </p>
                  </div>

                  {/* Tags */}
                  {selectedUseCase.tags && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedUseCase.tags.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-lg"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                         {/* Deep Dive */}
                         <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
                      Deep Dive
                    </h3>
                    <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-xl">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {selectedUseCase.deepDive}
                      </p>
                    </div>
                         </div>
                         
                         {/* Capabilities */}
                         <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedUseCase.capabilities.map((capability: string, capIndex: number) => (
                        <li key={capIndex} className="flex items-start space-x-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-500 transition-colors duration-200">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{capability}</span>
                               </li>
                             ))}
                           </ul>
                         </div>
                         
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                         {/* Architecture Highlights */}
                         <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Layers className="h-5 w-5 text-indigo-600" />
                        Architecture Highlights
                      </h3>
                      <ul className="space-y-3">
                        {selectedUseCase.architectureHighlights.map((highlight: string, archIndex: number) => (
                          <li key={archIndex} className="flex items-start space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                            <div className="w-3 h-3 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 dark:text-gray-300">{highlight}</span>
                               </li>
                             ))}
                           </ul>
                </div>
                         
                         {/* Example */}
                         <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-600" />
                        Real-World Example
                      </h3>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border-l-4 border-purple-400">
                        <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                          {selectedUseCase.example}
                        </p>
                      </div>
                    </div>
              </div>

                         {/* Success Metrics */}
                         <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Success Metrics
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {selectedUseCase.successMetrics.map((metric: string, metricIndex: number) => (
                        <li key={metricIndex} className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl border border-green-200 dark:border-green-800">
                          <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300 font-medium">{metric}</span>
                                                       </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-6 py-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/book-meeting"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    onClick={closeModal}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    onClick={closeModal}
                  >
                    Learn More
                  </Link>
                  <button
                    onClick={closeModal}
                    className="sm:w-auto px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SolutionsByUseCase;
