# Repository Guidelines

## Project Structure & Module Organization
Keep executable entry points in the repository root (`app.mjs` currently drives the proof of concept) and place reusable logic under `src/` if you introduce additional modules. Co-locate example prompts or agent presets in `prompts/`. Group integration stubs or API wrappers under `integrations/`. When adding tests, mirror the module layout inside `tests/` using filenames like `module-name.test.mjs` to keep intent obvious.

## Build, Test, and Development Commands
Install dependencies with `pnpm install` (the repo is pinned to `pnpm@10.19.0`). Run the sample script via `node app.mjs` once your `OPENAI_API_KEY` is configured. Use `pnpm run test` as the canonical test command; wire it up before opening a pull request by pointing it to your chosen test runner (see below). Favor `pnpm exec` to invoke project-local CLIs so versions stay consistent across contributors.

## Coding Style & Naming Conventions
Code is written as ECMAScript modules (`.mjs`) with top-level `await`. Use two-space indentation, include trailing semicolons, and prefer descriptive camelCase names for variables and functions. Exported agent factories or handlers should follow a `createXAgent` naming pattern to signal intent. Before submitting, format updated files with `pnpm exec prettier --write <files>` and configure the formatter in the project if it is missing. Keep configuration or secrets out of tracked files and favor `.env` entries accessed through `process.env`.

## Testing Guidelines
Adopt Node’s built-in test runner (`node --test`) or Vitest for higher-level agent behavior checks; whichever you use, add the dependency and update `pnpm run test` accordingly. Place fixtures under `tests/fixtures/` and name individual tests with the scenario they cover (e.g., `"initializes o3 model with system prompt"`). Ensure new features include at least one happy-path and one failure-path test so prompt regressions surface quickly.

## Commit & Pull Request Guidelines
Use Conventional Commit subjects (`feat: add streaming agent`, `fix: guard empty prompt`) to make changelog generation straightforward. Each pull request should include: a concise summary, testing notes (commands and outcomes), links to related issues, and screenshots or transcripts when you adjust runtime output. Keep PRs small and self-contained; if you must touch credentials or configuration, explain the impact and update accompanying docs. Request review once CI is green and the test command passes locally.

## Security & Configuration Tips
Never hardcode API keys—load them from environment variables such as `OPENAI_API_KEY`. Document any new required variables in `README.md` and provide sample `.env.example` values. When sharing transcripts or logs, redact user-provided data and model responses that could contain sensitive information.
