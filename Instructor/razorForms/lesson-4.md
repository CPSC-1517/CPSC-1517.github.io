---
title: " Lesson Plan: Day 4"
---

**Objectives:**

**Discuss:**

>   Input controls. RadioButtons, CheckBoxes, and DropDownList (Select).

>   Bootstrap column formatting: col-xx-offset-n.

**Code:**

>   Creating a content page with a form using RadioButtons, CheckBoxes, and
>   DropDownList (Select).

Demonstrate form processing using C\#.

**Resources: Student**

Moodle site.

URL Student Notes

Url Introduction to ASP.Net Web Programming Using the Razor Syntax (C\#)

Url Bootstrap

Url A Beginner’s Guide to HTML & CSS

Url HTML Form Fields

**Resources: Instructor**

Lesson 3: Forms, Input Controls, Form Processing

**Concepts:**

1. RadioButtons

2. CheckBoxes, loop with delimiter

3. DropDownList (Select)

4. Response.Redirect

5. Form Processing

**RadioButton vs CheckBox**

-   RadioButtons, one selection out of group

-   CheckBox, treated as an individual control, can be grouped, within group can
    select multiple items

-   Can have several different groups of either on the same form.

**Coding: RadioButtons (RadioButtons.cshtml)**

On your form, a radiobutton group is identified as controls having the same
Name= value. To identify which radiobutton was pressed within the group, each
radiobutton will have a different value on the Value= attribute. The
Request.Form[“controlname”] will return the value of the radiobutton selected in
the group. If you have different groups on the same from, ensure that the Name=
attribute is different between the groups.

\@{

Page.Title = "RadioButtons";

Layout = "\~/_LayoutMenu.cshtml";

var languagechoice = Request.Form["LanguageGroup"];

var scriptchoice = Request.Form["ScriptGroup"];

}

\@section banner{

\<span style="font-size:xx-large"\>\<strong\>RadioButtons\</strong\>\</span\>}

\<div\>

\<!--Processing area--\>

\@if (IsPost)

{

if (languagechoice.IsEmpty() \|\| scriptchoice.IsEmpty())

{

\<p\>\<span style="color:firebrick"\>Make a select from both coding  
choices.\</span\>\</p\>

}

else

{

if (languagechoice.Equals("C\#", StringComparison.OrdinalIgnoreCase))

{

\<p\>You will greatly enjoy the CPSC1517 course as we use C\#.\</p\>

}

else

{

\<p\>Too bad. Unfortunately the CPSC1517 course uses C\#.\</p\>

}

if (scriptchoice.Equals("Razor", StringComparison.OrdinalIgnoreCase))

{

\<p\>You will greatly enjoy the CPSC1517 course as we use Razor.\</p\>

}

else

{

\<p\>Too bad. Unfortunately the CPSC1517 course uses Razor.\</p\>

}

}

}

\<form id="theForm" action="" method="post"\>

\<div class="row"\>

\<div class="col-xs-offset-1"\>

\<label id="forLanguageGroup"\>Select your favorite programming  
language.\</label\>\<br /\>

\<input type="radio" name="LanguageGroup" value="C\#" /\>C\#\<br /\>

\<input type="radio" name="LanguageGroup" value="VisualBasic" /\>  
Visual Basic\<br /\>

\<input type="radio" name="LanguageGroup" value="ObjectiveC" /\>  
ObjectiveC\<br /\>

\<input type="radio" name="LanguageGroup" value="Cobol" /\>Cobol\<br /\>

\<input type="radio" name="LanguageGroup" value="Fortran" /\>Fortran\<br /\>

\<input type="radio" name="LanguageGroup" value="Pascal" /\>Pascal\<br /\>

\<label id="forLanguageGroup"\>Select your favorite scripting  
code.\</label\>\<br /\>

\<input type="radio" name="ScriptGroup" value="Javascript" /\>  
Javascript\<br /\>

\<input type="radio" name="ScriptGroup" value="Razor" /\>Razor\<br /\>

\<input type="radio" name="ScriptGroup" value="PHP" /\>PHP\<br /\>

\</div\>

\</div\>

\<div class="row"\>

\<div class="col-xs-offset-1"\>

\<button type="submit" class="btn btn-primary" name="formButton"  
value="submit"\>Submit\</button\>

\</div\>

\</div\>

\</form\>

\</div\>

Note when you run this, the radio buttons do not retain their selected value. To
be able to retain the value for the buttons, you need to dynamically set the
checked= attribute on each radio button. Add the following check= test to each
of the LanguageGroup buttons (making necessary value changes). This check uses
the [C\# ternary / conditional
operator](https://docs.microsoft.com/en-us/dotnet/articles/csharp/language-reference/operators/conditional-operator).

\<input type="radio" name="LanguageGroup" value="C\#"  
checked="\@languagechoice.Equals("C\#",
StringComparison.OrdinalIgnoreCase)?true:false" /\>C\#\<br /\>

**Coding: CheckBoxes (CheckBoxes.cshtml)**

On your form, a checkbox group is identified as controls having the same Name=
value. To identify which checkbox was pressed within the group, each checkbox
will have a different value on the Value= attribute. Since the concept of a
checkbox allow for multiple values to be selected at one time, the processing of
a checkbox group is also different. The value from a checkbox group will be a
string of comma separate set of values (CSV). We can now process this string in
a loop using the .Split(delimiter) method to separate the values. The delimiter
is the char ‘,’.

This example will also wait until a post back has been issued before retrieving
the data from the form. We do not want the student believing that data should
just be retrieved in the opening coding block.

\@{

Page.Title = "CheckBoxes";

Layout = "\~/_LayoutMenu.cshtml";

}

\@section banner{

\<span style="font-size:xx-large"\>\<strong\>CheckBoxes\</strong\>\</span\>}

\<div\>

\@if (IsPost)

{

var choice = Request.Form["CheckBoxGroup"];

if (choice.IsEmpty())

{

\<p\>\<span style="color:firebrick"\>Make at least on choice from the  
list.\</span\>\</p\>

}

else

{

//setup the delimiter as a character for use in dividing

//the set of values that will be returned form the set

//of checkboxes

//Characters are defined using single quotes

char[] delimiter = { ',' };

//use the .Split(delimiter) method to split up the

//returned string.

//Returns a string array that contains the substrings

//in this instance that are delimited by elements of a

//specified string or Unicode character array.

//The foreach loop allows us to traverse this array of

//substrings

\<p\>

I see you like to use the following platforms:

\<ul\>

\@foreach(var platform in choice.Split(delimiter))

{

\<li\>\@platform\</li\>

}

\</ul\>

\</p\>

}

}

\<form id="theForm" action="" method="post"\>

\<div class="row"\>

\<div class="col-xs-offset-1"\>

\<label id="forCheckBoxGroup"\>Select your favorite game  
platform(s)\</label\>\<br/\>

\<input type="checkbox" name="CheckBoxGroup" value="PS4" /\>PS4\<br/\>

\<input type="checkbox" name="CheckBoxGroup" value="PC" /\>PC\<br /\>

\<input type="checkbox" name="CheckBoxGroup" value="XBox 360" /\>Xbox  
360\<br /\>

\<input type="checkbox" name="CheckBoxGroup" value="Nintendo DS"  
/\>Nintendo DS\<br /\>

\<input type="checkbox" name="CheckBoxGroup" value="CellPhone"  
/\>CellPhone\<br /\>

\<input type="checkbox" name="CheckBoxGroup" value="Ipad" /\>Ipad\<br /\>

\<input type="checkbox" name="CheckBoxGroup" value="WII" /\>WII\<br /\>

\<button type="submit" name="formButton" value="submit" class="btn  
btn-primary"\>Submit\</button\>

\</div\>

\</div\>

\</form\>

\</div\>

**Coding: DropDownList (DropdownList.cshtml)**

The dropdownlist (ddl) is a common name for a control that provides a list of
choices from which to make a selection. This list is usually collapsed to a
single line with an “elevator” caret which is pressed to reveal the choices. The
list is broken into 2 parts: a text display and an associated hidden value. When
data is retrieved from the html control, it is the associated hidden value. The
html tag used for a drop down list is the \<Select\> tag. A selection can be
maintained between posts by setting the selected= attribute to true. (this will
not be demonstrated in this example but will be seen in future CRUD examples).

This example will also introduce the use of Response.Redirect(“page”). The ddl
will also demonstrate the use of a prompt line choice.

\@{

Page.Title = "DropdownList";

Layout = "\~/_LayoutMenu.cshtml";

var choice = Request.Form["CodingSample"];

}

\@section banner{

\<span style="font-size:xx-large"\>\<strong\>DropDowns using
Select\</strong\>\</span\>}

\<div\>

\@if (IsPost)

{

switch (choice.ToUpper())

{

case "TEXTBOXES":

{

Response.Redirect("TextBoxes.cshtml");

break;

}

case "RADIOBUTTONS":

{

Response.Redirect("RadioButtons.cshtml");

break;

}

case "CHECKBOXES":

{

Response.Redirect("CheckBoxes.cshtml");

break;

}

default:

{

\<p\>\<span style="color:firebrick"\>Make at least on choice from the  
list.\</span\>\</p\>

break;

}

}

}

\<form id="theForm" action="" method="post"\>

\<div class="row"\>

\<div class="col-xs-offset-1"\>

\<label id="forCodingSample"\>Select the sample to view\</label\>\<br/\>

\<!--the Select tag is used in html to creat the dropdownlist

each item in the ddl is specified using an option tag

to set an item as the choosen item, use the parameter selected

\--\>

\<select id="CodingSampleId" name="CodingSample"\>

\<option value=""\>select...\</option\>

\<option value="TextBoxes"\>TexBoxes\</option\>

\<option value="RadioButtons"\>RadioButtons\</option\>

\<option value="CheckBoxes"\>CheckBoxes\</option\>

\</select\>

\&nbsp;&nbsp;

\<button type="submit" name="forButton" class="btn btn-primary"\>  
Go To ...\</button\>

\</div\>

\</div\>

\</form\>

\</div\>
