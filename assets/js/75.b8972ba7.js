(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{213:function(e,t,o){e.exports=o.p+"assets/img/fa45d163ca33085bcf9f4beb60f0dc80.fa45d163.png"},214:function(e,t,o){e.exports=o.p+"assets/img/a27f8ac20e804e48e9071feebb925dc1.a27f8ac2.png"},215:function(e,t,o){e.exports=o.p+"assets/img/e41f7b00c13bfb62f6dec37276dde455.e41f7b00.png"},260:function(e,t,o){"use strict";o.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[r("strong",[e._v("Objectives:")])]),r("p",[r("strong",[e._v("Discuss:")])]),r("blockquote",[r("p",[e._v("CRUD: Update and Delete?")])]),r("blockquote",[r("p",[e._v("Why lookup first?")])]),r("blockquote",[r("p",[e._v("Difference between Insert and Update?")])]),r("blockquote",[r("p",[e._v("Confirmation on Delete.")])]),r("p",[r("strong",[e._v("Code:")])]),r("blockquote",[r("p",[e._v("Demonstrate Product Update and Delete.")])]),r("p",[r("strong",[e._v("Resources: Student")])]),r("p",[e._v("Moodle site.")]),r("p",[e._v("URL Student Notes")]),r("p",[e._v("Starting Kit for Product Update and Delete")]),r("p",[r("strong",[e._v("Resources: Instructor")])]),r("p",[e._v("Lesson 4: CRUD Update and Delete.")]),r("p",[r("strong",[e._v("Concepts:")])]),r("ol",[r("li",[r("p",[e._v("What is CRUD: Update and Delete")])]),r("li",[r("p",[e._v("Lookup for current data before actions")])]),r("li",[r("p",[e._v("Using various techniques for CURD: Delete")]),r("ul",[r("li",[r("p",[e._v("Physical removal of a record")])]),r("li",[r("p",[e._v("Logical removal of a record")])]),r("li",[r("p",[e._v("Confirmation of a delete action")])])])]),r("li",[r("p",[e._v("Review Lookup techniques")]),r("ul",[r("li",[r("p",[e._v("Using a DropDownList (very small collection, pkey and description text)")])]),r("li",[r("p",[e._v("Using a Textbox (known pkey say of a bill number)")])]),r("li",[r("p",[e._v("Multiple step lookup (as a search string for a more refined list to"),r("br"),e._v("\nchose from)")])])])]),r("li",[r("p",[e._v("Processing page: basic validation for update, no validation for delete")])])]),r("p",[r("strong",[e._v("Discuss CRUD.")])]),r("p",[e._v("CRUD stands for Create (insert), Read (queries), Update and Delete. Insert"),r("br"),e._v("\nplaces a record on the database, update alters a record on a database, and"),r("br"),e._v("\ndelete physically removes a record from the database. CRUD is usually use when"),r("br"),e._v("\ndiscussing the maintenance of a single record. When your processing involves"),r("br"),e._v("\naltering multiple tables, it is usually referred to as an Online Transaction"),r("br"),e._v("\nProcess (OLTP). OLTP will be covered in the next programming course.")]),r("p",[e._v("Update is very similar to inserting. The difference is the update includes the"),r("br"),e._v("\nprimary key processing for identity primary keys. The Primary Key should be"),r("br"),e._v("\ndisplayed in read-only field and was filled during a lookup.")]),r("p",[e._v("Stress that testing needs to be done on the success of an apparent update or"),r("br"),e._v("\ndelete.")]),r("p",[r("img",{attrs:{src:o(215),alt:""}})]),r("p",[e._v("Delete can be logically implemented by using a flag. You may not wish to"),r("br"),e._v("\nphysically remove a record from the database because of foreign key constraints."),r("br"),e._v("\nIf you remove the record, you may need to remove other records. This may lead to"),r("br"),e._v("\na loss of valuable historical information (such as pass sales trends, customer"),r("br"),e._v("\npurchasing trends, etc). So to indicate that a particular record is not to be"),r("br"),e._v("\nfurther used in processing a flag is set. Example, a product has become"),r("br"),e._v("\ndiscontinued. You do not wish to display it anymore to customers. You cannot"),r("br"),e._v("\nphysically remove the record without removing all other data associated with it"),r("br"),e._v("\n(foreign key constraints). So, the product record has a logical flag that"),r("br"),e._v("\nindicates whether to use the record, let’s say the attribute is called"),r("br"),e._v("\nDiscontinued. If the attribute is false, the product can be shown for sale; if"),r("br"),e._v("\ntrue, not shown. Once the attribute is true, queries do not return it for"),r("br"),e._v("\nviewing, therefore, no new sales are generated.")]),r("p",[e._v("So, how to handle a logical delete. It becomes an update.")]),r("p",[r("strong",[e._v("Coding: Down Load ProductEdit startup kit")])]),r("ul",[r("li",[r("p",[e._v("Down load the ProductEdit starter kit zip file, unzip and move"),r("br"),e._v("\nProductSearch.cshtml and ProductEdit.cshtml under the DBPages folder of the"),r("br"),e._v("\nclass demonstration solution.")])]),r("li",[r("p",[e._v("Open the file containing your website menu (_Menu.cshtml).")])]),r("li",[r("p",[e._v("Create another a menu item to page called ProductSearch.cshtml in a folder"),r("br"),e._v("\ncalled DBPages.")])])]),r("p",[r("strong",[e._v("Coding: ProductSearch.cshtml")])]),r("ul",[r("li",[r("p",[e._v("This page works without any changes.")])]),r("li",[r("p",[e._v("Partial string lookup: discuss the creation of the partial string variable."),r("br"),e._v("\nA great way to prevent sql injection attack when using the .Query() with a"),r("br"),e._v("\nparameter.")])]),r("li",[r("p",[e._v("WebGrid in a form. If(IsPost) within a form.")])]),r("li",[r("p",[e._v("Review passing data from one page to another")])]),r("li",[r("p",[e._v("Because WebGrid is in a form, javascript is needed to do proper paging (just"),r("br"),e._v("\nseems to be the way to go to solve paging problem). This is different then a"),r("br"),e._v("\nWebGrid "),r("em",[e._v("not")]),e._v(" in a form.")])])]),r("blockquote",[r("p",[e._v("@* Since the webgrid is in the form (method:post), the webgrid's"),r("br"),e._v("\nmethod:Get used")])]),r("blockquote",[r("p",[e._v("for paging has a problem.")])]),r("blockquote",[r("p",[e._v("The following script cause a post to happen on the webgrid's paging even"),r("br"),e._v("\n*@")])]),r("blockquote",[r("p",[e._v('<script type="text/javascript">')])]),r("blockquote",[r("p",[e._v("var links = $('a[href*=page], a[href*=sort]'), form = $('form');")])]),r("blockquote",[r("p",[e._v("links.click(function () {")])]),r("blockquote",[r("p",[e._v('form.attr("action", this.href);')])]),r("blockquote",[r("p",[e._v('$(this).attr("href","javascript:");')])]),r("blockquote",[r("p",[e._v("form.submit();")])]),r("blockquote",[r("p",[e._v("});")])]),r("blockquote",[r("p",[e._v("<\/script>")])]),r("p",[r("img",{attrs:{src:o(214),alt:""}})]),r("p",[r("img",{attrs:{src:o(213),alt:""}})]),r("p",[r("strong",[e._v("Coding: ProductEdit.cshtml")])]),r("ul",[r("li",[r("p",[e._v("Two column form labels and controls")])]),r("li",[r("p",[e._v("Labels aligned right (text-right)")])]),r("li",[r("p",[e._v("Controls default aligned left.")])]),r("li",[r("p",[e._v("Put in value attribute but leave blank until processing is coded")])]),r("li",[r("p",[e._v("Pre-coded pass data retrieval (.QueryString[“label”] (review).")])]),r("li",[r("p",[e._v("Input control retrieval. Handling of checkbox, converting null (unchecked)"),r("br"),e._v("\nto 0. Assign incoming ProductID value to local variable for primary lookup.")])]),r("li",[r("p",[e._v("Lookup of data (Suppliers, Category, and Product record).")])]),r("li",[r("p",[e._v("Validation in place.")])]),r("li",[r("p",[e._v("An else of the if(IsPost) loads the current database values for the record"),r("br"),e._v("\nthat is to be edited or deleted.")])])]),r("p",[r("strong",[e._v("Coding: Additional Processing to be added")])]),r("p",[e._v("Add a local variable to catch the value of the submit button.")]),r("p",[e._v("The processing of this form will replace the HTML paragraph "),r("strong",[e._v("<p>your coding"),r("br"),e._v("\ngoes here</p>")]),e._v(".")]),r("p",[e._v("Create a branched If/Else if to process the 3 buttons. Put simply paragraph text"),r("br"),e._v("\nas process (<p>your xxxx coding goes here</p>) where xxxx is Cancel, Update"),r("br"),e._v("\nor Delete. Run to ensure this works.")]),r("p",[e._v('if (formbutton.Equals("cancel"))')]),r("p",[e._v("{")]),r("p",[e._v("<p>your cancel coding goes here</p>")]),r("p",[e._v("}")]),r("p",[e._v('else if (formbutton.Equals("update"))')]),r("p",[e._v("{")]),r("p",[e._v("<p>your update coding goes here</p>")]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("<p>your delete coding goes here</p>")]),r("p",[e._v("}")]),r("p",[r("strong",[e._v("Cancel Event")]),e._v(".")]),r("p",[e._v("Replace the temporary html paragraph the following code.")]),r("p",[e._v("//a)could redirect to search page")]),r("p",[e._v("//b)reset data to the current record for productid")]),r("p",[e._v("//c)empty the data fields.")]),r("p",[e._v("//for b and c you should also supply a message to the user")]),r("p",[e._v('productid = "";')]),r("p",[e._v('productname = "";')]),r("p",[e._v('supplierid = "0";')]),r("p",[e._v('categoryid = "0";')]),r("p",[e._v('quantityperunit = "";')]),r("p",[e._v('unitprice = "";')]),r("p",[e._v('unitsinstock = "";')]),r("p",[e._v('unitsonorder ="";')]),r("p",[e._v('reorderlevel = "";')]),r("p",[e._v('discontinued = "0";')]),r("p",[e._v('<p><span style="color:blue">')]),r("p",[e._v("User has cancel the action. Return to search for another product</span>")]),r("p",[e._v('<a href="~/DBPages/ProductSearch.cshtml">go to search...</a></p>')]),r("p",[r("strong",[e._v("Update Event")]),e._v(".")]),r("p",[e._v("The primary key will already be loaded in a read-only input control when the"),r("br"),e._v("\nform first comes up (as will the other record data). Since the user should not"),r("br"),e._v("\nbe able to change this in normal usage there should be no concern. However, it"),r("br"),e._v("\nis those individuals who attempt to disrupt your site for which you need to be"),r("br"),e._v("\non alert. As such, it is always good practice to ensure this value still exists"),r("br"),e._v("\nbefore attempting any other processing. So, check to see if the primary key"),r("br"),e._v("\nexists. If not produce a message and stop the processing.")]),r("p",[e._v("If you do have the pkey value, then execute your server side validation.")]),r("p",[e._v("If the validation is successful, you can update your record. Create the update"),r("br"),e._v("\nsql command (very similar to the insert command). Execute the command this time"),r("br"),e._v("\ncapturing the integer result of the .Execute(). This value indicates how many"),r("br"),e._v("\nrecords were affected. This value should be one (with an update that is not"),r("br"),e._v("\nbased on the pkey, say a general 10% increase in unit price, the value could be"),r("br"),e._v("\n>1). It however, could be zero. Why? Well, between the time the user first"),r("br"),e._v("\nlooked up the record and their actual update, the record could have been removed"),r("br"),e._v("\nfrom the data base. Assume, the user looked up the record, was interrupted by a"),r("br"),e._v("\nphone call (30 minutes), and then did the update. What happened in that 30"),r("br"),e._v("\nminutes? Remember this is a multiple user on-line website. So, if the affected"),r("br"),e._v("\nvalued is > 0, a record was changed successfully. If the affected value is zero"),r("br"),e._v("\n(0), no record was changed but, also, no exception was encountered. Appropriate"),r("br"),e._v("\nmessages should be created in both cases. Of course, the hold update is encase"),r("br"),e._v("\nin a Try/Catch.")]),r("p",[e._v("//check is there a productid to update")]),r("p",[e._v("//if not message to use to get new product")]),r("p",[e._v("//if present")]),r("p",[e._v("// cause validations")]),r("p",[e._v("// if valid")]),r("p",[e._v("// create update command")]),r("p",[e._v("// execute")]),r("p",[e._v("// message")]),r("p",[e._v("// wrap in try/catch")]),r("p",[e._v("if (string.IsNullOrEmpty(productid))")]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:blue">')]),r("p",[e._v("No product selected. Return to search for another product")]),r("p",[e._v("</span>")]),r("p",[e._v('<a href="~/DBPages/ProductSearch.cshtml">go to search...</a>')]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("if (Validation.IsValid())")]),r("p",[e._v("{")]),r("p",[e._v("try")]),r("p",[e._v("{")]),r("p",[e._v('var updatecommmand = "UPDATE Products SET "')]),r("p",[e._v('+ "ProductName = @0, "')]),r("p",[e._v('+ "SupplierID = @1, "')]),r("p",[e._v('+ "CategoryID = @2, "')]),r("p",[e._v('+ "QuantityPerUnit = @3, "')]),r("p",[e._v('+ "UnitPrice = @4, "')]),r("p",[e._v('+ "UnitsInStock = @5, "')]),r("p",[e._v('+ "UnitsOnOrder = @6, "')]),r("p",[e._v('+ "ReorderLevel = @7, "')]),r("p",[e._v('+ "Discontinued = @8 "')]),r("p",[e._v('+ "WHERE ProductID = @9";')]),r("p",[e._v("//the placeholders expect a value not to be confused")]),r("p",[e._v("// with a character string")]),r("p",[e._v('//the null (as a value) is NOT equal to "null" which is a string')]),r("p",[e._v("int results = db.Execute(updatecommmand, productname,")]),r("p",[e._v('supplierid == "0" ? null : supplierid,')]),r("p",[e._v('categoryid == "0" ? null : categoryid,')]),r("p",[e._v("string.IsNullOrEmpty(quantityperunit) ? null : quantityperunit,")]),r("p",[e._v("string.IsNullOrEmpty(unitprice) ? null : unitprice,")]),r("p",[e._v("string.IsNullOrEmpty(unitsinstock) ? null : unitsinstock,")]),r("p",[e._v("string.IsNullOrEmpty(unitsonorder) ? null : unitsonorder,")]),r("p",[e._v("string.IsNullOrEmpty(reorderlevel) ? null : reorderlevel,")]),r("p",[e._v("discontinued, productid);")]),r("p",[e._v("if (results > 0)")]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:green">Product updated. </span></p>')]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:blue">')]),r("p",[e._v("Update failed. No product called @productname with an id of @productid"),r("br"),e._v("\non file. </span>")]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("catch (Exception ex)")]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:blue">Deleted failed. Error'),r("br"),e._v("\n@ex.Message</span></p>")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[r("strong",[e._v("Delete Event")]),e._v(".")]),r("p",[e._v("The primary key will already be loaded in a read-only input control when the"),r("br"),e._v("\nform first comes up (as will the other record data). Since the user should not"),r("br"),e._v("\nbe able to change this in normal usage there should be no concern. However, it"),r("br"),e._v("\nis those individuals who attempt to disrupt your site for which you need to be"),r("br"),e._v("\non alert. As such, it is always good practice to ensure this value still exists"),r("br"),e._v("\nbefore attempting any other processing. So, check to see if the primary key"),r("br"),e._v("\nexists. If not produce a message and stop the processing.")]),r("p",[e._v("Unlike, the update, no Validation is necessary.")]),r("p",[e._v("In a Try/Catch, create you sql Delete command, execute (.Execute()), capture the"),r("br"),e._v("\nrows affected. Now, for the same reasons as in update, check the rows affected"),r("br"),e._v("\nand produce the appropriate message. To ensure the user does not attempt to"),r("br"),e._v("\ndelete the same record twice, it is best to empty the pkey input control. This"),r("br"),e._v("\nwill cause the user to do another lookup and the removed record will not be"),r("br"),e._v("\navailable. Optionally you could clear out all the input controls.")]),r("p",[e._v("//check is there a productid to delete")]),r("p",[e._v("//if not message to use to get new product")]),r("p",[e._v("//if present")]),r("p",[e._v("// create delete command")]),r("p",[e._v("// execute")]),r("p",[e._v("// message")]),r("p",[e._v("// wrap in try/catch")]),r("p",[e._v("if (string.IsNullOrEmpty(productid))")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("No product selected. Return to search for another product")]),r("p",[e._v("</span>")]),r("p",[e._v('<a href="~/DBPages/ProductSearch.cshtml">go to search...</a>')]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("try")]),r("p",[e._v("{")]),r("p",[e._v('var deletecommmand = "DELETE Products WHERE ProductID = @0";')]),r("p",[e._v("int results = db.Execute(deletecommmand, productid);")]),r("p",[e._v("if (results > 0)")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:green">')]),r("p",[e._v("Product deleted.")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v('productid = "";')]),r("p",[e._v("//optionally clear the fields.")]),r("p",[e._v('//productname = "";')]),r("p",[e._v('//supplierid = "0";')]),r("p",[e._v('//categoryid = "0";')]),r("p",[e._v('//quantityperunit = "";')]),r("p",[e._v('//unitprice = "";')]),r("p",[e._v('//unitsinstock = "";')]),r("p",[e._v('//unitsonorder = "";')]),r("p",[e._v('//reorderlevel = "";')]),r("p",[e._v('//discontinued = "0";')]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("Delete failed. No product called @productname with an id of"),r("br"),e._v("\n@productid on file.")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("catch (Exception ex)")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("Deleted failed. Error @ex.Message")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("Now you may have noticed that you did not have a chance to confirm to cancel"),r("br"),e._v("\nyour delete. Ouch!!")]),r("p",[e._v("A little javascript can help here. NOTE: the id attribute on the submit button"),r("br"),e._v("\nmust be "),r("strong",[e._v("unique.")]),e._v(" It will be used by the javascript .getElementById(…).")]),r("p",[e._v('<div class="row">')]),r("p",[e._v('<button type="submit" name="theButton" id="theUpdate" class="btn btn-primary"'),r("br"),e._v('\nvalue="update">Update</button>&nbsp;  ')]),r("p",[e._v('<button type="submit" name="theButton" id="theDelete" class="btn"'),r("br"),e._v('\nvalue="delete">'),r("br"),e._v("\nDelete</button>&nbsp;  ")]),r("p",[e._v('<button type="submit" name="theButton" id="theCancel" class="btn"'),r("br"),e._v('\nvalue="cancel">'),r("br"),e._v("\nCancel</button>")]),r("p",[e._v("</div>")]),r("p",[e._v("@* this javascript will allow for a confirmation dialog to appear")]),r("p",[e._v("when a particular button is pressed (theDelete) *@")]),r("p",[e._v('<script type="text/javascript">')]),r("p",[e._v('document.getElementById("theDelete").onclick = ConfirmDelete;')]),r("p",[e._v("function ConfirmDelete() {")]),r("p",[e._v('return confirm("Are you sure you want to remove @productname");')]),r("p",[e._v("}")]),r("p",[e._v("<\/script>")]),r("p",[e._v("</form>")]),r("p",[e._v("Another problem that could appear, depending on your coding, is that the client"),r("br"),e._v("\nside validation happens for the Cancel and Delete. To override this problem add"),r("br"),e._v("\nanother attribute to the submit buttons: formnovalidate.")]),r("p",[e._v('<button type="submit" name="theButton" id="theDelete" class="btn"'),r("br"),e._v('\nvalue="delete"'),r("br"),e._v("\nformnovalidate>Delete</button>&nbsp;  ")]),r("p",[e._v("The last concern is whether to actually physically remove the record or do a"),r("br"),e._v("\nlogical remove. A logical removal is done by setting a record attribute which"),r("br"),e._v("\nacts a flag to its appropriate value. In the case of the Product record, a"),r("br"),e._v("\nphysical removal may not be the best choice. Instead, in the delete code, do an"),r("br"),e._v("\nupdate that alters the Discontinued attribute.")]),r("p",[e._v("if (string.IsNullOrEmpty(productid))")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("No product selected. Return to search for another product")]),r("p",[e._v("</span>")]),r("p",[e._v('<a href="~/DBPages/ProductSearch.cshtml">go to search...</a>')]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("try")]),r("p",[e._v("{")]),r("p",[e._v('var deletecommmand = "Update Products "')]),r("ul",[r("li",[e._v('"SET Discontinued = 1 "')]),r("li",[e._v('"WHERE ProductID = @0";')])]),r("p",[e._v("int results = db.Execute(deletecommmand, productid);")]),r("p",[e._v("if (results > 0)")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:green">')]),r("p",[e._v("Product discontinued.")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v('productid = "";')]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("Discontinued failed. No product called @productname with an"),r("br"),e._v("\nid of @productid on file.")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("catch (Exception ex)")]),r("p",[e._v("{")]),r("p",[e._v("<p>")]),r("p",[e._v('<span style="color:blue">')]),r("p",[e._v("Discontinued failed. Error @ex.Message")]),r("p",[e._v("</span>")]),r("p",[e._v("</p>")]),r("p",[e._v("}")]),r("p",[e._v("}")])])}],a=o(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);t.default=n.exports}}]);