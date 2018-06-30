---
title: HTML5 Forms
description: Form elements in HTML5.
---
# Forms for User Input

HTML forms are the primary way of gathering user input for processing on the web server. Forms work by submitting data to a web server as a bunch of **name/value pairs**.

Data is entered into a form through various **form elements**, each of which use a ***name*** attribute (to identify the data for submitting to the web server) and a ***value*** attribute (whose content gets updated as the user interacts with the form element).

## `<form>`

The **form** element is the root element for directing user input to a web server. This element has the following key attributes.

- ***method*** - This attribute can have the values of either `POST` or `GET`. If this attribute is omitted, the default value is `GET`.
- ***action*** - This attribute is the URL to which the form's data is submitted. If this attribute is omitted, the form's data is sent to the same URL that was used to request the current page.

You are not allowed to nest one form inside another, but you can have multiple forms on a single page.

## `<button>`

The **button** element is a clickable control that allows a user to submit a form or perform some other action. Whatever text or HTML inside the open and closing button tags is regarded by the browser as the clickable button. It's key attribute is ***type***, which can have the values of either "submit", "reset", or "button".

When the button type is "submit", the values in the form are sent as a group of name/value pairs to the web server. When the button type is "reset", then all changes to the initial values in the form's controls are reset to what they were when the page was first loaded.

If the type is omitted, then "button" is assumed as the default. A type of "button" will not do anything on its own; you have to hook up the button to whatever custom JavaScript you want to run when it's clicked.

The button element isn't the only way to create a clickable button (that can also be done with the `<input>` element as described below), but it has the advantage of being more flexible for styling.

## `<select>` and `<option>`

The **select** and **option** elements are used for presenting a drop-down set of items that the user can select from.

## `<input>` Anything<sup><small>(almost)</small></sup>

The **input** element is a multi-purpose control to gather user input of various types. Originally, its focus was simple text, but over the years (and especially with HTML5) it has grown to be used for all sorts of data input. The kind of input is determined by the ***type*** attribute (which defaults to "text").

Some of the earlier possible values for the input's type attribute have been "checkbox" and "radio". A full list of the various types can be found on the [MDN documentation for the `<input>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_<input>_types).

## `<textarea>`

Strangely enough, if you want to enter multi-line text, you have to use the **textarea** element rather than the input element. It's primary attributes are ***cols*** (for the number of characters wide) and ***rows*** (for the number of lines high), which affect the size of the control.
