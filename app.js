document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('pdf-file');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please upload a PDF file.');
        return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    fetch('https://your-backend-service.onrender.com/summarize', { // Replace with actual Render backend URL
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const summaryOutput = document.getElementById('summary-output');
        const summaryText = document.getElementById('summary-text');
        summaryText.textContent = data.summary;
        summaryOutput.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById('ask-question-btn').addEventListener('click', function() {
    const questionInput = document.getElementById('question-input').value.trim();

    if (!questionInput) {
        alert('Please enter a question.');
        return;
    }

    fetch('https://your-backend-service.onrender.com/ask', { // Replace with actual Render backend URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question: questionInput })
    })
    .then(response => response.json())
    .then(data => {
        const answerOutput = document.getElementById('answer-output');
        const answerText = document.getElementById('answer-text');
        answerText.textContent = data.answer;
        answerOutput.style.display = 'block';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
