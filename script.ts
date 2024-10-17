import jsPDF from 'jspdf';

// Copy the resume link to clipboard
function copyLink() {
    const copyText = document.getElementById('resumeLink') as HTMLInputElement;
    copyText.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
}

// Download the resume as PDF
function downloadPDF() {
    const doc = new jsPDF();
    doc.text("Resume of Khizer Hayat", 10, 10);
    doc.text("Email: khizerbhutta1122@gmail.com", 10, 20);
    doc.text("Phone: 03013331727", 10, 30);

    // Summary Section
    doc.text("Summary:", 10, 40);
    doc.text("A dedicated and results-driven software developer with over 4 years of", 10, 50);
    doc.text("experience in building efficient and scalable web applications.", 10, 60);
    doc.text("Skilled in TypeScript, JavaScript, and modern frameworks.", 10, 70);

    // Education Section
    doc.text("Education:", 10, 80);
    doc.text("• Bachelor's in Computer Science - ABC University", 10, 90);
    doc.text("• Intermediate - XYZ College", 10, 100);
    doc.text("• Matriculation - LMN High School", 10, 110);

    // Experience Section
    doc.text("Experience:", 10, 120);
    doc.text("• Software Developer at DEF Company (2020 - Present)", 10, 130);
    doc.text("• Intern at GHI Company (2019 - 2020)", 10, 140);

    // Skills Section
    doc.text("Skills:", 10, 150);
    doc.text("• TypeScript, JavaScript, HTML, CSS", 10, 160);
    doc.text("• React, Node.js", 10, 170);
    doc.text("• Database Management (MySQL, MongoDB)", 10, 180);
    doc.text("• Version Control (Git, GitHub)", 10, 190);

    doc.save('khizerhayat_resume.pdf');
}

