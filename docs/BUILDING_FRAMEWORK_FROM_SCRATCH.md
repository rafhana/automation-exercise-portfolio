# Building a Playwright Framework from Scratch
---
Introduction
## 📖 How to Use This Guide

This guide is designed to be followed from start to finish.

Each step builds upon the previous one, so I recommend completing them in sequence, especially if you're building your first Playwright framework.

Throughout this guide, you'll see several recurring sections:

🎯 **Objective**  
Explains what you'll accomplish by the end of each step.

💻 **Command**  
The command you'll run in your terminal.

💭 **Explanation**  
Explains why the step is important and what it does behind the scenes.

✅ **Step Summary**  
A quick checklist to help confirm you're ready to continue.

💡 **Good Practice**  
Additional tips based on real-world Quality Engineering experience that will help you build better engineering habits.

Don't worry if everything doesn't make sense immediately.

Take one step at a time.

Stay curious, enjoy the process, and most importantly, have fun building.

---

## 💻 Prerequisites

Before starting this guide, make sure the following software has been installed on your computer.

| Software | Purpose |
|----------|---------|
| Git | Version control |
| Node.js (LTS) | Required to run Playwright |
| npm | Installed together with Node.js |
| Visual Studio Code | Recommended code editor |
| GitHub Account | Required for hosting your repository |

---

## 🍎 macOS Users

Open the **Terminal** application.

Most commands throughout this guide can be copied directly into Terminal without modification.

To verify your installation, run:

```bash
git --version
node -v
npm -v
```

If each command returns a version number, you're ready to continue.

## 🪟 Windows Users

Open either:

- Windows Terminal
- Command Prompt
- PowerShell

Run the following commands:

```bash
git --version
node -v
npm -v
```

If each command returns a version number, your environment has been configured successfully.

---

## ⭐ Best Practices

Building a framework is only one part of Quality Engineering.

Developing good engineering habits from the beginning will make your projects easier to maintain and collaborate on as they grow.

The following practices are recommended throughout this guide.

### 1. Commit Small Changes Frequently

Avoid making one large commit containing many unrelated changes.

Instead, create smaller commits that each represent a single milestone.

For example:

- Create README
- Install Playwright
- Create Login Page
- Create Login Test
- Configure HTML Report

Smaller commits make it much easier to understand the project's history and identify where a problem was introduced if something goes wrong.

### 2. Write Meaningful Commit Messages

A commit message should clearly describe what changed.

Good examples:

```text
Add initial README

Install Playwright framework

Add Login Page Object

Add successful login automation
```

Avoid commit messages like:

```text
Update

Changes

Fixed

Testing
```

Clear commit messages make it easier for both yourself and other developers to understand the project's history.

### 3. Verify Before Committing

Before every commit, run:

```bash
git status
```

Review the files that will be committed.

Taking a few seconds to verify your changes helps prevent accidentally committing temporary files or unrelated work.

### 4. Test Before You Push

Whenever possible, run your Playwright tests before pushing your changes to GitHub.

Verifying that your tests still pass before every push helps maintain a stable framework and reduces the chances of introducing broken code

### 5. Understand Before You Build

One of the most valuable lessons I've learned throughout my Quality Engineering journey is to spend time understanding the foundation before building upon it.

Whether you're learning Git, Playwright, or automation framework design, take the time to understand why something works instead of simply memorising the steps.

A solid understanding today will save countless hours of troubleshooting tomorrow.

---

> 📌 **Note**
>
> This guide was written based on how I personally built my Playwright Quality Engineering Portfolio from scratch.
>
> While there are many valid ways to structure an automation framework, the approach shared here reflects the engineering practices that have worked well for me throughout my learning journey.

---

# Part 1 — Project Setup

## 1. Create Your Project Folder

### Objective

In this step, you'll create the folder that will contain your Playwright Quality Engineering Portfolio.

By the end of this section, you'll have a dedicated workspace ready for building your automation framework.

---

### 1.1 Create a New Project Folder

Create a new folder anywhere you'd like to store your projects.

For this guide, we'll use the following folder name:

```text
playwright-quality-engineering-portfolio
```

You can create this folder on your Desktop, inside a Projects folder, or anywhere that is convenient for you.

---

### 1.2 Open the Project in Visual Studio Code

Launch Visual Studio Code.

From the menu bar, select:

**File → Open Folder**

Navigate to the folder you just created and open it.

This folder will become the root directory of your Playwright framework.

---

### ✅ Step Summary

Before moving to the next step, you should now have:

✔️ A dedicated project folder

✔️ Visual Studio Code installed

✔️ Your project folder opened in Visual Studio Code

---

### 💭 Why This Matters

Creating a dedicated project folder keeps all framework files organised from the very beginning.

As your framework grows, you'll be adding source code, configuration files, documentation, reports, and supporting resources. Keeping everything inside a single project folder makes the framework easier to navigate, maintain, and share with others.

Starting with a clean project structure also helps establish good engineering habits from day one.

## 2. Initialise Git

### Objective

In this step, you'll initialise Git inside your project folder.

By the end of this section, your project will be under version control and ready to track future changes.

---

### 2.1 Open the Integrated Terminal

Inside Visual Studio Code, open the integrated terminal by selecting:

**Terminal → New Terminal**

The terminal should open in the root of your project folder.

You can verify this by checking that the terminal path ends with:

```text
playwright-quality-engineering-portfolio
```

---

### 2.2 Initialise Git

Run the following command:

#### 💻 Command

```bash
git init
```

#### Expected Result

Git will display a message similar to:

```text
Initialized empty Git repository in ...
```

A hidden folder named `.git` will also be created inside your project directory.

---

### 💭 Explanation

The `git init` command creates a new Git repository inside your project folder.

Although you won't see it immediately, Git creates a hidden folder named `.git` that stores your project's version history and configuration.

From this point onwards, Git will be able to monitor changes made to your project files.

---

### ✅ Step Summary

Before moving to the next step, you should now have:

✔️ Git initialised

✔️ A hidden `.git` folder created

✔️ Your project ready for version control

---

### 💭 Why This Matters

Version control should be part of a project from the very beginning, not something added later.

Git allows you to keep a history of your work, experiment safely, and return to previous versions whenever needed.

Whether you're working independently or collaborating with a team, version control is one of the most important tools in modern software engineering.

## 3. Create a GitHub Repository

### Objective

In this step, you'll create a remote repository on GitHub.

By the end of this section, you'll have an empty online repository ready to be connected to your local Git project.

---

### 3.1 Create a New Repository

Log in to your GitHub account.

Click the **+** icon in the top-right corner and select **New repository**.

---

### 3.2 Enter the Repository Details

Enter the following repository name:

```text
playwright-quality-engineering-portfolio
```

(Optional) Add a short description.

For example:

```text
A maintainable Playwright automation framework built with TypeScript following Quality Engineering best practices.
```

---

### 3.3 Choose the Repository Visibility

Choose one of the following options:

- **Public** – Anyone can view your project.
- **Private** – Only invited collaborators can access your repository.

For a portfolio project, **Public** is generally recommended so recruiters, hiring managers, and other engineers can view your work.

---

### 3.4 Repository Settings

When creating the repository, GitHub provides several optional settings.

For this guide, leave the following options **unchecked**:

☐ Add a README file

☐ Add a .gitignore

☐ Choose a licence

We'll create these ourselves later so you'll better understand the purpose of each file instead of relying on GitHub to generate them automatically.

---

### 3.5 Create the Repository

Click **Create repository**.

GitHub will create an empty remote repository and display the Quick Setup page.

We'll use the information on this page in the next step when connecting our local project to GitHub.

---

### ✅ Step Summary

Before moving to the next step, you should now have:

✔️ A GitHub account

✔️ A newly created GitHub repository

✔️ An empty remote repository ready to be connected to your local project

---

### 💭 Why This Matters

Creating the GitHub repository separately helps you understand the difference between a **local repository** and a **remote repository**.

Your local repository lives on your own computer, while the remote repository is hosted on GitHub.

Understanding how these two repositories work together is one of the most important concepts when learning Git. Once they're connected, you'll be able to back up your work, collaborate with other developers, and access your project from anywhere.

---

### 💡 Good Practice

For learning purposes, it's often better to create important files such as the README and `.gitignore` yourself instead of letting GitHub generate them automatically.

Doing so helps you understand where each file comes from, what it's used for, and how it fits into the overall project structure.

## 4. Connect Your Local Repository to GitHub

### Objective

In this step, you'll connect your local Git repository to the remote repository you created on GitHub.

By the end of this section, your local project and GitHub repository will be linked together, allowing you to push your commits to GitHub.

---

### 4.1 Copy the Repository URL

Open the GitHub repository you created in the previous step.

On the repository page, click the **Code** button and make sure **HTTPS** is selected.

Copy the repository URL.

It should look similar to this:

```text
https://github.com/your-username/playwright-quality-engineering-portfolio.git
```

#### 💭 Explanation

This URL tells Git where your remote repository is located on GitHub.

Your local project will use this address whenever it needs to communicate with GitHub.

---

### 4.2 Connect the Remote Repository

Return to Visual Studio Code and open the integrated terminal.

Run the following command, replacing the example URL with your own GitHub repository URL.

#### 💻 Command

```bash
git remote add origin https://github.com/your-username/playwright-quality-engineering-portfolio.git
```

#### 💭 Explanation

This command creates a connection between your local Git repository and the remote repository hosted on GitHub.

The name `origin` is the default name commonly used to represent the primary remote repository.

---

### 4.3 Verify the Remote Connection

Once the remote has been added, verify that Git has saved the connection correctly.

#### 💻 Command

```bash
git remote -v
```

#### Expected Result

You should see something similar to:

```text
origin  https://github.com/your-username/playwright-quality-engineering-portfolio.git (fetch)
origin  https://github.com/your-username/playwright-quality-engineering-portfolio.git (push)
```

#### 💭 Explanation

The **fetch** URL is used when downloading changes from GitHub.

The **push** URL is used when uploading your commits to GitHub.

Seeing both URLs confirms that your local repository is successfully connected to GitHub.

---

### 4.4 Understanding Local and Remote Repositories

At this point, it's useful to understand the difference between a local repository and a remote repository.

### Local Repository

Your local repository lives on your own computer.

This is where you create files, write code, and make commits while working on your project.

### Remote Repository

Your remote repository lives on GitHub.

It acts as an online backup of your project and allows you to collaborate with other developers.

Whenever you push your commits, Git copies your local changes to the remote repository.

---

### ✅ Step Summary

Before moving to the next step, you should now have:

✔️ A GitHub repository

✔️ A local Git repository

✔️ A remote named `origin`

✔️ Your local repository successfully connected to GitHub

✔️ The correct repository URL displayed when running `git remote -v`

---

### 💭 Why This Matters

Understanding the difference between a local repository and a remote repository is one of the most important concepts in Git.

Your local repository is where you develop your project.

Your remote repository stores a copy of that project on GitHub, making it easier to back up your work, collaborate with others, and access your code from different devices.

Once these two repositories are connected, you'll be able to push your work to GitHub and pull future changes whenever needed.

---

### 💡 Good Practice

Before pushing any code, always verify that you're connected to the correct remote repository by running:

```bash
git remote -v
```

This simple habit can prevent accidentally pushing your work to the wrong GitHub repository, especially when working on multiple projects.

## 5. Create and Push Your First Commit

### Objective

In this step, you'll create your first project file, record it in Git, and publish it to GitHub.

By the end of this section, you'll have your first commit stored both locally and remotely on GitHub.

---

### 5.1 Create the README File

Before installing Playwright, create a simple README file so your repository has an initial file to track.

In the root of your project folder, create a new file named:

```text
README.md
```

Add the following heading:

```markdown
# Playwright Quality Engineering Portfolio
```

Don't worry about completing the README yet. We'll continue building it throughout this guide.

#### 💭 Explanation

Git cannot create a commit from an empty project folder because it only tracks files. Creating a simple README gives your repository its first tracked file and provides a clean starting point for your project.

---

### 5.2 Check the Repository Status

Before creating your first commit, it's a good habit to check the current state of your repository.

#### 💻 Command

```bash
git status
```

#### Expected Result

Git should display the README file as an **Untracked File**.

Example:

```text
Untracked files:
  README.md
```

#### 💭 Explanation

An untracked file is a file that Git has detected but is not yet monitoring as part of the project's history.

Running `git status` regularly helps you understand exactly what has changed before creating a commit.

---

### 5.3 Stage the README File

The next step is to tell Git that you want to include the README file in your first commit.

#### 💻 Command

```bash
git add README.md
```

#### Alternative Command

You could also stage every modified file in the current project by running:

```bash
git add .
```

#### 💭 Explanation

The `git add` command moves changes into the staging area, preparing them for the next commit.

For beginners, staging a specific file makes it easier to understand exactly what is being added to the commit.

---

### 5.4 Create Your First Commit

Once the README has been staged, create your first commit.

#### 💻 Command

```bash
git commit -m "Add initial README"
```

#### 💭 Explanation

A commit is a snapshot of your project at a specific point in time.

The commit message should briefly describe what was changed so that the project history remains easy to understand.

---

### 5.5 Confirm the Main Branch

Before pushing your project to GitHub, confirm that your primary branch is named `main`.

#### 💻 Command

```bash
git branch
```

#### Expected Result

You should see:

```text
* main
```

If your branch has a different name, rename it by running:

```bash
git branch -M main
```

#### 💭 Explanation

Using `main` as the primary branch follows the modern Git convention and keeps your repository consistent with most open-source and professional software projects.

---

### 5.6 Push Your First Commit to GitHub

Now that your first commit has been created, it's time to upload it to GitHub.

#### 💻 Command

```bash
git push -u origin main
```

#### 💭 Explanation

This command uploads your local `main` branch to the remote repository named `origin`.

The `-u` option links your local branch with the remote branch so that future pushes can simply use:

```bash
git push
```

---

### 5.7 Verify the Push

Open your GitHub repository in your web browser and refresh the page.

#### Expected Result

You should now see:

- README.md
- Your first commit
- The `main` branch

Congratulations! Your local project is now successfully connected to GitHub.

---

### ✅ Step Summary

Before moving to the next step, you should now have:

✔️ A README file in your local project

✔️ Your first Git commit

✔️ A branch named `main`

✔️ Your local `main` branch connected to GitHub

✔️ The README visible in your GitHub repository

---

### 💭 Why This Matters

Creating small, meaningful commits establishes a clean project history from the very beginning.

Rather than grouping many unrelated changes into one large commit, recording each milestone separately makes it much easier to understand how the project evolved over time.

This becomes especially valuable when collaborating with other developers or when troubleshooting changes later in the project.

---

### 💡 Good Commit Practice

Keep each commit focused on a single change.

For example:

- Add initial README
- Install Playwright test framework
- Add login page object
- Add successful login test

Clear commit messages make your project history easier for both yourself and other contributors to understand.

# 6. Install Playwright

## Objective

In this step, you'll install Playwright and generate the initial framework structure.

By the end of this section, you'll have a working Playwright project with all the essential files needed to begin building your automation framework.

---

## 6.1 Install Playwright

Before installing Playwright, ensure that your terminal is still opened in the root of your project folder.

Run the following command:

### 💻 Command

```bash
npm init playwright@latest
```

### 💭 Explanation

This command launches the Playwright Setup Wizard.

Instead of manually installing packages and creating configuration files yourself, the wizard guides you through the setup process and automatically generates the initial framework structure.

---

## 6.2 Complete the Playwright Setup Wizard

After running the installation command, Playwright will ask you a series of setup questions.

Let's go through each one.

---

### 6.2.1 Choose a Language

Playwright will ask whether you'd like to use:

- TypeScript
- JavaScript

For this guide, select:

```text
TypeScript
```

### 💭 Explanation

TypeScript is recommended because it provides static type checking, better IntelliSense support, improved code navigation, and makes automation frameworks easier to maintain as they grow.

Since this repository focuses on Quality Engineering best practices, TypeScript is the preferred choice.

---

### 6.2.2 Choose the Test Folder

Playwright will ask where you'd like to store your automated tests.

Use the default folder:

```text
tests
```

### 💭 Explanation

Keeping all automated tests inside a dedicated `tests` folder makes the framework easier to navigate and separates test cases from page objects, configuration files, and utility classes.

---

### 6.2.3 Add a GitHub Actions Workflow

Playwright will ask:

```text
Add a GitHub Actions workflow?
```

Select:

```text
Yes
```

### 💭 Explanation

GitHub Actions allows your Playwright tests to run automatically whenever code is pushed to GitHub or when a Pull Request is created.

Although we won't be using it immediately, generating it now helps prepare the framework for future Continuous Integration (CI).

---

### 6.2.4 Install Playwright Browsers

Playwright will ask:

```text
Install Playwright browsers?
```

Select:

```text
Yes
```

### 💭 Explanation

Playwright uses its own browser binaries for Chromium, Firefox and WebKit.

Installing them now ensures your framework is ready to execute tests immediately without requiring additional setup later.

---

## 6.3 Verify the Installation

Once the installation is complete, your terminal should finish without any errors.

To confirm everything was installed correctly, run:

### 💻 Command

```bash
npx playwright test
```

### Expected Result

Playwright should execute the sample test that was automatically generated during the installation.

If the test passes successfully, congratulations! Your Playwright framework has been installed correctly.

---

## 6.4 Understanding the Generated Project Structure

After the installation completes, you'll notice that Playwright has created several files and folders.

Your project should look similar to this:

```text
playwright-quality-engineering-portfolio/

├── .github/
│   └── workflows/
│       └── playwright.yml
├── node_modules/
├── playwright-report/
├── test-results/
├── tests/
│   └── example.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

Don't worry if some of these files are unfamiliar.

We'll explore each of them in more detail throughout this guide.

---

## 6.5 Understanding the Generated Files

| File / Folder | Purpose |
|---------------|---------|
| `.github/workflows/` | Stores the GitHub Actions workflow for running Playwright tests automatically. |
| `node_modules/` | Contains all packages installed by npm. |
| `playwright-report/` | Stores the HTML reports generated after test execution. |
| `test-results/` | Stores screenshots, videos and traces when tests fail. |
| `tests/` | Contains your Playwright test scripts. |
| `.gitignore` | Specifies files and folders that Git should ignore. |
| `package.json` | Stores project information, dependencies and scripts. |
| `package-lock.json` | Locks dependency versions so every installation remains consistent. |
| `playwright.config.ts` | Stores the global configuration for the Playwright framework. |
| `README.md` | Documents your project and explains how to use it. |

---

## 6.6 Save the Installation to Git

Now that Playwright has been installed successfully, record this milestone in Git.

### 💻 Command

```bash
git status
```

Review the files that have been created.

Next, stage all the project files.

### 💻 Command

```bash
git add .
```

Create a commit.

### 💻 Command

```bash
git commit -m "Install Playwright test framework"
```

Finally, push your changes to GitHub.

### 💻 Command

```bash
git push
```

---

## ✅ Step Summary

Before moving to the next step, you should now have:

✔️ Playwright installed

✔️ TypeScript selected

✔️ Playwright browsers installed

✔️ A working Playwright framework

✔️ A successful sample test execution

✔️ The installation committed to Git

✔️ Your GitHub repository updated

---

## 💭 Why This Matters

Running the Playwright Setup Wizard gives you a working automation framework in just a few minutes.

However, the generated project is only the starting point.

As Quality Engineers, we don't simply use the generated framework—we understand how it's structured, why each file exists, and how to organise it as the project grows.

Building this understanding now will make it much easier to customise, maintain, and extend your framework in future projects.

---

## 💡 Good Practice

Before making any changes to the generated framework, always run the sample test first.

Verifying that the initial installation works gives you a reliable baseline.

If something breaks later, you'll know whether the issue was introduced by your own changes or existed during the original setup.
