# CreatorLayer TypeScript SDK

This SDK is auto-generated from the live OpenAPI spec at https://api.creatorlayer.eu/openapi.yaml.

## How to Generate/Update the SDK

From the root of the repo:

```sh
npm install
npm run generate:sdk
```

This will (re)generate the SDK in `www/sdk`.

## How to Use (in TypeScript/JavaScript)

Example usage:

```ts
import { DefaultService } from './sdk';

// Health check
const health = await DefaultService.getHealth();
console.log(health);

// Get a creator by ID
const creator = await DefaultService.getApiV1Creators({ id: 123 });
console.log(creator);
```

- All endpoints are available as static methods on `DefaultService`.
- Types are included for all models and responses.
- The SDK uses the Fetch API and is tree-shakeable.

## How to Publish (Optional)

1. Edit `www/sdk/package.json` to set name, version, and author as needed.
2. From `www/sdk`, run:
   ```sh
   npm publish --access public
   ```

---

For more details, see the [openapi-typescript-codegen docs](https://www.npmjs.com/package/openapi-typescript-codegen).
