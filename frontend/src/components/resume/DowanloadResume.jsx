import React from 'react'

export default function DowanloadResume() {
    const handleGeneratePDF = async () => {
        const htmlContent = document.getElementById("resume").innerHTML;

        try {
            const response = await axios.post("http://localhost:8000/api/generate-pdf/", {
                html: htmlContent,
            }, {
                headers: { 'Content-Type': 'application/json' },
                responseType: 'blob',  // Expect a blob (PDF) in response
            });

            // Download the PDF
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'resume.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };
    return (
        <>
            <div id='resume'>DowanloadResume</div>
            <button
                onClick={handleGeneratePDF}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Download as PDF
            </button>
        </>
    )
}
