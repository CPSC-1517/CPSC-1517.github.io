---
layout: default
publish: true
imager: images/razor-3-1624296-638x533.jpg
title: Bare-Bones Razor Pages
description: How to use Razor Web Pages beginning with an empty ASP.Net Web Site.
styles:
  title: black
  description: black 
sortorder: 20
---
# Bare-Bones Razor Pages
    
How to use Razor Web Pages beginning with an empty ASP.Net Web Site.

## Getting Started
    
To demonstrate Razor web pages, we will begin with an Empty ASP.Net Web Site. Notice that this web site template includes only the web.config files.


**web.config**

```
<configuration>

    <system.web>
      <compilation debug="true" targetFramework="4.5" />
      <httpRuntime targetFramework="4.5" />
    </system.web>

</configuration>
```



Creating an Asp.Net Razor web page is fairly easy to do. Simply right-click on your website or a folder in your website and select <samp>Add &gt; Add new item &hellip;</samp> and in the template dialog choose a <samp>Content Page (Razor v.3)</samp> template, naming it <samp>Default.cshtml</samp>.



**Default.cshtml**
```
<!DOCTYPE html>
<html>
    <head>
        <title></title>
    </head>
    <body>
        
    </body>
</html>
```



In order for the web server to process Razor web pages, it needs certain libraries (DLLs). When the Razor page was added, Visual Studio checked to see if these DLLs were already included in the project; if they weren't, then Visual Studio will include them as NuGet packages and register them in the site's packages.config file.


**packages.config**
```
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="Microsoft.AspNet.Razor" version="3.2.3" targetFramework="net45" />
  <package id="Microsoft.AspNet.WebPages" version="3.2.3" targetFramework="net45" />
  <package id="Microsoft.Web.Infrastructure" version="1.0.0.0" targetFramework="net45" />
</packages>
```



Additionally, Visual Studio updates the web.config file so that the web server will know how to process the Razor pages on the server.



**web.config**

```
<configuration>
  <system.web>
    <compilation debug="true" targetFramework="4.5">
      <assemblies>
        <add assembly="Microsoft.Web.Infrastructure, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>
      </assemblies>
    </compilation>
    <httpRuntime targetFramework="4.5"/>
  </system.web>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Helpers" publicKeyToken="31bf3856ad364e35"/>
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0"/>
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.WebPages" publicKeyToken="31bf3856ad364e35"/>
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0"/>
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
</configuration>
```


<h2>Adding in Server-Side Code</h2>

Razor Syntax allows you to include code that will run on the web server before the page is sent to the browser. For example, a block of code can be added to the Default page that will set the title for the page. That value can then be used in the `&lt;title&gt;` of the `&lt;head&gt;` as well as anywhere else, such as an `&lt;h1&gt;` in the body of the page.



**Modified Default.cshtml**
```
@{
    Page.Title = "Bare Bones Razor";
}
<!DOCTYPE html>
<html>
    <head>
        <title>@Page.Title</title>
    </head>
    <body>
        <h1>@Page.Title</h1>
    </body>
</html>
```


<h2>How it Works</h2>

Razor web pages work by providing context-switching between the worlds of html/css/javascript and server-side programming languages such as C# and VB.Net. This ability to switch contexts between these programming languages is possible because of a special syntax called Razor Syntax. Web servers know to use Razor syntax for processing certain page requests when the file extension of the web page ends in .cshtml (for C#) or .vbhtml (for VB.Net).


Any given Razor web page is first processed as though it is plain old HTML content; this HTML content is simply going to be passed as-is to the browser. The switch to a back-end language for server-side processing is done using the `@` symbol. Through use of the `@` symbol, a simple expression, flow-control keyword, or statement block can be processed and any resulting output included in the response sent to the browser. Effectivly, the server-side code is nested inside the HTML content.


When the server-side code is a simple expression that returns a value, that value is rendered as part of the HTML content sent to the browser. Thus, an expression like `@Page.Title` will echo out the value of the Title property of the Page object wherever the expression is placed in the page.


When the server-side code is a flow-control keyword, such as `@if` or `@for`, the contents of the code block is dealt with according to the rules of the server-side programming language. (As a side-note, all flow-control statements in Razor syntax *must* be followed by a statement block &ndash; i.e., curly braces in C# &ndash; for Razor to recognize their contents as server-side code. As such, even a single line of code for a simple `if` statement has to be enclosed in a statement block.)


When the server-side code is a simple statement block, then the block of code acts as though it is simple the body of some method that executes at that point in the page. Any variables or objects you create or declare in that statement block will be available for use in that block and later on in the page. When Razor processes the page, the basic rules of variables apply &ndash; a variable must be delcared before it can be used.


All this context switching isn't just one-way, however. Just as you can nest C# code inside the HTML page, you can nest HTML content inside a block of C# code. This ability to continually nest one context inside another is what gives Razor syntax such tremendous flexibility.


## Completed Code Sample


**Default.cshtml**
```
@{
    Page.Title = "Bare Bones Razor";
}
<!DOCTYPE html>
<html>
    <head>
        <title>@Page.Title</title>
    </head>
    <body>
        <h1>@Page.Title</h1>
    </body>
</html>
```



**web.config**
```
<?xml version="1.0"?>
<!--
  For more information on how to configure your ASP.NET application, please visit
  http://go.microsoft.com/fwlink/?LinkId=169433
  -->
<configuration>
  <system.web>
    <compilation debug="true" targetFramework="4.5">
      <assemblies>
        <add assembly="Microsoft.Web.Infrastructure, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31BF3856AD364E35"/>
      </assemblies>
    </compilation>
    <httpRuntime targetFramework="4.5"/>
  </system.web>
  <runtime>
    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
      <dependentAssembly>
        <assemblyIdentity name="System.Web.Helpers" publicKeyToken="31bf3856ad364e35"/>
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0"/>
      </dependentAssembly>
      <dependentAssembly>
        <assemblyIdentity name="System.Web.WebPages" publicKeyToken="31bf3856ad364e35"/>
        <bindingRedirect oldVersion="1.0.0.0-3.0.0.0" newVersion="3.0.0.0"/>
      </dependentAssembly>
    </assemblyBinding>
  </runtime>
</configuration>
```



**packages.config**
```
<?xml version="1.0" encoding="utf-8"?>
<packages>
  <package id="Microsoft.AspNet.Razor" version="3.2.3" targetFramework="net45" />
  <package id="Microsoft.AspNet.WebPages" version="3.2.3" targetFramework="net45" />
  <package id="Microsoft.Web.Infrastructure" version="1.0.0.0" targetFramework="net45" />
</packages>
```

----

# TODO:

- [ ] Empty web site (just a web.config)
- [ ] Add a Razor page (Sample.cshtml), notice bin files
- [ ] Simple C# code block - "Hello" + " " + "World" - context switching
- [ ] View in browser
