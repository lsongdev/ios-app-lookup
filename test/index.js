import assert from 'assert';
import test from './test.js';
import { lookup, findIcon } from '../index.js';

test("ios-app-lookup#lookup", async () => {
  const infos = await lookup("com.apple.findmy");
  assert.ok(infos);
  assert.ok(Array.isArray(infos));
  assert.strictEqual(infos.length, 1);
});

(async () => {

  await test("ios-app-lookup#findIcon", async () => {
    const icon = await findIcon("com.apple.findmy");
    assert.ok(icon);
    assert.strictEqual(typeof icon, "string");
    assert.ok(/^https/.test(icon));
  });

  await test("ios-app-lookup#findIcon with size: 60", async () => {
    const icon = await findIcon("com.apple.findmy", 60);
    assert.ok(icon);
    assert.strictEqual(typeof icon, "string");
    assert.ok(/60/.test(icon));
  });

  await test("ios-app-lookup#findIcon with size: 100", async () => {
    const icon = await findIcon("com.apple.findmy", 100);
    assert.ok(icon);
    assert.strictEqual(typeof icon, "string");
    assert.ok(/100/.test(icon));
  });

  await test("ios-app-lookup#findIcon with size: 512", async () => {
    const icon = await findIcon("com.apple.findmy", 512);
    assert.ok(icon);
    assert.strictEqual(typeof icon, "string");
    assert.ok(/512/.test(icon));
  });
})();