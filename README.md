## Launchyard Test Demo

This is a demo to show filtering on a list of items that has been fetched from a json file.

It has the following features:

* The items are alphabetically sorted.
* To perform a search just type in the search box, filtered results should show automatically.
* If no entry is found in the list, you will have an option to add one.

Just a few FYI:

* You might notice a jump in the HTML content during the initial load as I am using LESS-CSS to pre-process my styles on the fly, to keep things simple as of now, so the page does not have any styles till the compilation has been done. This issue will be gone during any dev or production build as the CSS will be compiled during the build process.
* The search keyword is used to match both name and designation.

To run this demo you just have to clone the repo and in your folder run any simple server.

I use the following:
```
  python -m SimpleHTTPServer
```
And then go to your [http://localhost:8000](http://localhost:8000)