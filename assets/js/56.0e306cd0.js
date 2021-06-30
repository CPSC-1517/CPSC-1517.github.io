(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{472:function(e,t,n){"use strict";n.r(t);var o=n(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[e._v("Performing Updates and Deletes\n(Tutorial 5 of 9)\nHands-On Tutorials for Application Programming 1 (DMIT152)\nContents at a Glance\nIntroduction\t1\nE – Performing Updates and Deletes\t2")]),e._v(" "),n("p",[e._v("Detailed Contents\nIntroduction\t1\nE – Performing Updates and Deletes\t2\nPurpose\t2\nSetup\t2\nPart 1 – Coding the DAL and BLL for Database Update/Delete\t2\nPart 2 – Update and Delete Data through a Web Form\t3\nPart 3 – Update/Delete Images through a Web Form (Advanced)\t6\nOn Your Own\t10\nSummary\t10\nDiscussion Points\t10")]),e._v(" "),n("p",[e._v("Introduction\nThis series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.\nThere are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.\nE – Performing Updates and Deletes\n•\tEstimated time: 20-30 minutes.\n•\tParts:")]),e._v(" "),n("ol",[n("li",[e._v("Part 1 – Coding the DAL and BLL for Database Update/Delete –\nThis part of the tutorial walks the reader through creating the BLL and DAL code to perform updates and deletes.")]),e._v(" "),n("li",[e._v("Part 2 –Update and Delete Data through a Web Form –\nThis part focuses on adding support for updating and deleting in a web form.")]),e._v(" "),n("li",[e._v("Part 3 – (Advanced) Update/Delete Images through a Web Form\nThis part walks the reader through the steps to perform update and delete operations on the Categories table from data entered on a web form.")])]),e._v(" "),n("p",[e._v("Purpose\nThis hands-on tutorial walks through the steps to support updating and deleting database information.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Include Update/Delete methods in DAL/BLL – In the DAL’s provider class add methods that call database stored procedures for updating and deleting. Also add the related methods in the BLL class.")])]),e._v(" "),n("li",[n("p",[e._v("Modify the Web Form – Add buttons and code-behind to perform an update and a delete.\nSetup\nFor this lab, you will need the Visual Studio solution and database from the previous topics(s). The Starter Kit folder contains these resources.\nPart 1 – Coding the DAL and BLL for Database Update/Delete\nThe following steps detail the modifications to the DAL and BLL classes to provide support for updating/deleting Products.")])]),e._v(" "),n("li",[n("p",[e._v('In the DAL folder of the NorthwindSystem project, open the ProductProvider.cs file and write the following methods to perform updates and deletes on the Products table in the database.\npublic int Update(Product item)\n{\nreturn DataStore.ExecuteNonQuery("Products_Update",\nitem.ProductID,\nitem.ProductName,\nitem.SupplierID,\nitem.CategoryID,\nitem.QuantityPerUnit,\nitem.UnitPrice,\nitem.UnitsInStock,\nitem.UnitsOnOrder,\nitem.ReorderLevel,\nitem.Discontinued);\n}')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public int Delete(int ProductID)\n{\n    return DataStore.ExecuteNonQuery("Products_Delete", ProductID);\n}\n')])])])]),e._v(" "),n("li",[n("p",[e._v("Open the ProductController.cs file in the BLL folder. Add the following methods.\npublic int UpdateProduct(Product info)\n{\nreturn DataProvider.Update(info);\n}")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public int DeleteProduct(int productId)\n{\n    return DataProvider.Delete(productId);\n}\n")])])])])]),e._v(" "),n("p",[e._v("Part 2 – Update and Delete Data through a Web Form\nThese steps walk through implementing buttons for Updating/Deleting in a web form.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("In the web site, open the AddEditProduct.aspx form and add another two LinkButton controls beside the AddProduct link button. Give them the IDs of UpdateProduct and DeleteProduct, along with appropriate text to display to the user, as in the following screen shot.")])]),e._v(" "),n("li",[n("p",[e._v("Double-click the UpdateProduct button to create the event handler in the form’s code-behind file. In that method, enter the following code.\nprotected void UpdateProduct_Click(object sender, EventArgs e)\n{\nint theProductId;\nif (IsValid)\nif (int.TryParse(ProductID.Text, out theProductId))\n{\ntry\n{\nProduct item = new Product();\nitem.ProductID = theProductId;\nitem.ProductName = ProductName.Text;\nif (!string.IsNullOrEmpty(Supplier.SelectedValue))\nitem.SupplierID = int.Parse(Supplier.SelectedValue);\nif (!string.IsNullOrEmpty(Category.SelectedValue))\nitem.CategoryID = int.Parse(Category.SelectedValue);\nif (!string.IsNullOrEmpty(QtyPerUnit.Text))\nitem.QuantityPerUnit = QtyPerUnit.Text;\nif (!string.IsNullOrEmpty(UnitPrice.Text))\nitem.UnitPrice = decimal.Parse(UnitPrice.Text);\nif (!string.IsNullOrEmpty(InStock.Text))\nitem.UnitsInStock = int.Parse(InStock.Text);\nif (!string.IsNullOrEmpty(InStock.Text))\nitem.UnitsOnOrder = int.Parse(OnOrder.Text);\nif (!string.IsNullOrEmpty(InStock.Text))\nitem.ReorderLevel = int.Parse(ReorderLevel.Text);\nitem.Discontinued = Discontinued.Checked;")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('            ProductController Controller = new ProductController();\n            int rowsAffected = Controller.UpdateProduct(item);\n\n\n            if (rowsAffected &gt; 0)\n            {\n                // Update the form and give feedback to the user\n                PopulateCurrentProductsDropdown();\n                this.CurrentProducts.SelectedValue = item.ProductID.ToString();\n                this.MessageLabel.Text = "Product was updated";\n            }\n            else\n            {\n                this.MessageLabel.Text = "Update failed. Zero rows affected.";\n            }\n        }\n        catch (Exception ex)\n        {\n            this.MessageLabel.Text = ex.Message;\n        }\n    }\n    else\n    {\n        MessageLabel.Text = "Lookup an existing product before performing an update.";\n    }\n')])])]),n("p",[e._v("}")])]),e._v(" "),n("li",[n("p",[e._v("View the form in the browser to test the functionality with valid data, as shown in the sample below. Look up an existing product’s details; then click the “Update Product” link without making any changes to the product. The update should be successful. Then attempt another update, this time making some simple changes to the product.")])]),e._v(" "),n("li",[n("p",[e._v("Double-click the DeleteProduct button to create the event handler in the form’s code-behind file. In that method, enter the following code.\nprotected void DeleteProduct_Click(object sender, EventArgs e)\n{\nint theProductId;\nif (int.TryParse(ProductID.Text, out theProductId))\n{\ntry\n{\nProductController Controller = new ProductController();\nint rowsAffected = Controller.DeleteProduct(theProductId);")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('        if (rowsAffected &gt; 0)\n        {\n            // Update the form and give feedback to the user\n            PopulateCurrentProductsDropdown();\n            this.MessageLabel.Text = "Product was removed";\n        }\n        else\n        {\n            this.MessageLabel.Text = "Delete failed. Zero rows affected.";\n        }\n    }\n    catch (Exception ex)\n    {\n        this.MessageLabel.Text = ex.Message;\n    }\n}\nelse\n{\n    MessageLabel.Text = "Lookup an existing product before attempting to delete.";\n}\n')])])]),n("p",[e._v("}")])]),e._v(" "),n("li",[n("p",[e._v("View the form in the browser to test the functionality with valid data, as shown in the sample below. Because the existing products are likely referenced by other tables in the database, begin the test by adding a new product. After adding the product, attempt to delete it; the product should be successfully deleted from the database.")])])]),e._v(" "),n("p",[e._v("Part 3 – Update/Delete Images through a Web Form (Advanced)\nThe following steps cover adding support for updating and deleting Categories (including the Category Picture).")]),e._v(" "),n("ol",[n("li",[n("p",[e._v('In the DAL folder of the NorthwindSystem project, open the CategoryProvider.cs file and code the following methods to perform update and delete operations on the Categories table in the database.\npublic int Update(Category item)\n{\nreturn DataStore.ExecuteNonQuery("Categories_Update",\nitem.CategoryID,\nitem.CategoryName,\nitem.Description,\nitem.Picture);\n}')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('public int Delete(int CategoryID)\n{\n    return DataStore.ExecuteNonQuery("Categories_Delete", CategoryID);\n}\n')])])])]),e._v(" "),n("li",[n("p",[e._v("Open the CategoryController.cs file in the BLL folder. Add the following methods.\npublic int UpdateCategory(Category info)\n{\nreturn DataProvider.Update(info);\n}")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("public int DeleteCategory(int categoryId)\n{\n    return DataProvider.Delete(categoryId);\n}\n")])])])]),e._v(" "),n("li",[n("p",[e._v("In the web site, open the AddEditCategory.aspx form and add two more LinkButton controls beside the AddCategory button. Give them the IDs of “UpdateCategory” and “DeleteCategory”, along with text to describe the purpose of the buttons.")])]),e._v(" "),n("li",[n("p",[e._v("In the table displaying the category details, add a new row between the Image control and the FileUpload control. In that row, add a CheckBox control; give the control an ID of “DeletePicture” and set the Text property to “Check to delete picture”.")])]),e._v(" "),n("li",[n("p",[e._v('In the Design view of the form, double-click the UpdateCategory button to create its event handler. In that event handler, enter the following code.\nprotected void UpdateCategory_Click(object sender, EventArgs e)\n{\nint theCategoryId;\nif (IsValid)\nif (int.TryParse(CategoryID.Text, out theCategoryId))\n{\ntry\n{\nbyte[] uploadedPicture = GetUploadedPicture();\nif (uploadedPicture != null && DeletePicture.Checked)\n{\nMessageLabel.Text = "Unclear input.<br />"\n+ "You selected \'Check to delete picture\' and uploaded an image.";\n}\nelse\n{\n// 1) Get the picture to be used in the update\nCategoryController controller = new CategoryController();\nif (DeletePicture.Checked)\n{\nuploadedPicture = null;\n}\nelse if(uploadedPicture == null)\n{\n// default to the existing picture\nuploadedPicture = controller.LookupCategory(theCategoryId).Picture;\n}')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('                // 2) Create the Category object\n                Category item = new Category();\n                item.CategoryID = theCategoryId;\n                item.CategoryName = CategoryName.Text;\n                if (!string.IsNullOrEmpty(Description.Text))\n                    item.Description = Description.Text;\n                item.Picture = uploadedPicture;\n\n                // 3) Update the database\n                int rowsAffected = controller.UpdateCategory(item);\n\n                if (rowsAffected &gt; 0)\n                {\n                    PopulateCategoryDropdown();\n                    this.CurrentCategories.SelectedValue = item.CategoryID.ToString();\n                    MessageLabel.Text = "Category was updated.";\n                }\n                else\n                {\n                    this.MessageLabel.Text = "Update failed. Zero rows affected.";\n                }\n            }\n        }\n        catch (Exception ex)\n        {\n            MessageLabel.Text = ex.Message;\n        }\n    }\n    else\n    {\n        MessageLabel.Text = "Lookup and existing category before attempting an update.";\n    }\n')])])]),n("p",[e._v("}")])]),e._v(" "),n("li",[n("p",[e._v("In the Design view of the form, double-click the DeleteCategory button to create its event handler. In that event handler, enter the following code.\nprotected void DeleteCategory_Click(object sender, EventArgs e)\n{\nint theCategoryId;\nif (int.TryParse(CategoryID.Text, out theCategoryId))\n{\ntry\n{\nCategoryController controller = new CategoryController();\nint rowsAffected = controller.DeleteCategory(theCategoryId);")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('        if (rowsAffected &gt; 0)\n        {\n            MessageLabel.Text = "Category " + CategoryName.Text + " deleted";\n            PopulateCategoryDropdown();\n            CategoryID.Text = string.Empty;\n            CategoryName.Text = string.Empty;\n            Description.Text = string.Empty;\n            Picture.ImageUrl = "~/Images/NoImage_172x120.gif";\n        }\n        else\n        {\n            this.MessageLabel.Text = "Delete failed. Zero rows affected.";\n        }\n    }\n    catch (Exception ex)\n    {\n        MessageLabel.Text = ex.Message;\n    }\n}\nelse\n{\n    MessageLabel.Text = "Lookup and existing category before attempting to delete.";\n}\n')])])]),n("p",[e._v("}")])]),e._v(" "),n("li",[n("p",[e._v("Test the form in the browser. A successful update should ensure that the data is correctly modified in the database (which you can double-check by performing a lookup of the same category). Likewise, a successful delete should remove the category from the database (though you will need to test the delete on a newly added category, as existing categories are referenced by the Products table and therefore cannot be deleted).\nOn Your Own\nModify the form for managing Supplier information to allow users to update and delete suppliers. Also include a button to clear the form’s data.\nSummary\nIn this hands-on tutorial, you created Update and Delete functionality for managing Products and Categories. This functionality is very similar to the Add functionality created in the previous tutorial.\nDiscussion Points\nThe following questions are designed to help you review key aspects of this tutorial\nPart 3 – (Advanced) Update/Delete Images through a Web Form\nThe event handler for the UpdateCategory button has a few notable items.\n•\tNotice the extra validation that has been added to ensure that the user’s actions are clear (for example, it doesn’t make sense if the user selects the DeletePicture checkbox and identifies a picture to upload at the same time).\n•\tAlso notice that this method takes advantage of the same method used by the AddCategory event handler to get the image uploaded by the user.\n•\tLastly, observe how a portion of the method focuses on ensuring that if the user doesn’t make any changes to the image (either replacing or deleting), then the existing image is retrieved from the database so that any update doesn’t accidentally delete the image.")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);