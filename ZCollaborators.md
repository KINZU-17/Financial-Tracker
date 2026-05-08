1. The Direct Collaborator Method (Best for small teams)
If you trust your teammates and want them to be able to push changes directly to your repository, you can add them as Collaborators.

Step 1: Navigate to your repository on GitHub.

Step 2: Click on Settings (the gear icon at the top).

Step 3: On the left sidebar, click Collaborators (under "Access").

Step 4: Click Add people and enter their GitHub usernames or emails.

Step 5: They will receive an invite via email (or a notification on GitHub). They must accept this invite before they can push any code.

2. The Development Workflow
Once they have access, your team should follow these steps to ensure you aren't overwriting each other’s work:

Initial Setup (The Clone)
Each teammate needs to get the code onto their local Ubuntu machine by running:

Bash
git clone <repository-url>
cd <repository-name>
Making Changes (The Branching Strategy)
To keep the main branch stable, it’s a good habit for everyone to work on their own "feature branches."

Create a branch:
git checkout -b feature-name

Make changes and commit:
git add .
git commit -m "Added a new feature"

Push the branch to GitHub:
git push origin feature-name

3. Merging Work via Pull Requests
Instead of pushing directly to main, have your teammates open a Pull Request (PR) on GitHub after they push their branch.

-This allows you (or the rest of the team) to review the code before it’s officially added to the project.

- Once reviewed, you can click "Merge Pull Request" on GitHub to combine their work into the main codebase.

4. **Staying Up to Date**
Since four people are working on the same project, your local code will quickly get out of sync. Remind everyone to run this command frequently—especially before starting new work:

```Bash
git pull origin main
```

This fetches the latest changes made by your teammates and merges them into your local files.