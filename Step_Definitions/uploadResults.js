const axios = require("axios");
const fs = require("fs");

async function uploadTestResults() {
  const xrayUrl = "https://xray.cloud.getxray.app/api/v2/import/execution/cucumber";
  const apiToken = "ATATT3xFfGF0VwKYfmXlDYZiAcsARdHr5h0OOlurhEQfJ9h97iG1DUd6cUfcC5ZYBkhk1-MNXJCfoj8Kk3NxqRWGy8GV8W2qX93zIc4a0q1ttSqf6-XhWxl0zg_skIj6czFfv_w_zC7E-koW2gEGPdRHjNUBPEhni4K-asR_hilOZBmGGPauwVI=5E4A33D0"; // Replace with your Xray API token
  const reportPath = "./reports/cucumber.json"; // Path to your report file

  try {
    // Read the report file
    const reportData = fs.readFileSync(reportPath, "utf-8");

    // Make API request to Xray
    const response = await axios.post(
      xrayUrl,
      reportData,
      {
        headers: {
          "Authorization": `Bearer ${apiToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Test results uploaded successfully:", response.data);
  } catch (error) {
    console.error("Error uploading test results:", error.response?.data || error.message);
  }
}

uploadTestResults();
