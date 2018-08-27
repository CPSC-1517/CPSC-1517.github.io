(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,t,r){e.exports=r.p+"assets/img/e911c39705097f7bd37f6738ceb5fb1b.e911c397.png"},166:function(e,t,r){e.exports=r.p+"assets/img/6341d1b5a2c252c1c9c2383feafb07e6.6341d1b5.png"},260:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Objectives:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discuss:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("What is CRUD?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Various web page styles for CRUD.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Entity method for Insert?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Handling required and nullable fields.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Code:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Create an insert page using Product.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Student")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Instructor")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Concepts:")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[r("li",[r("p",[e._v("What is CRUD")])]),r("li",[r("p",[e._v("Identity insert vs User supplied pKey insert")])]),r("li",[r("p",[e._v("Using various techniques for CURD")]),r("ul",[r("li",[r("p",[e._v("All on one page: Lookup, Insert, Update and Delete")])]),r("li",[r("p",[e._v("Using a separate page for each (however update and delete still would"),r("br"),e._v("\nneed a lookup on it)")])]),r("li",[r("p",[e._v("Hybrids: Insert page, Lookup/Update/Delete")])]),r("li",[r("p",[e._v("Lookup on one page to narrow choice of record then passing data (pkey)"),r("br"),e._v("\nto an update/delete page.")])])])]),r("li",[r("p",[e._v("Review Lookup techniques")]),r("ul",[r("li",[r("p",[e._v("Using a DropDownList (very small collection, pkey and description text)")])]),r("li",[r("p",[e._v("Using a Textbox (known pkey say of a bill number)")])]),r("li",[r("p",[e._v("Multiple step lookup (as a search string for a more refined list to"),r("br"),e._v("\nchose from)")])])])]),r("li",[r("p",[e._v("Processing page: basic validation, data collection, .Execute(commandstring,"),r("br"),e._v("\nlist of parameters)")])]),r("li",[r("p",[e._v("Try/Catch processing")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discuss CRUD.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("CRUD stands for Create (insert), Read (queries), Update and Delete. Insert"),t("br"),this._v("\nplaces a record on the database, update alters a record on a database, and"),t("br"),this._v("\ndelete physically removes a record from the database. CRUD is usually use when"),t("br"),this._v("\ndiscussing the maintenance of a single record. When your processing involves"),t("br"),this._v("\naltering multiple tables, it is usually referred to as an Online Transaction"),t("br"),this._v("\nProcess (OLTP). OLTP will be covered in the next programming course.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Delete can be logically implemented by using a flag. You may not wish to"),r("br"),e._v("\nphysically remove a record from the database because of foreign key constraints."),r("br"),e._v("\nIf you remove the record, you may need to remove other records. This may lead to"),r("br"),e._v("\na loss of valuable historical information (such as pass sales trends, customer"),r("br"),e._v("\npurchasing trends, etc). So to indicate that a particular record is not to be"),r("br"),e._v("\nfurther used in processing a flag is set. Example, a product has become"),r("br"),e._v("\ndiscontinued. You do not wish to display it anymore to customers. You cannot"),r("br"),e._v("\nphysically remove the record without removing all other data associated with it"),r("br"),e._v("\n(foreign key constraints). So, the product record has a logical flag that"),r("br"),e._v("\nindicates whether to use the record, let’s say the attribute is called"),r("br"),e._v("\nDiscontinued. If the attribute is false, the product can be shown for sale; if"),r("br"),e._v("\ntrue, not shown. Once the attribute is true, queries do not return it for"),r("br"),e._v("\nviewing, therefore, no new sales are generated.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Data Validation will be done in the next lesson. Use valid data this lesson for"),t("br"),this._v("\ntesting.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Use textboxes this lesson for foreign key value entry. Using dropdown lists to"),t("br"),this._v("\nselect a foreign key value will be done in the next lesson.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Create Insert page")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("Right click WebSite/ Add/ Add New Item/ Content Page file and name it"),t("br"),this._v("\nInsert.cshtml")])]),t("li",[t("p",[this._v("Open the file containing your website menu (_Menu.cshtml).")])]),t("li",[t("p",[this._v("Create another a menu item to page called Insert.cshtml in a folder called"),t("br"),this._v("\nDBPages.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Practice Text alignment")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Use the code below to demonstrate text alignment in columns.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("First row text only.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(165),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="row ">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-4">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("1 text here")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-3 text-right">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("2 text here")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-5">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("3 text here")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="row ">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-4">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="well">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("content")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-3">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="well pull-right">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("content pull-right")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-5">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="well">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("content")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:r(166),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Create Insert page form layout")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("p",[e._v("Two column form labels and controls")])]),r("li",[r("p",[e._v("Labels aligned right (text-right)")])]),r("li",[r("p",[e._v("Controls default aligned left.")])]),r("li",[r("p",[e._v("Put in value attribute but leave blank until processing is coded")])]),r("li",[r("p",[e._v("Add a tool tip to some controls using title attribute. Have them add tool"),r("br"),e._v("\ntip to QOH, QOO and ROL.")])]),r("li",[r("p",[e._v("Submit buttons in own row text-center.")])]),r("li",[r("p",[e._v("Create alert alert-info blockquote. Amount of text is up to you.")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("@{")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('Page.Title = "Insert";')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('Layout = "~/_LayoutMenu.cshtml";')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("}")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("@section banner{")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<span style="font-size:xx-large"><strong>CRUD:'),t("br"),this._v("\nInsert</strong></span><br/><br/>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="alert alert-info">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("<blockquote>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("This form will demonstrate the create (insert) of CRUD. It will"),t("br"),this._v("\ndemonstrate using bootstrap text alignment for setting up right align"),t("br"),this._v("\ntext, default left aligned controls and centered aligned submit buttons."),t("br"),this._v("\nThe input controls and their label text controls are in a 2 column format."),t("br"),this._v("\nThe submit buttons are centered on another row. The introduction"),t("br"),this._v("\nblockquote uses the bootstrap class alert alert-info. Tool tips are used."),t("br"),this._v("\nTry/Catch will be used to capture processing errors.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</blockquote>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div> }")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("<div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<form id="theForm" action="" method="post">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="row ">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-5 text-right">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forProductName">Name:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forSupplierID">Supplier:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forCategoryID">Category:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forQuantityPerUnit">Qty/Unit:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forUnitPrice">Unit Price:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forUnitsInStock">QOH:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forUnitsOnOrder">QOO:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forReorderLevel">ROL:</label><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<label id="forDiscontinued">Disc.:</label><br /><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-5">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="ProductName" type="text" value="" title="Product Name." />'),t("br"),this._v("\n<br />")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="SupplierID" type="text" value=""/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="CategoryID" type="text" value=""/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="QuantityPerUnit" type="text" value="" /><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="UnitPrice" type="text" value=""/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="UnitsInStock" type="text" value=""'),t("br"),this._v('\ntitle="Quantity on Hand."/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="UnitsOnOrder" type="text" value=""'),t("br"),this._v('\ntitle="Quantity on Order."/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="ReorderLevel" type="text" value=""'),t("br"),this._v('\ntitle="Reorder Level."/><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<input name="Discontinued" type="checkbox"'),t("br"),this._v('\ntitle="Product is discontinued if checked."/><br /><br />')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("<div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<div class="col-sm-11 text-center">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<button type="submit" name="formButton" value="submit"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('class="btn btn-primary" style="width:90px">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Add")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</button>&nbsp; ")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('<button type="submit" name="formButton" value="reset"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('class="btn " style="width:90px">')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Clear")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</button>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</form>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("</div>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Submit Processing")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Retrieving the data from the form controls will be delayed until the "),t("strong",[this._v("Add")]),t("br"),this._v("\nsubmit button has been pressed. This means that the local variables will be"),t("br"),this._v("\ncreated in the opening coding block but set to empty values. This is needed"),t("br"),this._v("\nbecause these variables will be used in the form input controls’ value"),t("br"),this._v("\nattribute. If they were created under the If(IsPost), they would be out of scope"),t("br"),this._v("\nby the time they were needed for the form.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("strong",[e._v("Alternatively")]),e._v(", we could have done the Request.Form[“xxx”] in the opening"),r("br"),e._v("\ncoding block. The values for the local variable however, would be null on the"),r("br"),e._v("\nfirst time processing the page. This would require one to have an "),r("strong",[e._v("else{ }")]),e._v(" on"),r("br"),e._v("\nthe If(IsPost). Within this "),r("strong",[e._v("else{ }")]),e._v(", you would assign the default empty"),r("br"),e._v("\nvalues.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("The IsPost will determine which button was pressed and act accordingly. Notice"),r("br"),e._v("\non the Clear (reset) the discontinued variable is set to an empty string. This"),r("br"),e._v("\nis because the values of a checkbox is null (unchecked) or “on” (checked). The"),r("br"),e._v("\ntest in the checkbox control determines whether the check is present by using"),r("br"),r("strong",[e._v("string.IsNullOrEmpty().")]),e._v(" Anything that is not null or empty is considered"),r("br"),e._v("\n“on”. The other form input controls have then "),r("strong",[e._v("value=")]),e._v(" attributes now set to"),r("br"),e._v("\nthe appropriate local variables.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("If the Add submit button was pressed the current contents of the input controls"),r("br"),e._v("\nare collected. A Try/Catch is used to capture error messages and display them in"),r("br"),e._v("\na friendly fashion. The Database is accessed. The sql insert command is created"),r("br"),e._v("\nusing placeholders for each of the table fields. Notice the attributes are"),r("br"),e._v("\nindexed and in sequential order. The Execute statement specifies the insert"),r("br"),e._v("\ncommand followed by a parameter value for each placeholder (order is important)."),r("br"),e._v("\nOn the Products table of Northwind just about all attributes are nullable. This"),r("br"),e._v("\nparameter are therefore tested for nullable assignment. ProductName is only to"),r("br"),e._v("\nuse the incoming value. The Boolean Discontinued is set to a default zero (0)."),r("br"),e._v("\nThink about it; a new product would not be discontinued. You could have tested"),r("br"),e._v("\nthe incoming value and assigned either zero (0) or one (1).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("var insertcommand ="),t("br"),this._v('\n"INSERT INTO Products (ProductName, SupplierID, CategoryID, QuantityPerUnit, "')])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('" UnitPrice, UnitsInStock, UnitsOnOrder, ReorderLevel, Discontinued) "')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<p class="col-sm-11 text-center"><span style="color:green"><strong>'),t("br"),this._v("\nNew product added to file.</strong></span></p>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<p class="col-sm-11 text-center"><span style="color:firebrick">'),t("br"),this._v("\n<strong>@ex.Message</strong></span></p>")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="ProductName" type="text" value="@productname"'),t("br"),this._v('\ntitle="Product Name." /><br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="QuantityPerUnit" type="text"'),t("br"),this._v('\nvalue="@quantityperunit" /><br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="UnitsInStock" type="text" value="@unitsinstock"'),t("br"),this._v('\ntitle="Quantity on Hand." /><br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="UnitsOnOrder" type="text" value="@unitsonorder"'),t("br"),this._v('\ntitle="Quantity on Order." /><br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="ReorderLevel" type="text" value="@reorderlevel"'),t("br"),this._v('\ntitle="Reorder Level." /><br />')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('<input name="Discontinued" type="checkbox"'),t("br"),this._v('\ntitle="Product is discontinued if checked."')])}],s=r(0),i=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),r("p",[e._v("Moodle site.")]),r("p",[e._v("URL Student Notes")]),e._m(9),r("p",[e._v("Lesson 1: CRUD Insert.")]),e._m(10),e._m(11),e._m(12),e._m(13),e._m(14),r("p",[e._v("So, how to handle a logical delete. It becomes an update.")]),e._m(15),e._m(16),r("p",[e._v("Update/Delete will be done in the 3rd lesson in CRUD.")]),e._m(17),e._m(18),e._m(19),r("ul",[e._m(20),e._m(21),r("li",[r("p",[e._v("Second row using the well class"),r("br"),e._v("\n("),r("a",{attrs:{href:"https://www.w3schools.com/bootstrap/bootstrap_wells.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.w3schools.com/bootstrap/bootstrap_wells.asp"),r("OutboundLink")],1),e._v("). The .well class"),r("br"),e._v("\nadds a rounded border around an element with a gray background color and"),r("br"),e._v("\nsome padding.")]),e._m(22)])]),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),e._m(29),e._m(30),e._m(31),e._m(32),e._m(33),e._m(34),e._m(35),e._m(36),e._m(37),e._m(38),e._m(39),e._m(40),e._m(41),e._m(42),e._m(43),e._m(44),e._m(45),e._m(46),e._m(47),e._m(48),e._m(49),e._m(50),e._m(51),e._m(52),e._m(53),e._m(54),e._m(55),e._m(56),e._m(57),e._m(58),e._m(59),e._m(60),e._m(61),e._m(62),e._m(63),e._m(64),e._m(65),e._m(66),e._m(67),e._m(68),e._m(69),e._m(70),e._m(71),e._m(72),e._m(73),e._m(74),e._m(75),e._m(76),e._m(77),e._m(78),e._m(79),e._m(80),e._m(81),e._m(82),e._m(83),e._m(84),e._m(85),e._m(86),e._m(87),e._m(88),e._m(89),e._m(90),e._m(91),e._m(92),e._m(93),e._m(94),e._m(95),e._m(96),e._m(97),e._m(98),e._m(99),e._m(100),e._m(101),e._m(102),e._m(103),e._m(104),e._m(105),e._m(106),e._m(107),r("p",[e._v("@{")]),r("p",[e._v('Page.Title = "Insert";')]),r("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),r("p",[e._v('var thebutton = Request.Form["formButton"];')]),r("p",[e._v('var productname = "";')]),r("p",[e._v('var quantityperunit = "";')]),r("p",[e._v('var unitprice = "";')]),r("p",[e._v('var unitsinstock = "";')]),r("p",[e._v('var unitsonorder = "";')]),r("p",[e._v('var reorderlevel = "";')]),r("p",[e._v('var selectedsupplier = "";')]),r("p",[e._v('var selectedcategory = "";')]),r("p",[e._v('var discontinued = "";')]),r("p",[e._v("}")]),e._m(108),e._m(109),r("p",[e._v("Messages to the user have been text-centered for appearance only.")]),r("p",[e._v("@if(IsPost)")]),r("p",[e._v("{")]),r("p",[e._v('if (thebutton.Equals("reset"))')]),r("p",[e._v("{")]),r("p",[e._v('<p class="col-sm-11 text-center">Cleared by user.</p>')]),r("p",[e._v('discontinued = "";')]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v('productname = Request.Form["ProductName"];')]),r("p",[e._v('selectedsupplier = Request.Form["SupplierID"];')]),r("p",[e._v('selectedcategory = Request.Form["CategoryID"];')]),r("p",[e._v('quantityperunit = Request.Form["QuantityPerUnit"];')]),r("p",[e._v('unitprice = Request.Form["UnitPrice"];')]),r("p",[e._v('unitsinstock = Request.Form["UnitsInStock"];')]),r("p",[e._v('unitsonorder = Request.Form["UnitsOnOrder"];')]),r("p",[e._v('reorderlevel = Request.Form["ReorderLevel"];')]),r("p",[e._v('discontinued = Request.Form["Discontinued"];')]),r("p",[e._v("try")]),r("p",[e._v("{")]),r("p",[e._v('var db = Database.Open("NWDB");')]),e._m(110),e._m(111),r("p",[e._v('+ " VALUES(@0, @1, @2, @3, @4, @5, @6, @7, @8)";')]),r("p",[e._v("db.Execute(insertcommand, productname,")]),r("p",[e._v("string.IsNullOrEmpty(selectedsupplier) ? null : selectedsupplier,")]),r("p",[e._v("string.IsNullOrEmpty(selectedcategory) ? null : selectedcategory,")]),r("p",[e._v("string.IsNullOrEmpty(quantityperunit) ? null : quantityperunit,")]),r("p",[e._v("string.IsNullOrEmpty(unitprice) ? null : unitprice,")]),r("p",[e._v("string.IsNullOrEmpty(unitsinstock) ? null : unitsinstock,")]),r("p",[e._v("string.IsNullOrEmpty(unitsonorder) ? null : unitsonorder,")]),r("p",[e._v("string.IsNullOrEmpty(reorderlevel) ? null : reorderlevel,")]),r("p",[e._v("0);")]),e._m(112),r("p",[e._v("}")]),r("p",[e._v("catch (Exception ex)")]),r("p",[e._v("{")]),e._m(113),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v('<form id="theForm" action="" method="post">')]),r("p",[e._v('<div class="row ">')]),r("p",[e._v('<div class="col-sm-5 text-right">')]),r("p",[e._v('<label id="forProductName">Name:</label><br />')]),r("p",[e._v('<label id="forSupplierID">Supplier:</label><br />')]),r("p",[e._v('<label id="forCategoryID">Category:</label><br />')]),r("p",[e._v('<label id="forQuantityPerUnit">Qty/Unit:</label><br />')]),r("p",[e._v('<label id="forUnitPrice">Unit Price:</label><br />')]),r("p",[e._v('<label id="forUnitsInStock">QOH:</label><br />')]),r("p",[e._v('<label id="forUnitsOnOrder">QOO:</label><br />')]),r("p",[e._v('<label id="forReorderLevel">ROL:</label><br />')]),r("p",[e._v('<label id="forDiscontinued">Disc.:</label><br /><br />')]),r("p",[e._v("</div>")]),r("p",[e._v('<div class="col-sm-5">')]),e._m(114),r("p",[e._v('<input name="SupplierID" type="text" value="@selectedsupplier" /><br />')]),r("p",[e._v('<input name="CategoryID" type="text" value="@selectedcategory" /><br />')]),e._m(115),r("p",[e._v('<input name="UnitPrice" type="text" value="@unitprice" /><br />')]),e._m(116),e._m(117),e._m(118),e._m(119),r("p",[e._v('@(string.IsNullOrEmpty(discontinued) ?"":"checked") /><br /><br />')]),r("p",[e._v("</div>")]),r("p",[e._v("</div>")]),r("p",[e._v("<div>")]),r("p",[e._v('<div class="col-sm-11 text-center">')]),r("p",[e._v('<button type="submit" name="formButton" value="submit"')]),r("p",[e._v('class="btn btn-primary" style="width:90px">')]),r("p",[e._v("Add")]),r("p",[e._v("</button>&nbsp; ")]),r("p",[e._v('<button type="submit" name="formButton" value="reset"')]),r("p",[e._v('class="btn " style="width:90px">')]),r("p",[e._v("Clear")]),r("p",[e._v("</button>")]),r("p",[e._v("</div>")]),r("p",[e._v("</div>")]),r("p",[e._v("</form>")])])},n,!1,null,null,null);i.options.__file="lesson-1.md";t.default=i.exports}}]);