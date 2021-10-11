import { findIcon, lookup } from '../index.js';

(async () => {
  const info = await lookup('com.apple.findmy');
  console.log(info);
  const icon = await findIcon('com.apple.findmy');
  console.log(icon);
})();