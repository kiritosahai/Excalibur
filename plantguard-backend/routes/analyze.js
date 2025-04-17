
module.exports = (upload, pythonService) => {
  const express = require('express');
  const router = express.Router();

  router.post('/plant-disease', upload.single('image'), async (req, res) => {
    try {
      // Validate file upload
      if (!req.file) {
        return res.status(400).json({ error: 'No image uploaded' });
      }

      // Run Python AI analysis
      const analysisResult = await pythonService.analyzeImage(req.file.path);

      // Return analysis results
      res.json({
        success: true,
        data: {
          species: analysisResult.species,
          disease: analysisResult.disease,
          confidence: analysisResult.confidence,
          recommendations: analysisResult.recommendations
        }
      });
    } catch (error) {
      console.error('Analysis error:', error);
      res.status(500).json({ 
        error: 'Plant disease analysis failed',
        message: error.message 
      });
    }
  });

  return router;
};
