export default function handler(req, res) {
  // Log all request details
  console.log('========== SSRF CAPTURE ==========');
  console.log('Time:', new Date().toISOString());
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('--- HEADERS ---');
  for (const [key, value] of Object.entries(req.headers)) {
    console.log(`${key}: ${value}`);
  }
  console.log('==================================');

  // 1x1 transparent PNG
  const png = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
    'base64'
  );

  res.setHeader('Content-Type', 'image/png');
  res.status(200).send(png);
}
