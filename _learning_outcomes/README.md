---
layout: summary
publish: true
image: 
title: Learning Outcome Guides (LOGs)
description: 
styles:
  title: 
  description: 
sortorder: 0
---
# Learning Outcome Guides (*LOGs*)

## Course Introduction

At the end of this topic, you should be able to:

* Identify the best way to contact your instructor for questions/help
* Describe the purpose of this course
* List and determine if you have the prerequisites of this course
* List the mark breakdown for this course
* Explain how the evaluation of this course works
* List the software you will need for this course
* List the core achievements and topics for this course

## C# Language Review

At the end of this topic, you should be able to:

* Identify the programming language(s) used for this course.
* Explain what is meant by a "case-sensitive" programming language.
* Explain what is meant by a "strongly-typed" programming language
* Describe the difference between variables, values and data types.
* Explain what is meant by a "literal value".
* Explain what a "keyword" is in any programming language.
* Define the phrase "intrinsic data type".
* List the data types that are built into the course's programming language and the default values for those data types.
* Explain what an assignment statement is and how it works.
* Explain what an "expression" is in any programming language.
* List the assignment and arithmetic operators in the course's programming language.
* Explain what "string concatenation" is and how it works.
* Describe the difference between subroutines and functions.
* Describe the purpose of subroutines and functions.
* Identify the syntax for subroutines and functions in the course's programming language.
* Define and distinguish the terms "argument" and "parameter".
* Identify and describe the syntax of the statements associated with the five logical programming structures in the course's programming language.
* List the relational and logical operators in the course's programming language.
* Identify the entry point for every computer program.
* Create a simple console program with functions and subroutines.
* Perform simple console I/O.
* Manipulate information with variables, values and expressions.
* Create code using the five logical programming structures.
* Create code for multi-structured logic (logic that includes many nested and stacked structures)

## C# OOP Basics

At the end of this topic, you should be able to:

* Code a class with properties, fields, methods and constructors
* Distinguish auto-implemented properties from explicitly implemented properties
* Describe the concept of "constructor chaining" and its benefits
* Describe the purpose of the constructor
* Create and use objects
* Identify the Member Access Operator and its purpose
* Describe the term Composition as it relates to Object Oriented Programming
* Use a debugger to explore the state of objects at run-time
* Describe the term Inheritance as it relates to Object Oriented Programming
* Give an example of simple Polymorphism

## HTML5 Forms and Request/Response

At the end of this topic, you should be able to:

* List 15 or more common HTML5 elements and describe their purpose and usage
* Distinguish between GET and POST requests to a web server
* Describe how a browser processes an html document it has received
* Describe the Request/Response communication that occurs between a browser and a web server
* List at least four distinct pieces of information a browser sends in a typical request for an URL
* Define the acronyms URL and URI
* Define the acronyms HTTP and HTTPS
* List the HTML5 form elements and describe their purpose and usage
* Describe the purpose of the `method` and `action` attributes on the `<form>` element
* Describe what is meant by the assertion that http is a stateless protocol

## Razor Introduction

At the end of this topic, you should be able to:

* Describe what is meant by "Razor Syntax"
* List the server-side programming languages supported by Razor syntax and their common file extensions
* Create a bare-bones Razor Website
* Describe the term "context switching" as it applies to Razor syntax
* Explain how Razor syntax supports "context switching" in the server-side processing of a web page
* Distinguish between server-side code and HTML code in a Razor web form
* Describe what is meant by a "code block" in Razor syntax
* Describe how server-side code is executed on a Razor web page
  - The html and Razor code in a .cshtml page represents what is "executed" during the "render" phase of serving a page; therefore, all the server-side code actually has a "context" in which it runs.

## Web Pages and Layout Pages in Razor

At the end of this topic, you should be able to:

* Describe what a Layout Page is in Razor and list its benefits
* Describe the purpose of `@RenderBody()`, `@RenderSection()`, and `@RenderPage()` in a Layout Page
* Explain how to reference and place content in a
* List five key properties available to all Razor pages
  - `.Page`
    - `Page.Title`
  - `.Layout`
  - `.IsPost`
  - `.Request`
    - `.Request.Form`
    - `.Request.QueryString`
  - `.Response`
    
## Using Razor with HTML Form Elements

At the end of this topic, you should be able to:

- Describe what is meant by **Name/Value** pairs in HTML forms
- Describe how the `name` and `value` attributes of HTML form elements are used
- Distinguish between Query String values and POST values in a page request
- Describe three different ways to obtain HTML Form values sent to the web server in a page request using the Request object in Razor
- Describe the purpose of the `.IsPost` property
- Retrieve, examine and use HTML Form values supplied to a Razor page
- Retain the user input in HTML form elements after the user submits a form

## Form Validation in Razor and HTML5

> The [MDN page on Form Validation](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation) is an excellent resource for understanding client-side validation. Additionally, information on performing server-side validation using the `Validation` helper class can be found on [this page](https://docs.microsoft.com/en-us/aspnet/web-pages/overview/ui-layouts-and-themes/validating-user-input-in-aspnet-web-pages-sites).

At the end of this topic, you should be able to:

- Distinquish between client-side and server-side validation
- Identify the reasons we validate on the client-side
- Identify the reasons we validate on the server-side
- Explain the role of the `required` attribute on HTML5 form elements
- Explain the role of the `type` attribute options in HTML5 in regards to validation of user input
- Describe the kind of user input allowed for each of the various `type` attribute values in HTML5
- Identify the additional attributes for `<input>` elements which work in conjuncture with specific `type` attribute values in HTML5
- Explain the role of the `placeholder` attribute
- Explain why client-side validation is never considered a "secure" kind of user-input validation
- Identify how to perform server-side validation manually with C#
- Identify how to integrate server-side validation and client-side validation through the use of the `Validation` helper class in Razor
- Combine server-side and client-side validation in Razor web pages.

## Razor Helpers and Functions

At the end of this topic, you should be able to:

- Identify the purpose of `@functions` code blocks in Razor
- Identify the purpose of `@helper` methods in Razor
- Distinguish between `@functions` and `@helper` methods in Razor
- Use functions and helpers to better "modularize" your Razor code
- Identify and use built-in Razor helpers such as the `WebGrid`

## Databases and C# Classes in Razor websites

- Identify the different types of "asp folders" available in asp.net
- Describe the purpose of the `App_Code` folder
- Describe what is meant by a "connection string"
- Create connection string entries in the web.config file
- Access SQL Server databases in Razor pages to execute SQL statements for Create/Read/Update/Delete operations

<!-- 
- App_Data folder
- App_Code folder
- Create a database
- NuGet for Microsoft.AspNet.WebPages.Data
-->

## Introduction to Visual Studio

At the end of this topic, you should be able to:

* Define the term IDE
* List the key tools available in Visual Studio
* Describe the relationship between Solutions, Projects and Files in Visual Studio
* List three different types of projects in Visual Studio
* List three different web site templates in Visual Studio
* Describe the following parts of the Visual Studio IDE: Editor Window, Toolbox, Solution Explorer, Server Explorer, Error List, Output Window
* Identify the file extension for a Solution file
* Create an empty ASP.Net website inside a solution
* Create a Class Library project
* Create a blank solution
* Configure the tool options in Visual Studio
* Ensure the Solution file (.sln) and Website folder are in the same location

At the end of this topic, you should be able to:

At the end of this topic, you should be able to:

## ASP.NET Web Forms and Controls

At the end of this topic, you should be able to:

* Answer the question “What is an ASPX page?”
* Explain the purpose of the Design and Source views for ASPX pages
* List the core ASP.Net web controls used in this course
* Identify what is generated and sent to the browser from an ASPX page
* Create an empty ASP.Net Website
* Create and edit web forms
* Create folders to organize images and pages on a website
* Apply common HTML formatting for text on an ASPX page
* Add ASP.Net controls to an ASPX page
* Use the properties window to set the design-time properties of ASP.Net controls

## Master Pages

At the end of this topic, you should be able to:

* Distinguish the common usage of web forms and master pages
* Define the term “CSS”
* Distinguish between internal and external style sheets
* Give examples of how CSS can affect the appearance of text, ASP.Net controls and HTML in a form.
* Distinguish between master, content pages and conventional web forms
* Identify components of the master file and content page
* Create and edit web forms and master pages
* Use master pages and the Menu control to provide consistent site navigation
* Use the properties window to set the design-time properties of ASP.Net controls
* Apply common HTML formatting for text on an ASPX page
* Demonstrate the effects of missing Content controls on the content page existing on the master file
* Apply a simple submit event
* Apply simple CSS styles to affect background color and font color

## Postbacks, Event Handling and Page Lifecycle

At the end of this topic, you should be able to:

* Describe the purpose and usage of the Page.IsPostback property
* Explain what is meant by the term “Event Handling”
* Explain what is meant by the term “Page Lifecycle”
* List the common page and control events in ASP.Net Websites
* Describe the relationship of the code-behind file to its web form (ASPX page)
* Describe what happens on the server each time a web form is requested from the user’s browser
* Create a set of web forms with ASP.Net server controls
* Create empty event handler methods for Button and LinkButton controls

## Programming ASP.NET Controls

At the end of this topic, you should be able to:

* Describe the relationship of the code-behind file to its web form (ASPX page)
* Describe what an event handler is used for
* Describe what is unique about the page load event
* Explain how and when to check the IsPostback property
* List the commonly used properties of the following controls: TextBox, Label, CheckBox, DropDownList, RadioButtonList, Image, Calendar
* List important properties common to all/most ASP.NET controls
* Identify which property of an ASP.Net control is used to programmatically access the control
* Create an event handler method for page load events
* Create event handler methods for button click events
* Access controls on a page to get/set properties and call methods of the control
* Perform simple logic (using flow-control statements) to respond to common control events
