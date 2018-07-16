---
title: "Lesson Plan: Day 3"
---

**Objectives:**

**Discuss:**

>   Customize WebGrid.

>   Using WebGrid in a search method.

**Code:**

>   Customize a WebGrid.

>   Adding an anchor tag to each row on a WebGrid.

>   Passing data using anchor tag on WebGrid row

**Resources: Student**

Moodle site.

URL Student Notes

doc Basic Search Techniques

**Resources: Instructor**

Lesson 3: Customize WebGrid.

**Concepts:**

1. Customizing a display

2. Using a multi-column display to determine record selection

3. Passing data between webpages from a webgrid

**Alter current blocking for webgrid from \<div class=”col-sm-offset-3”\> to
\<div class=”container”\>**  


**Coding:WebGrid Page**

-   Open the file containing your webgrid from the previous lesson (run and
    review).

-   Discuss column selection, column hearders, numerical formatting, date
    formatting, appropriate controls for data display.

For this lesson, take a step by step approach in revealing customized components
for the webgrid.

**Customize:WebGrid Columns**

The default display of the data on a webgrid is:

-   Order of fields the same as query

-   Column headers are the query column titles

-   No formatting, simply text output .

Start the customization by selecting specific columns to be displayed.

\@gridinstance.GetHtml(

columns: gridinstance.Columns(

gridinstance.Column(columnName: "ProductID", header: "ID"),

gridinstance.Column(columnName: "ProductName", header: "Product"),

gridinstance.Column(columnName: "QuantityPerUnit", header: "Pkg"),

gridinstance.Column(columnName: "UnitPrice", header: "\$"),

gridinstance.Column(columnName: "Discontinued", header: "Disc.")

));

When referencing your webgrid instance use the variable instance name that you
created: **gridinstance**. **colums:, .Columns:, .Column** are all required
syntax key words. Create a separate .Column for each value you wish to display
from the query record collection. You do not have to use all the columns off
your query. Also, you do not have to place your display columns in the same
physical order as the query columns (just by accident in this example).

**.Column(…..)** has several attributes:

columnName: required, indicates the column on the query to use by query column
title

header: optional, used to change the default column header from query column
title to your choice

format: optional, used to format the output, default is string

style: optional, used to reference a css class

canSort: optional, true or false, ensure that you have a columnName specified
for the sort column

**Using format:**

**Currency:**

gridinstance.Column(columnName: "UnitPrice", header: "\$",  
format: (item) =\> item.UnitPrice.ToString("0.00"))

**Date**

gridinstance.Column(columnName: "aDateField", header: "\$",  
format: (item) =\> item.aDateField.ToString("MMM dd, yyyy"))

**CheckBox for Boolean field**

gridinstance.Column(columnName: "Discontinued", header: "Disc.",

format: \@\<input name="Discontinued" type="checkbox"  
value="\@item.Discontinued" \@(item.Discontinued == true ? "Checked" : null)  
disabled="disabled" /\> )

**Using canSort:**

gridinstance.Column(columnName: "ProductID", header: "ID", canSort:true)

\@gridinstance.GetHtml(

columns: gridinstance.Columns(

gridinstance.Column(columnName: "ProductID", header: "ID", canSort:true),

gridinstance.Column(columnName: "ProductName", header: "Product", canSort:true),

gridinstance.Column(columnName: "QuantityPerUnit", header: "Pkg"),

gridinstance.Column(columnName: "UnitPrice", header: "\$",  
format: (item) =\> item.UnitPrice.ToString("0.00")),

gridinstance.Column(columnName: "Discontinued", header: "Disc.",

format: \@\<input name="Discontinued" type="checkbox"  
value="\@item.Discontinued" \@(item.Discontinued == true ? "Checked" : null)  
disabled="disabled" /\> )

));

The overall format of the table created by WebGrid can also be altered using
bootstrap.

**tableStyle: “bootstrap class(es)”**

**table** changes the physical look of the grid to a table **with spaced
columns**

**table-bordered** table gets grid lines between columns and around the entire
table

**table-striped** table get alternating row coloring

**table-hover** as your cursor moves over the table, the row coloring changes

**Paging on WebGrid**

**Mode: WebGridPagerModes.All** also available **FirstLast or NextPrevious or
Numeric**

**firstText:** change the default \< to whatever text you wish

**lastText:** change the default \< to whatever text you wish

**Change the row per page** add the **rowsPerPage:n** attribute to the
instantiation of the WebGrid

var gridinstance = new WebGrid(results, rowsPerPage:5);

\@gridinstance.GetHtml(

tableStyle: "table table-bordered table-striped table-hover",

mode: WebGridPagerModes.All,

firstText: "Start",

lastText: "End",

columns: gridinstance.Columns(

gridinstance.Column(columnName: "ProductID", header: "ID", canSort:true),

gridinstance.Column(columnName: "ProductName", header: "Product", canSort:true),

gridinstance.Column(columnName: "QuantityPerUnit", header: "Pkg"),

gridinstance.Column(columnName: "UnitPrice", header: "\$",  
format: (item) =\> item.UnitPrice.ToString("0.00")),

gridinstance.Column(columnName: "Discontinued", header: "Disc.",

format: \@\<input name="Discontinued" type="checkbox"  
value="\@item.Discontinued" \@(item.Discontinued == true ? "Checked" : null)  
disabled="disabled" /\> )

));

**Placing a anchor link on the webgrid row**

Create a new content page under DBPages called **WebGridDestination.cshtml.**

\@{

Page.Title = "WebGrid View";

Layout = "\~/_LayoutMenu.cshtml";

}

\@section banner{

\<span style="font-size:xx-large"\>\<strong\>Database: Value from  
WebGrid\</strong\>\</span\>}

\<div\>

\<h4\>You passed the value \@Request.QueryString["pid"]\</h4\>

\</div\>

On the webgrid place the following .Column

gridinstance.Column(header: "",

format: \@\<text\> \<a
href="\~/DBPages/WebGridDestination.cshtml?pid=\@item.ProductID"

onclick="return confirm('Are you sure you wish to view the  
product details of \@item.ProductName ?')"\>View\</a\>\</text\>)

href= points to the destination page of the anchor tag and carries with it a
argument value

onclick= causes a confirmation message dialog to appear before the transfer to
the new page (optional)
