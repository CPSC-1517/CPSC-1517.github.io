(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{160:function(t,a,s){t.exports=s.p+"assets/img/flat-browser-stats-1615611-639x419.63095e20.jpg"},223:function(t,a,s){"use strict";s.r(a);var n=[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"using-razor-layout-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-razor-layout-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Razor Layout Pages")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:s(160),alt:""}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v('Layout pages in Razor make it possible to centralize the design and navigation of your website in a single file. The layout page acts as a "shell" for individual pages on your site. All of the basic HTML structure of your website (the "boilerplate" '),a("code",[this._v("<head>")]),this._v(" and "),a("code",[this._v("<body>")]),this._v(' content) that is common to all your pages would be placed inside the layout page. The remaining pages simply reference the layout page and only have to hold the distinct content specific to each individual page. Using layout pages simplifies website development, improves consistency in "look and feel" accross your website, and reduces maintenance costs - all by cutting down on duplicate content used in the site.')])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v('Typically, the file name for a layout page will begin with an underscore. This is done because the web server automatically blocks any attempt to browse to pages or folders beginning with an underscore. By doing so, a layout page can only be rendered when another page references the layout page as its "template" for displaying content. A page can reference its layout by giving the '),a("code",[this._v("Layout")]),this._v(" property the path to the layout page, as shown in the following example.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Simple layout page")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("@Page.Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n        @RenderSection("head", required: false)\n    '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        @RenderBody()\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Simple HelloWorld.cshtml using a Layout page")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("@"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Page"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Title "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Layout "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"~/_Layout.cshtml"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),s("span",{attrs:{class:"token class-name"}},[t._v("Hello")]),t._v(" World"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("Layout pages make use of the "),s("code",[t._v("@RenderBody()")]),t._v(" method to display the content of the page that references the layout. "),s("code",[t._v("@RenderBody()")]),t._v(' is effectively a "placeholder" for content to be injected into the page. Additionally, a layout page can use the '),s("code",[t._v("@RenderSection()")]),t._v(" method to provide additional placeholders for content. The referencing page uses the "),s("code",[t._v("@section sectionName { }")]),t._v(" block to specify what it wants placed in that placeholder. The layout page can indicate whether the section is required or optional, as shown in this sample.")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("Layout page with sections")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("@Page.Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n        @RenderSection("head", required: false)\n    '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n            @RenderSection("pageheader", required: false)\n        '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        @RenderBody()\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n            @RenderSection("pagefooter")\n        '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("HelloWorld.cshtml with Layout page sections")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("@"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Page"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Title "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Layout "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"~/_Layout.cshtml"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n@section pageheader "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Welcome"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("h1"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n@section pagefooter "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Today's date "),s("span",{attrs:{class:"token keyword"}},[t._v("is")]),t._v(" @DateTime"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Today"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("ToLongDateString")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and welcome to my "),s("span",{attrs:{class:"token class-name"}},[t._v("Razor")]),t._v(" website"),s("span",{attrs:{class:"token operator"}},[t._v("!")]),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Layout pages are flexible, and can be organized several ways. For example, layout pages can be nested. Additionally, a layout page can use the "),a("code",[this._v("@RenderPage()")]),this._v(' to pull in a specific page\'s content, effectivly allowing you to "modularize" your site\'s layout. For example, it is possible to put the navigation part in a separate file called "_Menu.cshtml" and then reference that page in your layout with '),a("code",[this._v('@RenderPage("_Menu.cshtml")')]),this._v(".")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"site-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#site-navigation","aria-hidden":"true"}},[this._v("#")]),this._v(" Site Navigation")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("_Menu.cshtml")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("nav")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("brand"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~/images/CPSC-1517.png"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("width")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("25"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("30"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v(" Razor Demos"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~/Default.cshtml"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Home Page"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("a")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~/Sandbox.cshtml"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Sandbox"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("a")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("nav")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("_Layout.cshtml referencing the _Menu page")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("@Page.Title"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("~/styles/plain.css"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v('\n        @RenderSection("head", required: false)\n    '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n        @RenderPage("~/_Menu.cshtml")\n        '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n            @RenderSection("pageheader")\n        '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("header")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("section")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("mainContent"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            @RenderBody()\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("section")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("footer")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n            @RenderSection("pagefooter", required: false)\n        '),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("footer")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("CSS styles for the menu navigation")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language-csharps extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("/* Navigation Menu styles */\nnav ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    border: 1px solid #e7e7e7;\n    background-color: #f3f3f3;\n    \n    font-size: 1.15em;\n}\n\nnav li {\n    display: table-cell;\n    text-align: center;\n    padding: 5px 16px;\n    height: 40px;\n    font-size: 1.15em;\n    vertical-align: middle;\n    white-space: nowrap;\n    line-height: 40px;\n}\n\n    nav li.brand {\n        color: #555;\n        font-weight: bold;\n    }\n\n    nav li.brand img {\n        padding-right: 7px;\n        vertical-align: middle;\n    }\n\n    nav li:hover:not(.active) {\n        background-color: #ddd;\n    }\n\n    nav li:hover:not(.active) a {\n        color: #333;\n    }\n\n    nav li a {\n        color: #777;\n        text-decoration: none;\n    }\n\n        nav li a.active {\n            color: white;\n            background-color: #4CAF50;\n        }\n")])])])}],e=s(0),o=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),s("p",[t._v("For a more in-depth look at working with Layouts and themes in Razor, check out the documentation at "),s("a",{attrs:{href:"http://www.asp.net/web-pages/overview/ui-layouts-and-themes/3-creating-a-consistent-look",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating a Consistent Look"),s("OutboundLink")],1),t._v(".")]),t._m(14),s("p",[t._v("An important part of any website is the site's navigation. It's also a part of the site that can undergo a lot of changes as new pages are added to the website. As such, it can be helpful to separate out the navigation into a separate file and reference it from the layout page. The following code samples illustrate this technique, and include a simple stylesheet for the menu.")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20)])},n,!1,null,null,null);a.default=o.exports}}]);