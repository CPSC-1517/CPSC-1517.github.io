(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{206:function(e,t,o){e.exports=o.p+"assets/img/01f1ae03ed3a1ed5b6da3cf653495527.01f1ae03.png"},207:function(e,t,o){e.exports=o.p+"assets/img/e514e7978948bbcf0b24eec7367673a3.e514e797.png"},208:function(e,t,o){e.exports=o.p+"assets/img/750248eed2987016335edf1692797e0d.750248ee.png"},254:function(e,t,o){"use strict";o.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("p",[n("strong",[e._v("Objectives:")])]),n("p",[n("strong",[e._v("Discuss:")])]),n("blockquote",[n("p",[e._v("What is the internet trip?")])]),n("blockquote",[n("p",[e._v("How does the web server determine PostBack.")])]),n("blockquote",[n("p",[e._v("Difference between a stand-alone html page and Layout/ViewPage page setup")])]),n("blockquote",[n("p",[e._v("Discuss components of a .Net web application project (web.config, files"),n("br"),e._v("\nstarting with an underscore (_), …)")])]),n("blockquote",[n("p",[e._v("Discuss structure of Layout/ViewPage pages")])]),n("p",[n("strong",[e._v("Code:")])]),n("blockquote",[n("p",[e._v("Create a Visual Studio solution using an empty web site.")])]),n("blockquote",[n("p",[e._v("Create a Hello Layout/ ViewPage page")])]),n("p",[n("strong",[e._v("Resources: Student")])]),n("p",[e._v("Moodle site.")]),n("p",[e._v("URL Student Notes")]),n("p",[e._v("Url Introduction to ASP.Net Web Programming Using the Razor Syntax (C#)")]),n("p",[e._v("Url A Beginner’s Guide to HTML & CSS")]),n("p",[e._v("Url HTML Form Fields")]),n("p",[n("strong",[e._v("Resources: Instructor")])]),n("p",[e._v("Lesson 1: Website basics using Razor and Forms")]),n("p",[n("strong",[e._v("Concepts:")])]),n("ol",[n("li",[n("p",[e._v("Internet Trip (Request and Response objects)")])]),n("li",[n("p",[e._v("WebServer use of PostBack")])]),n("li",[n("p",[e._v("General actions on web server for page processing")])]),n("li",[n("p",[e._v("Web Forms Stand-alone vs Layout/ ViewPage")])]),n("li",[n("p",[e._v("_Layout cshtml file (@Page, @RenderBody, @RenderSection(sectionname,"),n("br"),e._v("\nrequired: true/false)")])]),n("li",[n("p",[e._v("ViewPage cshtml file (@{ Razor coding block }, Page.Ttile, Layout page"),n("br"),e._v("\nsetting, default area is the RenderBody content material, @section)")])])]),n("p",[n("img",{attrs:{src:o(208),alt:""}})]),n("p",[e._v("Highlights:")]),n("ul",[n("li",[n("p",[e._v("Web server does not “remember” web pages, (retrieve, process, forget)")])]),n("li",[n("p",[e._v("IsPost Flag is false for first access, true of repeat postings (submissions)"),n("br"),e._v("\nas long as you remain on that page.")])]),n("li",[n("p",[e._v("If you return to a page during a session after viewing a different page, the"),n("br"),e._v("\npage is treated as a first access again.")])]),n("li",[n("p",[e._v("Request Object part of internet structure and carries data to web server.")])])]),n("p",[n("img",{attrs:{src:o(207),alt:""}})]),n("p",[e._v("Discussion of Layout/ ViewPage pages. Layout is the site pattern. ViewPage is"),n("br"),e._v("\nthe page material. HTML main tags and blocking should be done on Layout page."),n("br"),e._v("\nViewPage replaces any @RenderBody or @RenderSection. Underscore on file name"),n("br"),e._v("\n(_Layout) means the page is not directly accessible to the browser.")]),n("p",[e._v("Benefits on Layout/ ViewPage: consistent site layout, could have several site"),n("br"),e._v("\nlayout styles dependent on user (guest vs member), lower maintenance, content"),n("br"),e._v("\ncentric web pages")]),n("p",[e._v("Coding:")]),n("p",[e._v("Create a new visual studio solution: "),n("strong",[e._v("FormsAndRazor (this can also be done when"),n("br"),e._v("\nselecting the project)")])]),n("p",[e._v("Create an ASP.Net Web Applicatin: "),n("strong",[e._v("WebApp")]),n("br"),e._v("\n(remember to navigate to the solution folder, stress to students LOCATION)")]),n("p",[n("img",{attrs:{src:o(206),alt:""}})]),n("p",[e._v("Create a Web Page (MVC 5 View Page (Razor): "),n("strong",[e._v("StandAlone")]),n("br"),e._v("\n(StandAlone discuss html tags, delete)")]),n("p",[e._v("Create a Layout Page: "),n("strong",[e._v("_Layout.cshtml")]),e._v(" (note file extension, basic web page"),n("br"),e._v("\nhtml tags)")]),n("p",[e._v("Create a ViewPage Page with Layout (Razor): "),n("strong",[e._v("Default.cshtml")]),n("br"),e._v("\n(note file extension, link to layout page)")]),n("p",[e._v("Modify Layout Page:")]),n("ul",[n("li",[n("p",[e._v("Add a @RenderSection(“banner”, required: true) above @RenderBody")])]),n("li",[n("p",[e._v("Add <br /> before and after @RenderBody")])]),n("li",[n("p",[e._v('Add <hr style="line-height:5px"/> followed by a @RenderSection(“footer”,'),n("br"),e._v("\nrequired: false) below @RenderBody")])])]),n("p",[e._v("Modify Default Page:")]),n("ul",[n("li",[n("p",[e._v('Add Page.Title = "Hello"; in front of Layout')])]),n("li",[n("p",[e._v("Run: note error missing section")])]),n("li",[n("p",[e._v("Add @section banner after opening code block and add an <h1> Hello World"),n("br"),e._v("\n</h1>")])])]),n("blockquote",[n("p",[e._v("@section banner{")])]),n("blockquote",[n("p",[e._v("<h1>Hello World</h1>}")])]),n("ul",[n("li",[n("p",[e._v("Run: discuss meaning of required true vs false")])]),n("li",[n("p",[e._v("Add @section footer with <p>&copy CPSC1517, Nait Today's date is"),n("br"),e._v("\n@DateTime.Today.ToLongDateString().</p>")])]),n("li",[n("p",[e._v("Run")])]),n("li",[n("p",[e._v("Move @section banner code to after @section footer code")])]),n("li",[n("p",[e._v("Run: note physical position of @section on Content page does NOT need to be"),n("br"),e._v("\nmatching the physical order of Renders on the _Layout page. However, for"),n("br"),e._v("\nmaintenance purposes, it might be better to keep the logical order the same.")])]),n("li",[n("p",[e._v("Place a <div> between the banner and footer. This will represent the body"),n("br"),e._v("\nof the form. The tags are not really necessary. Enter some text within the"),n("br"),e._v("\n<div>. This text will go inside the @RenderBody of the layout page. It"),n("br"),e._v("\ncould actually go after the footer if you desire. Anything not in a"),n("br"),e._v("\nspecified RenderSection or the opening coding block is part of the"),n("br"),e._v("\nRenderBody.")])]),n("li",[n("p",[e._v("Run")])])])])}],a=o(0),s=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,null,null);t.default=s.exports}}]);