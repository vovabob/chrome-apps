/* @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html',
    {
      id: 'win-notes',
      bounds: {width: 640, height: 480}
    }
  );
});
