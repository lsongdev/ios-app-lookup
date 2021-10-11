#!/usr/bin/env node

import { lookup } from '../index.js';

const [bundleId] = process.argv.slice(2);

(async () => {

  if (!bundleId) {
    console.log();
    console.log('   usage:');
    console.log();
    console.log(`~$ ios-app-lookup <bundleId>`);
    return
  }
  const apps = await lookup(bundleId);
  for (const app of apps) {
    console.log();
    console.log("   App Name:", app.trackName);
    console.log("     Author:", app.artistName);
    console.log("       Link:", app.trackViewUrl);
    console.log("       Icon:", app.artworkUrl100);
    console.log("Description:", app.description);
    console.log();
    console.log('---------------------------------------------------');
    console.log();
  }
})();