

Editing with DataBound Controls
(Tutorial 8 of 9)
Hands-On Tutorials for Application Programming 1 (DMIT152)
Contents at a Glance
Introduction	1
Editing with DataBound Controls	2

Detailed Contents
Introduction	1
Editing with DataBound Controls	2
Setup	2
Part 1 – Enable GridView Edit and Delete	2
Part 2 – Perform Inserts with a FormView	9
Part 3 – Handle Errors for Insert, Update and Delete in Data-Bound Controls	11
Summary	12
Discussion Points	12


Introduction
This series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.
There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.
Editing with DataBound Controls
•	Estimated time: 15-20 minutes.
•	Parts:
1)	Part 1 – Enable GridView Edit and Delete
2)	Part 2 – Perform Inserts with a FormView
3)	Part 3 – Handle Errors for Insert, Update and Delete in Data-Bound Controls
This hands-on tutorial walks through how to enable Update and Delete functionality in the GridView along with using a FormView for Insert functionality, all through the use of an ObjectDataSource control. The ObjectDataSource control acts as a “middle-man” in exchanging data between your BLL and various Data Bound controls.
Setup
For this lab, you will need the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.
Part 1 – Enable GridView Edit and Delete
The ObjectDataSource handles the interaction between the Business Logic Layer (BLL) and our databound controls, such as the GridView. We want to enable Edit and Delete functionality through the GridView. To do this, we need to prepare the BLL, ObjectDataSource, and GridView using the following steps.
1)	Open the ProductController in the NorthwindSystem’s BLL folder. Add an overloaded version of the DeleteProduct method that takes an entire Product object as the parameter. In addition, move the DataObjectMethod attribute so that it applies to this newly overloaded method. The code should match the following. When you’re done, re-build the solution.
        #region "Delete"
        [DataObjectMethod(DataObjectMethodType.Delete, true)]
        public int DeleteProduct(Product info)
        {
            return DeleteProduct(info.ProductID);
        }

        public int DeleteProduct(int productId)
        {
            return DataProvider.Delete(productId);
        }
        #endregion

2)	In the website, open the web form named “ManageProducts.aspx”. Reconfigure the ProductDataSource to use the NorthwindSystem.BLL.ProductController class’ new DeleteProduct method.

3)	Click “Finish”. At this point, you might be presented with a dialog asking if you want to reset the fields and keys for the ProductsGridView. Click “No”. That’s because we don’t want any of the formatting or other customizations of that GridView to be changed.

4)	In the ProductsGridView’s smart tag, enable Paging, Editing and Deleting.

5)	Edit the DataKeyNames property of the GridView to identify the Product’s ProductID property as the one which uniquely distinguishes one product from another. (Recall that the ProductID property is mapped to the database table column of the same name, and that that column is the Primary Key for the Products table.)

6)	Now that the GridView supports editing, it’s important to re-visit the templates for the Supplier and Category columns, so that the user is presented with a DropDownList for changing the product’s supplier and/or category. Click the “Edit Templates…” link on the GridView’s smart tag.

7)	In the Display drop-down of the GridView’s smart tag, select “Column[3] – Supplier” to see all the templates for that template column.

8)	Delete the TextBox control from the EditItemTemplate. Then, copy the DropDownList from the ItemTemplate and place it in the EditItemTemplate. Change this DropDownList’s Enabled property to True.

9)	Perform the same modifications for the Category’s template.

10)	On the GridView’s smart tag, click “End Template Editing”. Then view the page in the browser to test it out. You should be able to use the Edit link to modify the values of any given Product.

11)	At this point, if you attempt to delete a product, the infamous “Yellow Screen of Death” will appear, because you cannot delete a product that is being referenced (used) in by other tables in the database.
Part 3 of this document will cover how to handle errors like this in a more user-friendly manner.

12)	In order to support passing null values from the databound controls into the CBOs (Custom Business Objects) through the ObjectDataSource, it’s necessary to list the CBO properties that would be able to handle/receive a null.
For the ProductDataSource, click the ellipsis for the UpdateParameters property. This will open the “Parameter Collection Editor” dialog.

13)	In the Parameter Collection Editor dialog, click the “Show advanced properties” link, so you can set the Type for each item you add to the collection. Add parameters for each Product property that can be null, as in the following screen shot. When you enter each CBO property, enter its data type as well as the parameter’s Type. (The SupplierID and CategoryID are Int32; the QuantityOnHand is a String; the UnitPrice is a Decimal; the UnitsInStock, UnitsOnOrder, and ReorderLevel are Int16.) Then click OK.

Gotcha!
If you find the Design view doesn’t save your changes to the UpdateParameters, InsertParameters, or DeleteParameters collections, it might be because the ObjectDataSource needs to be “refreshed”. Click the “Refresh Schema” link on the ObjectDataSource’s smart tag. Then, when you modify the parameter collections, the designer will actually make the changes in the page’s markup.

Also Remember: If you are prompted to also refresh any DataBound controls (GridViews or FormViews), click “No”.
14)	For the ProductDataSource, click the ellipsis for the DeleteParameters property. Add parameters for each Product property that can be null (same as for the UpdateParameters above). Then click OK. Setting the UpdateParameters, DeleteParameters, and/or the InsertParameters will produce the following markup inside the ObjectDataSource.
&lt;UpdateParameters&gt;
    &lt;asp:Parameter Name="CategoryId" Type="Int32" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="SupplierId" Type="Int32" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="QuantityPerUnity" Type="String" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="UnitPrice" Type="Decimal" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="UnitsInStock" Type="Int16" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="UnitsOnOrder" Type="Int16" ConvertEmptyStringToNull="true" /&gt;
    &lt;asp:Parameter Name="ReorderLevel" Type="Int16" ConvertEmptyStringToNull="true" /&gt;
&lt;/UpdateParameters&gt;

Part 2 – Perform Inserts with a FormView
These next steps further extend the functionality of our form by adding a FormView control to provide Insert functionality through the ObjectDataSource.
1)	Add a FormView control beneath the GridView and give the FormView an ID of ProductInsertFormView.

2)	Set the DefaultMode property of the FormView to “Insert”.

3)	Click the smart tag for the ProductInsertFormView and for the “Choose Data Source” drop-down, select the ProductDataSource. Notice that once the Data Source is selected, the FormView’s contents are filled with controls appropriate for inserting Product items.

4)	Once more, click the FormView’s smart tag and choose Edit Templates.

5)	On the ProductDataSource, click the ellipsis for the InsertParameters property. This will open the “Parameter Collection Editor” dialog. In the dialog, add parameters for each Product property that can be null, as in the following screen shot.

6)	In the FormView’s smart tag, select the ProductDataSource as the FormView’s DataSource control.
7)	Set the DataKeyFields property for the FormView to “ProductID”.
8)	Set the DefaultMode property for the FormView to “Insert”.
9)	Click the FormView’s smart tag and select Edit Templates. Then, select the InsertItemTemplate to modify that template in the FormView.
10)	To present a “cleaner” view of the form’s textboxes, insert a table with nine rows and two columns just before the “ProductID:” text. Into each row’s cells, move the text and TextBox controls to produce the following layout.
a.	Make sure to delete the TextBox for the ProductID, as the ProductID will not be supplied by the user when inserting a new Product.
b.	Also, replace the TextBox controls for entering the Supplier and Category with DropDownList controls, configured in the same way that you did for the GridView.
11)	View the form in a browser window. Try to insert a row of data of valid data.
12)	Search for the newly added Product in the GridView and attempt to delete this Product; the delete should succeed because this new Product is not currently referenced in any customer sales.
Part 3 – Handle Errors for Insert, Update and Delete in Data-Bound Controls
When wiring up data bound controls to a system’s BLL through an ObjectDataSource, we need to account for the possibility of exceptions propagating up to the web form. The exceptions can be handled by events on the specific data bound controls (GirdView, FormView, etc.), or by event handlers hooked up to the ObjectDataSource.
In this part of the tutorial, we’ll see how we can set an event handler for the ObjectDataSource that will deal with exceptions for Insert, Update, and Delete actions.
1)	Add a label control above the GridView. Give it an ID of MessageLabel and make sure its Text property is empty.
2)	Select the ProductDataSource and view its properties. In the Property window, click the lightning bolt () to view the events that this control can raise.
3)	In the Deleted, Inserted and Updated events, type the name ProductDataSource_ExceptionHandler.
4)	Next, double-click either of these event names in the Property window. This will generate an event handler in the form’s code-behind that will be shared by the Deleted, Inserted and Updated events.
5)	In the event handler, modify it to contain the following code.
    protected void ProductDataSource_ExceptionHandler(object sender, ObjectDataSourceStatusEventArgs e)
    {
        if (e.Exception != null)
        {
            Exception rootCause = e.Exception;
            while (rootCause.InnerException != null)
                rootCause = rootCause.InnerException;

            MessageLabel.Text = rootCause.Message;
            e.ExceptionHandled = true;
        }
        else
        {
            MessageLabel.Text = "";
        }
    }

6)	View the form in a browser window. Try to perform a delete on an existing Product; the error should be caught by the code-behind event handler and reported in the MessageLabel.
Summary
In this hands-on tutorial, you learned how, with a little bit of code-behind for exception handling, to support the entire range of CRUD (Create, Read, Update, and Delete) functionality through the use of the ObjectDataSource and data bound controls.
Discussion Points
The following questions are designed to help you review key aspects of this tutorial
•

