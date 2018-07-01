
Performing Updates and Deletes
(Tutorial 5 of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
E – Performing Updates and Deletes	2

Detailed Contents
Introduction	1
E – Performing Updates and Deletes	2
Purpose	2
Setup	2
Part 1 – Coding the DAL and BLL for Database Update/Delete	2
Part 2 – Update and Delete Data through a Web Form	3
Part 3 – Update/Delete Images through a Web Form (Advanced)	6
On Your Own	10
Summary	10
Discussion Points	10


Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
E – Performing Updates and Deletes
•	Estimated time: 20-30 minutes.
•	Parts:
1)	Part 1 – Coding the DAL and BLL for Database Update/Delete –
This part of the tutorial walks the reader through creating the BLL and DAL code to perform updates and deletes.
2)	Part 2 –Update and Delete Data through a Web Form –
This part focuses on adding support for updating and deleting in a web form.
3)	Part 3 – (Advanced) Update/Delete Images through a Web Form
This part walks the reader through the steps to perform update and delete operations on the Categories table from data entered on a web form.

Purpose
This hands-on tutorial walks through the steps to support updating and deleting database information.
1)	Include Update/Delete methods in DAL/BLL – In the DAL’s provider class add methods that call database stored procedures for updating and deleting. Also add the related methods in the BLL class.
2)	Modify the Web Form – Add buttons and code-behind to perform an update and a delete.
Setup
For this lab, you will need the Visual Studio solution and database from the previous topics(s). The Starter Kit folder contains these resources.
Part 1 – Coding the DAL and BLL for Database Update/Delete
The following steps detail the modifications to the DAL and BLL classes to provide support for updating/deleting Products.
1)	In the DAL folder of the NorthwindSystem project, open the ProductProvider.cs file and write the following methods to perform updates and deletes on the Products table in the database.
        public int Update(Product item)
        {
            return DataStore.ExecuteNonQuery("Products_Update",
                       item.ProductID,
                            item.ProductName,
                            item.SupplierID,
                            item.CategoryID,
                            item.QuantityPerUnit,
                            item.UnitPrice,
                            item.UnitsInStock,
                            item.UnitsOnOrder,
                            item.ReorderLevel,
                            item.Discontinued);
        }

        public int Delete(int ProductID)
        {
            return DataStore.ExecuteNonQuery("Products_Delete", ProductID);
        }

2)	Open the ProductController.cs file in the BLL folder. Add the following methods.
        public int UpdateProduct(Product info)
        {
            return DataProvider.Update(info);
        }

        public int DeleteProduct(int productId)
        {
            return DataProvider.Delete(productId);
        }

Part 2 – Update and Delete Data through a Web Form
These steps walk through implementing buttons for Updating/Deleting in a web form.
1)	In the web site, open the AddEditProduct.aspx form and add another two LinkButton controls beside the AddProduct link button. Give them the IDs of UpdateProduct and DeleteProduct, along with appropriate text to display to the user, as in the following screen shot.

2)	Double-click the UpdateProduct button to create the event handler in the form’s code-behind file. In that method, enter the following code.
    protected void UpdateProduct_Click(object sender, EventArgs e)
    {
        int theProductId;
        if (IsValid)
            if (int.TryParse(ProductID.Text, out theProductId))
            {
                try
                {
                    Product item = new Product();
                    item.ProductID = theProductId;
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
                    int rowsAffected = Controller.UpdateProduct(item);


                    if (rowsAffected &gt; 0)
                    {
                        // Update the form and give feedback to the user
                        PopulateCurrentProductsDropdown();
                        this.CurrentProducts.SelectedValue = item.ProductID.ToString();
                        this.MessageLabel.Text = "Product was updated";
                    }
                    else
                    {
                        this.MessageLabel.Text = "Update failed. Zero rows affected.";
                    }
                }
                catch (Exception ex)
                {
                    this.MessageLabel.Text = ex.Message;
                }
            }
            else
            {
                MessageLabel.Text = "Lookup an existing product before performing an update.";
            }
    }

3)	View the form in the browser to test the functionality with valid data, as shown in the sample below. Look up an existing product’s details; then click the “Update Product” link without making any changes to the product. The update should be successful. Then attempt another update, this time making some simple changes to the product.

4)	Double-click the DeleteProduct button to create the event handler in the form’s code-behind file. In that method, enter the following code.
    protected void DeleteProduct_Click(object sender, EventArgs e)
    {
        int theProductId;
        if (int.TryParse(ProductID.Text, out theProductId))
        {
            try
            {
                ProductController Controller = new ProductController();
                int rowsAffected = Controller.DeleteProduct(theProductId);

                if (rowsAffected &gt; 0)
                {
                    // Update the form and give feedback to the user
                    PopulateCurrentProductsDropdown();
                    this.MessageLabel.Text = "Product was removed";
                }
                else
                {
                    this.MessageLabel.Text = "Delete failed. Zero rows affected.";
                }
            }
            catch (Exception ex)
            {
                this.MessageLabel.Text = ex.Message;
            }
        }
        else
        {
            MessageLabel.Text = "Lookup an existing product before attempting to delete.";
        }
    }

5)	View the form in the browser to test the functionality with valid data, as shown in the sample below. Because the existing products are likely referenced by other tables in the database, begin the test by adding a new product. After adding the product, attempt to delete it; the product should be successfully deleted from the database.

Part 3 – Update/Delete Images through a Web Form (Advanced)
The following steps cover adding support for updating and deleting Categories (including the Category Picture).
1)	In the DAL folder of the NorthwindSystem project, open the CategoryProvider.cs file and code the following methods to perform update and delete operations on the Categories table in the database.
        public int Update(Category item)
        {
            return DataStore.ExecuteNonQuery("Categories_Update",
                       item.CategoryID,
                            item.CategoryName,
                            item.Description,
                            item.Picture);
        }

        public int Delete(int CategoryID)
        {
            return DataStore.ExecuteNonQuery("Categories_Delete", CategoryID);
        }

2)	Open the CategoryController.cs file in the BLL folder. Add the following methods.
        public int UpdateCategory(Category info)
        {
            return DataProvider.Update(info);
        }

        public int DeleteCategory(int categoryId)
        {
            return DataProvider.Delete(categoryId);
        }

3)	In the web site, open the AddEditCategory.aspx form and add two more LinkButton controls beside the AddCategory button. Give them the IDs of “UpdateCategory” and “DeleteCategory”, along with text to describe the purpose of the buttons.

4)	In the table displaying the category details, add a new row between the Image control and the FileUpload control. In that row, add a CheckBox control; give the control an ID of “DeletePicture” and set the Text property to “Check to delete picture”.

5)	In the Design view of the form, double-click the UpdateCategory button to create its event handler. In that event handler, enter the following code.
    protected void UpdateCategory_Click(object sender, EventArgs e)
    {
        int theCategoryId;
        if (IsValid)
            if (int.TryParse(CategoryID.Text, out theCategoryId))
            {
                try
                {
                    byte[] uploadedPicture = GetUploadedPicture();
                    if (uploadedPicture != null && DeletePicture.Checked)
                    {
                        MessageLabel.Text = "Unclear input.&lt;br /&gt;"
                            + "You selected 'Check to delete picture' and uploaded an image.";
                    }
                    else
                    {
                        // 1) Get the picture to be used in the update
                        CategoryController controller = new CategoryController();
                        if (DeletePicture.Checked)
                        {
                            uploadedPicture = null;
                        }
                        else if(uploadedPicture == null)
                        {
                            // default to the existing picture
                            uploadedPicture = controller.LookupCategory(theCategoryId).Picture;
                        }

                        // 2) Create the Category object
                        Category item = new Category();
                        item.CategoryID = theCategoryId;
                        item.CategoryName = CategoryName.Text;
                        if (!string.IsNullOrEmpty(Description.Text))
                            item.Description = Description.Text;
                        item.Picture = uploadedPicture;

                        // 3) Update the database
                        int rowsAffected = controller.UpdateCategory(item);

                        if (rowsAffected &gt; 0)
                        {
                            PopulateCategoryDropdown();
                            this.CurrentCategories.SelectedValue = item.CategoryID.ToString();
                            MessageLabel.Text = "Category was updated.";
                        }
                        else
                        {
                            this.MessageLabel.Text = "Update failed. Zero rows affected.";
                        }
                    }
                }
                catch (Exception ex)
                {
                    MessageLabel.Text = ex.Message;
                }
            }
            else
            {
                MessageLabel.Text = "Lookup and existing category before attempting an update.";
            }
    }

6)	In the Design view of the form, double-click the DeleteCategory button to create its event handler. In that event handler, enter the following code.
    protected void DeleteCategory_Click(object sender, EventArgs e)
    {
        int theCategoryId;
        if (int.TryParse(CategoryID.Text, out theCategoryId))
        {
            try
            {
                CategoryController controller = new CategoryController();
                int rowsAffected = controller.DeleteCategory(theCategoryId);

                if (rowsAffected &gt; 0)
                {
                    MessageLabel.Text = "Category " + CategoryName.Text + " deleted";
                    PopulateCategoryDropdown();
                    CategoryID.Text = string.Empty;
                    CategoryName.Text = string.Empty;
                    Description.Text = string.Empty;
                    Picture.ImageUrl = "~/Images/NoImage_172x120.gif";
                }
                else
                {
                    this.MessageLabel.Text = "Delete failed. Zero rows affected.";
                }
            }
            catch (Exception ex)
            {
                MessageLabel.Text = ex.Message;
            }
        }
        else
        {
            MessageLabel.Text = "Lookup and existing category before attempting to delete.";
        }
    }

7)	Test the form in the browser. A successful update should ensure that the data is correctly modified in the database (which you can double-check by performing a lookup of the same category). Likewise, a successful delete should remove the category from the database (though you will need to test the delete on a newly added category, as existing categories are referenced by the Products table and therefore cannot be deleted).
On Your Own
Modify the form for managing Supplier information to allow users to update and delete suppliers. Also include a button to clear the form’s data.
Summary
In this hands-on tutorial, you created Update and Delete functionality for managing Products and Categories. This functionality is very similar to the Add functionality created in the previous tutorial.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial
Part 3 – (Advanced) Update/Delete Images through a Web Form
The event handler for the UpdateCategory button has a few notable items.
•	Notice the extra validation that has been added to ensure that the user’s actions are clear (for example, it doesn’t make sense if the user selects the DeletePicture checkbox and identifies a picture to upload at the same time).
•	Also notice that this method takes advantage of the same method used by the AddCategory event handler to get the image uploaded by the user.
•	Lastly, observe how a portion of the method focuses on ensuring that if the user doesn’t make any changes to the image (either replacing or deleting), then the existing image is retrieved from the database so that any update doesn’t accidentally delete the image.
