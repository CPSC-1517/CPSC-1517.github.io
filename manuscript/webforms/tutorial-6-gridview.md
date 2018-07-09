

Displaying Multiple Items in a GridView (Tutorial 6 of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
Displaying Multiple Items in a GridView	2

Detailed Contents
Introduction	1
Displaying Multiple Items in a GridView	2
Purpose	2
Setup	2
Part 1 – DropDownList Selection with GridView Results	2
Lookup Products by Category.	2
Part 2 – TextBox Search with GridView Results	5
Lookup Products by Partial Product Name	5
On Your Own	6
Summary	7
Discussion Points	7


Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
Displaying Multiple Items in a GridView
•	Estimated time: 15-30 minutes.
•	Parts:
1)	Part 1 – DropDownList Selection with GridView Results –
This part of the tutorial demonstrates displaying multiple items using a GridView control, with a DropDown to “filter” the results.
2)	Part 2 – TextBox Search with GridView Results –
This part of the tutorial demonstrates searching items in a database to produce a list of items that can be displayed in a GridView.
Purpose
This hands-on tutorial will walk through the creation of a number of forms involving the GridView control.
Setup
For this lab, you will need the Visual Studio solution and database from the previous topics(s). The Starter Kit folder contains these resources.
Part 1 – DropDownList Selection with GridView Results
The following steps demonstrate how to display many items (rows of data) using a GridView. These samples provide sub-sets of Products using different “filters”.
•	Products by Category – Each Category may be applied to one or more products. This form presents a drop-down list of Categories and allows a user to select a specific category and look up which Products fall under that category. The resulting list of Products is displayed in the GridView.
•	Products by Partial Name – Another way to “filter” the list of products is to search by a partial product name. For example, the user may enter the text “Mix” to find all products that have that text as part of their product name.
Lookup Products by Category.
1)	In the DAL folder of the NorthwindSystem project, open the ProductProvider.cs file and add the following method.
        public List&lt;Product&gt; LookupByCategory(int? categoryId)
        {
            return FillList(DataStore.ExecuteReader("Products_GetByCategories", categoryId));
        }

2)	In the BLL folder, open the ProductController.cs file and add the following method.
        public List&lt;Product&gt; LookupProductsByCategory(int? categoryId)
        {
            return DataProvider.LookupByCategory(categoryId);
        }

3)	In the Admin folder create a folder called GridView. We will use this folder for organizational purposes only; the intent is to make it easier to distinguish it from the previous tutorials.

4)	Inside the Admin/GridView folder, create a new web form called “ProductsByCategory.aspx”. Design the form to look like the following screen shot. Use “CategoryDropDownList” as the ID for the DropDownList and “ProductsGridView” as the ID for the GridView. For the LinkButton control, use an ID of “ShowProducts”. Use “MessageLabel” as the ID for the label control.

5)	Click the smart tag for the GridView and select “Edit Templates” to edit the EmptyDataTemplate. The EmptyDataTemplate will be used to inform the user that there are no products for the selected category. When you are done, click “End Template Editing”.

6)	Create an event handler for the Load event of the form. In that event handler, enter the following code to populate the DropDownList with Category information.
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                CategoryController controller = new CategoryController();
                List&lt;Category&gt; categories = controller.ListAllCategories();
                CategoryDropDownList.DataSource = categories;
                CategoryDropDownList.DataTextField = "CategoryName";
                CategoryDropDownList.DataValueField = "CategoryID";
                CategoryDropDownList.DataBind();
                CategoryDropDownList.Items.Insert(0, "[select a category]");
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }

7)	Create an event handler for the ShowProducts button. In that event handler, enter the following code to lookup products by category.
    protected void ShowProducts_Click(object sender, EventArgs e)
    {
        if (CategoryDropDownList.SelectedIndex == 0)
        {
            MessageLabel.Text = "Please select a category before clicking 'Show Products'.";
        }
        else
        {
            try
            {
                int categoryID = int.Parse(CategoryDropDownList.SelectedValue);
                ProductController controller = new ProductController();
                List&lt;Product&gt; products = controller.LookupProductsByCategory(categoryID);
                ProductsGridView.DataSource = products;
                ProductsGridView.DataBind();
                MessageLabel.Text = "Results for products by " + CategoryDropDownList.SelectedItem.Text;
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }

8)	Test the form in your browser. When you look up the products for a specific category, you should see a set of products in the GridView.

9)	Since each Product can have a null value for its CategoryID property, it’s possible that some products exist without a category. It would make sense to extend the capability of the form to lookup products without a category. To do this, make the following changes and then test the form in your browser.
a.	Modify the Page_Load() method to append another item to the CategoryDropDownList.
                CategoryDropDownList.Items.Insert(0, "[select a category]");
                CategoryDropDownList.Items.Insert(1, "[no category]");

b.	Modify the Click event handler for ShowProducts to treat the “[no category]” option as a null value.
                int? categoryID;
                if (CategoryDropDownList.SelectedIndex == 1)
                    categoryID = null;
                else
                    categoryID = int.Parse(CategoryDropDownList.SelectedValue);

Part 2 – TextBox Search with GridView Results
Lookup Products by Partial Product Name
1)	In the DAL folder of the NorthwindSystem project, open the ProductProvider.cs file and add the following method.
        public List&lt;Product&gt; LookupByProductName(string partialName)
        {
            return FillList(DataStore.ExecuteReader("Products_GetByPartialProductName",
                                                    partialName));
        }

2)	In the BLL folder, open the ProductController.cs file and add the following method.
        public List&lt;Product&gt; LookupProductsByName(string partialName)
        {
            return DataProvider.LookupByProductName(partialName);
        }

3)	In the Admin/GridView folder, create a new web form called “ProductsByPartialName.aspx”. Design the form to look like the following screen shot. Use “PartialProductName” as the ID for the TextBox control and “ProductsGridView” as the ID for the GridView. For the LinkButton control, use an ID of “ShowProducts”.

4)	Click the smart tag for the GridView and select “Edit Templates” to edit the EmptyDataTemplate. The EmptyDataTemplate will be used to inform the user that there are no products for the selected category.

5)	Create an event handler for the ShowProducts button. In that event handler, enter the following code to lookup products by partial product name.
    protected void ShowProducts_Click(object sender, EventArgs e)
    {
        try
        {
            ProductController controller = new ProductController();
            List&lt;Product&gt; results = controller.LookupProductsByName(PartialProductName.Text);
            ProductsGridView.DataSource = results;
            ProductsGridView.DataBind();
            MessageLabel.Text = "Results matching the partial name '"
                              + PartialProductName.Text + "'.";
        }
        catch (Exception ex)
        {
            MessageLabel.Text = ex.Message;
        }
    }

6)	Test the form. When you enter part or all of a product’s name, the results should be displayed in the GridView.


On Your Own
Create a number of forms to display information in a GridView.
•	Lookup Products by Supplier – This form should have a drop down list of Suppliers and allow the user to select a supplier and then see which products are purchased from that supplier.
•	Search suppliers – this form should allow the user to view  a list of Suppliers using various search criteria:
1)	Show All Suppliers – Display all the suppliers.
2)	Search by Partial Company Name – List Suppliers based on the user entering part of the company name.
3)	Search by Partial Contact Name – The user may enter part of the name of the contact person for the Supplier.
Summary
In this hands-on tutorial, you explored various ways to filter/search rows of information in a database. You also displayed the information in a GridView.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial.
To Be Continued
