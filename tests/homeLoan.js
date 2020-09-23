var completeLoan = require('../testAssets/completeLoan')
var homeLoan = {}

module.exports = {
    beforeEach: browser => {
        homeLoan = browser.page.homeLoanPage()
        homeLoan
            .navigate()
    },
    after: browser => {
        homeLoan.end()
    },
    'Complete Loan Test': browser => {
        completeLoan.forEach(test => {
            homeLoan.completeHomeLoan(test)
        })
        } 
}