(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{185:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"the-languages-of-the-web"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-languages-of-the-web","aria-hidden":"true"}},[e._v("#")]),e._v(" The Languages of the Web")]),a("p",[e._v("HTML, CSS and JavaScript are the languages of the World Wide Web. They are the source code out of which web browsers know what and how to render rich, interactive content to users.")]),a("p",[a("strong",[e._v("HTML")]),e._v(" (Hyper-Text Markup Language) is used to identify the "),a("em",[e._v("content")]),e._v(" of a web page (its text, images, etc.). "),a("strong",[e._v("CSS")]),e._v(" (Cascading Style Sheet) is used to affect the "),a("em",[e._v("presentation")]),e._v(" of the content (colors, positioning, font-family, etc.). "),a("strong",[e._v("JS")]),e._v(" (JavaScript) is used to control the "),a("em",[e._v("functionality")]),e._v(" of the web page in the browser (giving the user an interactive experience). Each language is worthy of its own dedicated course. For our purposes, we will give a simple review of only some key aspects of HTML.")]),a("h2",{attrs:{id:"versions-of-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions-of-html","aria-hidden":"true"}},[e._v("#")]),e._v(" Versions of HTML")]),a("p",[e._v('HTML has a long history going back to the 1990s. The first version was simply called "HTML", and later versions were given increasing numbers after the name. In the first decade of this century, HTML was at version 4, and browsers were finally becoming more consistent about how they rendered HTML markup.  With the rise of XML (eXtensible Markup Language) in the late 90\'s, efforts were underway to add more "structure" to HTML by specifying a new standard called XHTML. Browsers, however, needed to keep backwards compatibility for all the existing websites, and while XHTML standards were supported, it was not successful in replacing ordinary HTML.')]),a("p",[e._v("As time went on and efforts continued to further develop HTML, a new specification was begun in 2007 for version 5 which offered many hopes and promises for significant improvements. Browser vendors slowly began supporting aspects of the new version, and in 2014 the W3C ratified and published the HTML5 specifications.")]),a("p",[e._v("Today, HTML5 has gained such widespread browser support that it's common to simply refer to it as HTML.")]),a("h2",{attrs:{id:"what-is-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Markup?")]),a("p",[e._v('Imagine, for example, that you wanted the text "Welcome!" to appear as a top heading on the page. To create a level one heading '),a("strong",[e._v("element")]),e._v(", you would place the text between the opening and closing "),a("code",[e._v("h1")]),a("strong",[e._v("tags")]),e._v(", as follows.")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("<")]),e._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("Welcome!"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[e._v("</")]),e._v("h1")]),a("span",{attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),a("p",[e._v("What's important to note in this example is some of the terminology. The term "),a("strong",[e._v("element")]),e._v(" refers to the "),a("em",[e._v("kind")]),e._v(" of HTML markup, while the term "),a("strong",[e._v("tag")]),e._v(" refers to the "),a("em",[e._v("syntax")]),e._v(' of the HTML code. In truth, the terms "element" and "tag" are often used interchangably to mean the same thing, but a distinction of the terminology is handy for explaining some of the rules and best practices around writing HTML markup.')]),a("p",[e._v("In HTML, elements can have properties or "),a("strong",[e._v("attributes")]),e._v(' that give the browser extra information (sometimes required) on how to render (that is, "draw") the element on the screen. Attributes are written as name/value pairs where the name is followed by an equal sign which is then followed by a value (in quotes). For example, the image element has a source attribute to tell the browser where to find the image file: '),a("code",[e._v('<img src="logo.png" />')]),e._v(". Some attributes are common to all or most of the elements in HTML, while others are highly specific to certain elements.")]),a("h2",{attrs:{id:"guidelines-for-writing-html-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guidelines-for-writing-html-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Guidelines for Writing HTML Markup")]),a("p",[e._v("It is helpful to follow a few guidelines around writing HTML. One of those guidelines is to make sure your elements are "),a("strong",[e._v("well-formed")]),e._v('. Being "well-formed" means that the markup is cleanly structured. For an element to be well-formed (that is, properly structured), it should have an '),a("strong",[e._v("opening tag")]),e._v(" (the tag name inside of angle brackets) and a "),a("strong",[e._v("closing tag")]),e._v(" (the tag name, preceded by a slash, all inside of angle brackets). Some elements can optionally be written as "),a("strong",[e._v("self-closing")]),e._v(" tags, such as the image element ("),a("code",[e._v('<img src="logo.png" />')]),e._v(') while other elements don\'t allow any text inside its tags and are "naturally" self-closing, such as the horizontal rule ('),a("code",[e._v("<hr />")]),e._v(") or the line-break ("),a("code",[e._v("<br />")]),e._v(").")]),a("p",[e._v("Additionally, an element's attributes are well-formed when they are always given a value and the value is placed inside of quotes.")]),a("p",[e._v("A second guideline is to always write the tags in lower case. Most text editors are designed to color the tags and attributes of HTML, and that is enough to make them stand out from the rest of the text as HTML markup.")]),a("h3",{attrs:{id:"the-bane-of-backward-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-bane-of-backward-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" The Bane of Backward Compatibility")]),a("p",[e._v('While these are guidelines, they are not rules. In actuality, HTML retains a lot looser set of rules around open and close tags than is found in XML. Browsers needed to be "forgiving" in reading and interpreting HTML. Some elements could omit the closing tag, such as the paragraph '),a("code",[e._v("<p>")]),e._v(" or the list item "),a("code",[e._v("<li>")]),e._v(", and the browser would simply assume a closing tag if it ran into another "),a("code",[e._v("<p>")]),e._v(" or "),a("code",[e._v("<li>")]),e._v(". Other elements that don't allow text in its tags could just be written as an opening tag; for example, a line-break would be understood if written as "),a("code",[e._v("<br>")]),e._v(" (with no closing slash). Attributes were also treated in a flexible way, where quotes were not required and some attributes not even needing a value.")]),a("p",[e._v("Browsers may be forgiving in interpreting HTML, but co-workers and employers are not. "),a("em",[a("strong",[e._v("That")])]),e._v(" is the reason for following guidelines when writing HTML. Everytime you write code, you are creating something that "),a("em",[e._v("someone")]),e._v(" (perhaps "),a("em",[e._v("you")]),e._v(") is going to have to maintain over time. As Harold Abelson has said,")]),a("blockquote",[a("p",[e._v('"Programs must be written for people to read, and only incidentally for machines to execute." - Harold Abelson, "Structure and Interpretation of Computer Programs"')])])])}],!1,null,null,null);t.default=n.exports}}]);