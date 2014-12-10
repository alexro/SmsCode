SmsCode
=======

AngularJS demo of UI validation and unit-testing

Scenario:
=======

User received a code via SMS and enters that code in a form to reset their password.

Actions:

1. A html form allows to enter code.

2. Client side validation allows only numbers and only 6 digit code input.

3. On submit the form POSTs data in json format {code: <input value>}

4. Server returns a json feed with error like { errorcode : 901, error: 'invalid code' } 

5. UI is updated to reflect the error.

6. Karma and Mocha tests for client and server-side code.
