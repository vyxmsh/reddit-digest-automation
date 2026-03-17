Prompt #1 for Claude after setting up the environment by setting up the "Resend API key" and configuring "Trigger.dev" in terminal:

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

