
### Purpose (Why):

To execute automated tests against mBed application

### Getting Started



## Project Architecture:

Webdriver.io automation test + Jasmine
====================

## Executing Tests:

run `npm install` (To get node modules)

run `npm test`



#### Screenshot
Failed test is saved in errorShots folder

## Question 2 - Explain what measures you will take to make web automation tests robust?

The measures that i would take to making this web automation tests more robust are:

i. Use of data-driven tests by automatically or programmatically generating test data from webservicies (using a mock api). This data 
can be stored as json. This will also allow a single test to iterate through multiple permutations using different data points.

ii. Run automated checks and turn them into an integral part of a continuous delivery pipeline.

iii. Use of Page object. This will enhance test maintenance and also reduce code duplication.

iv. Set desiredCapabilities for all the browsers (Chrome, Geckodriver, safari, Microsoft Edge) 
in package.json file and modify Scripts to run automated test on a specific browser.

v. Centralise waitForexit or waitUntil to be global.

## What to be tested 

i.   Username/email textfield.
ii.  Password textfield.
iii. Login button.
iv.  Logout button.
v.   Cookie Policy.
vi.  Display User profile.
vii. validation errors.
Viii. Page title.

## Manual testcases (Negative scenarios)

1. Verify that Username/email textfield does accept a blank field

i. Ensure that the texfield is blank
ii Enter: ' mbedcloud123' in the Password textfield & click on login button
Expected: It should display 'please fill in the field'
Actual: Displayed 'please fill in the field'

2. Verify that Password textfield does accept a blank field
i. Ensure that the texfield is blank
ii Enter: 'cloudportal33,' in the Username textfield & click on login button
Expected: It should display 'please fill in the field'
Actual: Displayed 'please fill in the field'

##  Other tests that could be tested if the details below are provided:

i.  Username/email textfield lenght and what the username textfield would accept (characters, numbers, lowercase/upercase, special characters and space).
ii. Password textfield lenght and what the password textfield would accept (characters, numbers, lowercase/upercase and special characters).
ii. Test forgotten your username.
iv. Test forgotten your password.
 








