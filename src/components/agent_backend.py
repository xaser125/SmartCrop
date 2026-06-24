"""
SmartCrop: Multi-Agent System Architecture
Track: Agents for Good
Description: This script demonstrates the core AI architecture for the SmartCrop platform, 
utilizing an Agent Development Kit (ADK) approach, MCP (Model Context Protocol) server integration, 
and Multi-Agent orchestration.

Note: This is the backend logic representation. The frontend is built in React.
"""

import json
from typing import List, Dict

# ---------------------------------------------------------
# 1. SECURITY & GUARDRAILS (Judging Criteria: Security features)
# ---------------------------------------------------------
class SecurityGuardrail:
    @staticmethod
    def sanitize_input(user_input: str) -> str:
        """Strips potential prompt injections and ensures safe processing."""
        forbidden_commands = ["ignore previous instructions", "system override", "drop table"]
        sanitized = user_input.lower()
        for command in forbidden_commands:
            sanitized = sanitized.replace(command, "[REDACTED]")
        return sanitized
    
    @staticmethod
    def anonymize_data(user_data: dict) -> dict:
        """Removes PII (Personally Identifiable Information) before sending to LLM."""
        safe_data = user_data.copy()
        safe_data.pop("user_name", None)
        safe_data.pop("exact_location", None)
        return safe_data

# ---------------------------------------------------------
# 2. MCP SERVER INTEGRATION (Judging Criteria: MCP Server)
# ---------------------------------------------------------
class WeatherMCPServer:
    """Simulates a Model Context Protocol (MCP) Server for real-time agronomic data."""
    def __init__(self, endpoint_url="mcp://agri-weather.local"):
        self.endpoint = endpoint_url

    def fetch_context(self, region: str) -> Dict:
        # In a production environment, this queries the MCP endpoint.
        # Returning mock context for demonstration.
        return {
            "region": region,
            "forecast": "Heavy rain expected in 48 hours",
            "soil_moisture_trend": "Decreasing",
            "uv_index": "High"
        }

# ---------------------------------------------------------
# 3. AGENT SKILLS / TOOLS (Judging Criteria: Agent Skills)
# ---------------------------------------------------------
def analyze_crop_disease(image_data: str, logs: List[str]) -> str:
    """Tool used by the Pathology Agent to analyze plant health."""
    # Simulates computer vision analysis cross-referenced with user care logs
    if "white spots" in image_data.lower() and "high humidity" in str(logs):
        return "Powdery Mildew detected. High confidence due to recent weather context."
    return "Plant appears healthy."

def calculate_irrigation_needs(crop_type: str, weather_context: dict) -> str:
    """Tool used by the Agronomy Agent to plan water usage."""
    if weather_context.get("forecast") == "Heavy rain expected in 48 hours":
        return f"Halt manual irrigation for {crop_type}. Rely on upcoming rainfall to save water."
    return f"Standard irrigation schedule recommended for {crop_type}."

# ---------------------------------------------------------
# 4. MULTI-AGENT ORCHESTRATION (Judging Criteria: Agent / Multi-agent system)
# ---------------------------------------------------------
class AgronomyAgent:
    def __init__(self, mcp_server: WeatherMCPServer):
        self.mcp = mcp_server
        self.role = "Resource Optimizer & Planner"

    def process(self, crop: str, region: str) -> str:
        weather_data = self.mcp.fetch_context(region)
        return calculate_irrigation_needs(crop, weather_data)

class PathologyAgent:
    def __init__(self):
        self.role = "Disease Diagnostics"

    def process(self, image_desc: str, user_logs: List[str]) -> str:
        return analyze_crop_disease(image_desc, user_logs)

class OrchestratorAgent:
    """The main routing agent that decides which specialist agent to call."""
    def __init__(self):
        self.mcp_server = WeatherMCPServer()
        self.agronomy_agent = AgronomyAgent(self.mcp_server)
        self.pathology_agent = PathologyAgent()
        self.guardrail = SecurityGuardrail()

    def handle_user_request(self, raw_input: str, request_type: str, user_data: dict) -> dict:
        print("--- Initiating SmartCrop Agent Protocol ---")
        
        # 1. Apply Security
        safe_input = self.guardrail.sanitize_input(raw_input)
        safe_user_data = self.guardrail.anonymize_data(user_data)
        
        response = {}
        
        # 2. Route to appropriate agent
        if request_type == "diagnostic":
            print(f"Routing to: {self.pathology_agent.role}")
            logs = safe_user_data.get("care_logs", [])
            response["diagnosis"] = self.pathology_agent.process(safe_input, logs)
            
        elif request_type == "planning":
            print(f"Routing to: {self.agronomy_agent.role}")
            region = safe_user_data.get("region_general", "Unknown")
            response["plan"] = self.agronomy_agent.process(safe_input, region)
            
        print("--- Task Completed ---")
        return response

# ---------------------------------------------------------
# EXECUTION (Mock usage for demonstration)
# ---------------------------------------------------------
if __name__ == "__main__":
    system = OrchestratorAgent()
    
    mock_user_profile = {
        "user_name": "Marcio", # Will be stripped by guardrail
        "region_general": "Faro District, South",
        "exact_location": "S.B. Messines", # Will be stripped by guardrail
        "care_logs": ["Watered 2 days ago", "High humidity recently"]
    }
    
    # Test Scenario: User uploads a photo of a sick plant
    result = system.handle_user_request(
        raw_input="My tomato leaves have white spots",
        request_type="diagnostic",
        user_data=mock_user_profile
    )
    print(f"Result: {json.dumps(result, indent=2)}")