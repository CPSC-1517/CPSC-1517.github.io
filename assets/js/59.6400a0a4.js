(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{236:function(e,t,a){"use strict";a.r(t);var r=a(0),i=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("p",[a("strong",[e._v("Objectives:")])]),a("p",[a("strong",[e._v("Discuss:")])]),a("p",[e._v("Using SqlQuery and SqlParameter")]),a("blockquote",[a("p",[e._v("Why would one wish to customize their GridView presentation?")])]),a("blockquote",[a("p",[e._v("Generally accepted practise for alignment and data formatting.")])]),a("blockquote",[a("p",[e._v("GridView customized components Template columns.")])]),a("p",[a("strong",[e._v("Code:")])]),a("blockquote",[a("p",[e._v("PL: Customize a GridView using Template columns.")])]),a("p",[a("strong",[e._v("Resources: Student")])]),a("p",[e._v("Moodle site.")]),a("ul",[a("li",[a("p",[e._v("Displaying Mutliple Items in a GridView")])]),a("li",[a("p",[e._v("Customizing GridView")])]),a("li",[a("p",[e._v("Working with GridView Events")])])]),a("p",[a("strong",[e._v("Resources: Instructor")])]),a("ul",[a("li",[a("p",[e._v("Lesson 1:")]),a("ul",[a("li",[a("p",[e._v("Displaying Mutliple Items in a GridView")])]),a("li",[a("p",[e._v("Customizing GridView,")])]),a("li",[a("p",[e._v("Working with GridView Events")])])])])]),a("p",[a("strong",[e._v("Concepts:")])]),a("ol",[a("li",[a("p",[e._v("Calling an sql procedure from the BLL")])]),a("li",[a("p",[e._v("Boundfields vs Template fields")])]),a("li",[a("p",[e._v("Customizing techniques (IDE vs self coding)")])]),a("li",[a("p",[e._v("Customize format of data.")])]),a("li",[a("p",[e._v("Customize general appearance of GridView")])])]),a("p",[a("strong",[e._v("Class actions:")])]),a("p",[e._v("Do the Customizing Gridview tutorial.")]),a("p",[a("strong",[e._v("Lesson Notes:")])]),a("p",[e._v("A developer does not need to just rely on queries to a single sql table using"),a("br"),e._v("\n.List() or .Find(). You can call a sql procedure using SqlQuery<T>(). You can"),a("br"),e._v("\npass parameters to the call using SqlParameter(). The SqlParameter needs the"),a("br"),e._v("\nSystem.Data.SqlClient name space.")]),a("p",[e._v("Open the ProductController. Add the following method.")]),a("p",[e._v("//to query your database using a non primary key value")]),a("p",[e._v("//this will require a sql procedure to call")]),a("p",[e._v("//the namespace System.Data.SqlClient is required")]),a("p",[e._v("//the returning datatype is IEnumerable<T>")]),a("p",[e._v("//this returning datatype will be cast using ToList() on the return")]),a("p",[e._v("public List<Product> Products_GetByPartialProductName(string partialname)")]),a("p",[e._v("{")]),a("p",[e._v("using (var context = new NorthwindContext())")]),a("p",[e._v("{")]),a("p",[e._v("//sometimes there may be a sql error that does not like the new SqlParameter()")]),a("p",[e._v("// coded directly in the SqlQuery call")]),a("p",[e._v("//if this happens to you then code your parameter as shown below then")]),a("p",[e._v("// use the parm1 in the SqlQuery call instead of the new....")]),a("p",[e._v("//don't know why but its weird")]),a("p",[e._v('//var parm1 = new SqlParameter("PartialName", partialname);')]),a("p",[e._v("IEnumerable<Product> results = context.Database.SqlQuery<Product>"),a("br"),e._v('\n("Products_GetByPartialProductName @PartialName",')]),a("p",[e._v('new SqlParameter("PartialName", partialname));')]),a("p",[e._v("return results.ToList();")]),a("p",[e._v("}")]),a("p",[e._v("}")]),a("p",[e._v("The dataset that is returned to the method from sql is an IEnumerable<T>. The"),a("br"),e._v("\ndatatype T will be a designed object that matches the design of the SELECT"),a("br"),e._v("\ncommand of your procedure (this example uses Product). The call does not use the"),a("br"),e._v("\nDbSet() entity, instead is via .Database.SqlQuery<T>(). It will still use your"),a("br"),e._v("\ncontext class. The parameters of the method consists of the procedure name with"),a("br"),e._v("\nany passed parameters as a string followed by a set of SqlParameter() instances,"),a("br"),e._v("\none each for each parameter.")]),a("p",[e._v("The example uses the procedure Products_GetBySupplierPartialProductName."),a("br"),e._v("\nREMEMBER, you are coding in C# so case-sensitivity is important. The first"),a("br"),e._v("\nparameter to SqlQuery<T>() is the calling of the procedure using the procedure"),a("br"),e._v("\nname and any necessary procedure parameters. Notice that the sql parameters"),a("br"),e._v("\nstart with an @ and must match the case and spelling of the parameter in the"),a("br"),e._v("\nprocedure. If there are more than one parameter, separate these using a comma"),a("br"),e._v("\n(,). If there are any parameters to the sql procedure, these are supplied"),a("br"),e._v("\nfollowing the first SqlQuery parameter. The procedure parameters are supplied as"),a("br"),e._v("\nSqlParameter instances. The instance requires 2 parameters: a string identifying"),a("br"),e._v("\nthe sql procedure parameter and a value. Notice the @ is removed from the"),a("br"),e._v("\nstring. If you have multiple SqlParameter instances, separate them by a comma"),a("br"),e._v("\n(,).")]),a("p",[a("strong",[e._v("GridView")])]),a("p",[e._v("GridView replaced the DataGrid as a web control in Framework 2.0. The DataGrid"),a("br"),e._v("\ncontrol does not appear on the Framework 2.0 toolbar. The workings of the"),a("br"),e._v("\nGridView and DataGrid appear to be extremely similar with only a couple minor"),a("br"),e._v("\ndifferences.")]),a("p",[e._v("The GridView is used to display multiple rows from a data source, typically a"),a("br"),e._v("\ndatatable. The datatable may be standalone or within a dataset. The default"),a("br"),e._v("\ndisplay of the datatable within the gridview uses all the table columns and the"),a("br"),e._v("\ntable column name as the gridview column header. This poses a problem if you"),a("br"),e._v("\nwish to display specific columns, use alternate column headings or assign"),a("br"),e._v("\ndisplay formats that differ from the basic string display of the data.")]),a("p",[e._v("We will discuss two popular techniques used in customizing a gridview,"),a("br"),e._v("\nBoundFields and Templates. The BoundField is generally used for read-only"),a("br"),e._v("\ndisplays. The default display format is string. You can assign various"),a("br"),e._v("\nformatting patterns to your data. When used with the EditUpdate command button,"),a("br"),e._v("\nthe BoundField will be displayed within a textbox. The Template column allows"),a("br"),e._v("\nfor a more refined customization of the gridview column. There are several types"),a("br"),e._v("\nof template columns: ItemTemplate, EditItemTemplate, AlternatingItemTemplate,"),a("br"),e._v("\nHeaderTemplate and FooterTemplate. You must supply the content display or a"),a("br"),e._v("\nbasic standard web control (such as textbox, drop down list, checkbox) when"),a("br"),e._v("\nsetting up a template. Access to data is done using script.")]),a("p",[e._v("You may have a combination of boundfields and template columns within a single"),a("br"),e._v("\ngridview, each representing a different column. When you do customize your"),a("br"),e._v("\ngridview, set the AutoGenerateColumn property to “false” (default is “true”) or"),a("br"),e._v("\nyou will get "),a("strong",[e._v("both")]),e._v(" your customized columns and the default set column setup.")]),a("p",[e._v("A gridview is ideally used when your data source has 3 or more columns to"),a("br"),e._v("\ndisplay for multiple rows. If you have only 2 columns (description and an"),a("br"),e._v("\nassociated value), consider using a drop down list. Your columns should have"),a("br"),e._v("\nlimited size and any particular column data should not wrap to the following"),a("br"),e._v("\nline.")]),a("p",[e._v("Review Customizing GridView and Working with GridView events documents.")]),a("p",[e._v("Concentrate on template fields as they are the most versatile (sample).")]),a("p",[e._v('<asp:GridView ID="ProductGridView" runat="server"')]),a("blockquote",[a("p",[e._v('AutoGenerateColumns="False" GridLines="None"')])]),a("p",[e._v('AllowPaging="True" PageSize="2"')]),a("p",[e._v('OnPageIndexChanging="ProductGridView_PageIndexChanging"')]),a("p",[e._v('OnSelectedIndexChanged="ProductGridView_SelectedIndexChanged">')]),a("p",[e._v("<Columns>")]),a("p",[e._v('<asp:CommandField CausesValidation="False" SelectText="View"')]),a("p",[e._v('ShowSelectButton="True"></asp:CommandField>')]),a("p",[e._v("<asp:TemplateField >")]),a("p",[e._v("<ItemTemplate>")]),a("p",[e._v('<asp:Label ID="ProductID" runat="server"')]),a("p",[e._v('Text=\'<%# Eval("ProductID") %>\' Visible="false"></asp:Label>')]),a("p",[e._v("</ItemTemplate>")]),a("p",[e._v("</asp:TemplateField>")]),a("p",[e._v('<asp:TemplateField HeaderText="Name">')]),a("p",[e._v("<ItemTemplate>")]),a("p",[e._v('<asp:Label ID="ProductName" runat="server"')]),a("p",[e._v('Text=\'<%# Eval("ProductName") %>\'Width="300px"></asp:Label>')]),a("p",[e._v("</ItemTemplate>")]),a("p",[e._v('<HeaderStyle HorizontalAlign="Left"></HeaderStyle>')]),a("p",[e._v('<ItemStyle HorizontalAlign="Left"></ItemStyle>')]),a("p",[e._v("</asp:TemplateField>")]),a("p",[e._v('<asp:TemplateField HeaderText="Qty/Unit">')]),a("p",[e._v("<ItemTemplate>")]),a("p",[e._v('<asp:Label ID="QuantityPerUnit" runat="server"')]),a("p",[e._v('Text=\'<%# Eval("QuantityPerUnit") %>\' Width="200px"></asp:Label>')]),a("p",[e._v("</ItemTemplate>")]),a("p",[e._v('<ItemStyle HorizontalAlign="Left"></ItemStyle>')]),a("p",[e._v("</asp:TemplateField>")]),a("p",[e._v('<asp:TemplateField HeaderText="$">')]),a("p",[e._v("<ItemTemplate>")]),a("p",[e._v('<asp:Label ID="UnitPrice" runat="server"')]),a("p",[e._v('Text=\'<%# string.Format("{0:0.00}", Eval("UnitPrice")) %>\'')]),a("p",[e._v('Width="50px"></asp:Label>')]),a("p",[e._v("</ItemTemplate>")]),a("p",[e._v('<ItemStyle HorizontalAlign="Right"></ItemStyle>')]),a("p",[e._v("</asp:TemplateField>")]),a("p",[e._v('<asp:TemplateField HeaderText="Disc">')]),a("p",[e._v("<ItemTemplate>")]),a("p",[e._v('<asp:CheckBox ID="Discontinued" runat="server"')]),a("p",[e._v("Checked='<%# Eval(\"Discontinued\") %>' />")]),a("p",[e._v("</ItemTemplate>")]),a("p",[e._v('<ItemStyle HorizontalAlign="Center"></ItemStyle>')]),a("p",[e._v("</asp:TemplateField>")]),a("p",[e._v("</Columns>")]),a("p",[e._v("<EmptyDataTemplate>")]),a("p",[e._v("No products from for search criteria")]),a("p",[e._v("</EmptyDataTemplate>")]),a("p",[e._v('<PagerSettings FirstPageText="Start" LastPageText="End" Mode="NumericFirstLast"'),a("br"),e._v('\nPageButtonCount="5" />')]),a("p",[e._v("</asp:GridView>")]),a("p",[e._v("Points of interest:")]),a("ol",[a("li",[a("p",[e._v("GridLines=”None”: removes gridlines from display")])]),a("li",[a("p",[e._v("EmptyDataTemplate: should be included in any gridview to handle an empty"),a("br"),e._v("\nassigned dataset")])]),a("li",[a("p",[e._v("Paging: Parameters created for you when setting the control properties")])]),a("li",[a("p",[e._v("CausesValidation: if your page contains validation controls and you do not"),a("br"),e._v("\nwant to have the validation to run when pressing the command button on your"),a("br"),e._v("\ngridview.")])]),a("li",[a("p",[e._v("Visible=”false’: to hid a column but still have it available for event"),a("br"),e._v("\nprocessing")])]),a("li",[a("p",[e._v("Formatting using string.Format()")])]),a("li",[a("p",[e._v("Command button event")])]),a("li",[a("p",[e._v("Paging event")])])]),a("p",[e._v("protected void ProductGridView_SelectedIndexChanged(object sender, EventArgs e)")]),a("p",[e._v("{")]),a("p",[e._v("//optional")]),a("p",[e._v("//create a variable line pointer to the GridView Selected Row")]),a("p",[e._v("GridViewRow agvrow = ProductGridView.Rows[ProductGridView.SelectedIndex];")]),a("p",[e._v("//extract the data from the GridView Row column")]),a("p",[e._v("//the data will be retrieved as a string")]),a("p",[e._v('//to find the control on the row use the .FindControl("idname")')]),a("p",[e._v("//to determine the type of control referenced use as ControlTypeName")]),a("p",[e._v("//to access the data use the control's appropriate access technique")]),a("p",[e._v('string productid = (agvrow.FindControl("ProductID") as Label).Text;')]),a("p",[e._v('string productname = (agvrow.FindControl("ProductName") as Label).Text;')]),a("p",[e._v('string quantityperunit = (agvrow.FindControl("QuantityPerUnit") as Label).Text;')]),a("p",[e._v('string unitprice = (agvrow.FindControl("UnitPrice") as Label).Text;')]),a("p",[e._v('bool discontinued = (agvrow.FindControl("Discontinued") as CheckBox).Checked;')]),a("p",[e._v('string msg = string.Format("Id: {0} Name: {1} Qty/Unit: {2} $: {3} Disc: {4}",')]),a("p",[e._v("productid, productname, quantityperunit, unitprice, discontinued);")]),a("p",[e._v("errormsgs.Add(msg);")]),a("p",[e._v('LoadMessageDisplay(errormsgs, "alert alert-success");')]),a("p",[e._v("}")]),a("p",[e._v("protected void ProductGridView_PageIndexChanging(object sender,"),a("br"),e._v("\nGridViewPageEventArgs e)")]),a("p",[e._v("{")]),a("p",[e._v("//set the new page number on the gridview")]),a("p",[e._v("//the adjustment of the page number IS NOT automatic")]),a("p",[e._v("ProductGridView.PageIndex = e.NewPageIndex;")]),a("p",[e._v("//refresh the gridview by requering the database")]),a("p",[e._v("SearchProducts_Click(sender, e);")]),a("p",[e._v("}")])])}],!1,null,null,null);t.default=i.exports}}]);