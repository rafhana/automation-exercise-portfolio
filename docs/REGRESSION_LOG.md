# Daily Regression Log

## Quick Summary
*Update this once a week — gives anyone (including future you) the state of things without reading every row below.*

- **This week:** 0/0 passed — no data yet
- **Real bugs found:** -
- **Noise (deployments, ad hiccups, etc.):** -
- **Cadence decision so far:** Too early to tell — evaluating daily for 2 weeks before deciding.

Tracking scheduled run results to evaluate whether **daily** or **weekly**
regression is the better cadence for this suite. Update this after checking
the Actions tab each morning.

**How to fill this in:**
- **Time (SGT)** — when the run actually started (helps spot if scheduling drifts)
- **Result** — ✅ Pass / ❌ Fail — quick visual scan across weeks
- **Failed Tests** — test IDs only (e.g. `ADD-001`), leave blank if all passed
- **Notes** — the most important column. Was a failure a *real* bug, or noise
  (deployment in progress, ad network hiccup, site under heavy use)? This is
  what turns raw pass/fail into an actual decision.

| Date       | Time (SGT) | Result | Failed Tests | Notes |
|------------|------------|--------|---------------|-------|
| 2026-08-14 | 4:14 PM    | ✅ Pass | -             | Manual trigger via `workflow_dispatch`, run #13, 75/75 passed in 2m 40s. Used to verify the full pipeline (schedule config, credentials, browser install) works end to end before the first real 7 AM scheduled run tomorrow. |