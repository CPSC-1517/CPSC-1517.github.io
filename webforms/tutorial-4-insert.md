

Performing Inserts (Tutorial 4 of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
Performing Inserts	2

Detailed Contents
Introduction	1
Performing Inserts	2
Purpose	2
Setup	2
Part 1 – Coding the DAL and BLL for Database Inserts	2
Part 2 – Inserting Data Through a Web Form	3
Part 3 – Performing Validation in a Web Form	6
Part 4 – (Advanced) Uploading Images through a Web Form	9
On Your Own	16
Summary	16
Discussion Points	16


Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
Performing Inserts
•	Estimated time: 30 minutes.
•	Parts 1-3 show how to insert data in the Products table. Part 4 shows how to insert data in the Categories table (including saving images to the database).
1)	Part 1 – Coding the DAL and BLL for Database Inserts –
This part of the tutorial walks the reader through creating the BLL and DAL code to perform database inserts.
2)	Part 2 – Inserting Data through a Web Form –
This part focuses on gathering user input through a web form in order to insert data into a database.
3)	Part 3 – Performing Validation in a Web Form –
This part focuses on validating user input before submitting data to the system. Client-side validation is performed through the use of Validator controls. Validation is further enforced through code-behind validation which takes place when the browser performs a post-back.
4)	Part 4 – (Advanced) Uploading Images through a Web Form –
This part walks the reader through the steps to upload an image through a web form for the purposes of storing it in a database.
Purpose
This hands-on tutorial walks through the steps to support inserting a row of data from a web form into a database.
The general steps required to support data inserts are as follows:
1)	Create the needed DAL/BLL methods – In the DAL’s provider class for the table you wish to add to, create a method that takes the CBO for the table and call the stored procedure to insert the data. A BLL method must also be added to the related controller class.
2)	Modify the Web form – Add a button to the web form and send the user’s input to the related BLL class.
Setup
This lab builds on the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.
Part 1 – Coding the DAL and BLL for Database Inserts
This part of the tutorial walks the reader through creating the BLL and DAL code to perform database inserts.
1)	In the DAL folder of the NorthwindSystem project, open the ProductProvider.cs file and write this method to add data to the Products table in the database.
        public int Add(Product item)
        {
            return Convert.ToInt32(DataStore.ExecuteScalar("Products_Add",
                            item.ProductName,
                            item.SupplierID,
                            item.CategoryID,
                            item.QuantityPerUnit,
                            item.UnitPrice,
                            item.UnitsInStock,
                            item.UnitsOnOrder,
                            item.ReorderLevel,
                            item.Discontinued));
        }

2)	Open the ProductController.cs file in the BLL folder. Add the following method.
        public int AddProduct(Product info)
        {
            return DataProvider.Add(info);
        }

Part 2 – Inserting Data Through a Web Form
This part focuses on gathering user input through a web form in order to insert data into a database.
1)	In the web site, open the AddEditProduct.aspx form and add a LinkButton to the end of the form, as in the following screen shot. Give it an ID of “AddProduct”.

2)	Double-click the AddProduct button to create the event handler in the form’s code-behind file. In that method, enter the following code.
    protected void AddProduct_Click(object sender, EventArgs e)
    {
        try
        {
            Product item = new Product();
            item.ProductName = ProductName.Text;
            if(!string.IsNullOrEmpty(Supplier.SelectedValue))
                item.SupplierID = int.Parse(Supplier.SelectedValue);
            if (!string.IsNullOrEmpty(Category.SelectedValue))
                item.CategoryID = int.Parse(Category.SelectedValue);
            if (!string.IsNullOrEmpty(QtyPerUnit.Text))
                item.QuantityPerUnit = QtyPerUnit.Text;
            if (!string.IsNullOrEmpty(UnitPrice.Text))
                item.UnitPrice = decimal.Parse(UnitPrice.Text);
            if (!string.IsNullOrEmpty(InStock.Text))
                item.UnitsInStock = int.Parse(InStock.Text);
            if (!string.IsNullOrEmpty(InStock.Text))
                item.UnitsOnOrder = int.Parse(OnOrder.Text);
            if (!string.IsNullOrEmpty(InStock.Text))
                item.ReorderLevel = int.Parse(ReorderLevel.Text);
            item.Discontinued = Discontinued.Checked;

            ProductController Controller = new ProductController();
            int NewProductId = Controller.AddProduct(item);

            // Update the form and give feedback to the user
            PopulateCurrentProductsDropdown();
            this.CurrentProducts.SelectedValue = NewProductId.ToString();
            ProductID.Text = NewProductId.ToString();
            this.MessageLabel.Text = "Product added";
        }
        catch (Exception ex)
        {
            this.MessageLabel.Text = ex.Message;
        }
    }

3)	View the form in the browser to test the functionality with valid data, as shown in the samples below. The new product should be successfully inserted into the database.
a.	Testing with complete data

b.	Testing with “empty” data for items that can be null.

Part 3 – Performing Validation in a Web Form
This part focuses on validating user input before submitting data to the system. Client-side validation is performed through the use of Validator controls. Validation is further enforced through code-behind validation which takes place when the browser performs a post-back.
1)	Open the AddEditProduct.aspx form and add validation controls as shown in the image and chart below. Each validation control must identify which user input control (typically TextBox controls) it is validating. They also must have certain properties set to the appropriate values to complete the validation and give feedback to the user when errors occur.

Type of Control	Control To Validate	Error Message	Other Property Values
RequiredFieldValidator	ProductName	Product Name is required.
CompareValidator	UnitPrice	Must be a real number greater than zero.	Operator: GreaterThan
Type: Double
ValueToCompare: 0
CompareValidator	InStock	Must be a whole number.	Operator: DataTypeCheck
Type: Integer
CompareValidator	OnOrder	Must be a whole number greater than or equal to zero.	Operator: GreaterThanEqual
Type: Integer
ValueToCompare: 0
CompareValidator	ReorderLevel	Must be a whole number greater than or equal to zero.	Operator: GreaterThanEqual
Type: Integer
ValueToCompare: 0

2)	Add a ValidationSummary control to the form next to the MessageLabel.

3)	Modify the ShowProductDetails button by settings its CausesValidation property to false.

4)	Modify the AddProduct_Click() method in the form’s code-behind to now include a check for the form’s IsValid property (which is set by the validation controls on postback).
    protected void AddProduct_Click(object sender, EventArgs e)
    {
        if (IsValid)
            try
            {
                Product item = new Product();
                item.ProductName = ProductName.Text;
                if (!string.IsNullOrEmpty(Supplier.SelectedValue))
                    item.SupplierID = int.Parse(Supplier.SelectedValue);
                if (!string.IsNullOrEmpty(Category.SelectedValue))
                    item.CategoryID = int.Parse(Category.SelectedValue);
                if (!string.IsNullOrEmpty(QtyPerUnit.Text))
                    item.QuantityPerUnit = QtyPerUnit.Text;
                if (!string.IsNullOrEmpty(UnitPrice.Text))
                    item.UnitPrice = decimal.Parse(UnitPrice.Text);
                if (!string.IsNullOrEmpty(InStock.Text))
                    item.UnitsInStock = int.Parse(InStock.Text);
                if (!string.IsNullOrEmpty(InStock.Text))
                    item.UnitsOnOrder = int.Parse(OnOrder.Text);
                if (!string.IsNullOrEmpty(InStock.Text))
                    item.ReorderLevel = int.Parse(ReorderLevel.Text);
                item.Discontinued = Discontinued.Checked;

                ProductController Controller = new ProductController();
                int NewProductId = Controller.AddProduct(item);

                // Update the form and give feedback to the user
                PopulateCurrentProductsDropdown();
                this.CurrentProducts.SelectedValue = NewProductId.ToString();
                ProductID.Text = NewProductId.ToString();
                this.MessageLabel.Text = "Product added";
            }
            catch (Exception ex)
            {
                this.MessageLabel.Text = ex.Message;
            }
    }

5)	Test the form in a browser. Attempt to enter invalid data in the form; clicking the AddProduct button with invalid data should present the user with error messages. Entering correct information should allow the product to be added to the database. Also check that the ShowProductDetails button works correctly.

Part 4 – (Advanced) Uploading Images through a Web Form
This part walks the reader through the steps to upload an image through a web form for the purposes of storing it in a database.
Preparing the Category Class
One of the oddities about images in the NorthwindExtended database is that these images have an extra 78 bytes of data at the start of every image. These 78 bytes are exactly the same for each image, because they represent an OLE (Object Linking and Embedding) header for use in older technology from the 1990s.
Since the Category’s Picture property is meant to store the image as a byte array, it is important (for consistency) to make sure that any value stored in this property has the OLE header. Therefore, the following steps are required in our system.
1)	In the NorthwindEntities project, add another class called ImageHelper with the following code.
using System;
using System.Collections.Generic;

namespace NorthwindEntities.Common
{
    /// &lt;summary&gt;
    /// The ImageHelper class helps to compensate for the OLE Header
    /// that appears at the start of legacy image data stored in the
    /// Northwinds database.
    /// &lt;/summary&gt;
    internal class ImageHelper
    {
        // See http://www.codeguru.com/vb/vb_internet/aspnet/print.php/c16095
        private static Byte[] _OleHeader = { 21, 28, 47, 0, 2, 0, 0, 0, 13, 0, 14, 0, 20, 0, 33, 0, 255, 255, 255, 255, 66, 105, 116, 109, 97, 112, 32, 73, 109, 97, 103, 101, 0, 80, 97, 105, 110, 116, 46, 80, 105, 99, 116, 117, 114, 101, 0, 1, 5, 0, 0, 2, 0, 0, 0, 7, 0, 0, 0, 80, 66, 114, 117, 115, 104, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 41, 0, 0 };
        public static Byte[] OleHeader
        {
            get
            {
                return _OleHeader;
            }
        }

        public static bool HasOleHeader(Byte[] rawPicture)
        {
            bool hasHeader = true;
            if (rawPicture != null && rawPicture.Length &gt; OleHeader.Length)
                for (int index = 0; index &lt;= OleHeader.Length - 1; index++)
                {
                    if (OleHeader[index] != rawPicture[index])
                    {
                        hasHeader = false;
                        break;
                    }
                }
            else
                hasHeader = false;
            return hasHeader;
        }

        public static Byte[] AddOleHeader(Byte[] rawPicture)
        {
            if (rawPicture == null || rawPicture.Length == 0)
                throw new ArgumentException("RawPicture is null or empty.", "RawPicture");
            if (!HasOleHeader(rawPicture))
            {
                List&lt;byte&gt; picture = new List&lt;byte&gt;(OleHeader);
                picture.AddRange(rawPicture);
                rawPicture = picture.ToArray();
            }
            return rawPicture;
        }
    }
}

2)	Open the Category.cs file and modify the Picture property of the class to match the following code.
        private Byte[] _Picture;
        public Byte[] Picture
        {
            get
            {
                return _Picture;
            }
            set
            {
                if (value != null)
                    if (value.Length == 0)
                        value = null;
                    else
                        value = ImageHelper.AddOleHeader(value);
                _Picture = value;
            }
        }

Preparing the DAL and BLL
The DAL and BLL don’t need any special logic for handling images when adding to the database. The code required here is very similar to that used for the ProductProvider and ProductController classes.
1)	In the DAL folder of the NorthwindSystem project, open the CategoryProvider.cs file and code the following method to add data to the Categories table in the database.
        public int Add(Category item)
        {
            return Convert.ToInt32(DataStore.ExecuteScalar("Categories_Add",
                            item.CategoryName,
                            item.Description,
                            item.Picture);
        }

2)	Open the CategoryController.cs file in the BLL folder. Add the following method.
        public int AddCategory(Category info)
        {
            return DataProvider.Add(info);
        }
Modifying the Form
Uploading images in the form is made possible through the use of the FileUpload control.
1)	In the web site, open the AddEditCategory.aspx form and append a new row to the end of the table, as shown in the following screen shot.

2)	Add a FileUpload control to the form and give it an ID of “CategoryImageUpload”.

3)	At the end of the form, add a LinkButton to allow the user to submit the data. Give the button an ID of “AddCategory”.

4)	Double-click the AddCategory button to create the event handler in the form’s code-behind. In that event handler, enter the following code.
    protected void AddProduct_Click(object sender, EventArgs e)
    {
        try
        {
            Category item = new Category();
            item.CategoryName = CategoryName.Text;
            if (!string.IsNullOrEmpty(Description.Text))
                item.Description = Description.Text;
            item.Picture = GetUploadedPicture();

            CategoryController controller = new CategoryController();
            int addedCategoryID = controller.AddCategory(item);
            // Update the form and give feedback to the user
            // TODO: complete this code later…
        }
        catch (Exception ex)
        {
            this.MessageLabel.Text = ex.Message;
        }
    }

5)	To provide the functionality that will retrieve the uploaded image, add the GetUploadedPicture() method to the form’s code-behind file. You will also need to add a using statement at the top of the file to import the System.IO namespace.
using System.IO; // place at top of AddEditCategoy.aspx.cs

    private byte[] GetUploadedPicture()
    {
        byte[] thePicture = null;
        if (this.CategoryImageUpload.HasFile && this.CategoryImageUpload.PostedFile != null)
        {
            string extention = Path.GetExtension(CategoryImageUpload.PostedFile.FileName).ToLower();
            string MIMEType = "image/" + extention.Replace(".", "");
            if (WebClient.UI.Handlers.AbstractStreamableImage.ImageFormats.ContainsValue(MIMEType))
            {
                long size = this.CategoryImageUpload.PostedFile.InputStream.Length;
                if (size &lt; int.MaxValue - 78) // minus 78 is to allow for the OLE header
                {
                    byte[] ImageBytes = new byte[size];
                    this.CategoryImageUpload.PostedFile.InputStream.Read(ImageBytes, 0, (int)size);
                    thePicture = ImageBytes;
                }
                else
                    throw new Exception("Image is too big. Images must be smaller than " +
                        int.MaxValue.ToString() + " btyes in size.");
            }
            else
            {
                throw new Exception("Invalid file type uploaded - only picture files are allowed.");
            }
        }
        return thePicture;
    }

6)	Give feedback to the user by repopulating the DropDownList of categories and displaying a message to the user.
a.	Since the code to repopulate the DropDownList is the same as the kind in the Page’s Load event, it makes sense to extract the common code into a separate method. Begin by editing the Page_Load() method and creating a separate method to fill the DropDownList.
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            try
            {
                PopulateCategoryDropdown();
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
    }

    private void PopulateCategoryDropdown()
    {
        // Populate Category drop-down
        CategoryController controller = new CategoryController();
        List&lt;Category&gt; categories = controller.ListAllCategories();
        CurrentCategories.DataSource = categories;
        CurrentCategories.DataTextField = "CategoryName";
        CurrentCategories.DataValueField = "CategoryID";
        CurrentCategories.DataBind();
        CurrentCategories.Items.Insert(0, "[select a category]");
    }

b.	Modify AddCategory_Click()to call the PopulateCategoryDropDown() method and display text to the user when the new category is added. Also, since a picture may have been uploaded, it should be shown in the browser.
    protected void AddProduct_Click(object sender, EventArgs e)
    {
        try
        {
            Category item = new Category();
            item.CategoryName = CategoryName.Text;
            if (!string.IsNullOrEmpty(Description.Text))
                item.Description = Description.Text;

            CategoryController controller = new CategoryController();
            int addedCategoryID = controller.AddCategory(item);
            // Update the form and give feedback to the user
            PopulateCategoryDropdown();
            this.CurrentCategories.SelectedValue = addedCategoryID.ToString();
            CategoryID.Text = addedCategoryID.ToString();
            if (item.Picture != null)
                Picture.ImageUrl = "~/Handlers/ImageHandler.ashx?CategoryID="
                                 + addedCategoryID.ToString();
            else
                Picture.ImageUrl = "~/Images/NoImage_172x120.gif";
            this.MessageLabel.Text = "New category added";
        }
        catch (Exception ex)
        {
            this.MessageLabel.Text = ex.Message;
        }
    }

7)	Test the form in the browser. Try creating a new category named “Soups” with the information below; an image has been provided in the starter kit that you can upload for this new category. A successful add should show a message to the user, identify the new category’s ID, display the uploaded picture, and select the category in the CurrentCategories DropDownList.

On Your Own
Modify the form for managing Supplier information to allow users to add new suppliers. Be sure to validate user input.
Summary
In this hands-on tutorial, you built the functionality to insert Product and Category information into a database. These forms will serve as the basis for later tutorials which will Update and Delete database information.
You also explored integrating validation of user input through the use of Validation controls. As a bonus, the steps to upload an image into the database were also covered.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial
DRAFT – discussion points not yet complete
	DAL
o	Check SPROC for parameters
	Order matters for calling with Ent.Lib.
o	ExecuteScalar()
	Returns a single value (Decimal)
	Used because SPROC returns ID of newly added item
•	Otherwise, use ExecuteNonQuery()
	Dealing with Nullable property types in user input
o	Numbers and Dates
o	Strings – Distinguish between an empty string and NULL
While empty strings won’t cause run-time errors for String properties that can be null in the database, it’s a good idea to …
	Giving Feedback to the user
o	When errors occur
o	When validating user input
o	When adding
o	When updating
o	When deleting
	Validation Controls
o	this.IsValid
	Set by the validation controls on postback
	Needed if browser has JavaScript disabled or if it’s bypassed by hackers
	Checking IsValid will trigger the responses of the validator controls, presenting messages to the user.
	Images in the Northwind Traders sample database.
