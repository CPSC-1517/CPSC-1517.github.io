# Displaying Data (Beta) - Part 3 of 9

This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.

There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.


## Displaying Data (Beta)

*   Estimated time: 40 minutes.
*   Parts:
    1.  **Coding the DAL and BLL for Reading from the Database**  
        This step focuses on creating the DAL and BLL for database read operations. Each DAL class will initially have two read methods: one for looking up a single item and another for getting a list of items. The BLL class, which acts as the public access point to the system, will provide accompanying methods for the two DAL methods.
    2.  **Displaying Data in a Web Form**  
        This part of the tutorial focuses on building web forms to display a single row of data from the database.
    3.  **(Advanced) Displaying Data and Images in a Web Form**  
        This part of the tutorial focuses on retrieving images from a database for display on a web form.

---

### Purpose

This hands-on tutorial walks through the steps to display a single row of data from a database table in a web form.

The general steps required to create a form to display a row of data are as follows:

1.  **Create the needed DAL methods** – In the provider class for the table you wish to display, create two methods: one to get a single row from the table and another to get all the rows from the table. (You may need to create similar methods in provider classes for related tables as well.)
2.  **Create the BLL classes & methods** – Create a controller class for the table you wish to display. This class becomes the public interface for the presentation layer (web form) to request data from the system. In this class, create methods that correspond to the DAL methods to get a single item and all the items from a table.
3.  **Create the Web Form** – Create a web form to display the data to the user. This form should have a means to look up a specific row of data from the table.

### Setup

For this lab, you will need the Visual Studio solution and database from the previous topic(s). In addition, the CBO and BLL/DAL classes for the Suppliers table will be required to show the related Supplier information for the “Add/Edit Product” form. The Starter Kit folder contains the following files related to the Suppliers table: Supplier.cs, SupplierProvider.cs and SupplierController.cs.

### Part 1 – Coding the DAL and BLL for Reading

This step focuses on creating the DAL and BLL for database read operations. Each DAL class will initially have two read methods: one for looking up a single item and another for getting a list of items. The BLL class, which acts as the public access point to the system, will provide accompanying methods for calling the two DAL methods.

1.  In the DAL folder of the NorthwindSystem project, open the CategoryProvider.cs file and add the following methods to read data from the database. You will need to make sure that the System.Collections.Generic namespace is imported in order to return a List<Category> from the List() method.

```csharp
    public Category Lookup(int CategoryID)
    {
        return FillObject(DataStore.ExecuteReader("Categories_Get", CategoryID));
    }
    public List<Category> List()
    {
        return FillList(DataStore.ExecuteReader("Categories_List"));
    }
```

2.  Open the ProductProvider.cs file and add these methods to read data from the Products table in the database. Once again, you will need to make sure that the System.Collections.Generic namespace is imported at the top of the source code.

```csharp
    public Product Lookup(int ProductID)
    {
        return FillObject(DataStore.ExecuteReader("Products_Get", ProductID));
    }
    public List<Product> List()
    {
        return FillList(DataStore.ExecuteReader("Products_List"));
    }
```

3.  In the NorthwindSystem project, add a folder called “BLL” and then create a class called CategoryController. In that class, add methods to call the DAL for reading Category information.

```csharp
using System;
using System.Collections.Generic;
using NorthwindEntities;
using NorthwindSystem.DAL;
namespace NorthwindSystem.BLL
{
    public class CategoryController
    {
        #region Data Provider Instance
        private CategoryProvider DataProvider { get; set; }
        #endregion
        #region Constructor
        public CategoryController()
        {
            DataProvider = new CategoryProvider();
        }
        #endregion
        #region "Read"
        public List<Category> ListAllCategories()
        {
            List<Category> categoryList = DataProvider.List();
            return categoryList;
        }
        public Category LookupCategory(int categoryId)
        {
            Category info = DataProvider.Lookup(categoryId);
            return info;
        }
        #endregion
    }
}
```

4.  Create another class in the BLL folder, this time naming it ProductController. This method will allow users of the system to get information from the Products table in the database.

```csharp
using System;
using System.Collections.Generic;
using NorthwindEntities;
using NorthwindSystem.DAL;
namespace NorthwindSystem.BLL
{
    public class ProductController
    {
        #region Data Provider Instance
        private ProductProvider DataProvider { get; set; }
        #endregion
        #region Constructor
        public ProductController()
        {
            DataProvider = new ProductProvider();
        }
        #endregion
        #region "Read"
        public List<Product> ListAllProducts()
        {
            List<Product> productList = DataProvider.List();
            return productList;
        }
        public Product LookupProduct(int productId)
        {
            Product info = DataProvider.Lookup(productId);
            return info;
        }
    }
}
```

### Part 2 – Displaying Data in a Web Form

The web forms developed in this and the following two tutorials will allow a user to Insert, Update and Delete as well as View a row of data from a database table. Therefore, the design of these forms will use various ASP.NET controls that allow for user input.

In this part, we will develop the web forms in stages. The following is a sketch of the form’s final design.

> **TODO:** Add image

First, we will add a drop-down list and a button control to give the user the ability to select a single item to display; the Page.Load event handler will be responsible for populating the drop-down list. Then we will add various other controls to the form and write the code-behind that looks up the detailed information for the item selected by the user.

1.  Add a folder to the Web Site and name it “Admin”. Then add a web form (.aspx) to the folder and name it “AddEditProduct.aspx”.

2.  On the form, add an H1 title for the page with the text “Add/Edit Product”. Below that heading tag, add a Label control and give it an ID of “MessageLabel”; be sure to remove the Text of the label control. The MessageLabel will be used to give feedback to the user as they interact with the form.

3.  Below the MessageLabel, add a simple table with one row of three cells by clicking the Table menu and selecting Add Table.

4.  In the first cell of the table, type the text “Current Products”. In the second cell, place a DropDownList with an ID of “CurrentProducts”. In the third cell, place a LinkButton with the text “Show Product Details” and an ID of “ShowProductDetails”.

5.  Double-click a blank area of the form to bring up the code-behind event handler for the Page.Load event. In the Page_Load method, enter the following code to populate the DropDownList with all of the products in the database. Notice that after populating the DropDownList with the product data, we are manually adding a single item to the top of the list – “[select a product]” – as some instructions for the user.

```csharp
public partial class Admin_AddEditProduct : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            ProductController controller = new ProductController();
            List<Product> products = controller.ListAllProducts();
            CurrentProducts.DataSource = products;
            CurrentProducts.DataTextField = "ProductName";
            CurrentProducts.DataValueField = "ProductID";
            CurrentProducts.DataBind();
            CurrentProducts.Items.Insert(0, "[select a product]");
        }
    } // end of Page_Load
}
```

6.  Test the form. When you view the form in the browser, you should see the following.

7.  Below the first table, add an H2 heading with the text “Product Details”. Below this heading, add another table with two columns and ten rows. The left column will hold text to identify the data in the second column. The second column will hold text boxes to display the Product’s data. The TextBox controls will be useful in the next tutorial when we make it possible to add new products to the database.(Later in this tutorial, we will swap out some of these text boxes for more appropriate controls, such as the CheckBox and the DropDownList.)

8.  Double-click the ShowProductDetails button to create the event handler in the form’s code-behind. In that event handler, write the following code to perform a lookup of the form’s data. For the moment, simply display the product’s ID and name. Note the use of exception handling to display any error messages that might occur with the lookup.

```csharp
    protected void ShowProductDetails_Click(object sender, EventArgs e)
    {
        try
        {
            // Lookup the Product object
            ProductController controller = new ProductController();
            int showID = int.Parse(CurrentProducts.SelectedValue);
            Product info = controller.LookupProduct(showID);
            // Display the Product details
            ProductID.Text = info.ProductID.ToString();
            ProductName.Text = info.ProductName;
        }
        catch (Exception ex)
        {
            MessageLabel.Text = ex.Message;
        }
    }
```

9.  Test the form. When you select an item in the drop-down, the lookup should work correctly, as in the following screenshot.

10.  Return to the code for the button’s click event and make the following changes to display the rest of the form’s data.

```csharp
    protected void ShowProductDetails_Click(object sender, EventArgs e)
    {
        try
        {
            // Lookup the Product object
            ProductController controller = new ProductController();
            int showID = int.Parse(CurrentProducts.SelectedValue);
            Product info = controller.LookupProduct(showID);
            // Display the Product details
            ProductID.Text = info.ProductID.ToString();
            ProductName.Text = info.ProductName;
            Supplier.Text = info.SupplierID.ToString();
            Category.Text = info.CategoryID.ToString();
            QtyPerUnit.Text = info.QuantityPerUnit;
            UnitPrice.Text = info.UnitPrice.ToString();
            InStock.Text = info.UnitsInStock.ToString();
            OnOrder.Text = info.UnitsOnOrder.ToString();
            ReorderLevel.Text = info.ReorderLevel.ToString();
            Discontinued.Text = info.Discontinued.ToString();
        }
        catch (Exception ex)
        {
            MessageLabel.Text = ex.Message;
        }
    }
```

11.  Test the form again. Your results should be similar to the following. Notice that for nullable properties of the Product class, such as the UnitPrice, the use of the .ToString() method simply displays empty text if that particular product has a null value.

12.  Return to the code-behind and add some simple validation. Since the first item in the DropDownList is simply meant to serve as instructions to the user, we will make sure that the user selects something other than this first item before they press the button.

```csharp
    protected void ShowProductDetails_Click(object sender, EventArgs e)
    {
        if (CurrentProducts.SelectedIndex == 0)
        {
            MessageLabel.Text = "Select a product before clicking 'Show Product Details'";
        }
        else
        {
            try
            {
                // Lookup the Product object
                ProductController controller = new ProductController();
                int showID = int.Parse(CurrentProducts.SelectedValue);
                Product info = controller.LookupProduct(showID);
                // Display the Product details
                ProductID.Text = info.ProductID.ToString();
                ProductName.Text = info.ProductName;
                Supplier.Text = info.SupplierID.ToString();
                Category.Text = info.CategoryID.ToString();
                QtyPerUnit.Text = info.QuantityPerUnit;
                UnitPrice.Text = info.UnitPrice.ToString();
                InStock.Text = info.UnitsInStock.ToString();
                OnOrder.Text = info.UnitsOnOrder.ToString();
                ReorderLevel.Text = info.ReorderLevel.ToString();
                Discontinued.Text = info.Discontinued.ToString();
                MessageLabel.Text = "Product details found.";
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }
```

13.  Again, test the form in your browser. Attempting to do a lookup of the drop-down’s first item (which is not a real product) should produce an error message in the browser.

14.  Now it is time to finalize the display of the product information. Since we have Category and Supplier information, swap out their TextBox controls for DropDownList controls. Likewise, the TextBox for the product’s Discontinued property should be swapped out for a CheckBox control. While we’re at it, let’s change out the ProductID TextBox for a Label control (because the ProductID for any given product will never be changed). When swapping out these controls, make sure to apply the old control’s (ID) names to the new controls. Here are the changes to the form’s design view and the code-behind.

15.  Since there are now three DropDownList controls on the form, all of these have to be populated when the Load event runs for the page. Make the following modifications to the Page_Load method; to simplify the method, the actual populating of the drop-down controls is placed in separate methods (one per drop-down). Also note the use of the try/catch to handle any errors in initializing the form’s controls.

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                PopulateCurrentProductsDropdown();
                PopulateSuppliersDropdown();
                PopulateCategoriesDropdown();
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    } // end of Page_Load
    private void PopulateCurrentProductsDropdown()
    {
        // Populate CurrentProducts drop-down
        ProductController controller = new ProductController();
        List<Product> products = controller.ListAllProducts();
        CurrentProducts.DataSource = products;
        CurrentProducts.DataTextField = "ProductName";
        CurrentProducts.DataValueField = "ProductID";
        CurrentProducts.DataBind();
        CurrentProducts.Items.Insert(0, "[select a product]");
    }
    private void PopulateSuppliersDropdown()
    {
        // Populate Supplier drop-down
        SupplierController controller = new SupplierController();
        List<Supplier> Suppliers = controller.ListAllSuppliers();
        this.Supplier.DataSource = Suppliers;
        this.Supplier.DataTextField = "CompanyName";
        this.Supplier.DataValueField = "SupplierID";
        this.Supplier.DataBind();
        this.Supplier.Items.Insert(0, new ListItem("[no supplier]", ""));
    }
    private void PopulateCategoriesDropdown()
    {
        // Populate Category drop-down
        CategoryController controller = new CategoryController();
        List<Category> categories = controller.ListAllCategories();
        this.Category.DataSource = categories;
        this.Category.DataTextField = "CategoryName";
        this.Category.DataValueField = "CategoryID";
        this.Category.DataBind();
        this.Category.Items.Insert(0, new ListItem("[no category]", ""));
    }
```

16.  Finally, the Click event for the button will need a slight modification, to accommodate the changes to the types of controls that are used for displaying the Product details. The one change in this method is the setting of the CheckBox control.

```csharp
    Discontinued.Checked = info.Discontinued;
```

17.  It’s time for one final check of the form. View the form in the browser and test the full range of functionality of the form.

### Part 3 – (Advanced) Displaying Data and Images in a Web Form

In this part of the tutorial, you will create a form to display Category information to the user. The Categories table includes a Picture column which is an image of the category. The form you will create will include an Image control to display this information.

#### The Category Form

1.  In the web site’s Admin folder, add a new web form and name it “AddEditCategory.aspx”.

2.  On the form, add an H1 title for the page with the text “Add/Edit Category”. Below that heading tag, add a Label control and give it an ID of “MessageLabel”; be sure to remove the Text of the label control. The MessageLabel will be used to give feedback to the user as they interact with the form.

3.  Below the MessageLabel, add a simple table with one row of three cells by clicking the Table menu and selecting Add Table.

4.  In the first cell of the table, type the text “Current Categories”. In the second cell, place a DropDownList with an ID of “CurrentCategories”. In the third cell, place a LinkButton with the text “Show category details” and an ID of “ShowCategoryDetails”.

5.  Double-click a blank area of the form to bring up the code-behind event handler for the Page.Load event. In the Page_Load method, enter the following code to populate the DropDownList with all of the categories in the database. Notice that after populating the DropDownList with the category data, we are manually adding a single item to the top of the list – “[select a category]” – as some instructions for the user.

```csharp
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                // Populate Category drop-down
                CategoryController controller = new CategoryController();
                List<Category> categories = controller.ListAllCategories();
                CurrentCategories.DataSource = categories;
                CurrentCategories.DataTextField = "CategoryName";
                CurrentCategories.DataValueField = "CategoryID";
                CurrentCategories.DataBind();
                CurrentCategories.Items.Insert(0, "[select a category]");
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }
```

6.  Test the form. When you view the form in the browser, you should see the following.

7.  Below the first table, add an H2 heading with the text “Category Details”. Below this heading, add another table with two columns and four rows. The left column will hold text to identify the data in the second column. The second column will hold text boxes to display the Category’s data (except for the Picture property). (Later in this tutorial, we will display the image using the ASP.NET Image control.)

8.  Double-click the ShowCategoryDetails button to create the event handler in the form’s code-behind. In that event handler, write the following code to perform a lookup of the form’s data. Display the category’s ID, name and description. Note the use of exception handling to display any error messages that might occur with the lookup.

```csharp
    protected void ShowCategoryDetails_Click(object sender, EventArgs e)
    {
        if (CurrentCategories.SelectedIndex == 0)
        {
            MessageLabel.Text = "Select a category before clicking 'Show Category Details'";
        }
        else
        {
            try
            {
                CategoryController controller = new CategoryController();
                int showID = int.Parse(CurrentCategories.SelectedValue);
                Category info = controller.LookupCategory(showID);
                CategoryID.Text = info.CategoryID.ToString();
                CategoryName.Text = info.CategoryName;
                Description.Text = info.Description;
                // TODO: Add code to show the category's picture
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }
```

9.  Test the form. When you select an item in the drop-down, the lookup should work correctly, as in the following screenshot.

### Crafting an Image Handler

Since the picture for the Category object is actually stored in the database, rather than on the web server’s file directory, the picture must be retrieved through a special web page called an HTTP Handler.

This handler will be designed to receive the ID of the Category object, perform a lookup of the picture in the database, and return the image to the browser. The Category ID will be supplied as a parameter query on the URL that calls the handler, as shown in this screen shot.

1.  In the “Handlers” folder of the website, add a new item – a Generic Handler – and name it “ImageHandler.ashx”.

2.  The method that handles the request for the picture is called ProcessRequest. To process the request for the image, the method will first attempt to extract the CategoryID from the query string. Then, the method will look up the category in the database and copy the Picture property to a System.IO.MemoryStream object. Then the entire stream is written to the output stream of the Response object.

```csharp
<%@ WebHandler Language="C#" Class="ImageHandler" %>
using System;
using System.Web;
using System.IO;
using NorthwindEntities;
using NorthwindSystem.BLL;
public class ImageHandler : IHttpHandler
{
    public void ProcessRequest(HttpContext context)
    {
        int categoryId;
        if (int.TryParse(context.Request.Params["CategoryID"], out categoryId))
        {
            CategoryController controller = new CategoryController();
            Category info = controller.LookupCategory(categoryId);
            if (info != null && info.Picture != null)
            {
                int byteOffset = 78;
                int length = info.Picture.Length - 78;
                MemoryStream stream = new MemoryStream(info.Picture, byteOffset, length);
                context.Response.ContentType = "image/jpeg";
                byte[] buffer = stream.ToArray();
                context.Response.OutputStream.Write(buffer, 0, buffer.Length);
            }
        }
    } // end of ProcessRequest()
    public bool IsReusable {
        get {
            return false;
        }
    } // end of IsReusable()
} // end of class
```

3.  Test the image in the browser by first right-clicking the ImageHandler.ashx and selecting “View in browser” and then (in the browser) appending the text “?CategoryID=2” to the URL. The result should match the screen shot below.


Take another look at the ProcessRequest method of the ImageHandler class. Notice that the first 78 bytes are trimmed from the Picture’s value; this is because our specific database (Northwind) stores the images with an extra 78 bytes called an OLE (Object Linking and Embedding) Header. Usually, you will not need to worry about trimming off leading bytes from an image in order to display it.

The reason for having to deal with these extra 78 bytes is historical. The Picture column of the Categories table contains data that was originally entered in Microsoft Access (around the turn of the century). Those images contained an OLE header of 78 bytes that were not part of the actual image but were added to facilitate Access' handling of images. As such, those 78 bytes need to be stripped from the image in order to properly display it in the browser. For more details, see http:www.codeguru.com/vb/vb_internet/aspnet/print.php/c16095.

### Displaying the Image in the Web Form

1.  Open the AddEditCategory.aspx form and add an <Asp:Image> control for the Picture and give an ID of “Picture”. Then set the ImageUrl property of the Picture to the “NoImage_172x120.gif” file in the Images folder.

2.  In the ShowCategoryDetails_Click() method in the form’s code-behind, add the lines of code to set the ImageUrl of the Picture to reference the ImageHandler.ashx file with the category ID (or the default “NoImage” file).

```csharp
    protected void ShowCategoryDetails_Click(object sender, EventArgs e)
    {
        if (CurrentCategories.SelectedIndex == 0)
        {
            MessageLabel.Text = "Select a category before clicking 'Show Category Details'";
        }
        else
        {
            try
            {
                CategoryController controller = new CategoryController();
                int showID = int.Parse(CurrentCategories.SelectedValue);
                Category info = controller.LookupCategory(showID);
                CategoryID.Text = info.CategoryID.ToString();
                CategoryName.Text = info.CategoryName;
                Description.Text = info.Description;
                if (info.Picture != null)
                    Picture.ImageUrl = "~/Handlers/ImageHandler.ashx?CategoryID=" + info.CategoryID.ToString();
                else
                    Picture.ImageUrl = "~/Images/NoImage_172x120.gif";
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }
```

3.  Test the page in the browser. Your page should now return an image with each category.

### Improving the Image Handler

So far, the image handler we’ve created is designed solely for retrieving Category pictures from the database. This handler can be improved to be more generic in nature, making it useful for other images in the database (such as the Photo column of the Employees table). To see an example of how that can be improved, look at the sample code provided in the Handler.ashx of the Handlers folder, as well as the various classes in the App_Code/ImageHandling/ folder.

## On Your Own

To help solidify the techniques show above, create another web form that allows a user to view Supplier data. Add some read-only

When displaying the supplier’s country in the web form, use a drop-down of countries in the database (related to the “Countries_List” stored procedure).

## Summary

In this hands-on tutorial, you created a set of forms to view Product and Category information from the database. These forms will serve as the basis for later tutorials that will include the ability to Insert, Update and Delete database information.

You also discovered how to build a web form incrementally. From a debugging perspective, it is a good idea to build items in smaller pieces and perform frequent testing rather than to build a complete form (or application) and defer testing until the end. By testing your code as soon as possible, you will be able to more quickly and easily find and fix potential bugs in your application.

As a bonus, you also learned how to display database images in a web form.

### Discussion Points

The following questions are designed to help you review key aspects of this tutorial

*   DAL
    *   ExecuteReader()
        *   used for all Read operations
        *   returns zero or more roles - check the SPROC for details on column names, etc. (should match for Hydration)

### Displaying Images

Browsers typically load images in web pages separately from the loading of the web page’s HTML. In the HTML, an image tag is used with the source (src) attribute to tell the browser where to obtain the image. That source attribute will be some URL which the browser can request, such as the address of an image on the web server. This process of using separate requests for each image is a standard part of the browser’s functionality.

Since the picture for the Category object is actually stored in the database, rather than on the web server’s file directory, the picture must be retrieved through a special web page called an HTTP Handler.
