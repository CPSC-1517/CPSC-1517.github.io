---
title: "Lesson Plan: Day 2"
---

**Objectives:**

**Discuss:**

>   What is “filter” searching?

>   Why would one wish to use a filter search?

>   Different filter searching techniques. (Review Basic Search Techniques under
>   Razor Forms and Database Queries)

**Code:**

>   BLL: Introduce the use of Views in sql as the data container for
>   SqlQuery\<T\>().

>   PL: Use different controls to obtain the search filter and display the
>   search data.

**Resources: Student**

Moodle site.

-   Search Techniques

-   Display Multiple Items in a GridView (tutorial)

**Resources: Instructor**

Lesson 1: Review of filter search techniques first shown in Razor.

**Concepts:**

1. Filter search Techniques

2. Why and When to use filter search techniques

3. Relate to Course Project

4. Optional Menu and MultiView

**Class actions:**

Demo the FilterSearches.aspx page.

Menu and MultiView controls.

MultiView

\<asp:MultiView ID="MultiView1" runat="server" ActiveViewIndex="0"\>

\<asp:View ID="View1" runat="server"\>

\<fieldset class="form-horizontal"\>

\<legend\>Filter Queries: Dropdown List\</legend\>

\<asp:Label ID="Label1" runat="server" Text="Categories:"\>\</asp:Label\>

\<asp:DropDownList ID="CategoryList" runat="server"

AutoPostBack="True" OnSelectedIndexChanged="CategoryList_SelectedIndexChanged"\>

\</asp:DropDownList\>

\<br /\>\<br /\>

\<asp:GridView ID="ProductGridViewV1" runat="server"\>

\</asp:GridView\>

\</fieldset\>

\</asp:View\>

\<asp:View ID="View2" runat="server"\>

-   Repeat asp:View for each view tab

\</asp:View\>

\</asp:MultiView\>

**Notes**

ActiveViewIndex="0" Parameter indicates which view to show on the web page, set
to the first view (index 0) when the page is first displayed. This parameter can
be changed in your code behind to see the other views (see Menu).

\<asp:View ID="View1" runat="server"\> Starts a view. The view contains whatever
controls you wish to use to create your display

AutoPostBack="True" On the DropDownList means a button is not required. The
event is activated if the selected item on the list is changed.

It is important to note that this is ALL one web page. The rules of unique names
on a web page MUST be followed even though similar controls may exist in other
views (example the GridView). You cannot reuse the same name. One simple
solution is to add a string to the name to make it unique. This page adds Vn to
the end of command named controls where n is the view number (1,2, etc) ex:
ProductGridViewV1.

**Menu**

The Menu control is used to represent the tabs of the MultiView. The Menu is
formatted using a custom CSS file. The event is used to switch between Views.

**CSS**

.tabs{

position:relative;

top:1px;

left:10px;

}

.tab{

border:solid 3px black;

background-color:white;

padding: 5px 10px;

}

.selectedTab {

background-color: white;

border-bottom:solid 3px white;

}

.tabContents {

border: solid 1px black;

padding: 10px;

background-color: white

}

**Menu control**

\<asp:Menu ID="Menu1" runat="server" Orientation="Horizontal"

StaticMenuItemStyle-CssClass="tab"

Font-Size="Large" StaticSelectedStyle-CssClass="selectedTab"

StaticMenuItemStyle-HorizontalPadding="50px"

StaticSelectedStyle-BackColor="lightblue"

CssClass="tabs"

OnMenuItemClick="Menu1_MenuItemClick"\>

\<Items\>

\<asp:MenuItem Text="DropDownList" Selected="true" Value="0"\>\</asp:MenuItem\>

\<asp:MenuItem Text="Textbox" Value="1"\>\</asp:MenuItem\>

\<asp:MenuItem Text="MultiParameter" Value="2"\>\</asp:MenuItem\>

\<asp:MenuItem Text="DrillDown" Value="3"\>\</asp:MenuItem\>

\<asp:MenuItem Text="Exercise" Value="4"\>\</asp:MenuItem\>

\</Items\>

\</asp:Menu\>

The Value parameter will be used by the event to set the ActiveviewIndex.

**Menu Event**

protected void Menu1_MenuItemClick(object sender, MenuEventArgs e)

{

int index = Int32.Parse(e.Item.Value);

MultiView1.ActiveViewIndex = index;

}

Demo different types of filters. Search Techniques document. Relate to course
project.

**Using SQL Views**

There are times when your application may not need the complete entity class
definition or the returned data does not match the entity class definition. Sql
views are popular way of exposing data to a user so they are not directly
touching the sql table. You can create a class that models the data returned by
a View. This class will NOT have a DbSet() in the context class. It CAN be used
as the datatype for a \<T\> collection.

This page has 2 Views:

EmployeeOfTerritory (demo page DrillDown)

//this is not a database table (entity)

//this is a definition of a database view, DO NOT create a DbSet\<\> for this
class

public class EmployeeOfTerritory

{

public string TerritoryID { get; set; }

public int EmployeeID { get; set; }

public string FirstName { get; set; }

public string LastName { get; set; }

public string Address { get; set; }

public string City { get; set; }

public string PostalCode { get; set; }

public string HomePhone { get; set; }

public string Extension { get; set; }

[NotMapped]

public string FullName

{

get

{

return LastName + ", " + FirstName;

}

}

}

SupplierCategories (Exercise view).

public class SupplierCategories

{

public int CategoryID {get;set;}

public string CategoryName { get; set; }

}

**Exercise View**

This is for the student to do as a class exercise. It is not for marks.

Solution:

\<asp:View ID="View5" runat="server"\>

\<fieldset class="form-horizontal"\>

\<legend\>Filter Queries: Exercise\</legend\>

\<blockquote style="font-size:x-large"\>

For this exercise (not for marks) you are to retrieve the products

from a supplier's category and display the product(s) records. You need to

create the necessary controller methods, design your form, and implement

the necessary code-behind. The following resources are available for this  
exercise:

\<ul\>

\<li\>Sql procedure \<strong\> Suppliers_GetCategories\</strong\>: returns the  
supplier's categories\</li\>

\<li\>Sql procedure \<strong\>Products_GetForSupplierCategory\</strong\>:
returns  
products for a supplier category\</li\>

\<li\>Entities and Views: \<strong\>Product, Supplier, SupplierCategories  
\</strong\>\</li\>

\</ul\>

\</blockquote\>

\<asp:Label ID="Label7" runat="server" Text="Supplier:"\>\</asp:Label\>

\<asp:DropDownList ID="SupplierListV5" runat="server"\>\</asp:DropDownList\>

\<asp:Button ID="FindCategories" runat="server" Text="Categories?"  
OnClick="FindCategories_Click" /\>

\<asp:Label ID="label8" runat="server" Text="Categories:"\>\</asp:Label\>

\<asp:DropDownList ID="CategoryListV5" runat="server"\>\</asp:DropDownList\>

\<asp:Button ID="FindSupplierCategoryProducts" runat="server" Text="Products?"

OnClick="FindSupplierCategoryProducts_Click" Enabled="false" /\>

\<asp:Button ID="Reset" runat="server" Text="Reset" OnClick="Reset_Click" /\>

\<br /\>

\<br /\>

\<asp:GridView ID="ProductsGridViewV5" runat="server"\>

\</asp:GridView\>

\</fieldset\>

\</asp:View\>

protected void FindCategories_Click(object sender, EventArgs e)

{

if (SupplierListV5.SelectedIndex == 0)

{

errormsgs.Add("Select a supplier to obtain their categories.");

LoadMessageDisplay(errormsgs, "alert alert-info");

CategoryListV5.Items.Clear();

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

}

else

{

try

{

SupplierController sysmgr = new SupplierController();

List\<SupplierCategories\> info =  
sysmgr.Suppliers_GetCategories(int.Parse(SupplierListV5.SelectedValue));

if (info.Count == 0)

{

errormsgs.Add("No category data found for the supplier");

LoadMessageDisplay(errormsgs, "alert alert-info");

CategoryListV5.Items.Clear();

CategoryListV5.DataBind();

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

}

else

{

info.Sort((x, y) =\> x.CategoryName.CompareTo(y.CategoryName));

>   //Second Dropdown list drill down

CategoryListV5.DataSource = info;

CategoryListV5.DataTextField = nameof(SupplierCategories.CategoryName);

CategoryListV5.DataValueField = nameof(SupplierCategories.CategoryID);

CategoryListV5.DataBind();

CategoryListV5.Items.Insert(0, "select....");

//GridView

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

SupplierListV5.Enabled = false;

FindSupplierCategoryProducts.Enabled = true;

}

}

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

}

}

protected void FindSupplierCategoryProducts_Click(object sender, EventArgs e)

{

if (CategoryListV5.SelectedIndex == 0)

{

errormsgs.Add("Select a category to view the supplier's category products.");

LoadMessageDisplay(errormsgs, "alert alert-info");

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

}

else

{

try

{

ProductController sysmgr = new ProductController();

List\<Product\> info = sysmgr.Products_GetForSupplierCategory(

int.Parse(SupplierListV5.SelectedValue),

int.Parse(CategoryListV5.SelectedValue));

if (info.Count == 0)

{

errormsgs.Add("No data found for the supplier's category");

LoadMessageDisplay(errormsgs, "alert alert-info");

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

}

else

{

info.Sort((x, y) =\> x.ProductName.CompareTo(y.ProductName));

//GridView

ProductsGridViewV5.DataSource = info;

ProductsGridViewV5.DataBind();

}

}

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

}

}

protected void Reset_Click(object sender, EventArgs e)

{

SupplierListV5.Enabled = true;

CategoryListV5.Items.Clear();

FindSupplierCategoryProducts.Enabled = false;

//GridView

ProductsGridViewV5.DataSource = null;

ProductsGridViewV5.DataBind();

}

SupplierController

public List\<SupplierCategories\> Suppliers_GetCategories(int suppilerid)

{

using (var context = new NorthwindContext())

{

IEnumerable\<SupplierCategories\> results =  
context.Database.SqlQuery\<SupplierCategories\>(  
"Suppliers_GetCategories \@SupplierID",

new SqlParameter("SupplierID", suppilerid));

return results.ToList();

}

}

ProductController

public List\<Product\> Products_GetForSupplierCategory(int supplierid, int
categoryid)

{

using (var context = new NorthwindContext())

{

IEnumerable\<Product\> results =

context.Database.SqlQuery\<Product\>(  
"Products_GetForSupplierCategory \@SupplierID, \@CategoryID",

new SqlParameter("SupplierID", supplierid),

new SqlParameter("CategoryID", categoryid));

return results.ToList();

}

}
