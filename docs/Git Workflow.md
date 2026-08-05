# 🌿 Basic Git Workflow

This project follows a simple Git workflow to keep development organised and maintainable.

---

### Clone the repository

```bash
git clone https://github.com/rafhana/playwright-qa-portfolio.git
```

Downloads the project from GitHub.

---

### Check the current branch

```bash
git branch
```

Displays the branch you're currently working on.

---

### Create a new feature branch

```bash
git checkout -b feature/login-tests
```

Creates a separate branch for new work, helping keep the **main** branch clean and stable.

---

### Check modified files

```bash
git status
```

Displays files that have been created, modified, or are waiting to be committed.

---

### Stage your changes

```bash
git add .
```

Stages all modified files before creating a commit.

---

### Commit your work

```bash
git commit -m "Add login page automation"
```

Creates a snapshot of your changes with a meaningful commit message.

---

### Push your branch

```bash
git push origin feature/login-tests
```

Uploads your branch to GitHub.

---

### Keep your branch updated

```bash
git pull origin main
```

Downloads the latest changes from the main branch before continuing development.

This helps minimise merge conflicts.

