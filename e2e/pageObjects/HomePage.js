class HomePage {
    loginWithAnotherProvider() {
        return browser
            .element('div.clickable.login-switch > span.inlineBlock');
    }

    loginWithAccountMbed() {
        return browser
            .element('#login-with-mbed > div > span.text');
    }
}
module.exports = new HomePage();
