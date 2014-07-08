EsriLeafletBrowserifyDemo
=========================

A simple demo for using ESRI-Leaflet with Browserify

To Run
------

```bash
npm install

npm run bundle

// Then open index.html
```

How it Works
------------

Leaflet is CommonJS and AMD compatable automatically, but currently ESRI-Leaflet is not.
To use it with browserify we add a shim using: [Browserify Shim](https://github.com/thlorenz/browserify-shim)

We add the following code to the `package.json`

```bash
  "browserify": {
    "transform": [ "browserify-shim" ]
  },
  "browserify-shim": {
    "./node_modules/esri-leaflet/dist/esri-leaflet.js" :  { "exports": "L", "depends": [ "./node_modules/leaflet/dist/leaflet.js:L" ] }
  }
```



Read More
---------

[Basics of Leaflet & Browserify](http://learnjs.io/blog/2013/11/08/leaflet-basics/[http://learnjs.io/blog/2013/11/08/leaflet-basics/)

[Browserify Shims](https://github.com/thlorenz/browserify-shim)
