## ios-app-lookup

> iOS App Infomation Lookup

### install

```sh
~$ yarn add ios-app-lookup
```

### example

```js
import { lookup } from 'ios-app-lookup';

(async () => {
  const info = await lookup('com.apple.findmy');
  console.log(info);
})();
```

Finding app's icon image:

```js
import { lookup } from 'ios-app-lookup';

(async () => {
  const icon = await findIcon('com.apple.findmy', /* default size is 100; can be: 60|100|512 */);
  console.log(icon);
  // -> https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/b4/2c/bf/b42cbfee-08b7-8d92-bad0-571b4ecdea60/source/100x100bb.jpg
})();
```

### cli usage

```sh
~$ npm i -g ios-app-lookup
```

```sh
~$ ios-app-lookup com.apple.findmy

   App Name: Find My
     Author: Apple
       Link: https://apps.apple.com/us/app/find-my/id1514844621?uo=4
       Icon: https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/b4/2c/bf/b42cbfee-08b7-8d92-bad0-571b4ecdea60/source/100x100bb.jpg
Description: View the current location of your Apple devices and share your location with friends and family in a single, easy-to-use app.

Features

• View the location of your missing iPhone, iPad, Apple Watch, Mac, or AirPods on a map. You can locate your device even if it can’t connect to the internet.

• Play a sound to find your device nearby. Put it in Lost Mode to lock the screen and display a message, or erase it remotely to protect your data.

• Use the People tab to share location with friends and family so you can keep in touch, coordinate, or know when a family member has arrived home safely.

• On Apple Watch, use the Find People app to share your location with friends and family members.

---------------------------------------------------
```

### license

This project is under GPLv2 license.