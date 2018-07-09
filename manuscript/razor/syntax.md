---
title: Razor Syntax
description: Understanding how Razor syntax works
---
# Introduction

ASP.NET Razor is a templating view engine that provides a scripting-like experience for web developers. Razor syntax allows developers to intermingle server-side code with static HTML content (HTML markup, CSS and Javascript). This makes it possible to control what HTML is sent to the client's browser and to process form data and other requests on the web server. Razor itself is not a programming language; instead, it "wraps" the server-side programming language (*Visual Basic .NET* or *C#*). In the simplest sense, Razor is just a set of symbols that tell the web server to run a snippet of code on the web server.

Normally, static HTML files have the extension *.htm* or *.html*. Razor files are simply HTML files with the extension of *.**cs**html* (for C#) or *.**vb**html* (for Visual Basic). In these notes, we will be using the ***C#*** programming language.

## Context Switching

Razor works by providing a means to switch "contexts" in your HTML file. This **context switching** is done by using the `@` symbol.

If you think of it, ordinary static HTML files can normally support three different languages in the same file: HTML markup, CSS, and JavaScript. HTML markup provides a means of switching between those languages through special tags: `<style>` for CSS and `<script>` for JavaScript. In between the opening and closing `<style>` and `<script>` tags, the code you write is in a different language than HTML markup.

In the same way, Razor allows you to switch from the HTML languages to C# by using the `@` symbol. The big difference is that this language switching only happens on the *web server*, not in the client's browser. This means that we are free to use C# to do server-side processing of page requests (GET or POST) to perform all sorts of tasks. Typically, we use it to process form data that is posted to the server by the user or to gather and present information from a database as part of a user's request. This freedom to do server-side processing is what makes the difference between an ordinary static web site and a **web application**.

## Razor's Origins

Razor syntax first came into being in 2010 as a light-weight alternative to ASP.NET Web Forms. In many ways, its templating structure gives web developers a scripting-like experience for server-side processing that appears somewhat similar to PHP.<sup>1</sup> At the time, Razor was released as a templating alternative to web forms (*.aspx pages) that could be used in conjuncture with Microsoft's **MVC** (Model-View-Client) framework. In fact, when you Google "Razor programming", most of the results you get back are focused on using Razor in MVC, but that's not the only place you can use Razor.

Razor, however, can be used entirely apart from using MVC. Soon after Razor was first released for MVC, it appeared as the core template engine for Webmatrix<sup>2</sup> in its stand-alone form is referred to as "**ASP.NET Web Pages**". In actuality, Razor is simply one option in the whole ASP.NET web ecosystem, alongside **Web Forms** (part of the original ASP.NET circa 2001). ASP.NET includes many other technologies such as **Web API** and **SignalR**. All of these can be intermingled in the same web application, if need be.

To learn more about any aspect of programming for the web using the Microsoft stack of technologies, check out the official [ASP.NET](https://asp.net) site by Microsoft and click on the "[learn](https://asp.net/learn)" link. There, you will find more information on [Web Pages](https://www.asp.net/web-pages), [Web Forms](https://www.asp.net/web-forms), [MVC](https://www.asp.net/mvc), and more.

# Razor Syntax

The `@` character indicates the start of **code blocks**, **inline expressions**, and **razor keywords**. 

**Razor code blocks** can contain zero or more C# statements. Code blocks are simply a set of curly braces preceeded by the `@` character. These wrap the C# program statements that will be executed. In the following example, a razor code block is used to calculate a total price.

```csharp
@{
  int quantity = 10;
  double unitPrice = 12.90; // $12.90
  double subTotal = quantity * unitPrice;
  double total = subTotal + (subTotal * 0.5); // 5% tax
}
```

**Inline expressions** are C# expressions whose value is rendered into the final HTML output. Any C# expression can be output on the web page by making it an inline razor expression. Simple use the `@` symbol before the variable or expression. For example, to display the total on a page, you can write the following markup with an inline expression embedded inside.

```csharp
<p>The total is $ @total</p>
```

This will produce the following result in the HTML that is ultimately sent to the client's browser.

```html
<p>The total is $ 135.45</p>
```

Inline expressions come in two forms. *Implicit* razor expressions are where any C# variable or object is preceeded by the `@` character. *Explicit* razor expressions are where you can wrap some C# expresson with parenthesis and then pace the `@` character in front of the open parenthesis. For example,

```csharp
<p>Here is a value using an implicit razor expression: @subTotal</p>
<p>Here is a value using an explicit razor expression: @(quantity * unitPrice)</p>
```

For explicit expressions, the value inside the parenthesis is calculated before it is rendered into the final HTML.

The `@` symbol also appears before specific **keywords** in razor. These perform different tasks in regard to how a given web page is processed. The razor-specific keywords are:

- **`@functions`** - This keyword indicates that the following statement block contains functions that can be called from anywhere on the page. These functions can only contain C# code and ***cannot*** include embedded HTML.
- **`@inherits`** - By default, every .cshtml (or .vbhtml) page is processed as a new class that inherits from a subclass of *System.Web.WebPages.WebPageBase*. By using the `@inherits`, you can specify your own custom class (as long as it uses the *WebPageBase* in its inheritance chain).
- **`@section`** - This keyword specifies that its block of razor code is to be rendered/processed inside of a specific `@RenderSection()` component of a layout page.
- **`@model`** - This keyword is intended for use with MVC applications only.
- **`@helper`** - This keyword is used to define a statement block that is focused on displaying specific content. This is typically used as a means to modularize what might otherwise be complex output that you intend to use in multiple places on the web page. (This keyword is not supported by the new ASP.NET Core.)

> NOTE: Razor keywords introduce an advanced way of programming with Razor. In this course, discussions of razor keywords will be limited to a light-weight usage of `@section`, `@helper` and `@functions`. These keywords will be discussed in more depth in later articles.

## Infinite Nesting of Contexts

Just as Razor allows you to nest C# code inside of HTML, it allows you to nest HTML markup inside of the C# code blocks. In fact, razor allows an almost infinite level of nesting, giving you the ability to create highly complex scripting. Typically, however, you should only need to nest to a depth of three or four levels at most. Anything beyond that will increase the difficulty of understanding and maintaining your code exponentially.

The following snippet illustrates how the nesting of code works. The outermost context is always HTML, and switching to C# occurs with the use of the `@` symbol. Inside the C# blocks, you can switch back to HTML by simply using any HTML element that has an explicit open and close tag. In this sample, HTML context is indicated with a green background and C# with a blue background.

<style>
  .iscsharp, .ishtml {
    margin: 3px;
    display: inline-block;
  }
  .iscsharp {
    outline: solid 2px blue;
    background-color: lightcyan;
  }
  .ishtml {
    outline: solid 2px green;
    background-color: palegreen;
  }
</style>


<pre class="highlight"><span class="ishtml">&lt;h1&gt;Welcome to Razor Yhatzee!&lt;/h1&gt;
&lt;p&gt;Here's the roll of 5 die:&lt;/p&gt;
<span class="iscsharp">@{
  Random generator = new Random();
  int dice[] = new int[5];
  <span class="ishtml">&lt;ul&gt;
  <span class="iscsharp">@foreach(int die in dice)
  {
    <span class="ishtml">&lt;li&gt;<span class="iscsharp">@die</span>&lt;/li&gt;</span>
  }</span>
  &lt;/ul&gt;</span>
  // ... more code
}</span></span></pre>

----

###### Footnotes

<sup>**1**</sup> - Comparisons between Razor and PHP are often over simplified, as the two are *very* different under the hood. From the perspective of the web programmer, however, both give an experience that on the surface feels like scripting. Scripting can be a powerful way to do small amounts of processing, but it grows quickly as the complexity of the processing increases. For a fair "apples vs. oranges" comparison between PHP and Razor, see [this article by Jeremy Frederick](https://www.linkedin.com/pulse/20141114182637-12880086-php-vs-asp-net-what-you-should-really-be-comparing-instead).

<sup>**2**</sup> - **Webmatrix** was a web developer toolkit released by Microsoft in 2011 as a free alternative to Visual Studio 2010 (a full-featured commercial IDE). Webmatrix is no longer supported and Microsoft now offers a free community version of its current **Visual Studio** developer tools.
