
# PlantGuard Backend

## Project Overview
PlantGuard is an AI-powered plant disease diagnosis application.

## Folder Structure
```
plantguard-backend/
├── app.js                  # Main Express application
├── package.json            # Node.js dependencies
├── routes/
│   └── analyze.js          # API routes for plant analysis
├── services/
│   └── pythonService.js    # Service to interact with Python script
├── uploads/
│   └── (uploaded images)   # Folder for storing uploaded plant images
├── venv/                   # Python virtual environment
├── kaggle.json             # Your Kaggle API key
├── data/                   # Downloaded Kaggle data
│   └── train.csv
├── plantguard_ai.py        # Python script calling Kaggle dataset
└── README.md               # This file
```

## Setup Instructions

### Prerequisites
- Node.js
- Python 3.8+
- pip
- Kaggle API credentials

### Installation
1. Clone the repository
2. Create a virtual environment
3. Install dependencies
   ```
   npm install
   pip install -r requirements.txt
   ```

### Running the Application
- Start the Node.js server: `npm start`
- Run AI script: `python plantguard_ai.py`

### Environment Variables
- Create a `kaggle.json` with your Kaggle API credentials
- Set up necessary environment variables for API keys
