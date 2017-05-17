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


## Line Break, Horizontal Rules, and Divisions



## Tags to *Avoid*

As already noted earlier, there are a number of elements that have become obsolete over time. If you've been around for a while, you might be familiar with some of these tags. Just remember: **Don't use these!** &ndash; `<blink>`, `<center>`, `<font>`, and `<big>`.



## Other Notable Elements

The document `<head>` tag is the parent for some helpful elements. These elements don't display any content, but they add extra information and resources for page as a whole. These include:

- `<title>` - 
- `<link>` - 
- `<script>` - 
- `<style>` - 

**Form elements** are also a set of important items, as they are the primary tools for gathering user input on web pages. Those elements will be discussed in more detail on the [Form elements](formElements.md) article in these course notes.

The `<div>` and `<span>` elements are used as general-purpose block-level and inline tags to wrap content and set it apart in some fashion. Often these elements make use of a `class` attribute that names a specific CSS classname to use for special styling.

Lastly, with HTML5 there has been an increased focus on what is known as **Semantic HTML**. "Semantic" is simply a word that means "relating to *meaning* in language", and in terms of HTML it's all about having elements whose tag name is *descriptive* of the content inside that tag. Using these tags can take a bit of thought about their purpose and meaning, but here's a short run-down of key elements introduced in HTML5.

- `<header>` -
- `<footer>` -
- `<main>` -
- `<article>` -
- `<section>` -
- `<nav>` -
- `<aside>` -
- `<video>` -
- `<audio>` -
- `<canvas>` -
