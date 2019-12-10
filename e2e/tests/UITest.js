

import assert from 'assert';
import Page from '../pageObjects/Page';
import HomePage from '../pageObjects/HomePage';
import LoginPage from '../pageObjects/LoginPage';
import DashboardPage from '../pageObjects/DashboardPage';

describe('home page', () => {
    it('User should open login Page with the right title', () => {
        Page.open('');
        Page.waitForLoading();
        const title = browser.getTitle();
        assert.strictEqual(
            title,
            'Pelion Device Management Portal'
        );
    });
    it('User should accept cookie policy', () => {
        Page.setAndDeleteCookies();
        browser.waitForExist('#cookieconsent > a', 10000);
        Page.acceptCookiePolicy().click();
    });
    it('User should navigate to login page', () => {
        HomePage.loginWithAnotherProvider().click();
        HomePage.loginWithAccountMbed().click();
        browser.waitForExist('form#login-form > .h2', 5000);
        const message = browser
            .getText('form#login-form > .h2');
        assert.strictEqual(message, 'Log in');
    });

    it('User should be able to login with a valid credential', async () => {
        LoginPage.usernameTextField().setValue('cloudportal33');
        LoginPage.passwordTextField().setValue('mbedcloud123');
        browser.waitForExist('div.flex-container.align-right > button', 3000);
        LoginPage.loginButton().click();
        browser.waitForExist('.page-title', 10000);
        const message = browser
            .getText('.page-title');
        assert.strictEqual(message, 'Usage dashboard');
    });

    it('User should be able to logut', async () => {
        browser.waitForExist('#user-account-menu > .complete:nth-of-type(1) .text', 5000);
        DashboardPage.userProfile().click();
        DashboardPage.userLogsOut().click();
        browser.waitForExist('#login-with-mbed > div > span.text', 10000);
        const message = browser
            .getText('#login-with-mbed > div > span.text');
        assert.strictEqual(message, 'Log in with account.mbed.com');
    });

    it('User unable to login with an invalid credential', async () => {
        browser.waitForExist('#login-with-mbed > div > span.text', 5000);
        HomePage.loginWithAccountMbed().click();
        browser.waitForExist('#id_username', 5000);
        LoginPage.usernameTextField().setValue('cloudportal33');
        LoginPage.passwordTextField().setValue('mbedcloud');
        LoginPage.loginButton().click();
        browser.waitForExist('#login-form > ul > li', 5000);
        const message = browser
            .getText('#login-form > ul > li');
        assert.strictEqual(message, 'Wrong email or password.');
    });
});
