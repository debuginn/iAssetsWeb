import { buildSite } from './build-site.mjs';

buildSite().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
