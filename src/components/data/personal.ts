import { PersonalInfo, Education, SkillSet } from '../../lib/types';

export const personalInfo: PersonalInfo = {
  name: "Arpit Prajapat",
  role: "SDE II - Backend Engineer",
  one_liner: "Engineer passionate about turning complex systems into engines of growth and performance.",
  contact: {
    email: "arpitp1712@gmail.com",
    github: "https://github.com/akprajapat",
    linkedin: "https://www.linkedin.com/in/arpit-prajapat-9988881b3",
    website: "https://example.com"
  },
  about: {
    paragraphs: ["As a backend engineer with a B.Tech in Computer Science from IIT Bombay (AIR 46), I specialize in architecting scalable, resilient systems that drive user growth and operational efficiency",
      "Over 2+ years at Apna.co (progressing from SDE I to SDE II in Bengaluru), I've built and optimized Golang microservices, distributed data pipelines, and real-time processing systems leveraging Kafka, Redis, Cassandra, Elasticsearch, and GCP (BigQuery, Cloud Storage, Cloud Functions, Cloud Scheduler) to deliver 20-60% performance gains across critical services.",
       "I'm passionate about low-latency architectures, fault-tolerant design, and AI-assisted infrastructure (e.g., leveraging LLMs for automated scaling and intelligent monitoring)"
    ],
    contributions: [
      {
        title: "SEO & Traffic Optimization",
        description: "Automated XML sitemap generation and async URL processing using Redis, BigQuery, Celery, and GCS\nBoosted organic rankings by 25% and increased overall traffic by 45%"
      },
      {
        title: "Security & Reliability",
        description: "Implemented Redis-based OTP rate limiting to block 60% of malicious requests\nBuilt multi-SMS provider integrations\nReduced latency by 30%, costs by 20%, and improved reliability by 25%"
      },
      {
        title: "Seamless Authentication",
        description: "Integrated Truecaller SDK for OTP-less logins (40% faster)\nImplemented Vodafone Idea AES/SHA-1 secure authentication\nDrove 15–25% user growth through smoother onboarding"
      },
      {
        title: "Microservice Migrations",
        description: "Led migration of Job-Search from Django to Gin (Golang) using Redis and Elasticsearch\nCut response times by 60%\nRebuilt Job-Feed on Cassandra, Redis, and Kafka\nReduced latency by 50%"
      },
      {
        title: "Data-Driven Insights",
        description: "Developed Metabase dashboards for sitemap analytics\nAccelerated business decisions by 40%"
      }
    ],
    finally:"Currently seeking SDE II roles in high-scale backend environments focused on performance, reliability, and distributed systems innovation."
  }

};

export const education: Education = {
  institution: "Indian Institute of Technology, Bombay",
  duration: "July 2017 – May 2021",
  degree: "B.Tech in Computer Science and Engineering",
  achievements: [
    "Secured All India Rank 46 in JEE Advanced (2.2 lakh candidates)",
    "Secured All India Rank 244 in JEE Mains (1.2 million candidates)"
  ]
};

export const skills: SkillSet = {
  languages: {
    name: "Programming Languages",
  skills: ["Golang", "Python", "TypeScript", "SQL"]
  },
  frameworks: {
    name: "Frameworks",
  skills: ["Gin (Golang)", "Django", "FastAPI", "React"]
  },
  databases: {
    name: "Databases & Storage",
  skills: ["PostgreSQL", "Redis", "Elasticsearch", "Cassandra", "BigQuery", "MongoDB"]
  },
  technologies: {
    name: "Technologies & Infrastructure",
  skills: ["Kafka", "GCP", "Docker", "Nginx", "Celery", "RabbitMQ", "PubSub"]
  },
  tools: {
    name: "Tools & Platforms",
  skills: ["Git", "Jenkins", "Datadog", "Sentry", "Postman", "Jira", "Google Analytics", "Mixpanel"]
  }
};
