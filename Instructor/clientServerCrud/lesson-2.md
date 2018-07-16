---
title: "Lesson Plan: Day 2"
---

**Objectives:**

**Discuss:**

>   Review Form Validation?

>   Review CRUD concepts: Add, Update and Delete.

>   Discuss different Deletes (physical vs logical).

**Code:**

>   Review Validation controls.

>   BLL: Insert, Update and Delete routines

>   WebPage: Insert, Update and Delete events.

**Resources: Student**

Moodle site.

URL Student Notes

**Resources: Instructor**

Lesson 2: CRUD using EnityFramework for database access.

**Concepts:**

1. Quick review EntityFramework: entity definition: Validation annotations
    Required,StringLength

2. Quick review of Validation Controls.

3. BLL controller classes:

    -   Insert.

    -   Update.

    -   Delete (physical and logical, code both, comment out one of them)

4. Queries using EntityFramework

    -   List All table records

    -   Primary Key query

**Validation: Form, Entity, and SQL**

Data entering the system should be validated. This can occur in one or more
places. Validation controls on the web page can check data on the client side
and on the server side. Logical checks can be on the server side. Logical checks
can be done in the BLL (Business Logic Layer) method. Constraints and checks can
be set up in your database table/procedure/triggers. One other place validation
can be done is in the mapping entity used by EntityFramework. Several
annotations exist for validating. We have looked at two Required and
StringLength.

Code:

Entity Definition Annotation:

[Required(ErrorMessage ="Product Name is required.")]

[StringLength(40,ErrorMessage ="Product Name is limited to 40 Characters.")]

public string ProductName { get; set; }

[StringLength(20, ErrorMessage = "Quantity per Unit is limited to 20  
Characters.")]

public string QuantityPerUnit { get; set; }

(For demonstration purposes, you may wish to limit the length to 10. Once you
have demonstrated the validation works, change the values back to their proper
length).

Web Page Validation (for demonstration purposes you could use Required and one
Compare validator)

\<br /\>

\<asp:RequiredFieldValidator ID="RequiredFieldProductName" runat="server"

ErrorMessage="Product Name is required." Display="None"

SetFocusOnError="true" ForeColor="\#990000" ControlToValidate="ProductName"\>

\</asp:RequiredFieldValidator\>

\<asp:CompareValidator ID="CompareUnitPrice" runat="server"

ErrorMessage="Unit Price is a value greater or equal to 0.00" Display="None"

SetFocusOnError="true" ForeColor="\#990000" Type="Double"

ControlToValidate="UnitPrice" Operator="GreaterThanEqual"  
ValueToCompare="0.00"\>

\</asp:CompareValidator\>

\<asp:CompareValidator ID="CompareUnitsInStock" runat="server"

ErrorMessage="Units in Stock is a value greater or equal to 0" Display="None"

SetFocusOnError="true" ForeColor="\#990000" Type="Integer"

ControlToValidate="UnitsInStock" Operator="GreaterThanEqual"  
ValueToCompare="0"\>

\</asp:CompareValidator\>

\<asp:CompareValidator ID="CompareUnitsOnOrder" runat="server"

ErrorMessage="Units on Order is a value greater or equal to 0" Display="None"

SetFocusOnError="true" ForeColor="\#990000" Type="Integer"

ControlToValidate="UnitsOnOrder" Operator="GreaterThanEqual"  
ValueToCompare="0"\>

\</asp:CompareValidator\>

\<asp:CompareValidator ID="CompareReorderLevel" runat="server"

ErrorMessage="Reorder Level is a value greater or equal to 0" Display="None"

SetFocusOnError="true" ForeColor="\#990000" Type="Integer"

ControlToValidate="ReorderLevel" Operator="GreaterThanEqual"  
ValueToCompare="0"\>

\</asp:CompareValidator\>

\<asp:ValidationSummary ID="ValidationSummary1" runat="server"

HeaderText="Resolve the follow data errors:" CssClass="alert alert-danger" /\>

Event Code:

protected void AddProduct_Click(object sender, EventArgs e)

{

if (Page.IsValid)

{

//verify a Supplier was selected for lookup

if (SupplierList.SelectedIndex == 0)

{

Message.Text = "Please select a supplier for the product";

}

else if (CategoryList.SelectedIndex == 0)

{

Message.Text = "Please select a category for the product";

}

else

>   {

>   //CRUD code goes here

}

>   }

}

SQL Attribute:

ProductName nvarchar(40) not null

QuantityPerUnit nvarchar(20) null

**EntityFramework: BLL methods**

EntityFramework simplifies access to your database. EntityFramework will manage
the access of data to and from the database (aqua color). The DAL layer will
contain a class which will be referred to as the Context class. This class will
inherit DbContext from EntityFramework. The commands to query, add, update and
delete records will be coded in the BLL classes using the DAL Context Class. The
mapping of the sql tables will be done in the Entity classes of the Entity
library. These entity classes will be used by the DAL, BLL and PL layers. These
classes are data definitions of the sql tables.

![](./media/65a79bacad56128241e52332894cdcf0.png)

**Coding: Create BLL CRUD methods**

Interface methods are needed within the BLL controller to add, update and delete
rows to/from sql tables via your DbContext class DbSet\<T\> properties. One nice
thing about EFW is it likes to work at the entity level. This is convenient for
us as we are inserting whole new rows, updating whole rows or deleting whole
rows to/from our database.

Insert

public int Product_Add(Product item)

{

//start the insert transaction

using (var context = new NorthwindContext())

{

//stage new record to DbSet\<T\> for commitment to database

context.Products.Add(item);

//commit new record to the database

//if this statement is not executed, insert is not

// completed in database (RollBack)

//new identity value is create on successful execution of

// this command, it is not created or available until

// this command completes

//during this command execution, any entity validation annotation

// is executed

context.SaveChanges();

//at this point, successful execution of SaveChanges() has occurred

//row has been committed to the database

//the new identity value is now available

//return the new identity value

return item.ProductID;

}

}

Update

public int Product_Update(Product item)

{

//start the insert transaction

using (var context = new NorthwindContext())

{

//stage record to DbSet\<T\> for commitment to database

context.Entry(item).State = System.Data.Entity.EntityState.Modified;

//commit new record to the database

//if this statement is not executed, update is not

// completed in database (RollBack)

//during this command execution, any entity validation annotation

// is executed

//the number of database rows affected is the return value

return context.SaveChanges();

}

}

Delete (physical vs logical: use one or the other)

public int Product_Delete(int productid)

{

//start the insert transaction

using (var context = new NorthwindContext())

{

//physical delete

//find the existing record on the database that matches

// the supplied primary key value

var existing = context.Products.Find(productid);

//stage record of the DbSet\<T\> for removal from the database

context.Products.Remove(existing);

//commit record removal from the database

//if this statement is not executed, delete is not

// completed in database (RollBack)

//the number of database rows affected is the return value

return context.SaveChanges();

//logical delete

//find the existing record on the database that matches

// the supplied primary key value

var existing = context.Products.Find(productid);

//alter the appropriate field on the record which will

// apply the logic delete

existing.Discontinued = true;

//stage record of the DbSet\<T\> for update to the database

context.Entry(existing).State = System.Data.Entity.EntityState.Modified;

//commit record update to the database

//if this statement is not executed, delete is not

// completed in database (RollBack)

//the number of database rows affected is the return value

return context.SaveChanges();

}

}

The Delete method can either be physical or logical. In the physical delete, you
will use the .Remove(entity) method of the DbSet\<T\> property. For the logical
delete, you will actually do an update. Naturally, only one or the other is
used.

Since there will be validation controls on the web form, some buttons will need
to suppress validation. Add the property CausesValidation="false" to any button
which should have validation suppressed.

**Coding: Create WebPage CRUD methods**:

Implement the AddProduct event. Double click the Add linkbutton on the Design
view.

protected void AddProduct_Click(object sender, EventArgs e)

{

if (Page.IsValid)

{

//verify a Supplier was selected for lookup

if (SupplierList.SelectedIndex == 0)

{

errormsgs.Add("Please select a supplier for the product");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

else if (CategoryList.SelectedIndex == 0)

{

errormsgs.Add("Please select a category for the product");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

else

{

try

{

//connect to the required controller

ProductController sysmgr = new ProductController();

//create an instance for the data being collected

Product newProduct = new Product();

//load the instance with the data on the web form

newProduct.ProductName= ProductName.Text ;

newProduct.SupplierID = int.Parse(SupplierList.SelectedValue);

newProduct.CategoryID = int.Parse(CategoryList.SelectedValue);

newProduct.QuantityPerUnit =  
string.IsNullOrEmpty(QuantityPerUnit.Text)? null:  
QuantityPerUnit.Text;

if (string.IsNullOrEmpty(UnitPrice.Text))

{

newProduct.UnitPrice = null;

}

else

{

newProduct.UnitPrice = decimal.Parse(UnitPrice.Text);

}

if (string.IsNullOrEmpty(UnitsInStock.Text))

{

newProduct.UnitsInStock = null;

}

else

{

newProduct.UnitsInStock = short.Parse(UnitsInStock.Text);

}

if (string.IsNullOrEmpty(UnitsOnOrder.Text))

{

newProduct.UnitsOnOrder = null;

}

else

{

newProduct.UnitsOnOrder = short.Parse(UnitsOnOrder.Text);

}

if (string.IsNullOrEmpty(ReorderLevel.Text))

{

newProduct.ReorderLevel = null;

}

else

{

newProduct.ReorderLevel = short.Parse(ReorderLevel.Text);

}

newProduct.Discontinued = Discontinued.Checked;

//make your call and capture the new identity productid

int newProductID = sysmgr.Product_Add(newProduct);

//load the ProductID label control

ProductID.Text = newProductID.ToString();

//Refresh the dropdownlist to reflect the added record

BindProductList();

ProductList.SelectedValue = ProductID.Text;

//communicate to the user

errormsgs.Add("Product has been added to database.");

LoadMessageDisplay(errormsgs, "alert alert-success");

}

>   catch (DbUpdateException ex)

{

UpdateException updateException =  
(UpdateException)ex.InnerException;

if (updateException.InnerException != null)

{

>   errormsgs.Add(updateException.InnerException.Message.ToString());

}

else

{

errormsgs.Add(updateException.Message);

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (DbEntityValidationException ex)

{

foreach (var entityValidationErrors in ex.EntityValidationErrors)

{

foreach (var validationError in  
entityValidationErrors.ValidationErrors)

{

errormsgs.Add("Error: " + validationError.ErrorMessage);

}

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

}

}

}

Implement the UpdateProduct event. Double click the Update linkbutton on the
Design view. This method will be very similar to the Add. The differences are a)
check for ProductID, b) load the ProductID with the rest of the data from the
web controls, and c) the Update call returns the number of rows affected. Test
the number of rows affected to ensure a records was actually updated. Remember,
this is a multi-user environment which means another user could have removed the
currently editing record from the database between the Search and the Update.

protected void UpdateProduct_Click(object sender, EventArgs e)

{

if (Page.IsValid)

{

if (string.IsNullOrEmpty(ProductID.Text))

{

errormsgs.Add("Please select a product to update. Select and Search.");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

//verify a Supplier was selected for lookup

else if (SupplierList.SelectedIndex == 0)

{

errormsgs.Add("Please select a supplier for the product");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

else if (CategoryList.SelectedIndex == 0)

{

errormsgs.Add("Please select a category for the product");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

else

{

try

{

//connect to the required controller

ProductController sysmgr = new ProductController();

//create an instance for the data being collected

Product theProduct = new Product();

//load the instance with the data on the web form

theProduct.ProductID = int.Parse(ProductID.Text);

theProduct.ProductName = ProductName.Text;

theProduct.SupplierID = int.Parse(SupplierList.SelectedValue);

theProduct.CategoryID = int.Parse(CategoryList.SelectedValue);

theProduct.QuantityPerUnit =  
string.IsNullOrEmpty(QuantityPerUnit.Text) ? null :

QuantityPerUnit.Text;

if (string.IsNullOrEmpty(UnitPrice.Text))

{

theProduct.UnitPrice = null;

}

else

{

theProduct.UnitPrice = decimal.Parse(UnitPrice.Text);

}

if (string.IsNullOrEmpty(UnitsInStock.Text))

{

theProduct.UnitsInStock = null;

}

else

{

theProduct.UnitsInStock = short.Parse(UnitsInStock.Text);

}

if (string.IsNullOrEmpty(UnitsOnOrder.Text))

{

theProduct.UnitsOnOrder = null;

}

else

{

theProduct.UnitsOnOrder = short.Parse(UnitsOnOrder.Text);

}

if (string.IsNullOrEmpty(ReorderLevel.Text))

{

theProduct.ReorderLevel = null;

}

else

{

theProduct.ReorderLevel = short.Parse(ReorderLevel.Text);

}

theProduct.Discontinued = Discontinued.Checked;

//make your call and capture the new identity productid

int rowsaffected = sysmgr.Product_Update(theProduct);

//test to determine if an update was done

if (rowsaffected == 0)

{

ProductID.Text = "";

//Refresh the dropdownlist to reflect the missing record

BindProductList();

//communicate to the user

errormsgs.Add("Product is no longer on the database. ");

LoadMessageDisplay(errormsgs, "alert alert-warning");

}

else

{

//Refresh the dropdownlist to reflect the missing record

BindProductList();

ProductList.SelectedValue = ProductID.Text;

//communicate to the user

errormsgs.Add("Product has been updated. ");

LoadMessageDisplay(errormsgs, "alert alert-success");

}

}

>   catch (DbUpdateException ex)

{

UpdateException updateException =  
(UpdateException)ex.InnerException;

if (updateException.InnerException != null)

{

>   errormsgs.Add(updateException.InnerException.Message.ToString());

}

else

{

errormsgs.Add(updateException.Message);

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (DbEntityValidationException ex)

{

foreach (var entityValidationErrors in ex.EntityValidationErrors)

{

foreach (var validationError in  
entityValidationErrors.ValidationErrors)

{

errormsgs.Add(" Error: " + validationError.ErrorMessage);

}

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

}

}

}

Implement the DeleteProduct event. Double click the Delete linkbutton on the
Design view. The delete of the product record will be an update to the
Discontinued flag. The delete needs only to send the productid to the BLL
method. The setting of the Discontinued field should not be left to the user to
remember or figure out.

Add an ajax confirmation button extender to the Delete linkbutton.

protected void RemoveProduct_Click(object sender, EventArgs e)

{

if (string.IsNullOrEmpty(ProductID.Text))

{

errormsgs.Add("Please select a product to update. Select and Search.");

LoadMessageDisplay(errormsgs, "alert alert-info");

}

else

{

try

{

//connect to the required controller

ProductController sysmgr = new ProductController();

//make your call and capture the new identity productid

int rowsaffected = sysmgr.Product_Delete(int.Parse(ProductID.Text));

//test to determine if an update was done

if (rowsaffected == 0)

{

ProductID.Text = "";

//Refresh the dropdownlist to reflect the missing record

BindProductList();

//communicate to the user

errormsgs.Add("Product is no longer on the database. ");

LoadMessageDisplay(errormsgs, "alert alert-warning");

}

else

{

//Refresh the dropdownlist to reflect the missing record

BindProductList();

ProductID.Text = "";

Discontinued.Checked = true;

//communicate to the user

errormsgs.Add("Product has been discontinued. ");

LoadMessageDisplay(errormsgs, "alert alert-success");

}

}

>   catch (DbUpdateException ex)

{

UpdateException updateException =  
(UpdateException)ex.InnerException;

if (updateException.InnerException != null)

{

>   errormsgs.Add(updateException.InnerException.Message.ToString());

}

else

{

errormsgs.Add(updateException.Message);

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (DbEntityValidationException ex)

{

foreach (var entityValidationErrors in ex.EntityValidationErrors)

{

foreach (var validationError in  
entityValidationErrors.ValidationErrors)

{

errormsgs.Add(" Error: " + validationError.ErrorMessage);

}

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

}

}
