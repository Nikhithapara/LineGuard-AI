# LineGuard AI

LineGuard AI is a manufacturing incident and troubleshooting assistant built as a second AI-assisted application.

## Features
- Dashboard metrics and recent incidents
- Create Incident form with validation
- AI-style troubleshooting assistant using local grounded mock data
- Similar historical incidents
- Equipment overview
- Responsive layout
- Loading, empty, success, and error states
- Safety messaging

## Run locally
```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:
```powershell
npm.cmd install
npm.cmd run dev
```

Open the Vite URL, usually `http://localhost:5173`.

## Production roadmap
A future version could add FastAPI/Node backend, PostgreSQL, authentication/RBAC, vector search/RAG, AWS deployment, and monitoring.
