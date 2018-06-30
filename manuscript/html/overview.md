---
title: HTML5 Primer
description: A quick background to HTML
---
# The Languages of the Web

HTML, CSS and JavaScript are the languages of the World Wide Web. They are the source code out of which web browsers know what and how to render rich, interactive content to users.

<!-- ![HTML - CSS - JS] - (../images/html-css-js-funnel.png) -->

**HTML** (Hyper-Text Markup Language) is used to identify the *content* of a web page (its text, images, etc.). **CSS** (Cascading Style Sheet) is used to affect the *presentation* of the content (colors, positioning, font-family, etc.). **JS** (JavaScript) is used to control the *functionality* of the web page in the browser (giving the user an interactive experience). Each language is worthy of its own dedicated course. For our purposes, we will give a simple review of only some key aspects of HTML.

## Versions of HTML

HTML has a long history going back to the 1990s. The first version was simply called "HTML", and later versions were given increasing numbers after the name. In the first decade of this century, HTML was at version 4, and browsers were finally becoming more consistent about how they rendered HTML markup.  With the rise of XML (eXtensible Markup Language) in the late 90's, efforts were underway to add more "structure" to HTML by specifying a new standard called XHTML. Browsers, however, needed to keep backwards compatibility for all the existing websites, and while XHTML standards were supported, it was not successful in replacing ordinary HTML.

As time went on and efforts continued to further develop HTML, a new specification was begun in 2007 for version 5 which offered many hopes and promises for significant improvements. Browser vendors slowly began supporting aspects of the new version, and in 2014 the W3C ratified and published the HTML5 specifications.

Today, HTML5 has gained such widespread browser support that it's common to simply refer to it as HTML.

## What is Markup?

Imagine, for example, that you wanted the text "Welcome!" to appear as a top heading on the page. To create a level one heading **element**, you would place the text between the opening and closing `h1` **tags**, as follows.

```html
<h1>Welcome!</h1>
```

What's important to note in this example is some of the terminology. The term **element** refers to the *kind* of HTML markup, while the term **tag** refers to the *syntax* of the HTML code. In truth, the terms "element" and "tag" are often used interchangably to mean the same thing, but a distinction of the terminology is handy for explaining some of the rules and best practices around writing HTML markup.

In HTML, elements can have properties or **attributes** that give the browser extra information (sometimes required) on how to render (that is, "draw") the element on the screen. Attributes are written as name/value pairs where the name is followed by an equal sign which is then followed by a value (in quotes). For example, the image element has a source attribute to tell the browser where to find the image file: `<img src="logo.png" />`. Some attributes are common to all or most of the elements in HTML, while others are highly specific to certain elements.

## Guidelines for Writing HTML Markup

It is helpful to follow a few guidelines around writing HTML. One of those guidelines is to make sure your elements are **well-formed**. Being "well-formed" means that the markup is cleanly structured. For an element to be well-formed (that is, properly structured), it should have an **opening tag** (the tag name inside of angle brackets) and a **closing tag** (the tag name, preceded by a slash, all inside of angle brackets). Some elements can optionally be written as **self-closing** tags, such as the image element (`<img src="logo.png" />`) while other elements don't allow any text inside its tags and are "naturally" self-closing, such as the horizontal rule (`<hr />`) or the line-break (`<br />`).

Additionally, an element's attributes are well-formed when they are always given a value and the value is placed inside of quotes.

A second guideline is to always write the tags in lower case. Most text editors are designed to color the tags and attributes of HTML, and that is enough to make them stand out from the rest of the text as HTML markup.

### The Bane of Backward Compatibility

While these are guidelines, they are not rules. In actuality, HTML retains a lot looser set of rules around open and close tags than is found in XML. Browsers needed to be "forgiving" in reading and interpreting HTML. Some elements could omit the closing tag, such as the paragraph `<p>` or the list item `<li>`, and the browser would simply assume a closing tag if it ran into another `<p>` or `<li>`. Other elements that don't allow text in its tags could just be written as an opening tag; for example, a line-break would be understood if written as `<br>` (with no closing slash). Attributes were also treated in a flexible way, where quotes were not required and some attributes not even needing a value.

Browsers may be forgiving in interpreting HTML, but co-workers and employers are not. ***That*** is the reason for following guidelines when writing HTML. Everytime you write code, you are creating something that *someone* (perhaps *you*) is going to have to maintain over time. As Harold Abelson has said,

> "Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson, "Structure and Interpretation of Computer Programs"
