(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{479:function(t,e,o){"use strict";o.r(e);var a=o(42),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("Using DataBound Controls (Tutorial 7 of 9)\nHands-On Tutorials for Application Programming 1 (DMIT152)\nContents at a Glance\nIntroduction\t1\nUsing Data Bound Controls\t2")]),t._v(" "),o("p",[t._v("Detailed Contents\nIntroduction\t1\nUsing Data Bound Controls\t2\nSetup\t2\nPart 1 – Prepare the BLL with ComponentModel Attributes\t2\nPart 2 – Data-Bound GridView\t6\nCreate the Form\t6\nPart 3 – Data-Bound DropDown and GridView\t22\nHooking Up the DropDownList\t22\nHooking Up the GridView\t25\nMaking the Form User Friendly\t27\nPart 4 – TextBox and Data-Bound GridView\t34\nSummary\t36\nDiscussion Points\t36")]),t._v(" "),o("p",[t._v("Introduction\nThis series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.\nThere are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.\nUsing Data Bound Controls\n•\tEstimated time: 15-30 minutes.\n•\tParts:")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Part 1 – Prepare the BLL with ComponentModel Attributes")])]),t._v(" "),o("li",[o("p",[t._v("Part 2 – Data-Bound GridView\nManageProducts")])]),t._v(" "),o("li",[o("p",[t._v("Part 3 – Data-Bound DropDown and GridView\nViewProductsByCategory")])]),t._v(" "),o("li",[o("p",[t._v("Part 4 – TextBox and Data-Bound GridView\nViewProductsByPartialNamePurpose\nThis hands-on tutorial walks through how to enable your Business Logic Layer to support integration with your Presentation Layer in a code-free (or code-light) way through the use of the ObjectDataSource control. The ObjectDataSource control acts as a “middle-man” in exchanging data between your BLL and various Data Bound controls, such as the GridView and DropDownList.\nSetup\nFor this lab, you will need the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.\nPart 1 – Prepare the BLL with ComponentModel Attributes\nIn order to simplify the setting up of data bound controls, we can add attributes to the BLL classes and methods that will allow them to be easily “discovered” by the ObjectDataSource controls in our forms. To do this, we will use the DataObject and DataObjectMethod attributes of the ComponentModel namespace.")])]),t._v(" "),o("li",[o("p",[t._v("Go to the NorthwindSystem project and open the CategoryController.cs file. Add a using statement at the top of the file to import the System.ComponentModel namespace.\nusing System.ComponentModel;")])]),t._v(" "),o("li",[o("p",[t._v("In order for these BLL methods to be visible to ObjectDataSource controls, we must first make the class visible by adding a DataObject attribute before the class declaration.\n[DataObject(true)]\npublic class CategoryController")])]),t._v(" "),o("li",[o("p",[t._v("Next, we add DataObjectMethod attributes to the public methods of the class. When adding these attributes, we declare the kind of service (from a CRUD point of view) that the method provides: Insert, Select, Update, or Delete. We will also indicate whether the method is the default for that particular service.\n[DataObjectMethod(DataObjectMethodType.Insert, true)]\npublic int AddCategory(Category info)\n{\nreturn DataProvider.Add(info);\n}")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("[DataObjectMethod(DataObjectMethodType.Select, true)]\npublic List&lt;Category&gt; ListAllCategories()\n{\n    List&lt;Category&gt; categoryList = DataProvider.List();\n    return categoryList;\n}\n\n[DataObjectMethod(DataObjectMethodType.Select, false)]\npublic Category LookupCategory(int categoryId)\n{\n    Category info = DataProvider.Lookup(categoryId);\n    return info;\n}\n\n[DataObjectMethod(DataObjectMethodType.Update, true)]\npublic int UpdateCategory(Category info)\n{\n    return DataProvider.Update(info);\n}\n\n[DataObjectMethod(DataObjectMethodType.Delete, true)]\npublic int DeleteCategory(int categoryId)\n{\n    return DataProvider.Delete(categoryId);\n}\n")])])])]),t._v(" "),o("li",[o("p",[t._v("Now open the ProductController class and perform the same kinds of modifications.\na.\tImport the System.ComponentModel namespace.\nusing System.ComponentModel;")])])]),t._v(" "),o("p",[t._v("b.\tAdd the DataObject attribute to the class name.\n[DataObject(true)]\npublic class ProductController")]),t._v(" "),o("p",[t._v("c.\tAdd DataObjectMethod attributes to the methods.\n[DataObjectMethod(DataObjectMethodType.Insert, true)]\npublic int AddProduct(Product info)\n{\nreturn DataProvider.Add(info);\n}")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("    [DataObjectMethod(DataObjectMethodType.Select, true)]\n    public List&lt;Product&gt; ListAllProducts()\n    {\n        List&lt;Product&gt; productList = DataProvider.List();\n        return productList;\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, false)]\n    public Product LookupProduct(int productId)\n    {\n        Product info = DataProvider.Lookup(productId);\n        return info;\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, false)]\n    public List&lt;Product&gt; LookupProductsByName(string partialName)\n    {\n        return DataProvider.LookupByProductName(partialName);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, false)]\n    public List&lt;Product&gt; LookupProductsByCategory(int? categoryId)\n    {\n        return DataProvider.LookupByCategory(categoryId);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, false)]\n    public List&lt;Product&gt; LookupProductsBySupplier(int? supplierId)\n    {\n        List&lt;Product&gt; productList = default(List&lt;Product&gt;);\n        productList = DataProvider.LookupBySupplier(supplierId);\n        return productList;\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Update, true)]\n    public int UpdateProduct(Product info)\n    {\n        return DataProvider.Update(info);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Delete, true)]\n    public int DeleteProduct(int productId)\n    {\n        return DataProvider.Delete(productId);\n    }\n}\n")])])]),o("p",[t._v("}")]),t._v(" "),o("ol",{attrs:{start:"5"}},[o("li",[t._v("Once again, open another BLL class – SupplierController – and make the same kinds of modifications.\nusing System;\nusing System.Collections.Generic;\nusing NorthwindEntities;\nusing NorthwindSystem.DAL;\nusing System.ComponentModel;")])]),t._v(" "),o("p",[t._v("namespace NorthwindSystem.BLL\n{\npublic class SupplierController\n{\nprivate SupplierProvider DataProvider { get; set; }")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v("    public SupplierController()\n    {\n        DataProvider = new SupplierProvider();\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Insert, true)]\n    public int AddSupplier(Supplier info)\n    {\n        return DataProvider.Add(info);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, true)]\n    public List&lt;Supplier&gt; ListAllSuppliers()\n    {\n        return DataProvider.List();\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Select, false)]\n    public Supplier LookupSupplier(int supplierId)\n    {\n        return DataProvider.Lookup(supplierId);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Update, true)]\n    public int UpdateSupplier(Supplier info)\n    {\n        return DataProvider.Update(info);\n    }\n\n    [DataObjectMethod(DataObjectMethodType.Delete, true)]\n    public int DeleteSupplier(int supplierId)\n    {\n        return DataProvider.Delete(supplierId);\n    }\n}\n")])])]),o("p",[t._v("}")]),t._v(" "),o("ol",{attrs:{start:"6"}},[o("li",[t._v("Lastly, it will be necessary to build the project (so that the web site gets a fresh copy of the class library DLL with these code changes). Now these BLL methods are prepared to be hooked up to the ObjectDataSource controls in the following parts of this tutorial.")])]),t._v(" "),o("p",[t._v("Part 2 – Data-Bound GridView\nCreate the Form")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Create a folder under the Admin folder and name it “DataBound”. This is to help distinguish these tutorials, which work with data-bound controls, from earlier tutorials which primarily used code-behind to populate the form’s controls.")])]),t._v(" "),o("li",[o("p",[t._v("In the Admin/DataBound folder of the web site, create a new web form called “ManageProducts.aspx”. At the top of the form, place an <h1> element with the text “Manage Products”.")])]),t._v(" "),o("li",[o("p",[t._v("Add a GridView control and give it an ID of “ProductsGridView”. Add an ObjectDataSource control and name it ProductDataSource.")])]),t._v(" "),o("li",[o("p",[t._v("Click the ProductDataSource’s smart tag and select “Configure Data Source”.")])]),t._v(" "),o("li",[o("p",[t._v("Select the NorthwindSystem.BLL.ProductController as the Business Object in the first page of the wizard. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Data Methods” page of the wizard, choose ListAllProducts() as the SELECT method. Then click “Finish”.")])]),t._v(" "),o("li",[o("p",[t._v("Click the GridView’s smart tag and select ProductDataSource from the “Choose Data Source” dropdown. Notice how the GridView automatically “discovers” the kind of data (Products) that is supplied by the ObjectDataSource control and then creates columns for each property of the Product class.")])]),t._v(" "),o("li",[o("p",[t._v("Test the form in a browser window. All of the products should be laid out in a table.")])])]),t._v(" "),o("p",[t._v("The GridView’s Columns and Headings")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Return to the Design view of the form. Click the GridView’s smart tag and select “Edit Columns…”.")])]),t._v(" "),o("li",[o("p",[t._v("In the Fields dialog, click on ProductID from the list of selected fields. Then change the Visible property to False.")])]),t._v(" "),o("li",[o("p",[t._v("Click ProductName from the list of selected fields. Then, in the list of properties for this field, change the HeaderText to “Product Name”.")])]),t._v(" "),o("li",[o("p",[t._v("Continue modifying the header text of the columns until your GridView looks a follows.")])])]),t._v(" "),o("p",[t._v("ObjectDataSource for Foreign Key Columns – Category and Supplier")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Add two more ObjectDataSource controls to the form. Name them CategoryDataSource and SupplierDataSource.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag for the CategoryDataSource and click “Configure Data Source…”.")])]),t._v(" "),o("li",[o("p",[t._v("Select the CategoryController as the business objects for the CategoryDataSource. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("Use the ListAllCategories() method as the SELECT method for the CategoryDataSource. Then click “Finish”.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag for the SupplierDataSource and click “Configure Data Source…”.")])]),t._v(" "),o("li",[o("p",[t._v("Select the SupplierController as the business object for the SupplierDataSource. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("Use the ListAllSuppliers() method as the SELECT method for the SupplierDataSource. Then click “Finish”.")])])]),t._v(" "),o("p",[t._v("Template Columns for Foreign Keys – CategoryID")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Once again, click the GridView’s smart tag and select “Edit Columns…”. This time, select the column for the Category and click the “Convert this field into a TemplateField” link.")])]),t._v(" "),o("li",[o("p",[t._v("Select the Supplier column from the selected fields. Convert this field into a TemplateField as well. Then click OK.")])]),t._v(" "),o("li",[o("p",[t._v("From the GridView’s smart tag, select “Edit Templates”.")])]),t._v(" "),o("li",[o("p",[t._v("Then select the Item Template for the Category.")])]),t._v(" "),o("li",[o("p",[t._v("Remove the Label control from the Item Template. Replace it with a DropDownList control and give that control an ID of CategoryItem.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag of the DropDownList and select “Choose Data Source…”.")])]),t._v(" "),o("li",[o("p",[t._v("In the Data Source Configuration Wizard, select the CategoryDataSource from the drop down. Then select “CategoryName” as the field to display and “CategoryID” as the field for the value of the DropDownList. Click OK.")])]),t._v(" "),o("li",[o("p",[t._v("Again, from the smart tag of the DropDownList, click on “Edit DataBindings…”.")])]),t._v(" "),o("li",[o("p",[t._v("For the SelectedValue property of the DropDownList, choose Field binding and have it bound to the CategoryID of the GridView’s data. This will allow the DropDownList control in the Category column of the GridView to synchronize its selected item with the actual category for each row in the GridView. Click OK when finished.")])]),t._v(" "),o("li",[o("p",[t._v("In the Properties window for the DropDownList, set the AppendDataBoundItems to true. Also set the Enabled property to false and change the ForeColor to “Black”.")])]),t._v(" "),o("li",[o("p",[t._v("Choose “Edit Items…” from the smart tag of the DropDownList.")])]),t._v(" "),o("li",[o("p",[t._v("Add an item with a display text of “[no category]”. Click OK. Also, save the form at this step, because in the next step we will switch to the Source view, and we don’t want this manual item to be “lost”.")])]),t._v(" "),o("li",[o("p",[t._v('Select the Source or Split view of the form. Go to the “[no category]” ListItem for this DropDownList and set the Value attribute to an empty string. We need an empty string value for any Products whose CategoryID property is null.\n(Note that this change to the ListItem must actually be done in the source of the web form and not from the ListItem Collection Editor. That’s because if you try to simply empty the Value property in the ListItem Collection Editor, it will remove the Value attribute. This has a different effect from keeping the Value attribute and setting it to an empty string.)\n<asp:TemplateField HeaderText="Category" SortExpression="CategoryID">\n<EditItemTemplate>\n<asp:TextBox ID="TextBox1" runat="server" Text=\'<%# Bind("CategoryID") %>\'>\n</asp:TextBox>\n</EditItemTemplate>\n<ItemTemplate>\n<asp:DropDownList ID="CategoryItem" runat="server"\nAppendDataBoundItems="True"\nDataSourceID="CategoryDataSource" DataTextField="CategoryName"\nDataValueField="CategoryID" ForeColor="Black"\nSelectedValue=\'<%# Bind("CategoryID") %>\' Enabled="False">\n<asp:ListItem Value="">[no category]</asp:ListItem>\n</asp:DropDownList>\n</ItemTemplate>\n</asp:TemplateField>')])]),t._v(" "),o("li",[o("p",[t._v("Test the form in the browser. Selecting a category of products should fill the GridView with data in a more readable format.")])])]),t._v(" "),o("p",[t._v("Template Columns for Foreign Keys - SupplierID")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Return to editing the templates of the GridView control. This time, edit the TemplateField for the Supplier information to replace the Label control with a DropDownList. Configure it just like the template field for categories, but hook this control up to the SupplierDataSource and bind it to the SupplierID of the GridView.")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[t._v('        &lt;asp:TemplateField HeaderText="Supplier" SortExpression="SupplierID"&gt;\n            &lt;EditItemTemplate&gt;\n                &lt;asp:TextBox ID="TextBox2" runat="server" Text=\'&lt;%# Bind("SupplierID") %&gt;\'&gt;\n                &lt;/asp:TextBox&gt;\n            &lt;/EditItemTemplate&gt;\n            &lt;ItemTemplate&gt;\n                &lt;asp:DropDownList ID="SupplierItem" runat="server"\n                    AppendDataBoundItems="True"\n                    AutoPostBack="True" Enabled="False" ForeColor="Black"\n                    SelectedValue=\'&lt;%# Bind("SupplierID") %&gt;\'\n                    DataSourceID="SupplierDataSource" DataTextField="CompanyName"\n                    DataValueField="SupplierID"&gt;\n                    &lt;asp:ListItem Value=""&gt;[no supplier]&lt;/asp:ListItem&gt;\n                &lt;/asp:DropDownList&gt;\n            &lt;/ItemTemplate&gt;\n        &lt;/asp:TemplateField&gt;\n')])])])]),t._v(" "),o("li",[o("p",[t._v("Test the form in the browser. Selecting a category of products should fill the GridView with data in a format that is more readable to the user.")])])]),t._v(" "),o("p",[t._v("Part 3 – Data-Bound DropDown and GridView\nThe goal of this part of the tutorial is to create the following web form that uses absolutely no code-behind. This is achieved through the use of Data Bound controls.")]),t._v(" "),o("p",[t._v("The steps in this part of the tutorial begin with hooking up an ObjectDataSource to a DropDownList that displays all the categories in the system. Next, another ObjectDataSource is configured and set to supply data to a GridView while responding to the user’s interactions with the DropDownList. Finally, the appearance of the GridView is customized to make it more user-friendly by editing the column headings and displaying meaningful information for properties representing database foreign keys.\nHooking Up the DropDownList")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In the Admin/DataBound folder of the web site, create a new web form called “ViewProductsByCategory.aspx”. Design the form to look like the following screen shot. Give the DropDownList an ID of CategoryDropDownList. Also add a LinkButton to the form.")])]),t._v(" "),o("li",[o("p",[t._v("Add an ObjectDataSource controls to the form. Give it an ID of CategoryDataSource.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag for the CategoryDataSource and select “Configure Data Source”. This will open a wizard control that will simplify hooking up this control to the Business Logic Layer of our application.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Choose a Business Object” page of the wizard, make sure the “Show only data components” check box is selected. Choose the NorthwindSystem.BLL.CategoryController class as the Business Object that will supply data for this control. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Data Methods” page of the wizard, select the ListAllCategories() method as the SELECT method for the control. Then click “Finish”.")])]),t._v(" "),o("li",[o("p",[t._v("In the design view of the form, click the smart tag of the DropDownList control and click “Choose Data Source…”. This will open the Data Source Configuration Wizard.")])]),t._v(" "),o("li",[o("p",[t._v("In the wizard, look for the CategoryDataSource in the drop down under “Select a data source”. Then select “CategoryName” as the “data field to display in the DropDownList”. Select “CategoryID” as the “data field for the value of the DropDownList”. Then click OK.")])]),t._v(" "),o("li",[o("p",[t._v("Test the form in the browser.")])])]),t._v(" "),o("p",[t._v("Hooking Up the GridView")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Return to the design view of the form. Add the GridView control and give it an ID of “ProductsGridView”. Add another ObjectDataSource control and name it ProductDataSource.")])]),t._v(" "),o("li",[o("p",[t._v("Click the ProductDataSource’s smart tag and select “Configure Data Source”.")])]),t._v(" "),o("li",[o("p",[t._v("Select the NorthwindSystem.BLL.ProductController as the Business Object in the first page of the wizard. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Data Methods” page of the wizard, choose LookupProductsByCategory() as the SELECT method. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Parameters” page of the wizard, we must identify the CategoryDropDownList as the control that supplies the value for the CategoryID parameter of the LookupProductsByCategory()method. Click “Finish”. This will allow the DropDownList to act as a “trigger” that will tell the ProductDataSource to supply new data to the GridView.")])]),t._v(" "),o("li",[o("p",[t._v("Click the GridView’s smart tag and select the ProductDataSource in the “Choose Data Source” drop-down. Notice how the GridView automatically “discovers” the kind of data (Products) that is supplied by the ObjectDataSource control and then creates columns for each property of the Product class.")])]),t._v(" "),o("li",[o("p",[t._v("Test the form in a browser window. When you select a category and click the LinkButton, the page will perform a post-back and the GridView will be refreshed with new data. Notice that there is no code-behind in the form to populate the DropDownList or the GridView. That is because the ObjectDataSource controls do all of that work for us.")])])]),t._v(" "),o("p",[t._v("Making the Form User Friendly\nThere are a number of things that can be done to make the form more user-friendly, including\n•\tAdd “Select a Category” to the top of the DropDownList, to let the user know how to use the form\n•\tChange column headings in the GridView\n•\tConvert Foreign Key values/columns to DropDownLists (to show text instead of a number)\nThe DropDownList")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Click the smart tag on the DropDownList for selecting a category, and click “Edit Items…”. This opens the ListItem Collection Editor, where we can manually add items to the DropDownList.")])]),t._v(" "),o("li",[o("p",[t._v("Add a manual item with a display text of “[Select a category]” and a value of negative one (-1). Click OK.")])]),t._v(" "),o("li",[o("p",[t._v("Set the AppendDataBoundItems property of the DropDownList to true.")])])]),t._v(" "),o("p",[t._v("The GridView’s Columns and Headings")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In the Design view of the form, click the GridView’s smart tag and select “Edit Columns…”.")])]),t._v(" "),o("li",[o("p",[t._v("In the Fields dialog, click on CategoryID from the list of selected fields. Then click the Delete Column button.")])]),t._v(" "),o("li",[o("p",[t._v("Click ProductID from the list of selected fields. Then, in the list of properties for this field, change the HeaderText to “ID”.")])]),t._v(" "),o("li",[o("p",[t._v("Continue modifying the header text of the columns until your GridView looks a follows.")])])]),t._v(" "),o("p",[t._v("Empty Data Template")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Click “Edit Templates” in the GridView’s smart tag. This puts the GridView into Template Editing Mode.")])]),t._v(" "),o("li",[o("p",[t._v("Choose the EmptyDataTemplate to edit and enter the text “There are no products for the selected category.”")])])]),t._v(" "),o("p",[t._v("Template Columns for Foreign Keys - SupplierID")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Once again, click the GridView’s smart tag and select “Edit Columns…”. This time, select the column for the Supplier and click the “Convert this field into a TemplateField” link.")])]),t._v(" "),o("li",[o("p",[t._v("Add an ObjectDataSource control to the form and give it an ID of “SupplierDataSource”. Select “Configure Data Source” from the smart tag. This will open the Configure Data Source wizard.")])]),t._v(" "),o("li",[o("p",[t._v("In the first step of the wizard, select NorthwindSystem.BLL.SupplierController as the business object. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("For the Select method, choose ListAllSuppliers(). Then click “Finish”.")])]),t._v(" "),o("li",[o("p",[t._v("From the GridView’s smart tag, select “Edit Templates”. Then select the Item Template for the Supplier.")])]),t._v(" "),o("li",[o("p",[t._v("Remove the Label control from the Item Template. Replace it with a DropDownList control and give that control an ID of SupplierItem.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag of the DropDownList and select “Choose Data Source…”.")])]),t._v(" "),o("li",[o("p",[t._v("In the Data Source Configuration Wizard, select the SupplierDataSource from the drop down. Then select “CompanyName” as the field to display and “SupplierID” as the field for the value of the DropDownList. Click OK.")])]),t._v(" "),o("li",[o("p",[t._v("Again, from the smart tag of the DropDownList, click on “Edit DataBindings…”.")])]),t._v(" "),o("li",[o("p",[t._v("For the SelectedValue property of the DropDownList, choose Field binding and have it bound to the SupplierID of the GridView’s data. This will allow the DropDownList control in the Supplier column of the GridView to synchronize its selected item with the actual supplier for each row in the GridView. Click OK when finished.")])]),t._v(" "),o("li",[o("p",[t._v("Choose “Edit Items…” from the smart tag of the DropDownList.")])]),t._v(" "),o("li",[o("p",[t._v("Add an item with a display text of “[no supplier]”. Click OK.")])]),t._v(" "),o("li",[o("p",[t._v("Select the Source or Split view of the form. Go to the “[no supplier]” ListItem for this DropDownList and change the Value attribute to an empty string. We need an empty string value for any Products whose SupplierID property is null.\n(Note that this change to the ListItem must actually be done in the source of the web form and not from the ListItem Collection Editor. That’s because if you try to simply empty the Value property in the ListItem Collection Editor, it will remove the Value attribute. This has a different effect from keeping the Value attribute and setting it to an empty string.)")])]),t._v(" "),o("li",[o("p",[t._v("In the Properties window for the DropDownList, set the AppendDataBoundItems to true. Also set the Enabled property to false and change the ForeColor to “Black”.")])]),t._v(" "),o("li",[o("p",[t._v("Test the form in the browser. Selecting a category of products should fill the GridView with data in a more readable format.")])])]),t._v(" "),o("p",[t._v("Part 4 – TextBox and Data-Bound GridView\nThis part of the tutorial walks through the steps to create a form that will look up Products based on a partial product name. Once again, there is no code-behind in the form to populate the GridView. That is because the ObjectDataSource controls do all of that work for us.")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("In the Admin folder of the web site, create a new web form called “SearchProducts.aspx”. Design the form to look like the following screen shot. Give the TextBox an ID of “PartialProductName”. Also add a LinkButton to the form.")])]),t._v(" "),o("li",[o("p",[t._v("Add an ObjectDataSource control to the form. Give it an ID of ProductDataSource.")])]),t._v(" "),o("li",[o("p",[t._v("Click the smart tag for the ProductDataSource and select “Configure Data Source”. This will open a wizard control that will simplify hooking up this control to the Business Logic Layer of our application.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Choose a Business Object” page of the wizard, make sure the “Show only data components” check box is selected. Choose the NorthwindSystem.BLL.ProductController class as the Business Object that will supply data for this control. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Data Methods” page of the wizard, select the LookupProductsByName() method as the SELECT method for the control. Then click “Next”.")])]),t._v(" "),o("li",[o("p",[t._v("In the “Define Parameters” page of the wizard, we must identify the PartialProductName TextBox as the control that supplies the value for the partialName parameter of the LookupProductsByName() method. Click “Finish”.")])]),t._v(" "),o("li",[o("p",[t._v("Add a GridView control and give it the ID “FoundProducts”. Click the GridView’s smart tag and select the ProductDataSource in the Choose Data Source drop-down. The GridView will use that ObjectDataSource control to create columns for each property of the Product class.")])]),t._v(" "),o("li",[o("p",[t._v("In the GridView’s smart tag click “Edit Columns…”. Modify the columns to modify headings and display only the columns shown in the screen shot.")])]),t._v(" "),o("li",[o("p",[t._v("Edit the GridView’s EmptyDataTemplate to show the text “No Matching Products”.")])]),t._v(" "),o("li",[o("p",[t._v("Test the form in a browser window. When you enter a partial product name and click the LinkButton, the page will perform a post-back and the GridView will be refreshed with new data.")])])]),t._v(" "),o("p",[t._v("Summary\nIn this hands-on tutorial, you discovered how through the use of the ObjectDataSource control, it is possible to display data in a form through GridView and DropDownList controls without needing any code-behind in the web form.\nDiscussion Points\nThe following questions are designed to help you review key aspects of this tutorial\nTo Be Continued\n•\tWhy we need to set Value=”” in the Source view of the form for ListItems in DropDownList controls (for null values).\n•\tPostback triggers the ObjectDataSource to repopulate the GridView (Parts 2, 3 and 4)\n•")]),t._v(" "),o("p",[t._v("Using DataBound Controls (Tutorial 7b of 9)\nHands-On Tutorials for Application Programming 1 (DMIT152)\nContents at a Glance\nIntroduction\t1\nUsing Data Bound Controls\t2")]),t._v(" "),o("p",[t._v("Detailed Contents\nIntroduction\t1\nUsing Data Bound Controls\t2\nPurpose\t2\nSetup\t2\nPart 5 – Synchronizing Two GridViews\t3\nPart 6 – Enabling Paging in GridViews\t4\nSummary\t4\nDiscussion Points\t4")]),t._v(" "),o("p",[t._v("Introduction\nThis series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.\nThere are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.\nUsing Data Bound Controls\n•\tEstimated time: 15-30 minutes.\n•\tBonus Parts:\no\tPart 5 – Synchronizing Two GridViews\nViewCategoriesAndProducts\no\tPart 6 – Enabling Paging in GridViews\nManageProducts\nPurpose\nThis hands-on tutorial walks through how to further customize the display of data in GridView controls. Data is made available to the form through the use of ObjectDataSource controls. (The ObjectDataSource control acts as a “middle-man” in exchanging data between your BLL and various Data Bound controls, such as the GridView and DropDownList.)\nSetup\nFor this lab, you will need the Visual Studio solution and database from the previous topic(s). The Starter Kit folder contains these resources.\nPart 5 – Synchronizing Two GridViews\nThis part of the tutorial walks through the steps to create a form that will look up Products by Supplier. Suppier information will be displayed in a GridView; selecting a row in the Supplier GridView will trigger the Products GridView to show all the products provided through that supplier. Once again, there is no code-behind in the form to populate the GridViews.\nSketch of Form")]),t._v(" "),o("ol",[o("li",[t._v("In the Admin folder of the web site, create a new web form called “”. Design the form to look like the following screen shot. Add two GridView controls; give the top GridView an ID of “” and the bottom an ID of “”.\nform")]),t._v(" "),o("li",[t._v("Add two ObjectDataSource controls to the form. Give them the IDs of ProductDataSource and SupplierDataSource.\nForm")]),t._v(" "),o("li",[t._v("Configure the SupplierDataSource to use the NorthwindSystem.BLL.SupplierController class as the Business Object that will supply data for this control. Then click “Next”.\nwizard")]),t._v(" "),o("li",[t._v("In the “Define Data Methods” page of the wizard, select the ListAllSuppliers() method as the SELECT method for the control. Then click “Finish”.\nwizard")]),t._v(" "),o("li",[t._v("Set the SupplierDataSource as the data source for the ??? GridView.\ndialog/smart tag")]),t._v(" "),o("li",[t._v("In the smart tag of the ??? GridView, check on the Enable Select checkbox.\nSmart tag")]),t._v(" "),o("li",[t._v("Configure the ProductDataSource to use the NorthwindSystem.BLL.ProductController class as the Business Object that will supply data for this control. Then click “Next”.\nwizard")]),t._v(" "),o("li",[t._v("In the “Define Data Methods” page of the wizard, select the LookupBySupplier() method as the SELECT method for the control. On the next page, set the ??? GridView as the control which identifies which supplier the user has selected.\nwizard")]),t._v(" "),o("li",[t._v("In the ??? page of the wizard, we must identify the ??_?? TextBox as the control that supplies the value for the CategoryID parameter of the LookupBySupplier () method. Also set a default value of zero (0), which will be needed when the page is first loaded. Click “Finish”.\nwizard")]),t._v(" "),o("li",[t._v("Set the ProductDataSource as the data source for the ??? GridView.\ndialog/smart tag")]),t._v(" "),o("li",[t._v("Through the ??? GridView’s smart tag, edit the EmptyDataTemplate to state that “There are no products for the selected supplier.”\nform w. SmartTag")]),t._v(" "),o("li",[t._v("Edit the columns for both GridViews to match the headings/styles of the screen shot below.\nform")]),t._v(" "),o("li",[t._v("Test the form in a browser window. When you click the “Select” link beside any given supplier, the page will perform a post-back and the related products will be displayed in the second GridView.\nbrowser\nPart 6 – Enabling Paging in GridViews")]),t._v(" "),o("li",[t._v("In the web site, open the “” web form. On the smart tag for the ??? GridView, click on “Enable Paging”.\nweb form and smart tag")]),t._v(" "),o("li",[t._v("Test the form in the browser. Try navigating from one page of Product data to another.\nbrowser")]),t._v(" "),o("li",[t._v("In the web site, open the “” web form. Enable paging for the GridView on this form as well. Test this form in a browser as well.\nweb form\nSummary\nIn this hands-on tutorial, you SUMMARY.\nDiscussion Points\nThe following questions are designed to help you review key aspects of this tutorial\n•\tWhy we need to set Value=”” in the Source view of the form for ListItems in DropDownList controls (for null values).\n•\tPostback triggers the ObjectDataSource to repopulate the GridView (Parts 2, 3 and 4)\n•")])])])}),[],!1,null,null,null);e.default=i.exports}}]);