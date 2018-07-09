

Using DataBound Controls (Tutorial 7 of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
Using Data Bound Controls	2

Detailed Contents
Introduction	1
Using Data Bound Controls	2
Setup	2
Part 1 – Prepare the BLL with ComponentModel Attributes	2
Part 2 – Data-Bound GridView	6
Create the Form	6
Part 3 – Data-Bound DropDown and GridView	22
Hooking Up the DropDownList	22
Hooking Up the GridView	25
Making the Form User Friendly	27
Part 4 – TextBox and Data-Bound GridView	34
Summary	36
Discussion Points	36

Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
Using Data Bound Controls
•	Estimated time: 15-30 minutes.
•	Parts:
1)	Part 1 – Prepare the BLL with ComponentModel Attributes
2)	Part 2 – Data-Bound GridView
ManageProducts
3)	Part 3 – Data-Bound DropDown and GridView
ViewProductsByCategory
4)	Part 4 – TextBox and Data-Bound GridView
ViewProductsByPartialNamePurpose
This hands-on tutorial walks through how to enable your Business Logic Layer to support integration with your Presentation Layer in a code-free (or code-light) way through the use of the ObjectDataSource control. The ObjectDataSource control acts as a “middle-man” in exchanging data between your BLL and various Data Bound controls, such as the GridView and DropDownList.
Setup
For this lab, you will need the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.
Part 1 – Prepare the BLL with ComponentModel Attributes
In order to simplify the setting up of data bound controls, we can add attributes to the BLL classes and methods that will allow them to be easily “discovered” by the ObjectDataSource controls in our forms. To do this, we will use the DataObject and DataObjectMethod attributes of the ComponentModel namespace.
1)	Go to the NorthwindSystem project and open the CategoryController.cs file. Add a using statement at the top of the file to import the System.ComponentModel namespace.
using System.ComponentModel;

2)	In order for these BLL methods to be visible to ObjectDataSource controls, we must first make the class visible by adding a DataObject attribute before the class declaration.
    [DataObject(true)]
    public class CategoryController

3)	Next, we add DataObjectMethod attributes to the public methods of the class. When adding these attributes, we declare the kind of service (from a CRUD point of view) that the method provides: Insert, Select, Update, or Delete. We will also indicate whether the method is the default for that particular service.
        [DataObjectMethod(DataObjectMethodType.Insert, true)]
        public int AddCategory(Category info)
        {
            return DataProvider.Add(info);
        }

        [DataObjectMethod(DataObjectMethodType.Select, true)]
        public List&lt;Category&gt; ListAllCategories()
        {
            List&lt;Category&gt; categoryList = DataProvider.List();
            return categoryList;
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public Category LookupCategory(int categoryId)
        {
            Category info = DataProvider.Lookup(categoryId);
            return info;
        }

        [DataObjectMethod(DataObjectMethodType.Update, true)]
        public int UpdateCategory(Category info)
        {
            return DataProvider.Update(info);
        }

        [DataObjectMethod(DataObjectMethodType.Delete, true)]
        public int DeleteCategory(int categoryId)
        {
            return DataProvider.Delete(categoryId);
        }

4)	Now open the ProductController class and perform the same kinds of modifications.
a.	Import the System.ComponentModel namespace.
using System.ComponentModel;

b.	Add the DataObject attribute to the class name.
    [DataObject(true)]
    public class ProductController

c.	Add DataObjectMethod attributes to the methods.
        [DataObjectMethod(DataObjectMethodType.Insert, true)]
        public int AddProduct(Product info)
        {
            return DataProvider.Add(info);
        }

        [DataObjectMethod(DataObjectMethodType.Select, true)]
        public List&lt;Product&gt; ListAllProducts()
        {
            List&lt;Product&gt; productList = DataProvider.List();
            return productList;
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public Product LookupProduct(int productId)
        {
            Product info = DataProvider.Lookup(productId);
            return info;
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public List&lt;Product&gt; LookupProductsByName(string partialName)
        {
            return DataProvider.LookupByProductName(partialName);
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public List&lt;Product&gt; LookupProductsByCategory(int? categoryId)
        {
            return DataProvider.LookupByCategory(categoryId);
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public List&lt;Product&gt; LookupProductsBySupplier(int? supplierId)
        {
            List&lt;Product&gt; productList = default(List&lt;Product&gt;);
            productList = DataProvider.LookupBySupplier(supplierId);
            return productList;
        }

        [DataObjectMethod(DataObjectMethodType.Update, true)]
        public int UpdateProduct(Product info)
        {
            return DataProvider.Update(info);
        }

        [DataObjectMethod(DataObjectMethodType.Delete, true)]
        public int DeleteProduct(int productId)
        {
            return DataProvider.Delete(productId);
        }
    }
}

5)	Once again, open another BLL class – SupplierController – and make the same kinds of modifications.
using System;
using System.Collections.Generic;
using NorthwindEntities;
using NorthwindSystem.DAL;
using System.ComponentModel;

namespace NorthwindSystem.BLL
{
    public class SupplierController
    {
        private SupplierProvider DataProvider { get; set; }

        public SupplierController()
        {
            DataProvider = new SupplierProvider();
        }

        [DataObjectMethod(DataObjectMethodType.Insert, true)]
        public int AddSupplier(Supplier info)
        {
            return DataProvider.Add(info);
        }

        [DataObjectMethod(DataObjectMethodType.Select, true)]
        public List&lt;Supplier&gt; ListAllSuppliers()
        {
            return DataProvider.List();
        }

        [DataObjectMethod(DataObjectMethodType.Select, false)]
        public Supplier LookupSupplier(int supplierId)
        {
            return DataProvider.Lookup(supplierId);
        }

        [DataObjectMethod(DataObjectMethodType.Update, true)]
        public int UpdateSupplier(Supplier info)
        {
            return DataProvider.Update(info);
        }

        [DataObjectMethod(DataObjectMethodType.Delete, true)]
        public int DeleteSupplier(int supplierId)
        {
            return DataProvider.Delete(supplierId);
        }
    }
}

6)	Lastly, it will be necessary to build the project (so that the web site gets a fresh copy of the class library DLL with these code changes). Now these BLL methods are prepared to be hooked up to the ObjectDataSource controls in the following parts of this tutorial.

Part 2 – Data-Bound GridView
Create the Form
1)	Create a folder under the Admin folder and name it “DataBound”. This is to help distinguish these tutorials, which work with data-bound controls, from earlier tutorials which primarily used code-behind to populate the form’s controls.

2)	In the Admin/DataBound folder of the web site, create a new web form called “ManageProducts.aspx”. At the top of the form, place an &lt;h1&gt; element with the text “Manage Products”.

3)	Add a GridView control and give it an ID of “ProductsGridView”. Add an ObjectDataSource control and name it ProductDataSource.

4)	Click the ProductDataSource’s smart tag and select “Configure Data Source”.

5)	Select the NorthwindSystem.BLL.ProductController as the Business Object in the first page of the wizard. Then click “Next”.

6)	In the “Define Data Methods” page of the wizard, choose ListAllProducts() as the SELECT method. Then click “Finish”.

7)	Click the GridView’s smart tag and select ProductDataSource from the “Choose Data Source” dropdown. Notice how the GridView automatically “discovers” the kind of data (Products) that is supplied by the ObjectDataSource control and then creates columns for each property of the Product class.


8)	Test the form in a browser window. All of the products should be laid out in a table.


The GridView’s Columns and Headings
1)	Return to the Design view of the form. Click the GridView’s smart tag and select “Edit Columns…”.

2)	In the Fields dialog, click on ProductID from the list of selected fields. Then change the Visible property to False.

3)	Click ProductName from the list of selected fields. Then, in the list of properties for this field, change the HeaderText to “Product Name”.

4)	Continue modifying the header text of the columns until your GridView looks a follows.

ObjectDataSource for Foreign Key Columns – Category and Supplier
1)	Add two more ObjectDataSource controls to the form. Name them CategoryDataSource and SupplierDataSource.

2)	Click the smart tag for the CategoryDataSource and click “Configure Data Source…”.

3)	Select the CategoryController as the business objects for the CategoryDataSource. Then click “Next”.

4)	Use the ListAllCategories() method as the SELECT method for the CategoryDataSource. Then click “Finish”.

5)	Click the smart tag for the SupplierDataSource and click “Configure Data Source…”.

6)	Select the SupplierController as the business object for the SupplierDataSource. Then click “Next”.

7)	Use the ListAllSuppliers() method as the SELECT method for the SupplierDataSource. Then click “Finish”.

Template Columns for Foreign Keys – CategoryID
1)	Once again, click the GridView’s smart tag and select “Edit Columns…”. This time, select the column for the Category and click the “Convert this field into a TemplateField” link.

2)	Select the Supplier column from the selected fields. Convert this field into a TemplateField as well. Then click OK.

3)	From the GridView’s smart tag, select “Edit Templates”.

4)	Then select the Item Template for the Category.

5)	Remove the Label control from the Item Template. Replace it with a DropDownList control and give that control an ID of CategoryItem.

6)	Click the smart tag of the DropDownList and select “Choose Data Source…”.

7)	In the Data Source Configuration Wizard, select the CategoryDataSource from the drop down. Then select “CategoryName” as the field to display and “CategoryID” as the field for the value of the DropDownList. Click OK.

8)	Again, from the smart tag of the DropDownList, click on “Edit DataBindings…”.

9)	For the SelectedValue property of the DropDownList, choose Field binding and have it bound to the CategoryID of the GridView’s data. This will allow the DropDownList control in the Category column of the GridView to synchronize its selected item with the actual category for each row in the GridView. Click OK when finished.

10)	In the Properties window for the DropDownList, set the AppendDataBoundItems to true. Also set the Enabled property to false and change the ForeColor to “Black”.

11)	Choose “Edit Items…” from the smart tag of the DropDownList.

12)	Add an item with a display text of “[no category]”. Click OK. Also, save the form at this step, because in the next step we will switch to the Source view, and we don’t want this manual item to be “lost”.

13)	Select the Source or Split view of the form. Go to the “[no category]” ListItem for this DropDownList and set the Value attribute to an empty string. We need an empty string value for any Products whose CategoryID property is null.
(Note that this change to the ListItem must actually be done in the source of the web form and not from the ListItem Collection Editor. That’s because if you try to simply empty the Value property in the ListItem Collection Editor, it will remove the Value attribute. This has a different effect from keeping the Value attribute and setting it to an empty string.)
                &lt;asp:TemplateField HeaderText="Category" SortExpression="CategoryID"&gt;
                    &lt;EditItemTemplate&gt;
                        &lt;asp:TextBox ID="TextBox1" runat="server" Text='&lt;%# Bind("CategoryID") %&gt;'&gt;
                        &lt;/asp:TextBox&gt;
                    &lt;/EditItemTemplate&gt;
                    &lt;ItemTemplate&gt;
                        &lt;asp:DropDownList ID="CategoryItem" runat="server"
                            AppendDataBoundItems="True"
                            DataSourceID="CategoryDataSource" DataTextField="CategoryName"
                            DataValueField="CategoryID" ForeColor="Black"
                            SelectedValue='&lt;%# Bind("CategoryID") %&gt;' Enabled="False"&gt;
                            &lt;asp:ListItem Value=""&gt;[no category]&lt;/asp:ListItem&gt;
                        &lt;/asp:DropDownList&gt;
                    &lt;/ItemTemplate&gt;
                &lt;/asp:TemplateField&gt;

14)	Test the form in the browser. Selecting a category of products should fill the GridView with data in a more readable format.

Template Columns for Foreign Keys - SupplierID
1)	Return to editing the templates of the GridView control. This time, edit the TemplateField for the Supplier information to replace the Label control with a DropDownList. Configure it just like the template field for categories, but hook this control up to the SupplierDataSource and bind it to the SupplierID of the GridView.

                &lt;asp:TemplateField HeaderText="Supplier" SortExpression="SupplierID"&gt;
                    &lt;EditItemTemplate&gt;
                        &lt;asp:TextBox ID="TextBox2" runat="server" Text='&lt;%# Bind("SupplierID") %&gt;'&gt;
                        &lt;/asp:TextBox&gt;
                    &lt;/EditItemTemplate&gt;
                    &lt;ItemTemplate&gt;
                        &lt;asp:DropDownList ID="SupplierItem" runat="server"
                            AppendDataBoundItems="True"
                            AutoPostBack="True" Enabled="False" ForeColor="Black"
                            SelectedValue='&lt;%# Bind("SupplierID") %&gt;'
                            DataSourceID="SupplierDataSource" DataTextField="CompanyName"
                            DataValueField="SupplierID"&gt;
                            &lt;asp:ListItem Value=""&gt;[no supplier]&lt;/asp:ListItem&gt;
                        &lt;/asp:DropDownList&gt;
                    &lt;/ItemTemplate&gt;
                &lt;/asp:TemplateField&gt;

2)	Test the form in the browser. Selecting a category of products should fill the GridView with data in a format that is more readable to the user.


Part 3 – Data-Bound DropDown and GridView
The goal of this part of the tutorial is to create the following web form that uses absolutely no code-behind. This is achieved through the use of Data Bound controls.

The steps in this part of the tutorial begin with hooking up an ObjectDataSource to a DropDownList that displays all the categories in the system. Next, another ObjectDataSource is configured and set to supply data to a GridView while responding to the user’s interactions with the DropDownList. Finally, the appearance of the GridView is customized to make it more user-friendly by editing the column headings and displaying meaningful information for properties representing database foreign keys.
Hooking Up the DropDownList
1)	In the Admin/DataBound folder of the web site, create a new web form called “ViewProductsByCategory.aspx”. Design the form to look like the following screen shot. Give the DropDownList an ID of CategoryDropDownList. Also add a LinkButton to the form.

2)	Add an ObjectDataSource controls to the form. Give it an ID of CategoryDataSource.

3)	Click the smart tag for the CategoryDataSource and select “Configure Data Source”. This will open a wizard control that will simplify hooking up this control to the Business Logic Layer of our application.

4)	In the “Choose a Business Object” page of the wizard, make sure the “Show only data components” check box is selected. Choose the NorthwindSystem.BLL.CategoryController class as the Business Object that will supply data for this control.  Then click “Next”.

5)	In the “Define Data Methods” page of the wizard, select the ListAllCategories() method as the SELECT method for the control. Then click “Finish”.

6)	In the design view of the form, click the smart tag of the DropDownList control and click “Choose Data Source…”. This will open the Data Source Configuration Wizard.

7)	In the wizard, look for the CategoryDataSource in the drop down under “Select a data source”. Then select “CategoryName” as the “data field to display in the DropDownList”. Select “CategoryID” as the “data field for the value of the DropDownList”. Then click OK.

8)	Test the form in the browser.

Hooking Up the GridView
1)	Return to the design view of the form. Add the GridView control and give it an ID of “ProductsGridView”. Add another ObjectDataSource control and name it ProductDataSource.

2)	Click the ProductDataSource’s smart tag and select “Configure Data Source”.

3)	Select the NorthwindSystem.BLL.ProductController as the Business Object in the first page of the wizard. Then click “Next”.

4)	In the “Define Data Methods” page of the wizard, choose LookupProductsByCategory() as the SELECT method. Then click “Next”.

5)	In the “Define Parameters” page of the wizard, we must identify the CategoryDropDownList as the control that supplies the value for the CategoryID parameter of the LookupProductsByCategory()method. Click “Finish”. This will allow the DropDownList to act as a “trigger” that will tell the ProductDataSource to supply new data to the GridView.

6)	Click the GridView’s smart tag and select the ProductDataSource in the “Choose Data Source” drop-down. Notice how the GridView automatically “discovers” the kind of data (Products) that is supplied by the ObjectDataSource control and then creates columns for each property of the Product class.

7)	Test the form in a browser window. When you select a category and click the LinkButton, the page will perform a post-back and the GridView will be refreshed with new data. Notice that there is no code-behind in the form to populate the DropDownList or the GridView. That is because the ObjectDataSource controls do all of that work for us.

Making the Form User Friendly
There are a number of things that can be done to make the form more user-friendly, including
•	Add “Select a Category” to the top of the DropDownList, to let the user know how to use the form
•	Change column headings in the GridView
•	Convert Foreign Key values/columns to DropDownLists (to show text instead of a number)
The DropDownList
1)	 Click the smart tag on the DropDownList for selecting a category, and click “Edit Items…”. This opens the ListItem Collection Editor, where we can manually add items to the DropDownList.

2)	Add a manual item with a display text of “[Select a category]” and a value of negative one (-1). Click OK.

3)	Set the AppendDataBoundItems property of the DropDownList to true.

The GridView’s Columns and Headings
1)	In the Design view of the form, click the GridView’s smart tag and select “Edit Columns…”.

2)	In the Fields dialog, click on CategoryID from the list of selected fields. Then click the Delete Column button.

3)	Click ProductID from the list of selected fields. Then, in the list of properties for this field, change the HeaderText to “ID”.

4)	Continue modifying the header text of the columns until your GridView looks a follows.

Empty Data Template
1)	Click “Edit Templates” in the GridView’s smart tag. This puts the GridView into Template Editing Mode.

2)	Choose the EmptyDataTemplate to edit and enter the text “There are no products for the selected category.”

Template Columns for Foreign Keys - SupplierID
1)	Once again, click the GridView’s smart tag and select “Edit Columns…”. This time, select the column for the Supplier and click the “Convert this field into a TemplateField” link.

2)	Add an ObjectDataSource control to the form and give it an ID of “SupplierDataSource”. Select “Configure Data Source” from the smart tag. This will open the Configure Data Source wizard.

3)	In the first step of the wizard, select NorthwindSystem.BLL.SupplierController as the business object. Then click “Next”.

4)	For the Select method, choose ListAllSuppliers(). Then click “Finish”.

5)	From the GridView’s smart tag, select “Edit Templates”. Then select the Item Template for the Supplier.

6)	Remove the Label control from the Item Template. Replace it with a DropDownList control and give that control an ID of SupplierItem.

7)	Click the smart tag of the DropDownList and select “Choose Data Source…”.

8)	In the Data Source Configuration Wizard, select the SupplierDataSource from the drop down. Then select “CompanyName” as the field to display and “SupplierID” as the field for the value of the DropDownList. Click OK.

9)	Again, from the smart tag of the DropDownList, click on “Edit DataBindings…”.

10)	For the SelectedValue property of the DropDownList, choose Field binding and have it bound to the SupplierID of the GridView’s data. This will allow the DropDownList control in the Supplier column of the GridView to synchronize its selected item with the actual supplier for each row in the GridView. Click OK when finished.

11)	Choose “Edit Items…” from the smart tag of the DropDownList.

12)	Add an item with a display text of “[no supplier]”. Click OK.

13)	Select the Source or Split view of the form. Go to the “[no supplier]” ListItem for this DropDownList and change the Value attribute to an empty string. We need an empty string value for any Products whose SupplierID property is null.
(Note that this change to the ListItem must actually be done in the source of the web form and not from the ListItem Collection Editor. That’s because if you try to simply empty the Value property in the ListItem Collection Editor, it will remove the Value attribute. This has a different effect from keeping the Value attribute and setting it to an empty string.)

14)	In the Properties window for the DropDownList, set the AppendDataBoundItems to true. Also set the Enabled property to false and change the ForeColor to “Black”.

15)	Test the form in the browser. Selecting a category of products should fill the GridView with data in a more readable format.

Part 4 – TextBox and Data-Bound GridView
This part of the tutorial walks through the steps to create a form that will look up Products based on a partial product name. Once again, there is no code-behind in the form to populate the GridView. That is because the ObjectDataSource controls do all of that work for us.
1)	In the Admin folder of the web site, create a new web form called “SearchProducts.aspx”. Design the form to look like the following screen shot. Give the TextBox an ID of “PartialProductName”. Also add a LinkButton to the form.

2)	Add an ObjectDataSource control to the form. Give it an ID of ProductDataSource.

3)	Click the smart tag for the ProductDataSource and select “Configure Data Source”. This will open a wizard control that will simplify hooking up this control to the Business Logic Layer of our application.
4)	In the “Choose a Business Object” page of the wizard, make sure the “Show only data components” check box is selected. Choose the NorthwindSystem.BLL.ProductController class as the Business Object that will supply data for this control.  Then click “Next”.

5)	In the “Define Data Methods” page of the wizard, select the LookupProductsByName() method as the SELECT method for the control. Then click “Next”.

6)	In the “Define Parameters” page of the wizard, we must identify the PartialProductName TextBox as the control that supplies the value for the partialName parameter of the LookupProductsByName() method. Click “Finish”.

7)	Add a GridView control and give it the ID “FoundProducts”. Click the GridView’s smart tag and select the ProductDataSource in the Choose Data Source drop-down.  The GridView will use that ObjectDataSource control to create columns for each property of the Product class.

8)	In the GridView’s smart tag click “Edit Columns…”. Modify the columns to modify headings and display only the columns shown in the screen shot.

9)	Edit the GridView’s EmptyDataTemplate to show the text “No Matching Products”.

10)	Test the form in a browser window. When you enter a partial product name and click the LinkButton, the page will perform a post-back and the GridView will be refreshed with new data.

Summary
In this hands-on tutorial, you discovered how through the use of the ObjectDataSource control, it is possible to display data in a form through GridView and DropDownList controls without needing any code-behind in the web form.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial
To Be Continued
•	Why we need to set Value=”” in the Source view of the form for ListItems in DropDownList controls (for null values).
•	Postback triggers the ObjectDataSource to repopulate the GridView (Parts 2, 3 and 4)
•

Using DataBound Controls (Tutorial 7b of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
Using Data Bound Controls	2

Detailed Contents
Introduction	1
Using Data Bound Controls	2
Purpose	2
Setup	2
Part 5 – Synchronizing Two GridViews	3
Part 6 – Enabling Paging in GridViews	4
Summary	4
Discussion Points	4


Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
Using Data Bound Controls
•	Estimated time: 15-30 minutes.
•	Bonus Parts:
o	Part 5 – Synchronizing Two GridViews
ViewCategoriesAndProducts
o	Part 6 – Enabling Paging in GridViews
ManageProducts
Purpose
This hands-on tutorial walks through how to further customize the display of data in GridView controls. Data is made available to the form through the use of ObjectDataSource controls. (The ObjectDataSource control acts as a “middle-man” in exchanging data between your BLL and various Data Bound controls, such as the GridView and DropDownList.)
Setup
For this lab, you will need the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.
Part 5 – Synchronizing Two GridViews
This part of the tutorial walks through the steps to create a form that will look up Products by Supplier. Suppier information will be displayed in a GridView; selecting a row in the Supplier GridView will trigger the Products GridView to show all the products provided through that supplier. Once again, there is no code-behind in the form to populate the GridViews.
Sketch of Form
1)	In the Admin folder of the web site, create a new web form called “”. Design the form to look like the following screen shot. Add two GridView controls; give the top GridView an ID of “” and the bottom an ID of “”.
form
2)	Add two ObjectDataSource controls to the form. Give them the IDs of ProductDataSource and SupplierDataSource.
Form
3)	Configure the SupplierDataSource to use the NorthwindSystem.BLL.SupplierController class as the Business Object that will supply data for this control.  Then click “Next”.
wizard
4)	In the “Define Data Methods” page of the wizard, select the ListAllSuppliers() method as the SELECT method for the control. Then click “Finish”.
wizard
5)	Set the SupplierDataSource as the data source for the ??? GridView.
dialog/smart tag
6)	In the smart tag of the ??? GridView, check on the Enable Select checkbox.
Smart tag
7)	Configure the ProductDataSource to use the NorthwindSystem.BLL.ProductController class as the Business Object that will supply data for this control.  Then click “Next”.
wizard
8)	In the “Define Data Methods” page of the wizard, select the LookupBySupplier() method as the SELECT method for the control. On the next page, set the ??? GridView as the control which identifies which supplier the user has selected.
wizard
9)	In the ??? page of the wizard, we must identify the ??_?? TextBox as the control that supplies the value for the CategoryID parameter of the LookupBySupplier () method. Also set a default value of zero (0), which will be needed when the page is first loaded. Click “Finish”.
wizard
10)	Set the ProductDataSource as the data source for the ??? GridView.
dialog/smart tag
11)	Through the ??? GridView’s smart tag, edit the EmptyDataTemplate to state that “There are no products for the selected supplier.”
form w. SmartTag
12)	Edit the columns for both GridViews to match the headings/styles of the screen shot below.
form
13)	Test the form in a browser window. When you click the “Select” link beside any given supplier, the page will perform a post-back and the related products will be displayed in the second GridView.
browser
Part 6 – Enabling Paging in GridViews
1)	In the web site, open the “” web form. On the smart tag for the ??? GridView, click on “Enable Paging”.
web form and smart tag
2)	Test the form in the browser. Try navigating from one page of Product data to another.
browser
3)	In the web site, open the “” web form. Enable paging for the GridView on this form as well. Test this form in a browser as well.
web form
Summary
In this hands-on tutorial, you SUMMARY.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial
•	Why we need to set Value=”” in the Source view of the form for ListItems in DropDownList controls (for null values).
•	Postback triggers the ObjectDataSource to repopulate the GridView (Parts 2, 3 and 4)
•

