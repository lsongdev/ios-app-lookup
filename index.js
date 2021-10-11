import https from 'https';

const get = url =>
  new Promise(done => https.get(url, done));

const readStream = stream => {
  const buffer = [];
  return new Promise((resolve, reject) => {
    stream
      .on('error', reject)
      .on('data', chunk => buffer.push(chunk))
      .on('end', () => resolve(Buffer.concat(buffer)))
  });
};

export const lookup = bundleId => {
  return Promise
    .resolve()
    .then(() => get(`https://itunes.apple.com/lookup?bundleId=${bundleId}`))
    .then(readStream)
    .then(JSON.parse)
    .then(res => res.results)
};

/**
 * findIcon
 * @param {*} bundleId 
 * @param {*} size (60|100|512)
 * @returns 
 */
export const findIcon = async (bundleId, size = '100') => {
  const [app] = await lookup(bundleId);
  if(!app) return;
  return app[`artworkUrl${size}`];
};