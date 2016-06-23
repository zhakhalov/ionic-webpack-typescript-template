## How to start?

#### Install global dependencies

```
$ npm install cordova ionic@beta tsd -g
```

#### Install local dependencies

```
$ npm install && tsd install
```

## How to add third-party dependency?
For proper adding of third-party dependency you should `require('<deps-name>')` in `src/entries/dependencies.ts`

## How to work with?

+ Start Electron UI for debug
  ```
  $ npm run ui
  ```
+ Start watch and rebuild loop
  ```
  $ npm run watch
  ```
+ Build to devices
  ```
  $ ionic build android
  ```
  ```
  $ ionic build ios --device
  ```
