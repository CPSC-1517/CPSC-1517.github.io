(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{204:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),s("p",[t._v("You are not allowed to nest one form inside another, but you can have multiple forms on a single page.")]),t._m(6),t._m(7),s("p",[t._v('When the button type is "submit", the values in the form are sent as a group of name/value pairs to the web server. When the button type is "reset", then all changes to the initial values in the form\'s controls are reset to what they were when the page was first loaded.')]),s("p",[t._v('If the type is omitted, then "button" is assumed as the default. A type of "button" will not do anything on its own; you have to hook up the button to whatever custom JavaScript you want to run when it\'s clicked.')]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),s("p",[t._v('Some of the earlier possible values for the input\'s type attribute have been "checkbox" and "radio". A full list of the various types can be found on the '),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN documentation for the "),s("code",[t._v("<input>")]),t._v(" tag"),s("OutboundLink")],1),t._v(".")]),t._m(13),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"forms-for-user-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#forms-for-user-input","aria-hidden":"true"}},[this._v("#")]),this._v(" Forms for User Input")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTML forms are the primary way of gathering user input for processing on the web server. Forms work by submitting data to a web server as a bunch of "),e("strong",[this._v("name/value pairs")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Data is entered into a form through various "),e("strong",[this._v("form elements")]),this._v(", each of which use a "),e("em",[e("strong",[this._v("name")])]),this._v(" attribute (to identify the data for submitting to the web server) and a "),e("em",[e("strong",[this._v("value")])]),this._v(" attribute (whose content gets updated as the user interacts with the form element).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"form"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#form","aria-hidden":"true"}},[this._v("#")]),this._v(" Form")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[e("code",[this._v("<form>")])]),this._v(" element is the root element for directing user input to a web server. This element has the following key attributes.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("em",[s("strong",[t._v("method")])]),t._v(" - This attribute can have the values of either "),s("code",[t._v("POST")]),t._v(" or "),s("code",[t._v("GET")]),t._v(". If this attribute is omitted, the default value is "),s("code",[t._v("GET")]),t._v(".")]),s("li",[s("em",[s("strong",[t._v("action")])]),t._v(" - This attribute is the URL to which the form's data is submitted. If this attribute is omitted, the form's data is sent to the same URL that was used to request the current page.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"button"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#button","aria-hidden":"true"}},[this._v("#")]),this._v(" Button")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[e("code",[this._v("<button>")])]),this._v(" element is a clickable control that allows a user to submit a form or perform some other action. Whatever text or HTML inside the open and closing button tags is regarded by the browser as the clickable button. It's key attribute is "),e("em",[e("strong",[this._v("type")])]),this._v(', which can have the values of either "submit", "reset", or "button".')])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The button element isn't the only way to create a clickable button (that can also be done with the "),e("code",[this._v("<input>")]),this._v(" element as described below), but it has the advantage of being more flexible for styling.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"select-and-option"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-and-option","aria-hidden":"true"}},[this._v("#")]),this._v(" Select and Option")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[e("code",[this._v("<select>")])]),this._v(" and "),e("strong",[e("code",[this._v("<option>")])]),this._v(" elements are used for presenting a drop-down set of items that the user can select from.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"input-almost-anything"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-almost-anything","aria-hidden":"true"}},[this._v("#")]),this._v(" Input (almost anything)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[e("code",[this._v("<input>")])]),this._v(" element is a multi-purpose control to gather user input of various types. Originally, its focus was simple text, but over the years (and especially with HTML5) it has grown to be used for all sorts of data input. The kind of input is determined by the "),e("em",[e("strong",[this._v("type")])]),this._v(' attribute (which defaults to "text").')])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"textarea"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#textarea","aria-hidden":"true"}},[this._v("#")]),this._v(" TextArea")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Strangely enough, if you want to enter multi-line text, you have to use the "),e("strong",[e("code",[this._v("<textarea>")])]),this._v(" element rather than the input element. It's primary attributes are "),e("em",[e("strong",[this._v("cols")])]),this._v(" (for the number of characters wide) and "),e("em",[e("strong",[this._v("rows")])]),this._v(" (for the number of lines high), which affect the size of the control.")])}],!1,null,null,null);e.default=i.exports}}]);