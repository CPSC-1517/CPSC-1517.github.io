---
layout: default
publish: true
title: Razor Syntax
description: Understanding how Razor syntax works
styles:
  title: black
  description: black 
sortorder: 1
---
# Introduction

Razor syntax allows developers to intermingle server-side code with static HTML content (HTML markup, CSS and Javascript). This makes it possible to control what HTML is sent to the client's browser and to process form data and other requests on the web server. Razor itself is not a programming language; instead, it "wraps" the server-side programming language (*Visual Basic .NET* or *C#*). In the simplest sense, Razor is just a set of symbols that tell the web server to run a snippet of code on the web server.

Normally, static HTML files have the extension *.htm* or *.html*. Razor files are simply HTML files with the extension of *.**cs**html* (for C#) or *.**vb**html* (for Visual Basic). In these notes, we will be using the ***C#*** programming language.

## Context Switching

Razor works by providing a means to switch "contexts" in your HTML file. This **context switching** is done by using the `@` symbol.

If you think of it, ordinary static HTML files can normally support three different languages in the same file: HTML markup, CSS, and JavaScript. HTML markup provides a means of switching between those languages through special tags: `<style>` for CSS and `<script>` for JavaScript. In between the opening and closing `<style>` and `<script>` tags, the code you write is in a different language than HTML markup.

In the same way, Razor allows you to switch from the HTML languages to C# by using the `@` symbol. The big difference is that this language switching only happens on the *web server*, not in the client's browser. This means that we are free to use C# to do server-side processing of page requests (GET or POST) to perform all sorts of tasks. Typically, we use it to process form data that is posted to the server by the user or to gather and present information from a database as part of a user's request. This freedom to do server-side processing is what makes the difference between an ordinary static web site and a **web application**.

## Razor's Origins

Razor syntax first came into being in conjuncture with Microsoft's **MVC** (Model-View-Client) templates for creating web applications. In fact, when you Google "Razor programming", most of the results you get back are focused on using Razor in MVC, but that's not the only place you can use Razor.

Razor can be used entirely apart from using MVC. When Razor was first released, it appeared as the web page component of MVC and in a stand-alone form called "**ASP.NET Web Pages**". In actuality, Razor is simply one option in the whole ASP.NET web ecosystem, alongside **Web Forms** (part of the original ASP.NET circa 2001), **Web API**, and **SignalR**.

To learn more about any aspect of programming for the web using the Microsoft stack of technologies, check out the official [ASP.NET](https://asp.net) site by Microsoft and click on the [*learn*](https://asp.net/learn) link. There, you will find more information on [Web Pages](https://www.asp.net/web-pages), [Web Forms](https://www.asp.net/web-forms), [MVC](https://www.asp.net/mvc), and more.

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


