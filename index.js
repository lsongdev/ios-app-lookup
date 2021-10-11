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