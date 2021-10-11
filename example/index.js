import { lookup } from '../index.js';

(async () => {
  const info = await lookup('com.apple.findmy');
  console.log(info);
})();