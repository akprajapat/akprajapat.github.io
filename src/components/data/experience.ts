import { Experience } from '../../lib/types';

export const experiences: Experience[] = [
  {
    "company": "OceanFriends.ai (US Startup)",
    "role": "Software Engineer (Contract)",
    "duration": "Feb 2026 – Mar 2026",
    "location": "Remote",
    "achievements": [
      "Built a multi-stage pipeline leveraging LLM-generated intent from predefined metrics and dimensions to convert natural language into validated SQL, ensuring accuracy, security, and minimal hallucination.",
      "Developed a Python analytics layer for time-series anomaly detection, forecasting, and period-over-period comparisons, enabling LLM-driven actionable insights."
    ]
  },
  {
    "company": "Independent Quantitative Analysis & Systems Exploration",
    "role": "Research & Systems Exploration",
    "duration": "Nov 2022 – Jan 2026",
    "location": "Remote, India",
    "achievements": [
      "Researched price behavior, liquidity, and execution dynamics in Indian equity and cryptocurrency markets.",
      "Evaluated rule-based trading strategies using historical data and manual backtesting approaches.",
      "Analyzed architecture of automated trading systems, including data ingestion, signal generation, and execution workflows."
    ]
  },
  {
    company: "Apnatime Tech",
    role: "Software Development Engineer II",
    duration: "Jun 2022 – Oct 2022",
    location: "Bengaluru, India",
    achievements: [
      "Led collaboration with Vodafone Idea to integrate secure user authentication using AES and SHA-1, resulting in 15% user growth.",
      "Migrated Job-Search from Django to Gin-based Golang microservice with Redis and Elasticsearch, reducing response time by 60%.",
      "Rebuilt Job-Feed as a Gin-based Golang microservice using Cassandra, Redis, and Kafka, cutting latency by 50%.",
      "Built a Metabase dashboard to analyze sitemap data, speeding business decision-making by 40%."
    ]
  },
  {
    company: "Apnatime Tech",
    role: "Software Development Engineer I",
    duration: "Jun 2021 – Jun 2022",
    location: "Remote | Bengaluru, India",
    achievements: [
      "Automated XML sitemap generation using Redis, BigQuery, and GCS, improving rankings by 25% and traffic by 20%.",
      "Created async system for SEO-optimized URLs using Redis, BigQuery, Celery, increasing organic traffic by 25%.",
      "Implemented OTP rate-limiting using Redis and IP rules, blocking 60% of malicious requests.",
      "Integrated multiple SMS providers for OTP delivery, cutting latency by 30%, increasing reliability by 25%, and reducing cost by 20%.",
      "Integrated Truecaller SDK for OTP-less login, reducing login time by 40% and improving signups by 25%."
    ]
  }
];
