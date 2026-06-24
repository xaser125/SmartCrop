# SmartCrop
Kaggle Capstone Project: An AI-powered agricultural assistant for the Agents for Good track.

# 🌿 SmartCrop - AI-Powered Urban Farming Agent

**Track:** Agents for Good  
**Hackathon:** Kaggle AI Agents: Intensive Vibe Coding Capstone Project

## 🎯 The Problem
Urban farmers, hobbyists, and community gardeners face a steep learning curve. Traditional agricultural apps offer static, generic advice, while standard LLMs lack the contextual awareness of the user's specific micro-climate, past actions, and sun exposure. This leads to wasted resources (water/fertilizer), misdiagnosed plant diseases, and failed crops, ultimately discouraging sustainable local food growth.

## 💡 The Solution
SmartCrop is a context-aware, Multi-Agent AI platform that acts as a personal agricultural concierge. It moves beyond static calendars by utilizing local weather data and the user's personal "Care Journal" to provide hyper-personalized, actionable advice. Whether diagnosing a leaf disease or optimizing an irrigation schedule, SmartCrop helps users grow food sustainably while minimizing water waste and chemical use.

## 🏗️ Architecture & Agent Design
The project is divided into two main components: an interactive high-fidelity frontend prototype and a backend Multi-Agent Proof of Concept (POC).

### 1. Multi-Agent System (`agent_backend.py`)
- **Orchestrator Agent:** The central router that analyzes user requests and delegates tasks to the appropriate specialist.
- **Agronomy Agent:** Focuses on resource optimization and planning. It uses an **MCP (Model Context Protocol)** server connection to fetch real-time weather and soil moisture contexts to adjust irrigation advice dynamically.
- **Pathology Agent:** Specializes in disease diagnostics by cross-referencing visual input with the user's historical care logs (RAG/Memory) to avoid false positives.

### 2. Security & Guardrails
The agent architecture includes a `SecurityGuardrail` class that:
- **Anonymizes PII:** Strips exact locations and user names before data hits the LLM.
- **Sanitizes Input:** Prevents prompt injections (e.g., overriding system instructions).

### 3. Interactive Frontend Prototype (`React + Vite + Tailwind`)
A fully interactive UI demonstrating the agent's integration into a user's daily workflow, featuring space management, interactive dashboards, community feedback loops, and AI diagnostic uploads.

## 🚀 Instructions for Setup (Local Development)

### Running the Frontend Prototype
This project uses Vite and React. To run the interactive dashboard locally:

1. Clone this repository to your local machine.
2. Open your terminal and navigate to the root directory of the project.
3. Install the dependencies by running:
```bash
   npm install


Start the development server:
npm run dev

Open your browser and navigate to the provided local URL (usually http://localhost:5173).

Viewing the Agent Logic (Proof of Concept)
The core AI orchestration, MCP integration, and security guardrails are documented in the src/components/agent_backend.py file. This Python script serves as the architectural blueprint for the backend agent system.


Built for the Kaggle Agents for Good Capstone Project.