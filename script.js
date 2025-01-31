document.getElementById('generate-template').addEventListener('click', function() {
    const headerText = document.getElementById('header-text').value;
    const bodyText = document.getElementById('body-text').value;
    const backgroundColor = document.getElementById('background-color').value;
    const fontColor = document.getElementById('font-color').value;
    const fontFamily = document.getElementById('font-family').value;
    const imageFile = document.getElementById('image-upload').files[0];

    // Get the preview elements
    const templateHeader = document.getElementById('template-header');
    const templateBody = document.getElementById('template-body');
    const emailTemplate = document.getElementById('email-template');

    // Set the template text
    templateHeader.textContent = headerText || 'Default Header';
    templateBody.textContent = bodyText || 'This is the default body of the email.';

    // Handle image upload for background
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            emailTemplate.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(imageFile);
    } else {
        emailTemplate.style.backgroundImage = 'none';
    }

    // Apply styles to template
    emailTemplate.style.backgroundColor = backgroundColor || '#ffffff';
    templateHeader.style.color = fontColor || '#333333';
    templateBody.style.color = fontColor || '#333333';
    emailTemplate.style.fontFamily = fontFamily || 'Arial, sans-serif';

    // Show download button
    document.getElementById('download-template').style.display = 'inline-block';
});

// Download the generated template
document.getElementById('download-template').addEventListener('click', function() {
    const headerText = document.getElementById('header-text').value;
    const bodyText = document.getElementById('body-text').value;
    const backgroundColor = document.getElementById('background-color').value;
    const fontColor = document.getElementById('font-color').value;
    const fontFamily = document.getElementById('font-family').value;
    const emailTemplate = document.getElementById('email-template');
    
    const templateHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Generated Email Template</title>
            <style>
                body {
                    font-family: ${fontFamily};
                }
                .email-template {
                    background-color: ${backgroundColor};
                    background-image: url('${emailTemplate.style.backgroundImage}');
                    background-size: cover;
                    background-position: center;
                    padding: 20px;
                    border-radius: 5px;
                    color: ${fontColor};
                }
                .email-template h1 {
                    font-size: 24px;
                    color: ${fontColor};
                }
                .email-template p {
                    font-size: 16px;
                    color: ${fontColor};
                }
            </style>
        </head>
        <body>
            <div class="email-template">
                <h1>${headerText}</h1>
                <p>${bodyText}</p>
            </div>
        </body>
        </html>
    `;

    // Create a downloadable link
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(templateHTML);
    downloadLink.download = 'email_template.html';
    downloadLink.click();
});
