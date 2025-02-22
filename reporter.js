const reporter=require ('cucumber-html-reporter');

const reportOptions={
    theme: 'bootstrap',
    jsonFile : 'cucumber_report.json',
    output : 'reports/cucumber_report.html',
    reportSuiteAsScenarios : true,
    launchReport : true,
    metadata : {
        'App Version' : '1.0.0',
        'Test Environment' : 'STAGE',
        'Browser' : 'Chrome',
        'Platform' : 'Windows 10',
        'Parallel' : 'Scenarios',
        'Executed' : 'Remote'

    }

}

reporter.generate(reportOptions);