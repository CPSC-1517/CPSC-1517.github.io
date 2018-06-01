---
layout: default
publish: true
title: HTML5 Elements
description: A short list of some of the most commonly used HTML5 elements.
styles:
  title: black
  description: black 
sortorder: 20
---
# Commonly Used Elements

There are a *lot* of elements in HTML (including many that have become obsolete). A good definitive list can be found in the [HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element) on the Mozilla Developer Network (MDN).

For all the available elements, only a handful are used on a regular basis. Here's a quick summary on those elements and their key attributes.

## HTML, Head and Body

The root element for all other elements is `<html>`. A well-formed page will have only one HTML element as the single root of the page. This element has only two child elements nested inside: `<head>` and `<body>`. The head element is used to group information about the document as a whole, such as the document's title, meta-information, stylesheets and script resources, etc. The body element is used to contain the content that the browser will render on the screen. The following elements discussed here are primarily for use within the `<body>` tag.

## Heading Levels 1-6

Prose is the mainstay of most HTML pages, and a common way to segment or summarize pieces of prose is to use headings. HTML offers six levels of heading tags: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`. These heading levels are often visually distinguished by size, font family, and/or other characteristics by the document's stylesheets, but their purpose is to act as an informal "outline" of the document's content.

There are no hard-and-fast rules around using heading tags, but the general practice is to start with `<h1>` tags and move to lower levels as is appropriate for the prose content. Two pieces of prose with the same "level" of importance should use the same "level" of heading. For example, on this page there is an `<h1>` for the main heading "Commonly Used Elements", but all the other headings under this make use of `<h2>` tags.

## Paragraph and Blockquote

The bulk of the prose on a page will likely appear inside of paragraph tags: `<p>`. Paragraph tags, like the heading tags that often precede them, are **block**-level tags. That is, they are typically shown as distinct "blocks" of text, forming a rectangle of space in which the content is displayed.

Another block-level tag is the `<blockquote>`, which is used to denote a significant amount of text that is being quoted from some person or article. It is typically distinguished by being indented a few spaces from paragraphs and headings on the page, though the exact nature of the rendering is, once again, determined by the stylesheets.

> The **HTML `<blockquote>` Element** (or *HTML Block Quotation Element*) indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation &hellip. A URL for the source of the quotation may be given using the **cite** attribute, while a text representation of the source can be given using the `<cite>` element. <cite>From the [HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element) by MDN</cite>

## Anchors (Hyperlinks)

Anchor elements (also called "hyperlinks") are **inline** elements that provide a navigational link to other pages or other points on the same page. The are coded using the `<a>` tag with an `href` attribute that identifies the page to link to. The href (hyperlink reference) attribute may be an absolute link or a relative link. Either way, they provide a clickable piece of text that the user can click to navigate to other pages on the internet.

## Text Formatting: Bold, Italic, and Underline

Some of the common inline formatting elements are

- `<b>` and `<strong>` for bolding text
- `<i>` and `<em>` for italicizing text
- `<u>` for underlining text

All of these means of inline formatting elements are commonly used to affect how the text is displayed.

## Unordered and Ordered Lists

Where there is prose, there is an opportunity to create lists. HTML provides the `<ul>` and `<li>` tags for creating un-ordered and ordered lists respectively. Both of these elements use the `<li>` tag to contain the individual items in their lists.

## Images

> A picture is worth ten thousand words. <cite>Fred R. Barnard, 1927</cite>

> But an image can cost thousands of bytes. <cite>Dan Gilleland, 2017</cite>

HTML was originally all about *text*. But eventually the ability to include images on web pages was developed, and the internet has become awash with `<img>` tags that point to some picture to display in the browser.

The reason that it took a little while for image support on web pages to come about is the simple fact that electronic images are represented in **binary**, not as plain text. Getting agreement among the browser vendors (Microsoft and Netscape, at the time) about the format and processes to use in reading and rendering images was naturally difficult, and the solution was to simply add another element to HTML that simply states "this is an image" and give it an attribute to say where the source of the binary data can be found.

Thus, the `<img>` element was developed with a `src` attribute that points to a picture. For example, the following markup will tell the browser to fetch and render the first image ever used on the internet.

```html
<img src="https://upload.wikimedia.org/wikipedia/en/c/c0/Les_Horribles_Cernettes_in_1992.jpg" />
```

![](https://upload.wikimedia.org/wikipedia/en/c/c0/Les_Horribles_Cernettes_in_1992.jpg)


## Tables

Tabular data is rendered using the various table elements: `<table>`, `<tr>`, `<td>`, and `<th>` . The table element is the root for the tabular data while the `<tr>` tag is used for a row of cells and the `<td>` is used to wrap the cell's contents. The `<th>` is just like a table-cell, but acts as a cell that holds header information (like a column header).

If you want to add more structure to your tabular data, there are also table-head (`<thead>`), table-body (`<tbody>`) and table-footer (`<tfoot>`) elements that can be used to wrap the table rows.  

## Line Break, Horizontal Rules, Spans and Divisions

Besides text and pictures, HTML gives us other elements to wrap content and control white-space.

The `<span>` tag is an inline element similar to the formatting elements like `<b>` or `<i>`, but without any built-in formatting. Typically, a span is used with the `class` attribute to apply CSS styles to inline-content.

In a similar way, the `<div>` tag is a block element that can wrap content and be assigned a `class` for styling.

If you want a line-break somewhere in a bunch of text, you can use the `<br />` tag. This line-break element is a self-closing tag because it is not intended to have any content. In a similar way, if you want to perform a line-break that also inserts a horizontal line, you can use the `<hr />` tag.

## Tags to *Avoid*

As already noted earlier, there are a number of elements that have become obsolete over time. If you've been around for a while, you might be familiar with some of these tags. Just remember: **Don't use these!** &ndash; `<blink>`, `<center>`, `<font>`, and `<big>`.

## Other Notable Elements

The document `<head>` tag is the parent for some helpful elements. These elements don't display any content, but they add extra information and resources for page as a whole. These include:

- `<title>` - The title element is used by the browser to set the text on the browser tab for the web page.
- `<link>` - Link elements tell the browser to load an external stylesheet.
- `<script>` - Script elements can be used to either load external script files or to wrap a bunch of JavaScript in the HTML page. Anything inside the `<script>` open and close tags is interpreted as JavaScript.
- `<style>` - Style elements are used to wrap CSS. Anything inside the open and close `<style>` tags is interpreted as CSS.

**Form elements** are also a set of important items, as they are the primary tools for gathering user input on web pages. Those elements will be discussed in more detail on the [Form elements](formElements.md) article in these course notes.

The `<div>` and `<span>` elements are used as general-purpose block-level and inline tags to wrap content and set it apart in some fashion. Often these elements make use of a `class` attribute that names a specific CSS classname to use for special styling.

Lastly, with HTML5 there has been an increased focus on what is known as **Semantic HTML**. "Semantic" is simply a word that means "relating to *meaning* in language", and in terms of HTML it's all about having elements whose tag name is *descriptive* of the content inside that tag. Using these tags can take a bit of thought about their purpose and meaning, but here's a short run-down of key elements introduced in HTML5, as defined on the [HTML element reference](https://developer.mozilla.org/en/docs/Web/HTML/Element).

- `<header>` - "The HTML `<header>` element represents a group of introductory or navigational aids. It may contain some heading elements but also other elements like a logo, a search form, and so on."
- `<footer>` - "The HTML `<footer>` element represents a footer for its nearest sectioning content or sectioning root element. A footer typically contains information about the author of the section, copyright data or links to related documents."
- `<main>` - "The HTML `<main>` element represents the main content of the `<body>` of a document or application. The main content area consists of content that is directly related to, or expands upon the central topic of a document or the central functionality of an application."
- `<article>` - "	The HTML `<article>` element represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry."
- `<section>` - "The HTML `<section>` element represents a standalone section of functionality contained within an HTML document, typically with a heading, which doesn't have a more specific semantic element to represent it."
- `<nav>` - "The HTML `<nav>` element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes."
- `<aside>` - "	The HTML `<aside>` element represents a section of a document with content connected tangentially to the main content of the document (often presented as a sidebar)."
- `<video>` - "Use the HTML `<video>` element to embed video content in a document."
- `<audio>` - "The HTML `<audio>` element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream."
- `<canvas>` - "Use the HTML `<canvas>` element with the canvas scripting API to draw graphics and animations."

