#!/usr/bin/env node

import {NPToken} from "./np_token.js";
import {NullplatformApiMcp} from "./nullplatform_api_mcp.js";

async function main() {
    if(!process.env.NP_API_KEY) {
        console.error("NP_API_KEY not set");
        process.exit(1);
    }
    const npToken = new NPToken({apiKey: process.env.NP_API_KEY})
    const openapi = new NullplatformApiMcp({
        npToken
    });
    await openapi.init();
}

main().then(r =>  {
    if(r)
        console.error(r)
})