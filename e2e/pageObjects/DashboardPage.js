class DashboardPage {
    userProfile() {
        return browser
            .element('#user-account-menu > .complete:nth-of-type(1) .text');
    }

    userLogsOut() {
        return browser
            .element('div#log-out  .text');
    }
}
module.exports = new DashboardPage();
