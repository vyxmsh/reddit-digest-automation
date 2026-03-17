
# 🚀 AI Automation Assignment – Reddit Daily Digest

## 📌 Overview
This project demonstrates an AI-powered automation workflow built using **Trigger.dev**.  
It runs a scheduled job every day at **7:00 AM**, fetches top posts from Reddit, formats them into a digest, and sends the result via email.

The assignment showcases:
- AI-assisted development (Claude Code / Cursor)
- Automation using Trigger.dev
- API integration (Reddit + Resend)
- Production-ready scheduling

---

## ⚙️ Features

- ⏰ **Scheduled Cron Job** (runs daily at 7 AM)
- 📡 Fetches top 5 posts from **r/technology (Reddit API)**
- 🧠 Formats data into a clean digest
- 📧 Sends email using **Resend API**
- 🛠 Built using AI tools (Claude Code / Cursor)

---

## 🏗️ Tech Stack

- **Trigger.dev (v4)**
- **Node.js + TypeScript**
- **Resend (Email API)**
- **Reddit JSON API**
- **AI Tools:** Claude Code, Cursor

---

## 📁 Project Structure

```text
reddit-digest-automation/
├── src/
│   └── trigger/
│       └── redditDigest.ts
├── .env.example
├── package.json
├── package-lock.json
├── trigger.config.ts
└── README.md

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-link>
cd reddit-digest

2. Install dependencies
```bash
npm install

## 🚀 Setup Instructions

### 3. Configure Environment Variables

Create a `.env` file:

```env
RESEND_API_KEY=your_resend_api_key
TO_EMAIL=your_email_address

### 4. Run locally

npx trigger.dev dev 

### 5. Trigger the Task

-**Open Trigger.dev Dashboard**

Navigate to your project

Run the task manually (for testing)

5. Trigger the Task

Open Trigger.dev Dashboard

Navigate to your project

Run the task manually (for testing)


📬 Output

The system sends an email like:

Daily Reddit Digest:

1. Post Title
Link

2. Post Title
Link


Prompt for Claude after setting up the environment by setting up the "Resend API key" and configuring "Trigger.dev" in terminal:

##############################################################################################################
You are working inside a Trigger.dev v4 TypeScript project.

Modify the existing scheduled task file (example.ts) to implement the following functionality:

Requirements:
1. The task must run daily at 7:00 AM using cron: "0 7 * * *".
2. Fetch the top 5 posts from Reddit using:
   https://www.reddit.com/r/technology/top.json?limit=5
3. Extract for each post:
   - title
   - URL
4. Format them into a readable text digest like:

Daily Reddit Digest:

1. Title
Link

2. Title
Link

5. Send this digest via email using Resend.

Implementation details:
- Use fetch with async/await.
- Use proper error handling with try/catch.
- Import Resend:
  import { Resend } from "resend";
- Use environment variables:
  process.env.RESEND_API_KEY
  process.env.TO_EMAIL
- Email config:
  from: "onboarding@resend.dev"
  to: process.env.TO_EMAIL
  subject: "Daily Reddit Digest"

Constraints:
- Use Trigger.dev v4 syntax with task().
- Keep code minimal and clean.
- Ensure the task runs successfully without crashing.

Output rules:
- Return ONLY the complete updated file code.
- No explanations.
##############################################################################################################

🔌 MCP Integration

Filesystem MCP → Used for reading/writing project files

GitHub MCP → Used for repository exploration

🧠 Claude Code Modes Used

Plan Mode → Used to design task flow

Edit Mode → Used to generate and modify code


🎯 Conclusion

This project demonstrates the ability to:

Use AI-assisted coding tools effectively

Build and deploy automation workflows

Integrate APIs and handle async operations

Deliver production-ready systems under time constraints

