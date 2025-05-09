# Nullplatform API MCP

This project exposes the Nullplatform OpenAPI an MCP so that large language models (LLMs) can discover, understand, and interact with the nullplatform's API endpoints.

It uses the official OpenAPI spec from [https://docs.nullplatform.com/](https://docs.nullplatform.com/docs/api-getting-started) and automatically registers each endpoint as a function that the LLM can invoke.

## ✨ What It Does

- Loads the Nullplatform OpenAPI spec.
- Registers all available endpoints (GET, POST, etc.) as discoverable callable functions.
- **This mcp uses as base software @nullplatform/meta-mcp-proxy which allows you to do an in-place RAG for scenarios where you have a big amount of tools**
- Exposes those functions via MCP so the LLM can:
    - List, get, create, and modify deployments, scopes, services, and more.
    - Understand required parameters and request bodies.
    - Follow usage guidance like retrieving the `nrn` before modifying resources.

## 🧱 Installation

Edit your file `~/Library/Application Support/Claude/claude_desktop_config.json`

and add the following

```json
{
  "mcpServers": {
    "mcp-openapi-proxy": {
      "command": "npx",
      "args": ["@nullplatform/mcp-api"],
      "env": {
        "NP_API_KEY": "<your apikey>"
      }
    }
  }
}
```
