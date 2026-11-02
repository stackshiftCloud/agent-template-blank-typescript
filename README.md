# Blank agent (TypeScript)

The smallest agent that runs on StackShift. It wakes when an email arrives at its inbox, counts the words in it through one action, and writes the result to its log. Change it into your own agent.

## What is in here

- `src/agent.ts`: one event handler and one action.
- `stackshift.yaml`: how StackShift runs it. The `agent:` block says what wakes it, how much it may spend, and which actions it has. An action has to be listed here before it can run.
- `Dockerfile`: how StackShift builds and runs it. It installs the packages, compiles the TypeScript and starts `node dist/agent.js`. StackShift needs a Dockerfile in the agent's folder, so keep it when you change the agent.

## Run it on StackShift

From the dashboard, open Agents and choose New agent. Or from your terminal:

```bash
stackshift agents create --name "Blank agent" --template blank --language typescript
```

When it has deployed, send an email to its address. Open the agent's page to see the run and its log.

## Make it yours

1. Write what your agent should do in `src/agent.ts`.
2. Add each thing it can do as an action. List it under `actions:` in `stackshift.yaml` with a summary and a risk: `read` runs at once, `change` and `tell_me` wait unless the agent's level allows them, `ask` always waits for you, `owner_only` waits for you signed in.
3. Deploy again. If the new version asks for more than the last one, it waits for your approval first.

The agent starts on the level "Ask every time", so every action that changes something waits for you until you raise the level.
