(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{249:function(e,t,i){"use strict";i.r(t);var s=i(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),i("p",[e._v("Demonstrate form processing using C#.")]),e._m(6),i("p",[e._v("Moodle site.")]),i("p",[e._v("URL Student Notes")]),i("p",[e._v("Url Introduction to ASP.Net Web Programming Using the Razor Syntax (C#)")]),i("p",[e._v("Url Bootstrap")]),i("p",[e._v("Url A Beginner’s Guide to HTML & CSS")]),i("p",[e._v("Url HTML Form Fields")]),e._m(7),i("p",[e._v("Lesson 3: Forms, Input Controls, Form Processing")]),e._m(8),e._m(9),e._m(10),e._m(11),e._m(12),e._m(13),i("p",[e._v("@{")]),i("p",[e._v('Page.Title = "RadioButtons";')]),i("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),i("p",[e._v('var languagechoice = Request.Form["LanguageGroup"];')]),i("p",[e._v('var scriptchoice = Request.Form["ScriptGroup"];')]),i("p",[e._v("}")]),i("p",[e._v("@section banner{")]),i("p",[e._v('<span style="font-size:xx-large"><strong>RadioButtons</strong></span>}')]),i("p",[e._v("<div>")]),i("p",[e._v("\x3c!--Processing area--\x3e")]),i("p",[e._v("@if (IsPost)")]),i("p",[e._v("{")]),i("p",[e._v("if (languagechoice.IsEmpty() || scriptchoice.IsEmpty())")]),i("p",[e._v("{")]),e._m(14),i("p",[e._v("}")]),i("p",[e._v("else")]),i("p",[e._v("{")]),i("p",[e._v('if (languagechoice.Equals("C#", StringComparison.OrdinalIgnoreCase))')]),i("p",[e._v("{")]),i("p",[e._v("<p>You will greatly enjoy the CPSC1517 course as we use C#.</p>")]),i("p",[e._v("}")]),i("p",[e._v("else")]),i("p",[e._v("{")]),i("p",[e._v("<p>Too bad. Unfortunately the CPSC1517 course uses C#.</p>")]),i("p",[e._v("}")]),i("p",[e._v('if (scriptchoice.Equals("Razor", StringComparison.OrdinalIgnoreCase))')]),i("p",[e._v("{")]),i("p",[e._v("<p>You will greatly enjoy the CPSC1517 course as we use Razor.</p>")]),i("p",[e._v("}")]),i("p",[e._v("else")]),i("p",[e._v("{")]),i("p",[e._v("<p>Too bad. Unfortunately the CPSC1517 course uses Razor.</p>")]),i("p",[e._v("}")]),i("p",[e._v("}")]),i("p",[e._v("}")]),i("p",[e._v('<form id="theForm" action="" method="post">')]),i("p",[e._v('<div class="row">')]),i("p",[e._v('<div class="col-xs-offset-1">')]),e._m(15),i("p",[e._v('<input type="radio" name="LanguageGroup" value="C#" />C#<br />')]),e._m(16),e._m(17),i("p",[e._v('<input type="radio" name="LanguageGroup" value="Cobol" />Cobol<br />')]),i("p",[e._v('<input type="radio" name="LanguageGroup" value="Fortran" />Fortran<br />')]),i("p",[e._v('<input type="radio" name="LanguageGroup" value="Pascal" />Pascal<br />')]),e._m(18),e._m(19),i("p",[e._v('<input type="radio" name="ScriptGroup" value="Razor" />Razor<br />')]),i("p",[e._v('<input type="radio" name="ScriptGroup" value="PHP" />PHP<br />')]),i("p",[e._v("</div>")]),i("p",[e._v("</div>")]),i("p",[e._v('<div class="row">')]),i("p",[e._v('<div class="col-xs-offset-1">')]),e._m(20),i("p",[e._v("</div>")]),i("p",[e._v("</div>")]),i("p",[e._v("</form>")]),i("p",[e._v("</div>")]),i("p",[e._v("Note when you run this, the radio buttons do not retain their selected value. To"),i("br"),e._v("\nbe able to retain the value for the buttons, you need to dynamically set the"),i("br"),e._v("\nchecked= attribute on each radio button. Add the following check= test to each"),i("br"),e._v("\nof the LanguageGroup buttons (making necessary value changes). This check uses"),i("br"),e._v("\nthe "),i("a",{attrs:{href:"https://docs.microsoft.com/en-us/dotnet/articles/csharp/language-reference/operators/conditional-operator",target:"_blank",rel:"noopener noreferrer"}},[e._v("C# ternary / conditional"),i("br"),e._v("\noperator"),i("OutboundLink")],1),e._v(".")]),e._m(21),e._m(22),e._m(23),e._m(24),i("p",[e._v("@{")]),i("p",[e._v('Page.Title = "CheckBoxes";')]),i("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),i("p",[e._v("}")]),i("p",[e._v("@section banner{")]),i("p",[e._v('<span style="font-size:xx-large"><strong>CheckBoxes</strong></span>}')]),i("p",[e._v("<div>")]),i("p",[e._v("@if (IsPost)")]),i("p",[e._v("{")]),i("p",[e._v('var choice = Request.Form["CheckBoxGroup"];')]),i("p",[e._v("if (choice.IsEmpty())")]),i("p",[e._v("{")]),e._m(25),i("p",[e._v("}")]),i("p",[e._v("else")]),i("p",[e._v("{")]),i("p",[e._v("//setup the delimiter as a character for use in dividing")]),i("p",[e._v("//the set of values that will be returned form the set")]),i("p",[e._v("//of checkboxes")]),i("p",[e._v("//Characters are defined using single quotes")]),i("p",[e._v("char[] delimiter = { ',' };")]),i("p",[e._v("//use the .Split(delimiter) method to split up the")]),i("p",[e._v("//returned string.")]),i("p",[e._v("//Returns a string array that contains the substrings")]),i("p",[e._v("//in this instance that are delimited by elements of a")]),i("p",[e._v("//specified string or Unicode character array.")]),i("p",[e._v("//The foreach loop allows us to traverse this array of")]),i("p",[e._v("//substrings")]),i("p",[e._v("<p>")]),i("p",[e._v("I see you like to use the following platforms:")]),i("p",[e._v("<ul>")]),i("p",[e._v("@foreach(var platform in choice.Split(delimiter))")]),i("p",[e._v("{")]),i("p",[e._v("<li>@platform</li>")]),i("p",[e._v("}")]),i("p",[e._v("</ul>")]),i("p",[e._v("</p>")]),i("p",[e._v("}")]),i("p",[e._v("}")]),i("p",[e._v('<form id="theForm" action="" method="post">')]),i("p",[e._v('<div class="row">')]),i("p",[e._v('<div class="col-xs-offset-1">')]),e._m(26),i("p",[e._v('<input type="checkbox" name="CheckBoxGroup" value="PS4" />PS4<br/>')]),i("p",[e._v('<input type="checkbox" name="CheckBoxGroup" value="PC" />PC<br />')]),e._m(27),e._m(28),e._m(29),i("p",[e._v('<input type="checkbox" name="CheckBoxGroup" value="Ipad" />Ipad<br />')]),i("p",[e._v('<input type="checkbox" name="CheckBoxGroup" value="WII" />WII<br />')]),e._m(30),i("p",[e._v("</div>")]),i("p",[e._v("</div>")]),i("p",[e._v("</form>")]),i("p",[e._v("</div>")]),e._m(31),e._m(32),e._m(33),i("p",[e._v("@{")]),i("p",[e._v('Page.Title = "DropdownList";')]),i("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),i("p",[e._v('var choice = Request.Form["CodingSample"];')]),i("p",[e._v("}")]),i("p",[e._v("@section banner{")]),e._m(34),i("p",[e._v("<div>")]),i("p",[e._v("@if (IsPost)")]),i("p",[e._v("{")]),i("p",[e._v("switch (choice.ToUpper())")]),i("p",[e._v("{")]),i("p",[e._v('case "TEXTBOXES":')]),i("p",[e._v("{")]),i("p",[e._v('Response.Redirect("TextBoxes.cshtml");')]),i("p",[e._v("break;")]),i("p",[e._v("}")]),i("p",[e._v('case "RADIOBUTTONS":')]),i("p",[e._v("{")]),i("p",[e._v('Response.Redirect("RadioButtons.cshtml");')]),i("p",[e._v("break;")]),i("p",[e._v("}")]),i("p",[e._v('case "CHECKBOXES":')]),i("p",[e._v("{")]),i("p",[e._v('Response.Redirect("CheckBoxes.cshtml");')]),i("p",[e._v("break;")]),i("p",[e._v("}")]),i("p",[e._v("default:")]),i("p",[e._v("{")]),e._m(35),i("p",[e._v("break;")]),i("p",[e._v("}")]),i("p",[e._v("}")]),i("p",[e._v("}")]),i("p",[e._v('<form id="theForm" action="" method="post">')]),i("p",[e._v('<div class="row">')]),i("p",[e._v('<div class="col-xs-offset-1">')]),i("p",[e._v('<label id="forCodingSample">Select the sample to view</label><br/>')]),i("p",[e._v("\x3c!--the Select tag is used in html to creat the dropdownlist")]),i("p",[e._v("each item in the ddl is specified using an option tag")]),i("p",[e._v("to set an item as the choosen item, use the parameter selected")]),i("p",[e._v("--\x3e")]),i("p",[e._v('<select id="CodingSampleId" name="CodingSample">')]),i("p",[e._v('<option value="">select...</option>')]),i("p",[e._v('<option value="TextBoxes">TexBoxes</option>')]),i("p",[e._v('<option value="RadioButtons">RadioButtons</option>')]),i("p",[e._v('<option value="CheckBoxes">CheckBoxes</option>')]),i("p",[e._v("</select>")]),i("p",[e._v("&nbsp; ")]),e._m(36),i("p",[e._v("</div>")]),i("p",[e._v("</div>")]),i("p",[e._v("</form>")]),i("p",[e._v("</div>")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Objectives:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discuss:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Input controls. RadioButtons, CheckBoxes, and DropDownList (Select).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Bootstrap column formatting: col-xx-offset-n.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Code:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Creating a content page with a form using RadioButtons, CheckBoxes, and"),t("br"),this._v("\nDropDownList (Select).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Student")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Instructor")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Concepts:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("RadioButtons")])]),t("li",[t("p",[this._v("CheckBoxes, loop with delimiter")])]),t("li",[t("p",[this._v("DropDownList (Select)")])]),t("li",[t("p",[this._v("Response.Redirect")])]),t("li",[t("p",[this._v("Form Processing")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("RadioButton vs CheckBox")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("RadioButtons, one selection out of group")])]),t("li",[t("p",[this._v("CheckBox, treated as an individual control, can be grouped, within group can"),t("br"),this._v("\nselect multiple items")])]),t("li",[t("p",[this._v("Can have several different groups of either on the same form.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: RadioButtons (RadioButtons.cshtml)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("On your form, a radiobutton group is identified as controls having the same"),t("br"),this._v("\nName= value. To identify which radiobutton was pressed within the group, each"),t("br"),this._v("\nradiobutton will have a different value on the Value= attribute. The"),t("br"),this._v("\nRequest.Form[“controlname”] will return the value of the radiobutton selected in"),t("br"),this._v("\nthe group. If you have different groups on the same from, ensure that the Name="),t("br"),this._v("\nattribute is different between the groups.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<p><span style="color:firebrick">Make a select from both coding'),t("br"),this._v("\nchoices.</span></p>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<label id="forLanguageGroup">Select your favorite programming'),t("br"),this._v("\nlanguage.</label><br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="radio" name="LanguageGroup" value="VisualBasic" />'),t("br"),this._v("\nVisual Basic<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="radio" name="LanguageGroup" value="ObjectiveC" />'),t("br"),this._v("\nObjectiveC<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<label id="forLanguageGroup">Select your favorite scripting'),t("br"),this._v("\ncode.</label><br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="radio" name="ScriptGroup" value="Javascript" />'),t("br"),this._v("\nJavascript<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<button type="submit" class="btn btn-primary" name="formButton"'),t("br"),this._v('\nvalue="submit">Submit</button>')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="radio" name="LanguageGroup" value="C#"'),t("br"),this._v('\nchecked="@languagechoice.Equals("C#",'),t("br"),this._v('\nStringComparison.OrdinalIgnoreCase)?true:false" />C#<br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: CheckBoxes (CheckBoxes.cshtml)")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("On your form, a checkbox group is identified as controls having the same Name="),i("br"),e._v("\nvalue. To identify which checkbox was pressed within the group, each checkbox"),i("br"),e._v("\nwill have a different value on the Value= attribute. Since the concept of a"),i("br"),e._v("\ncheckbox allow for multiple values to be selected at one time, the processing of"),i("br"),e._v("\na checkbox group is also different. The value from a checkbox group will be a"),i("br"),e._v("\nstring of comma separate set of values (CSV). We can now process this string in"),i("br"),e._v("\na loop using the .Split(delimiter) method to separate the values. The delimiter"),i("br"),e._v("\nis the char ‘,’.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This example will also wait until a post back has been issued before retrieving"),t("br"),this._v("\nthe data from the form. We do not want the student believing that data should"),t("br"),this._v("\njust be retrieved in the opening coding block.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<p><span style="color:firebrick">Make at least on choice from the'),t("br"),this._v("\nlist.</span></p>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<label id="forCheckBoxGroup">Select your favorite game'),t("br"),this._v("\nplatform(s)</label><br/>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="checkbox" name="CheckBoxGroup" value="XBox 360" />Xbox'),t("br"),this._v("\n360<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="checkbox" name="CheckBoxGroup" value="Nintendo DS"'),t("br"),this._v("\n/>Nintendo DS<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input type="checkbox" name="CheckBoxGroup" value="CellPhone"'),t("br"),this._v("\n/>CellPhone<br />")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<button type="submit" name="formButton" value="submit" class="btn'),t("br"),this._v('\nbtn-primary">Submit</button>')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: DropDownList (DropdownList.cshtml)")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The dropdownlist (ddl) is a common name for a control that provides a list of"),i("br"),e._v("\nchoices from which to make a selection. This list is usually collapsed to a"),i("br"),e._v("\nsingle line with an “elevator” caret which is pressed to reveal the choices. The"),i("br"),e._v("\nlist is broken into 2 parts: a text display and an associated hidden value. When"),i("br"),e._v("\ndata is retrieved from the html control, it is the associated hidden value. The"),i("br"),e._v("\nhtml tag used for a drop down list is the <Select> tag. A selection can be"),i("br"),e._v("\nmaintained between posts by setting the selected= attribute to true. (this will"),i("br"),e._v("\nnot be demonstrated in this example but will be seen in future CRUD examples).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This example will also introduce the use of Response.Redirect(“page”). The ddl"),t("br"),this._v("\nwill also demonstrate the use of a prompt line choice.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<span style="font-size:xx-large"><strong>DropDowns using'),t("br"),this._v("\nSelect</strong></span>}")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<p><span style="color:firebrick">Make at least on choice from the'),t("br"),this._v("\nlist.</span></p>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<button type="submit" name="forButton" class="btn btn-primary">'),t("br"),this._v("\nGo To ...</button>")])}],!1,null,null,null);t.default=r.exports}}]);