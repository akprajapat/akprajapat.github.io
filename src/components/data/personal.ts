import { PersonalInfo, Education, SkillSet } from '../../lib/types';

export const personalInfo: PersonalInfo = {
  name: "Arpit Prajapat",
  role: "AI Backend Engineer",
  one_liner: "Engineer passionate about turning complex systems into engines of growth and performance.",
  contact: {
    email: "arpitp1712@gmail.com",
    github: "https://github.com/akprajapat",
    linkedin: "https://www.linkedin.com/in/arpit-prajapat-9988881b3",
    website: "https://example.com"
  },
  about: {
    paragraphs: [
      "Hello, I am Arpit Prajapat an experienced software engineer who specializes in creating scalable backend systems, highly data-centric applications, and products with AI technology.",
      "Graduated from IIT Bombay (AIR 46 in JEE Advanced), with a degree in Computer Science & Engineering . Professional experience spans multiple companies in designing scalable backend systems that prioritize performance, robustness, and results-oriented work.",
      "Designed and implemented LLM-based NLP pipelines and analytics systems with anomaly detection & forecasting functionalities at OceanFriends.ai. Prior to that, led several backend enhancements at Apnatime Tech, where I was responsible for migrating their Django monolithic system to microservices based architecture written in Golang (60% latency improvement) and developing various distributed systems leveraging Redis, BigQuery, Celery, and Elasticsearch technologies.",
      "Engaged in independent quantitative research in stock and crypto market, examining aspects of market behavior and liquidity.",
      "Primary skill set includes Python, Golang, Node.js, PostgreSQL, Redis, BigQuery, Kafka, and Google Cloud services; specializing in areas that combine systems, data, and AI."
    ]
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
