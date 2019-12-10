class LoginPage {
    usernameTextField() {
        return browser
            .element('#id_username');
    }

    passwordTextField() {
        return browser
            .element('#id_password');
    }

    loginButton() {
        return browser
            .element('div.flex-container.align-right > button');
    }
}
module.exports = new LoginPage();
