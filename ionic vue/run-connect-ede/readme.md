Go to your new project: cd .\run-connect-ede
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition

# using android studio:
1. ```ionic capacitor add``` of ```ionic capacitor copy android```
2. ```npx cap open android```

# using vs code as ide and live updating with android studio
```ionic capacitor run android -l --host=YOUR_IP_ADDRESS```

https://gist.github.com/brospars/589ccceebf3e0389cfe61db6894b36a1


https://ionicframework.com/docs/developing/android



in een <template> zet je html

# gps
// Install Ionic Native TypeScript wrapper
npm install cordova-plugin-geolocation

// Install Cordova plugin
npm install @ionic-native/geolocation

// Update native platform project(s) to include newly added plugin
ionic cap sync

npm install @ionic-native/core