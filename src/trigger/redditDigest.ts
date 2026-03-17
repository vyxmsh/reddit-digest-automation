import { schedules } from "@trigger.dev/sdk";
import { Resend } from "resend";

export const redditDigest = schedules.task({
  id: "reddit-digest-task",
  cron: "0 7 * * *",
  run: async () => {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const response = await fetch(
        "https://www.reddit.com/r/technology/top.json?limit=5",
        { headers: { "User-Agent": "trigger-dev-digest/1.0" } }
      );

      if (!response.ok) {
        throw new Error(`Reddit fetch failed: ${response.status}`);
      }

      const data = await response.json();
      const posts: { title: string; url: string }[] = data.data.children.map(
        (child: any) => ({
          title: child.data.title,
          url: child.data.url,
        })
      );

      const digest =
        "Daily Reddit Digest:\n\n" +
        posts
          .map((post, i) => `${i + 1}. ${post.title}\n${post.url}`)
          .join("\n\n");

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: process.env.TO_EMAIL as string,
        subject: "Daily Reddit Digest",
        text: digest,
      });
    } catch (error) {
      console.error("Task failed:", error);
      throw error;
    }
  },
});
