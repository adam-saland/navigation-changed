# Detecting Navigation Changes

This repository demonstrates **one** possible method for detecting navigation changes from an OpenFin View

## How to use

- clone the repository
- `npm i | npm install`
- `npm start`

## Demonstration Steps / Expected behavior

1. Two devtools windows will open upon starting the application
2. With a url of `http://localhost:5555/platform-window.html`, corresponding with the platform's defaultWindow.
    1. This devtools window should have a log statement reading
  `ORIGINAL URL http://localhost:5555/navigation-changed.html`
3. With a url of `http://localhost:5555/navigation-changed.html` corresponding with the existing view.
4. Select the button labeled "Change Location"
   1. The open devtools with the url from **step 1** should have a log statement reading `NEW URL https://www.google.com/`
5. From the devtools console in **step 2** enter the api call `fin.me.navigateBack()`
   1. The devtools window from **step 1** should now have a log statement reading `NEW URL http://localhost:5555/navigation-changed.html`

## Corresponding code

- `js/navigation-changed.js`
- `js/navigation-listener.js`

License MIT

The code in this repository is covered by the included license.

However, if you run this code, it may call on the OpenFin RVM or OpenFin Runtime, which are covered by OpenFin’s Developer, Community, and Enterprise licenses. You can learn more about OpenFin licensing at the links listed below or just email us at support@openfin.co with questions.

<https://openfin.co/developer-agreement/>
<https://openfin.co/licensing/>
