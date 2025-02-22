const common =`
--require Setup/hooks.js 
--require Step_Definitions/**/*.step.js
`

module.exports = {
    default : `${common} features/**/*.feature`,
    format: ["json:reports/cucumber_report.json"], // Generate report in Xray-compatible format
    publishQuiet: true, 
}
