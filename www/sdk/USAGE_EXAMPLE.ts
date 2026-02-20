// Example usage for lenders (TypeScript)
import { ApiClient } from './sdk';

const client = new ApiClient({ BASE: 'https://api.creatorlayer.eu' });

async function main() {
  // Replace 'getSomething' and params with a real endpoint from your API
  const result = await client.someEndpoint.getSomething();
  console.log(result);
}

main();
