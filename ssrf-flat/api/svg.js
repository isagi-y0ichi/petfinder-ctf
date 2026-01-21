// SVG endpoint that redirects to internal URL
// The response will be an SVG which is technically an image format

export default function handler(req, res) {
  const target = req.query.target || 'http://127.0.0.1:3000/flag';
  
  console.log('=== SVG REDIRECT ===');
  console.log('Target:', target);
  console.log('====================');
  
  // Return an SVG that tries to load external content
  // Or just redirect
  res.redirect(302, target);
}
