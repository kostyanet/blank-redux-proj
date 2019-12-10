# Outage Handler
## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3333](http://localhost:3333) to view it in the browser.

The page will reload if you make edits. You will also see lint errors in the console if any.<br>
This mode is mostly dedicated to develop new features and see your changes immediately.

### `npm test`
**Will come soon**<br>
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `dist` folder.<br>

## Fake data
On the early age the app used to heavily depend on mocks. You can find JSON the mocks in the `/mocks` folder.<br>

## Running WireMock to mock network requests
Until all of the expected endpoints are implemented, we still have to mock some of them. We use WireMock for this purpose.
Run WireMock on `PORT=7777` from the folder `./mocks` with a command similar to one of those:

`java -jar C:/tools/wiremock/wiremock-standalone-2.24.0.jar --port 7777 --verbose`
or
`java -jar /Users/konstantinnetrebenko/kostya/utils/wiremock/wiremock-standalone-2.24.1.jar --port 7777 --verbose`
depending on your OS.

Test that it returns a list of facets:
`curl -X GET http://127.0.0.1:7777/facets?asd`

Gracefully shutting WireMock down:
`curl -X POST http://127.0.0.1:7777/__admin/shutdown`
