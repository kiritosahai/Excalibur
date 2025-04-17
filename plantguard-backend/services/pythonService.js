
const { spawn } = require('child_process');
const path = require('path');

class PythonService {
  analyzeImage(imagePath) {
    return new Promise((resolve, reject) => {
      const pythonProcess = spawn('python', [
        path.join(__dirname, '../plantguard_ai.py'), 
        imagePath
      ]);

      let result = '';
      let error = '';

      pythonProcess.stdout.on('data', (data) => {
        result += data.toString();
      });

      pythonProcess.stderr.on('data', (data) => {
        error += data.toString();
      });

      pythonProcess.on('close', (code) => {
        if (code !== 0) {
          reject(new Error(`Python script failed: ${error}`));
        } else {
          try {
            const parsedResult = JSON.parse(result);
            resolve(parsedResult);
          } catch (parseError) {
            reject(new Error('Failed to parse analysis result'));
          }
        }
      });
    });
  }
}

module.exports = new PythonService();
