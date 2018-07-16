---
title: "Lesson Plan: Day 1"
---

**Objectives:**

**Discuss:**

Using SqlQuery and SqlParameter

>   Why would one wish to customize their GridView presentation?

>   Generally accepted practise for alignment and data formatting.

>   GridView customized components Template columns.

**Code:**

>   PL: Customize a GridView using Template columns.

**Resources: Student**

Moodle site.

-   Displaying Mutliple Items in a GridView

-   Customizing GridView

-   Working with GridView Events

**Resources: Instructor**

-   Lesson 1:

    -   Displaying Mutliple Items in a GridView

    -   Customizing GridView,

    -   Working with GridView Events

**Concepts:**

1. Calling an sql procedure from the BLL

2. Boundfields vs Template fields

3. Customizing techniques (IDE vs self coding)

4. Customize format of data.

5. Customize general appearance of GridView

**Class actions:**

Do the Customizing Gridview tutorial.

**Lesson Notes:**

A developer does not need to just rely on queries to a single sql table using
.List() or .Find(). You can call a sql procedure using SqlQuery\<T\>(). You can
pass parameters to the call using SqlParameter(). The SqlParameter needs the
System.Data.SqlClient name space.

Open the ProductController. Add the following method.

//to query your database using a non primary key value

//this will require a sql procedure to call

//the namespace System.Data.SqlClient is required

//the returning datatype is IEnumerable\<T\>

//this returning datatype will be cast using ToList() on the return

public List\<Product\> Products_GetByPartialProductName(string partialname)

{

using (var context = new NorthwindContext())

{

//sometimes there may be a sql error that does not like the new SqlParameter()

// coded directly in the SqlQuery call

//if this happens to you then code your parameter as shown below then

// use the parm1 in the SqlQuery call instead of the new....

//don't know why but its weird

//var parm1 = new SqlParameter("PartialName", partialname);

IEnumerable\<Product\> results = context.Database.SqlQuery\<Product\>  
("Products_GetByPartialProductName \@PartialName",

new SqlParameter("PartialName", partialname));

return results.ToList();

}

}

The dataset that is returned to the method from sql is an IEnumerable\<T\>. The
datatype T will be a designed object that matches the design of the SELECT
command of your procedure (this example uses Product). The call does not use the
DbSet() entity, instead is via .Database.SqlQuery\<T\>(). It will still use your
context class. The parameters of the method consists of the procedure name with
any passed parameters as a string followed by a set of SqlParameter() instances,
one each for each parameter.

The example uses the procedure Products_GetBySupplierPartialProductName.
REMEMBER, you are coding in C\# so case-sensitivity is important. The first
parameter to SqlQuery\<T\>() is the calling of the procedure using the procedure
name and any necessary procedure parameters. Notice that the sql parameters
start with an \@ and must match the case and spelling of the parameter in the
procedure. If there are more than one parameter, separate these using a comma
(,). If there are any parameters to the sql procedure, these are supplied
following the first SqlQuery parameter. The procedure parameters are supplied as
SqlParameter instances. The instance requires 2 parameters: a string identifying
the sql procedure parameter and a value. Notice the \@ is removed from the
string. If you have multiple SqlParameter instances, separate them by a comma
(,).

**GridView**

GridView replaced the DataGrid as a web control in Framework 2.0. The DataGrid
control does not appear on the Framework 2.0 toolbar. The workings of the
GridView and DataGrid appear to be extremely similar with only a couple minor
differences.

The GridView is used to display multiple rows from a data source, typically a
datatable. The datatable may be standalone or within a dataset. The default
display of the datatable within the gridview uses all the table columns and the
table column name as the gridview column header. This poses a problem if you
wish to display specific columns, use alternate column headings or assign
display formats that differ from the basic string display of the data.

We will discuss two popular techniques used in customizing a gridview,
BoundFields and Templates. The BoundField is generally used for read-only
displays. The default display format is string. You can assign various
formatting patterns to your data. When used with the EditUpdate command button,
the BoundField will be displayed within a textbox. The Template column allows
for a more refined customization of the gridview column. There are several types
of template columns: ItemTemplate, EditItemTemplate, AlternatingItemTemplate,
HeaderTemplate and FooterTemplate. You must supply the content display or a
basic standard web control (such as textbox, drop down list, checkbox) when
setting up a template. Access to data is done using script.

You may have a combination of boundfields and template columns within a single
gridview, each representing a different column. When you do customize your
gridview, set the AutoGenerateColumn property to “false” (default is “true”) or
you will get **both** your customized columns and the default set column setup.

A gridview is ideally used when your data source has 3 or more columns to
display for multiple rows. If you have only 2 columns (description and an
associated value), consider using a drop down list. Your columns should have
limited size and any particular column data should not wrap to the following
line.

Review Customizing GridView and Working with GridView events documents.

Concentrate on template fields as they are the most versatile (sample).

\<asp:GridView ID="ProductGridView" runat="server"

>   AutoGenerateColumns="False" GridLines="None"

AllowPaging="True" PageSize="2"

OnPageIndexChanging="ProductGridView_PageIndexChanging"

OnSelectedIndexChanged="ProductGridView_SelectedIndexChanged"\>

\<Columns\>

\<asp:CommandField CausesValidation="False" SelectText="View"

ShowSelectButton="True"\>\</asp:CommandField\>

\<asp:TemplateField \>

\<ItemTemplate\>

\<asp:Label ID="ProductID" runat="server"

Text='\<%\# Eval("ProductID") %\>' Visible="false"\>\</asp:Label\>

\</ItemTemplate\>

\</asp:TemplateField\>

\<asp:TemplateField HeaderText="Name"\>

\<ItemTemplate\>

\<asp:Label ID="ProductName" runat="server"

Text='\<%\# Eval("ProductName") %\>'Width="300px"\>\</asp:Label\>

\</ItemTemplate\>

\<HeaderStyle HorizontalAlign="Left"\>\</HeaderStyle\>

\<ItemStyle HorizontalAlign="Left"\>\</ItemStyle\>

\</asp:TemplateField\>

\<asp:TemplateField HeaderText="Qty/Unit"\>

\<ItemTemplate\>

\<asp:Label ID="QuantityPerUnit" runat="server"

Text='\<%\# Eval("QuantityPerUnit") %\>' Width="200px"\>\</asp:Label\>

\</ItemTemplate\>

\<ItemStyle HorizontalAlign="Left"\>\</ItemStyle\>

\</asp:TemplateField\>

\<asp:TemplateField HeaderText="\$"\>

\<ItemTemplate\>

\<asp:Label ID="UnitPrice" runat="server"

Text='\<%\# string.Format("{0:0.00}", Eval("UnitPrice")) %\>'

Width="50px"\>\</asp:Label\>

\</ItemTemplate\>

\<ItemStyle HorizontalAlign="Right"\>\</ItemStyle\>

\</asp:TemplateField\>

\<asp:TemplateField HeaderText="Disc"\>

\<ItemTemplate\>

\<asp:CheckBox ID="Discontinued" runat="server"

Checked='\<%\# Eval("Discontinued") %\>' /\>

\</ItemTemplate\>

\<ItemStyle HorizontalAlign="Center"\>\</ItemStyle\>

\</asp:TemplateField\>

\</Columns\>

\<EmptyDataTemplate\>

No products from for search criteria

\</EmptyDataTemplate\>

\<PagerSettings FirstPageText="Start" LastPageText="End" Mode="NumericFirstLast"  
PageButtonCount="5" /\>

\</asp:GridView\>

Points of interest:

1. GridLines=”None”: removes gridlines from display

2. EmptyDataTemplate: should be included in any gridview to handle an empty
    assigned dataset

3. Paging: Parameters created for you when setting the control properties

4. CausesValidation: if your page contains validation controls and you do not
    want to have the validation to run when pressing the command button on your
    gridview.

5. Visible=”false’: to hid a column but still have it available for event
    processing

6. Formatting using string.Format()

7. Command button event

8. Paging event

protected void ProductGridView_SelectedIndexChanged(object sender, EventArgs e)

{

//optional

//create a variable line pointer to the GridView Selected Row

GridViewRow agvrow = ProductGridView.Rows[ProductGridView.SelectedIndex];

//extract the data from the GridView Row column

//the data will be retrieved as a string

//to find the control on the row use the .FindControl("idname")

//to determine the type of control referenced use as ControlTypeName

//to access the data use the control's appropriate access technique

string productid = (agvrow.FindControl("ProductID") as Label).Text;

string productname = (agvrow.FindControl("ProductName") as Label).Text;

string quantityperunit = (agvrow.FindControl("QuantityPerUnit") as Label).Text;

string unitprice = (agvrow.FindControl("UnitPrice") as Label).Text;

bool discontinued = (agvrow.FindControl("Discontinued") as CheckBox).Checked;

string msg = string.Format("Id: {0} Name: {1} Qty/Unit: {2} \$: {3} Disc: {4}",

productid, productname, quantityperunit, unitprice, discontinued);

errormsgs.Add(msg);

LoadMessageDisplay(errormsgs, "alert alert-success");

}

protected void ProductGridView_PageIndexChanging(object sender,
GridViewPageEventArgs e)

{

//set the new page number on the gridview

//the adjustment of the page number IS NOT automatic

ProductGridView.PageIndex = e.NewPageIndex;

//refresh the gridview by requering the database

SearchProducts_Click(sender, e);

}
