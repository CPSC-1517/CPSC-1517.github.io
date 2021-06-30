(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{318:function(e,t,r){e.exports=r.p+"assets/img/65a79bacad56128241e52332894cdcf0.65a79bac.png"},435:function(e,t,r){"use strict";r.r(t);var v=r(42),o=Object(v.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("p",[v("strong",[e._v("Objectives:")])]),e._v(" "),v("p",[v("strong",[e._v("Discuss:")])]),e._v(" "),v("blockquote",[v("p",[e._v("Review Form Validation?")])]),e._v(" "),v("blockquote",[v("p",[e._v("Review CRUD concepts: Add, Update and Delete.")])]),e._v(" "),v("blockquote",[v("p",[e._v("Discuss different Deletes (physical vs logical).")])]),e._v(" "),v("p",[v("strong",[e._v("Code:")])]),e._v(" "),v("blockquote",[v("p",[e._v("Review Validation controls.")])]),e._v(" "),v("blockquote",[v("p",[e._v("BLL: Insert, Update and Delete routines")])]),e._v(" "),v("blockquote",[v("p",[e._v("WebPage: Insert, Update and Delete events.")])]),e._v(" "),v("p",[v("strong",[e._v("Resources: Student")])]),e._v(" "),v("p",[e._v("Moodle site.")]),e._v(" "),v("p",[e._v("URL Student Notes")]),e._v(" "),v("p",[v("strong",[e._v("Resources: Instructor")])]),e._v(" "),v("p",[e._v("Lesson 2: CRUD using EnityFramework for database access.")]),e._v(" "),v("p",[v("strong",[e._v("Concepts:")])]),e._v(" "),v("ol",[v("li",[v("p",[e._v("Quick review EntityFramework: entity definition: Validation annotations\nRequired,StringLength")])]),e._v(" "),v("li",[v("p",[e._v("Quick review of Validation Controls.")])]),e._v(" "),v("li",[v("p",[e._v("BLL controller classes:")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("Insert.")])]),e._v(" "),v("li",[v("p",[e._v("Update.")])]),e._v(" "),v("li",[v("p",[e._v("Delete (physical and logical, code both, comment out one of them)")])])])]),e._v(" "),v("li",[v("p",[e._v("Queries using EntityFramework")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("List All table records")])]),e._v(" "),v("li",[v("p",[e._v("Primary Key query")])])])])]),e._v(" "),v("p",[v("strong",[e._v("Validation: Form, Entity, and SQL")])]),e._v(" "),v("p",[e._v("Data entering the system should be validated. This can occur in one or more\nplaces. Validation controls on the web page can check data on the client side\nand on the server side. Logical checks can be on the server side. Logical checks\ncan be done in the BLL (Business Logic Layer) method. Constraints and checks can\nbe set up in your database table/procedure/triggers. One other place validation\ncan be done is in the mapping entity used by EntityFramework. Several\nannotations exist for validating. We have looked at two Required and\nStringLength.")]),e._v(" "),v("p",[e._v("Code:")]),e._v(" "),v("p",[e._v("Entity Definition Annotation:")]),e._v(" "),v("p",[e._v('[Required(ErrorMessage ="Product Name is required.")]')]),e._v(" "),v("p",[e._v('[StringLength(40,ErrorMessage ="Product Name is limited to 40 Characters.")]')]),e._v(" "),v("p",[e._v("public string ProductName { get; set; }")]),e._v(" "),v("p",[e._v('[StringLength(20, ErrorMessage = "Quantity per Unit is limited to 20'),v("br"),e._v('\nCharacters.")]')]),e._v(" "),v("p",[e._v("public string QuantityPerUnit { get; set; }")]),e._v(" "),v("p",[e._v("(For demonstration purposes, you may wish to limit the length to 10. Once you\nhave demonstrated the validation works, change the values back to their proper\nlength).")]),e._v(" "),v("p",[e._v("Web Page Validation (for demonstration purposes you could use Required and one\nCompare validator)")]),e._v(" "),v("p",[e._v("<br />")]),e._v(" "),v("p",[e._v('<asp:RequiredFieldValidator ID="RequiredFieldProductName" runat="server"')]),e._v(" "),v("p",[e._v('ErrorMessage="Product Name is required." Display="None"')]),e._v(" "),v("p",[e._v('SetFocusOnError="true" ForeColor="#990000" ControlToValidate="ProductName">')]),e._v(" "),v("p",[e._v("</asp:RequiredFieldValidator>")]),e._v(" "),v("p",[e._v('<asp:CompareValidator ID="CompareUnitPrice" runat="server"')]),e._v(" "),v("p",[e._v('ErrorMessage="Unit Price is a value greater or equal to 0.00" Display="None"')]),e._v(" "),v("p",[e._v('SetFocusOnError="true" ForeColor="#990000" Type="Double"')]),e._v(" "),v("p",[e._v('ControlToValidate="UnitPrice" Operator="GreaterThanEqual"'),v("br"),e._v('\nValueToCompare="0.00">')]),e._v(" "),v("p",[e._v("</asp:CompareValidator>")]),e._v(" "),v("p",[e._v('<asp:CompareValidator ID="CompareUnitsInStock" runat="server"')]),e._v(" "),v("p",[e._v('ErrorMessage="Units in Stock is a value greater or equal to 0" Display="None"')]),e._v(" "),v("p",[e._v('SetFocusOnError="true" ForeColor="#990000" Type="Integer"')]),e._v(" "),v("p",[e._v('ControlToValidate="UnitsInStock" Operator="GreaterThanEqual"'),v("br"),e._v('\nValueToCompare="0">')]),e._v(" "),v("p",[e._v("</asp:CompareValidator>")]),e._v(" "),v("p",[e._v('<asp:CompareValidator ID="CompareUnitsOnOrder" runat="server"')]),e._v(" "),v("p",[e._v('ErrorMessage="Units on Order is a value greater or equal to 0" Display="None"')]),e._v(" "),v("p",[e._v('SetFocusOnError="true" ForeColor="#990000" Type="Integer"')]),e._v(" "),v("p",[e._v('ControlToValidate="UnitsOnOrder" Operator="GreaterThanEqual"'),v("br"),e._v('\nValueToCompare="0">')]),e._v(" "),v("p",[e._v("</asp:CompareValidator>")]),e._v(" "),v("p",[e._v('<asp:CompareValidator ID="CompareReorderLevel" runat="server"')]),e._v(" "),v("p",[e._v('ErrorMessage="Reorder Level is a value greater or equal to 0" Display="None"')]),e._v(" "),v("p",[e._v('SetFocusOnError="true" ForeColor="#990000" Type="Integer"')]),e._v(" "),v("p",[e._v('ControlToValidate="ReorderLevel" Operator="GreaterThanEqual"'),v("br"),e._v('\nValueToCompare="0">')]),e._v(" "),v("p",[e._v("</asp:CompareValidator>")]),e._v(" "),v("p",[e._v('<asp:ValidationSummary ID="ValidationSummary1" runat="server"')]),e._v(" "),v("p",[e._v('HeaderText="Resolve the follow data errors:" CssClass="alert alert-danger" />')]),e._v(" "),v("p",[e._v("Event Code:")]),e._v(" "),v("p",[e._v("protected void AddProduct_Click(object sender, EventArgs e)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("if (Page.IsValid)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//verify a Supplier was selected for lookup")]),e._v(" "),v("p",[e._v("if (SupplierList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('Message.Text = "Please select a supplier for the product";')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else if (CategoryList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('Message.Text = "Please select a category for the product";')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("blockquote",[v("p",[e._v("{")])]),e._v(" "),v("blockquote",[v("p",[e._v("//CRUD code goes here")])]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("blockquote",[v("p",[e._v("}")])]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("SQL Attribute:")]),e._v(" "),v("p",[e._v("ProductName nvarchar(40) not null")]),e._v(" "),v("p",[e._v("QuantityPerUnit nvarchar(20) null")]),e._v(" "),v("p",[v("strong",[e._v("EntityFramework: BLL methods")])]),e._v(" "),v("p",[e._v("EntityFramework simplifies access to your database. EntityFramework will manage\nthe access of data to and from the database (aqua color). The DAL layer will\ncontain a class which will be referred to as the Context class. This class will\ninherit DbContext from EntityFramework. The commands to query, add, update and\ndelete records will be coded in the BLL classes using the DAL Context Class. The\nmapping of the sql tables will be done in the Entity classes of the Entity\nlibrary. These entity classes will be used by the DAL, BLL and PL layers. These\nclasses are data definitions of the sql tables.")]),e._v(" "),v("p",[v("img",{attrs:{src:r(318),alt:""}})]),e._v(" "),v("p",[v("strong",[e._v("Coding: Create BLL CRUD methods")])]),e._v(" "),v("p",[e._v("Interface methods are needed within the BLL controller to add, update and delete\nrows to/from sql tables via your DbContext class DbSet<T> properties. One nice\nthing about EFW is it likes to work at the entity level. This is convenient for\nus as we are inserting whole new rows, updating whole rows or deleting whole\nrows to/from our database.")]),e._v(" "),v("p",[e._v("Insert")]),e._v(" "),v("p",[e._v("public int Product_Add(Product item)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//start the insert transaction")]),e._v(" "),v("p",[e._v("using (var context = new NorthwindContext())")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//stage new record to DbSet<T> for commitment to database")]),e._v(" "),v("p",[e._v("context.Products.Add(item);")]),e._v(" "),v("p",[e._v("//commit new record to the database")]),e._v(" "),v("p",[e._v("//if this statement is not executed, insert is not")]),e._v(" "),v("p",[e._v("// completed in database (RollBack)")]),e._v(" "),v("p",[e._v("//new identity value is create on successful execution of")]),e._v(" "),v("p",[e._v("// this command, it is not created or available until")]),e._v(" "),v("p",[e._v("// this command completes")]),e._v(" "),v("p",[e._v("//during this command execution, any entity validation annotation")]),e._v(" "),v("p",[e._v("// is executed")]),e._v(" "),v("p",[e._v("context.SaveChanges();")]),e._v(" "),v("p",[e._v("//at this point, successful execution of SaveChanges() has occurred")]),e._v(" "),v("p",[e._v("//row has been committed to the database")]),e._v(" "),v("p",[e._v("//the new identity value is now available")]),e._v(" "),v("p",[e._v("//return the new identity value")]),e._v(" "),v("p",[e._v("return item.ProductID;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("Update")]),e._v(" "),v("p",[e._v("public int Product_Update(Product item)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//start the insert transaction")]),e._v(" "),v("p",[e._v("using (var context = new NorthwindContext())")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//stage record to DbSet<T> for commitment to database")]),e._v(" "),v("p",[e._v("context.Entry(item).State = System.Data.Entity.EntityState.Modified;")]),e._v(" "),v("p",[e._v("//commit new record to the database")]),e._v(" "),v("p",[e._v("//if this statement is not executed, update is not")]),e._v(" "),v("p",[e._v("// completed in database (RollBack)")]),e._v(" "),v("p",[e._v("//during this command execution, any entity validation annotation")]),e._v(" "),v("p",[e._v("// is executed")]),e._v(" "),v("p",[e._v("//the number of database rows affected is the return value")]),e._v(" "),v("p",[e._v("return context.SaveChanges();")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("Delete (physical vs logical: use one or the other)")]),e._v(" "),v("p",[e._v("public int Product_Delete(int productid)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//start the insert transaction")]),e._v(" "),v("p",[e._v("using (var context = new NorthwindContext())")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//physical delete")]),e._v(" "),v("p",[e._v("//find the existing record on the database that matches")]),e._v(" "),v("p",[e._v("// the supplied primary key value")]),e._v(" "),v("p",[e._v("var existing = context.Products.Find(productid);")]),e._v(" "),v("p",[e._v("//stage record of the DbSet<T> for removal from the database")]),e._v(" "),v("p",[e._v("context.Products.Remove(existing);")]),e._v(" "),v("p",[e._v("//commit record removal from the database")]),e._v(" "),v("p",[e._v("//if this statement is not executed, delete is not")]),e._v(" "),v("p",[e._v("// completed in database (RollBack)")]),e._v(" "),v("p",[e._v("//the number of database rows affected is the return value")]),e._v(" "),v("p",[e._v("return context.SaveChanges();")]),e._v(" "),v("p",[e._v("//logical delete")]),e._v(" "),v("p",[e._v("//find the existing record on the database that matches")]),e._v(" "),v("p",[e._v("// the supplied primary key value")]),e._v(" "),v("p",[e._v("var existing = context.Products.Find(productid);")]),e._v(" "),v("p",[e._v("//alter the appropriate field on the record which will")]),e._v(" "),v("p",[e._v("// apply the logic delete")]),e._v(" "),v("p",[e._v("existing.Discontinued = true;")]),e._v(" "),v("p",[e._v("//stage record of the DbSet<T> for update to the database")]),e._v(" "),v("p",[e._v("context.Entry(existing).State = System.Data.Entity.EntityState.Modified;")]),e._v(" "),v("p",[e._v("//commit record update to the database")]),e._v(" "),v("p",[e._v("//if this statement is not executed, delete is not")]),e._v(" "),v("p",[e._v("// completed in database (RollBack)")]),e._v(" "),v("p",[e._v("//the number of database rows affected is the return value")]),e._v(" "),v("p",[e._v("return context.SaveChanges();")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("The Delete method can either be physical or logical. In the physical delete, you\nwill use the .Remove(entity) method of the DbSet<T> property. For the logical\ndelete, you will actually do an update. Naturally, only one or the other is\nused.")]),e._v(" "),v("p",[e._v('Since there will be validation controls on the web form, some buttons will need\nto suppress validation. Add the property CausesValidation="false" to any button\nwhich should have validation suppressed.')]),e._v(" "),v("p",[v("strong",[e._v("Coding: Create WebPage CRUD methods")]),e._v(":")]),e._v(" "),v("p",[e._v("Implement the AddProduct event. Double click the Add linkbutton on the Design\nview.")]),e._v(" "),v("p",[e._v("protected void AddProduct_Click(object sender, EventArgs e)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("if (Page.IsValid)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//verify a Supplier was selected for lookup")]),e._v(" "),v("p",[e._v("if (SupplierList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a supplier for the product");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else if (CategoryList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a category for the product");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("try")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//connect to the required controller")]),e._v(" "),v("p",[e._v("ProductController sysmgr = new ProductController();")]),e._v(" "),v("p",[e._v("//create an instance for the data being collected")]),e._v(" "),v("p",[e._v("Product newProduct = new Product();")]),e._v(" "),v("p",[e._v("//load the instance with the data on the web form")]),e._v(" "),v("p",[e._v("newProduct.ProductName= ProductName.Text ;")]),e._v(" "),v("p",[e._v("newProduct.SupplierID = int.Parse(SupplierList.SelectedValue);")]),e._v(" "),v("p",[e._v("newProduct.CategoryID = int.Parse(CategoryList.SelectedValue);")]),e._v(" "),v("p",[e._v("newProduct.QuantityPerUnit ="),v("br"),e._v("\nstring.IsNullOrEmpty(QuantityPerUnit.Text)? null:"),v("br"),e._v("\nQuantityPerUnit.Text;")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitPrice.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitPrice = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitPrice = decimal.Parse(UnitPrice.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitsInStock.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitsInStock = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitsInStock = short.Parse(UnitsInStock.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitsOnOrder.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitsOnOrder = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.UnitsOnOrder = short.Parse(UnitsOnOrder.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(ReorderLevel.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.ReorderLevel = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("newProduct.ReorderLevel = short.Parse(ReorderLevel.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("newProduct.Discontinued = Discontinued.Checked;")]),e._v(" "),v("p",[e._v("//make your call and capture the new identity productid")]),e._v(" "),v("p",[e._v("int newProductID = sysmgr.Product_Add(newProduct);")]),e._v(" "),v("p",[e._v("//load the ProductID label control")]),e._v(" "),v("p",[e._v("ProductID.Text = newProductID.ToString();")]),e._v(" "),v("p",[e._v("//Refresh the dropdownlist to reflect the added record")]),e._v(" "),v("p",[e._v("BindProductList();")]),e._v(" "),v("p",[e._v("ProductList.SelectedValue = ProductID.Text;")]),e._v(" "),v("p",[e._v("//communicate to the user")]),e._v(" "),v("p",[e._v('errormsgs.Add("Product has been added to database.");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-success");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("blockquote",[v("p",[e._v("catch (DbUpdateException ex)")])]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("UpdateException updateException ="),v("br"),e._v("\n(UpdateException)ex.InnerException;")]),e._v(" "),v("p",[e._v("if (updateException.InnerException != null)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("blockquote",[v("p",[e._v("errormsgs.Add(updateException.InnerException.Message.ToString());")])]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(updateException.Message);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (DbEntityValidationException ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var entityValidationErrors in ex.EntityValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var validationError in"),v("br"),e._v("\nentityValidationErrors.ValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Error: " + validationError.ErrorMessage);')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (Exception ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(GetInnerException(ex).ToString());")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("Implement the UpdateProduct event. Double click the Update linkbutton on the\nDesign view. This method will be very similar to the Add. The differences are a)\ncheck for ProductID, b) load the ProductID with the rest of the data from the\nweb controls, and c) the Update call returns the number of rows affected. Test\nthe number of rows affected to ensure a records was actually updated. Remember,\nthis is a multi-user environment which means another user could have removed the\ncurrently editing record from the database between the Search and the Update.")]),e._v(" "),v("p",[e._v("protected void UpdateProduct_Click(object sender, EventArgs e)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("if (Page.IsValid)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(ProductID.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a product to update. Select and Search.");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("//verify a Supplier was selected for lookup")]),e._v(" "),v("p",[e._v("else if (SupplierList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a supplier for the product");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else if (CategoryList.SelectedIndex == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a category for the product");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("try")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//connect to the required controller")]),e._v(" "),v("p",[e._v("ProductController sysmgr = new ProductController();")]),e._v(" "),v("p",[e._v("//create an instance for the data being collected")]),e._v(" "),v("p",[e._v("Product theProduct = new Product();")]),e._v(" "),v("p",[e._v("//load the instance with the data on the web form")]),e._v(" "),v("p",[e._v("theProduct.ProductID = int.Parse(ProductID.Text);")]),e._v(" "),v("p",[e._v("theProduct.ProductName = ProductName.Text;")]),e._v(" "),v("p",[e._v("theProduct.SupplierID = int.Parse(SupplierList.SelectedValue);")]),e._v(" "),v("p",[e._v("theProduct.CategoryID = int.Parse(CategoryList.SelectedValue);")]),e._v(" "),v("p",[e._v("theProduct.QuantityPerUnit ="),v("br"),e._v("\nstring.IsNullOrEmpty(QuantityPerUnit.Text) ? null :")]),e._v(" "),v("p",[e._v("QuantityPerUnit.Text;")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitPrice.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitPrice = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitPrice = decimal.Parse(UnitPrice.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitsInStock.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitsInStock = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitsInStock = short.Parse(UnitsInStock.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(UnitsOnOrder.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitsOnOrder = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.UnitsOnOrder = short.Parse(UnitsOnOrder.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(ReorderLevel.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.ReorderLevel = null;")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("theProduct.ReorderLevel = short.Parse(ReorderLevel.Text);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("theProduct.Discontinued = Discontinued.Checked;")]),e._v(" "),v("p",[e._v("//make your call and capture the new identity productid")]),e._v(" "),v("p",[e._v("int rowsaffected = sysmgr.Product_Update(theProduct);")]),e._v(" "),v("p",[e._v("//test to determine if an update was done")]),e._v(" "),v("p",[e._v("if (rowsaffected == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('ProductID.Text = "";')]),e._v(" "),v("p",[e._v("//Refresh the dropdownlist to reflect the missing record")]),e._v(" "),v("p",[e._v("BindProductList();")]),e._v(" "),v("p",[e._v("//communicate to the user")]),e._v(" "),v("p",[e._v('errormsgs.Add("Product is no longer on the database. ");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-warning");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//Refresh the dropdownlist to reflect the missing record")]),e._v(" "),v("p",[e._v("BindProductList();")]),e._v(" "),v("p",[e._v("ProductList.SelectedValue = ProductID.Text;")]),e._v(" "),v("p",[e._v("//communicate to the user")]),e._v(" "),v("p",[e._v('errormsgs.Add("Product has been updated. ");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-success");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("blockquote",[v("p",[e._v("catch (DbUpdateException ex)")])]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("UpdateException updateException ="),v("br"),e._v("\n(UpdateException)ex.InnerException;")]),e._v(" "),v("p",[e._v("if (updateException.InnerException != null)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("blockquote",[v("p",[e._v("errormsgs.Add(updateException.InnerException.Message.ToString());")])]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(updateException.Message);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (DbEntityValidationException ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var entityValidationErrors in ex.EntityValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var validationError in"),v("br"),e._v("\nentityValidationErrors.ValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add(" Error: " + validationError.ErrorMessage);')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (Exception ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(GetInnerException(ex).ToString());")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("Implement the DeleteProduct event. Double click the Delete linkbutton on the\nDesign view. The delete of the product record will be an update to the\nDiscontinued flag. The delete needs only to send the productid to the BLL\nmethod. The setting of the Discontinued field should not be left to the user to\nremember or figure out.")]),e._v(" "),v("p",[e._v("Add an ajax confirmation button extender to the Delete linkbutton.")]),e._v(" "),v("p",[e._v("protected void RemoveProduct_Click(object sender, EventArgs e)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("if (string.IsNullOrEmpty(ProductID.Text))")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add("Please select a product to update. Select and Search.");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-info");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("try")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//connect to the required controller")]),e._v(" "),v("p",[e._v("ProductController sysmgr = new ProductController();")]),e._v(" "),v("p",[e._v("//make your call and capture the new identity productid")]),e._v(" "),v("p",[e._v("int rowsaffected = sysmgr.Product_Delete(int.Parse(ProductID.Text));")]),e._v(" "),v("p",[e._v("//test to determine if an update was done")]),e._v(" "),v("p",[e._v("if (rowsaffected == 0)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('ProductID.Text = "";')]),e._v(" "),v("p",[e._v("//Refresh the dropdownlist to reflect the missing record")]),e._v(" "),v("p",[e._v("BindProductList();")]),e._v(" "),v("p",[e._v("//communicate to the user")]),e._v(" "),v("p",[e._v('errormsgs.Add("Product is no longer on the database. ");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-warning");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("//Refresh the dropdownlist to reflect the missing record")]),e._v(" "),v("p",[e._v("BindProductList();")]),e._v(" "),v("p",[e._v('ProductID.Text = "";')]),e._v(" "),v("p",[e._v("Discontinued.Checked = true;")]),e._v(" "),v("p",[e._v("//communicate to the user")]),e._v(" "),v("p",[e._v('errormsgs.Add("Product has been discontinued. ");')]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-success");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("blockquote",[v("p",[e._v("catch (DbUpdateException ex)")])]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("UpdateException updateException ="),v("br"),e._v("\n(UpdateException)ex.InnerException;")]),e._v(" "),v("p",[e._v("if (updateException.InnerException != null)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("blockquote",[v("p",[e._v("errormsgs.Add(updateException.InnerException.Message.ToString());")])]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("else")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(updateException.Message);")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (DbEntityValidationException ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var entityValidationErrors in ex.EntityValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("foreach (var validationError in"),v("br"),e._v("\nentityValidationErrors.ValidationErrors)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v('errormsgs.Add(" Error: " + validationError.ErrorMessage);')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("catch (Exception ex)")]),e._v(" "),v("p",[e._v("{")]),e._v(" "),v("p",[e._v("errormsgs.Add(GetInnerException(ex).ToString());")]),e._v(" "),v("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-danger");')]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")]),e._v(" "),v("p",[e._v("}")])])}),[],!1,null,null,null);t.default=o.exports}}]);