const shrinkRay = require('shrink-ray-current');
const polka = require('polka');
const next = require('next');
const helmet = require('helmet');
const uuid = require('uuid/v4');
const { parse } = require('url');
const { join } = require('path');

const { PORT = 4242, NODE_ENV } = process.env;
const { createServer } = require('http');

const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const rootStaticFiles = [
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
  '/apple-touch-icon.png',
  '/browserconfig.xml',
  '/data.json',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon.ico',
  '/manifest.json',
  '/metadata.html',
  '/mstile-150x150.png',
  '/og-image.jpg',
  '/robots.txt',
  '/safari-pinned-tab.svg',
  '/sitemap.xml',
];

function createNonce(req, res, next) {
  // Polka does not support all Express built-ins yet
  // so we create `locals` then add `.nonce`
  res.locals = {
    nonce: Buffer.from(uuid()).toString('base64'),
  };
  next();
}

function getNonce(req, res) {
  return `'nonce-${res.locals.nonce}'`;
}

function getDirectives() {
  const self = "'self'";
  const none = "'none'";
  const unsafeInline = "'unsafe-inline'";
  const unsafeEval = "'unsafe-eval'";
  const strictDynamic = "'strict-dynamic'";
  const scripts = ['https:'];
  const styles = ['https:', 'fonts.googleapis.com'];
  const fonts = ['https:', 'fonts.gstatic.com'];
  const images = ['https:', 'data:', 'target.scene7.com'];
  const connect = ['https:', 'target.scene7.com'];

  return {
    defaultSrc: [none],
    scriptSrc: [
      self,
      getNonce,
      strictDynamic,
      // unsafeInline,
      ...scripts,
      // /* if dev */ unsafeEval,
    ],
    styleSrc: [self, unsafeInline, ...styles],
    fontSrc: [self, ...fonts],
    imgSrc: [self, ...images],
    baseUri: [none],
    objectSrc: [none],
    connectSrc: dev ? [self, ...connect] : [...connect],
    upgradeInsecureRequests: dev ? false : true,
  };
}

function getHelmetConfig() {
  // Configure Helmet
  return {
    contentSecurityPolicy: {
      directives: getDirectives(),
    },
    frameguard: {
      action: 'deny',
    },
    hsts: {
      maxAge: 63072000,
      includeSubDomains: true,
      preload: true,
    },
    referrerPolicy: {
      policy: 'no-referrer-when-downgrade',
    },
  };
}

function setHeaders(req, res, next) {
  // Set headers not covered by Helmet
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://case-study.anthony.codes',
  );
  res.setHeader(
    'Feature-Policy',
    "accelerometer 'none'; ambient-light-sensor 'none'; autoplay 'none'; camera 'none'; encrypted-media 'none'; fullscreen 'none'; geolocation 'none'; gyroscope 'none'; magnetometer 'none'; microphone 'none'; midi 'none'; payment 'none'; picture-in-picture 'none'; speaker 'none'; usb 'none'; vr 'none'",
  );
  res.setHeader('X-UA-Compatible', 'IE=edge; chrome=1');
  next();
}

// Initialize Next.js
app.prepare().then(() => {
  // Initialize Polka
  const { handler } = polka()
    // Add nonce, header, Helmet, and shrinkRay middleware
    .use(setHeaders, createNonce, helmet(getHelmetConfig()), shrinkRay())
    // Handle all requests
    .get('*', async (req, res) => {
      const parsedUrl = parse(req.url, true);
      const { path, query } = parsedUrl;

      if (rootStaticFiles.includes(path)) {
        // Handle requests for files in /static/ with Next.js magic
        app.serveStatic(req, res, join(__dirname, 'static', path));
      } else {
        // Handle everything else with Polka
        handle(req, res);
      }
    });

  // Initialize server
  createServer({}, handler).listen(PORT, _ =>
    console.log(`> Ready on http://localhost:${PORT}`),
  );
});
