
// DOM Elements
const uploadCard = document.getElementById('uploadCard');
const analyzingSection = document.getElementById('analyzingSection');
const resultsSection = document.getElementById('resultsSection');
const uploadBtn = document.getElementById('uploadBtn');
const cameraBtn = document.getElementById('cameraBtn');
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const resultsThumbnail = document.getElementById('resultsThumbnail').querySelector('img');
const newPhotoBtn = document.getElementById('newPhotoBtn');
const copyReportBtn = document.getElementById('copyReportBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');

// State
let useCameraMode = false;
let isProcessing = false;

// Event Listeners
uploadBtn.addEventListener('click', () => {
    useCameraMode = false;
    if (fileInput) {
        fileInput.removeAttribute('capture');
        fileInput.click();
    }
});

cameraBtn.addEventListener('click', () => {
    useCameraMode = true;
    if (fileInput) {
        fileInput.setAttribute('capture', 'environment');
        fileInput.click();
    }
});

fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
    }
});

newPhotoBtn.addEventListener('click', () => {
    resetToUploadState();
});

copyReportBtn.addEventListener('click', () => {
    const reportText = generateReportText();
    navigator.clipboard.writeText(reportText);
    showToast('Copied to clipboard', 'Report details have been copied to your clipboard.');
});

toastClose.addEventListener('click', () => {
    hideToast();
});

// For demonstration: add drag-and-drop functionality
uploadCard.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadCard.classList.add('drag-over');
});

uploadCard.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadCard.classList.remove('drag-over');
});

uploadCard.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    uploadCard.classList.remove('drag-over');
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
    }
});

// Functions
function handleFile(file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/heic', 'image/heif'];
    if (!validTypes.includes(file.type)) {
        showToast('Unsupported file type', 'Please upload a JPG, PNG, or HEIC image.');
        return;
    }

    // Create image preview
    const reader = new FileReader();
    reader.onload = (event) => {
        if (imagePreview) {
            imagePreview.src = event.target.result;
        }
        if (resultsThumbnail) {
            resultsThumbnail.src = event.target.result;
        }
    };
    reader.readAsDataURL(file);

    // Start processing
    isProcessing = true;
    showToast('Image uploaded', 'Analyzing your plant...');

    showAnalyzingSection();
    
    // Simulate AI processing time
    setTimeout(() => {
        isProcessing = false;
        showResultsSection();
        showToast('Analysis complete!', 'We\'ve identified your plant and its condition.');
    }, 3000);
}

function showAnalyzingSection() {
    uploadCard.classList.add('hidden');
    analyzingSection.classList.remove('hidden');
    resultsSection.classList.add('hidden');
}

function showResultsSection() {
    uploadCard.classList.add('hidden');
    analyzingSection.classList.add('hidden');
    resultsSection.classList.remove('hidden');
}

function resetToUploadState() {
    uploadCard.classList.remove('hidden');
    analyzingSection.classList.add('hidden');
    resultsSection.classList.add('hidden');
    fileInput.value = '';
}

function generateReportText() {
    return `Plant Analysis Report:
Species: Monstera Deliciosa
Health Status: Needs Attention
Issue: Early signs of leaf spot disease
Recommendations:
- Isolate the plant from others to prevent spread
- Remove affected leaves with sterilized scissors
- Decrease watering frequency to prevent moisture
- Apply neem oil solution once weekly for 3 weeks`;
}

function showToast(title, message) {
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    
    // Auto hide after 5 seconds
    setTimeout(() => {
        hideToast();
    }, 5000);
}

function hideToast() {
    toast.classList.add('toast-hiding');
    setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('toast-hiding');
    }, 300);
}

// Mobile menu toggle (simple implementation for demo)
mobileMenuBtn.addEventListener('click', () => {
    // In a real implementation, this would toggle a mobile menu
    alert('Mobile menu functionality would be implemented here');
});

// For demonstration purposes: add a class to show the toast is hiding
toast.addEventListener('animationend', (e) => {
    if (e.animationName === 'slideOut') {
        toast.classList.add('hidden');
        toast.classList.remove('toast-hiding');
    }
});

// Add CSS for the toast hiding animation
document.head.insertAdjacentHTML('beforeend', `
<style>
.toast-hiding {
    animation: slideOut 0.3s ease forwards;
}
.drag-over {
    border: 2px dashed var(--color-primary);
    background-color: var(--color-primary-light-10);
}
</style>
`);
