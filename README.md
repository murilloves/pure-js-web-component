# Pure JS Web Component

"A pure JS web component, if you don't want to use a framework like Angular, ReactJs just for that. Simple and straight to the point."

## What for

#### What are Web Components?
They are pieces of code that you can attach into your DOM. Usually they come in separated HTML files and you import them as you want. Their purpose is to make websites more maintainable, easy to read and delightful.

#### What will I be able to do with this?
- You can import pieces of code inside your html files simple by using **`<app-sample-tag></app-sample-tag>`**
- You'll be able to style them as you wish, like you were running an Angular 6 application

- **And the best part, it's small, easy to understand and flexible as you want it to be!**

## Setup

###### Live preview [Pure JS Web Component](https://github.com/murilloves/pure-js-web-component) - Running app

#### Import it in your project, web site or web page:

```html
<!DOCTYPE html>
<html>
    <head>

	<!-- IMPORT THE CORE MODULES -->
        <script src="core/modules.js"></script>

    </head>
    <body>

        <!-- WRITE YOUR TAGS AS BELOW -->

	<first-sample-tag></first-sample-tag>
	<second-sample-tag></second-sample-tag>

	<!-- you can style the tags and add outer divs too -->

    </body>
</html>
```
#### The modules.js goes like:

```javascript
/* here goes the append component */
const components = [
      ['core/components/append-component.js'],
];

/* TYPE THE PATH OF YOUR COMPONENT TAGS */
const modules = [
      ['core/app/first-sample-tag/first-sample-tag.js'],
      ['core/app/second-sample-tag/second-sample-tag.js'],
];

/* code that import the files goes below (be sure to modify it) */
. . .
```

#### In your component "first-sample-tag.js"

```javascript
/* TYPE THE PATH TO YOUR TAG COMPONENT */

(function () {
	appendComponent('core/app/first-sample-tag');
})();

/* your tag component code goes below */
. . .
```

#### In your component "first-sample-tag.html"

```html
. . .
	write your html code here and be happy :)
. . .
```

## Download the sources

[core/modules.js](https://github.com/murilloves/pure-js-web-component/blob/master/core/modules.js)

[core/components/append-component.js](https://github.com/murilloves/pure-js-web-component/blob/master/core/components/append-component.js)


### Images

### 
> Folder structure.
![](https://murilloves.github.io/images/pure-js-web-component/folder_structure.jpg)

### 
> Sample files.
![](https://murilloves.github.io/images/pure-js-web-component/files_structure.jpg)

### 
> Web Page (Web Component running).
![](https://murilloves.github.io/images/pure-js-web-component/html_page.jpg)



## Want to run or improve it?

#### 1 - Clone

#### 2 - Install
`npm install -g http-server`

#### 3 - Serve (Run)
`http-server ./ -p 80`

#### 4 - It should be Listening at
* [http://127.0.0.1](http://127.0.0.1)

or

* [http://192.168.25.99](http://192.168.25.99)
