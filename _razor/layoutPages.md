---
layout: default
publish: true
image: images/flat-browser-stats-1615611-639x419.jpg
title: Razor Laout Pages
description: Setting up consistent site layout and navigation using Layout Pages
styles:
  title: white
  description: white
sortorder: 40
---

# Using Razor Layout Pages

Layout pages in Razor make it possible to centralize the design and navigation of your website in a single file. The layout page acts as a "shell" for individual pages on your site. All of the basic HTML structure of your website (the "boilerplate" `<head>` and `<body>` content) that is common to all your pages would be placed inside the layout page. The remaining pages simply reference the layout page and only have to hold the distinct content specific to each individual page. Using layout pages simplifies website development, improves consistency in "look and feel" accross your website, and reduces maintenance costs - all by cutting down on duplicate content used in the site.

Typically, the file name for a layout page will begin with an underscore. This is done because the web server automatically blocks any attempt to browse to pages or folders beginning with an underscore. By doing so, a layout page can only be rendered when another page references the layout page as its "template" for displaying content. A page can reference its layout by giving the `Layout` property the path to the layout page, as shown in the following example.

**Simple layout page**

```
<!DOCTYPE html>
<html>
    <head>
        <title>@Page.Title</title>
        @RenderSection("head", required: false)
    </head>
    <body>
        @RenderBody()
    </body>
</html>
```
    
**Simple HelloWorld.cshtml using a Layout page**

```
@{
    Page.Title = "Hello World";
    Layout = "~/_Layout.cshtml";
}
<h1>Hello World!</h1>
```
    
    
Layout pages make use of the `@RenderBody()` method to display the content of the page that references the layout. `@RenderBody()` is effectively a "placeholder" for content to be injected into the page. Additionally, a layout page can use the `@RenderSection()` method to provide additional placeholders for content. The referencing page uses the `@section sectionName { }` block to specify what it wants placed in that placeholder. The layout page can indicate whether the section is required or optional, as shown in this sample.


**Layout page with sections**

```
<!DOCTYPE html>
<html>
    <head>
        <title>@Page.Title</title>
        @RenderSection("head", required: false)
    </head>
    <body>
        <header>
            @RenderSection("pageheader", required: false)
        </header>
        @RenderBody()
        <footer>
            @RenderSection("pagefooter")
        </footer>
    </body>
</html>
```


**HelloWorld.cshtml with Layout page sections**

```
@{
    Page.Title = "Hello World";
    Layout = "~/_Layout.cshtml";
}

@section pageheader {
    <h1>Welcome!</h1>
}

@section pagefooter {
    <p>Today's date is @DateTime.Today.ToLongDateString().</p>
}
<p>Hello, and welcome to my Razor website!</p>
```



Layout pages are flexible, and can be organized several ways. For example, layout pages can be nested. Additionally, a layout page can use the `@RenderPage()` to pull in a specific page's content, effectivly allowing you to "modularize" your site's layout. For example, it is possible to put the navigation part in a separate file called "_Menu.cshtml" and then reference that page in your layout with `@RenderPage("_Menu.cshtml")`.


For a more in-depth look at working with Layouts and themes in Razor, check out the documentation at http://www.asp.net/web-pages/overview/ui-layouts-and-themes/3-creating-a-consistent-look.


## Site Navigation


An important part of any website is the site's navigation. It's also a part of the site that can undergo a lot of changes as new pages are added to the website. As such, it can be helpful to separate out the navigation into a separate file and reference it from the layout page. The following code samples illustrate this technique, and include a simple stylesheet for the menu.


**_Menu.cshtml**

```
<nav>
    <ul>
        <li class="brand"><img src="~/images/CPSC-1517.png" width="25" height="30" /> Razor Demos</li>
        <li><a href="~/Default.cshtml">Home Page</a></li>
        <li><a href="~/Sandbox.cshtml">Sandbox</a></li>
    </ul>
</nav>
```


**_Layout.cshtml referencing the _Menu page**

```
<!DOCTYPE html>
<html>
    <head>
        <title>@Page.Title</title>
        <link href="~/styles/plain.css" rel="stylesheet" />
        @RenderSection("head", required: false)
    </head>
    <body>
        @RenderPage("~/_Menu.cshtml")
        <header>
            @RenderSection("pageheader")
        </header>
        <section id="mainContent">
            @RenderBody()
        </section>
        <footer>
            @RenderSection("pagefooter", required: false)
        </footer>
    </body>
</html>
```


**CSS styles for the menu navigation**

```css
/* Navigation Menu styles */
nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;
    
    font-size: 1.15em;
}

nav li {
    display: table-cell;
    text-align: center;
    padding: 5px 16px;
    height: 40px;
    font-size: 1.15em;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 40px;
}

    nav li.brand {
        color: #555;
        font-weight: bold;
    }

    nav li.brand img {
        padding-right: 7px;
        vertical-align: middle;
    }

    nav li:hover:not(.active) {
        background-color: #ddd;
    }

    nav li:hover:not(.active) a {
        color: #333;
    }

    nav li a {
        color: #777;
        text-decoration: none;
    }

        nav li a.active {
            color: white;
            background-color: #4CAF50;
        }
```

<!--
<hr />
<h5>Pages</h5>
<ul>
    <li>_Layout.cshtml w. sections for header, body content, footer (footer shows if it's a GET or POST)</li>
    <li>Default page - Just showing some lorem-ipsum content, + Zen coding examples</li>
    <li>Sandbox page - 2 forms with a submit button, one with a GET action, one with a POST action</li>
    <li>_Menu.cshtml</li>
</ul>

<hr />
<h5>Simple horizontal stylesheet (courtesy of http://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_gray )</h5>
<pre>
`
ul {
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
border: 1px solid #e7e7e7;
background-color: #f3f3f3;
}

li {
float: left;
}

li a {
    display: block;
    color: #777;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

    li a:hover:not(.active) {
        background-color: #ddd;
    }

    li a.active {
        color: white;
        background-color: #4CAF50;
    }
`
</pre>-->
