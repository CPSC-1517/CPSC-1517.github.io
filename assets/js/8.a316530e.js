(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,n){e.exports=n.p+"assets/img/65a79bacad56128241e52332894cdcf0.65a79bac.png"},258:function(e,t,n){"use strict";n.r(t);var r=[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Objectives:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Discuss:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("What is Business Logic Layer?")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Client Server Architecture (logical n-tiered): All table records.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Client Server Architecture (logical n-tiered): Single record query.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Code:")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Review web.sitemap (set up for demonstrations).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("BLL: List all query")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("BLL: Single record query via primary key.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Student")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Resources: Instructor")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Concepts:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("p",[e._v("Quick review EntityFramework: entity definition, context class,"),n("br"),e._v("\nentityframework")])]),n("li",[n("p",[e._v("BLL controller classes:")]),n("ul",[n("li",[n("p",[e._v("Where does they “sit” in our logical Client Server Architecture.")])]),n("li",[n("p",[e._v("What can you do in your class")])])])]),n("li",[n("p",[e._v("Queries using EntityFramework")]),n("ul",[n("li",[n("p",[e._v("List All table records")])]),n("li",[n("p",[e._v("Primary Key query")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("EntityFramework: Data Access")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("When ASP.Net first started, users used ADO.Net to access the database. This"),n("br"),e._v("\nrequired mounts of work, redundant setup work. As time went on, as usual, 3rd"),n("br"),e._v("\nparty individuals attempted to reduce the amount of work needed to access the"),n("br"),e._v("\ndatabase using ADO.Net. One popular library was Enterprise Library. This reduce"),n("br"),e._v("\nthe redundant tedious work of using ADO.net directly. In about 2008, Microsoft"),n("br"),e._v("\nintroduce EntityFramework to assist developers with database access. ADO.Net was"),n("br"),e._v("\neven further removed from developer (hidden). EntityFramework is a set of"),n("br"),e._v("\nclasses that manage your database access. One links into EntityFramework via"),n("br"),e._v("\ninheriting its DBContext class. Using the DBSet<T> of this context class"),n("br"),e._v("\n(where <T> is an entity definition class) and properly annotated entity"),n("br"),e._v("\ndefinition class, database CRUD management has been greatly simplified. "),n("strong",[e._v("In"),n("br"),e._v("\nthis course, the entity definition classes will be coded manually by the student"),n("br"),e._v("\nso they can get a better understanding of the components needed by"),n("br"),e._v("\nEnityFramework. Do not reverse engineer the entities. This will be covered in"),n("br"),e._v("\nDMIT2018.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("EntityFramework in logical Client Server Architecture")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("EntityFramework will manage the access of data to and from the database (aqua"),n("br"),e._v("\ncolor). The DAL layer will contain a class which will be referred to as the"),n("br"),e._v("\nContext class. This class will inherit DbContext from EntityFramework. The"),n("br"),e._v("\ncommands to query, add, update and delete records will be coded in the BLL"),n("br"),e._v("\nclasses using the DAL Context Class. The mapping of the sql tables will be done"),n("br"),e._v("\nin the Entity classes of the Entity library. These entity classes will be used"),n("br"),e._v("\nby the DAL, BLL and PL layers. These classes are data definitions of the sql"),n("br"),e._v("\ntables.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:n(159),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Create Controller class")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("When creating your controller class, you are creating the interface to your"),n("br"),e._v("\napplication. When we created the context class, we use an access privilege of"),n("br"),n("strong",[e._v("internal")]),e._v(". This restricts the access to the context class to "),n("strong",[e._v("only")]),e._v(" other"),n("br"),e._v("\ncalls from "),n("strong",[e._v("within")]),e._v(" the same class library. We are using this context class as"),n("br"),e._v("\naccess to the database. Logically, therefore, we need “entrance” into the class"),n("br"),e._v("\nlibrary. This interface (entrance) has a public access. Any user wishing to have"),n("br"),e._v("\naccess to the database must therefore use the methods within this public"),n("br"),e._v("\ninterface. The interface is made up of public methods. Controlling the code we"),n("br"),e._v("\nplace in these methods means the application controls what an outside user can"),n("br"),e._v("\nor cannot do.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The controller method can contain complex business rules. These are generally"),t("br"),this._v("\nrules that cannot be covered by simply validation (presence, datatype, range,"),t("br"),this._v("\netc.). This logic may required multiple database queries. The Alberta Graduated"),t("br"),this._v("\nDriver license is an example. There are several different criteria that must be"),t("br"),this._v("\nmeet before one moves to the next level.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The workflow to complete a process many require multiple accesses to the"),t("br"),this._v("\ndatabase. This means using a transaction workflow which at any time could be"),t("br"),this._v("\nlogically terminated for some reason. Consider a sale. There are several tables"),t("br"),this._v("\nthat need to be updated: inventory, sale, and saledetail. Also, if the"),t("br"),this._v("\ntransaction is anything but cash, external calls to verify funds need to be"),t("br"),this._v("\nworked into the workflow. Transaction Processing will be covered in DMIT2018.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Security can be done at several levels in your application and the BLL method is"),t("br"),this._v("\nprime place. Since all outside users wanting to access your database need to"),t("br"),this._v("\ntravel through a public interface, checking logins and roles can be done here."),t("br"),this._v("\nFailure to meet proper security clearance means a simple thrown exception."),t("br"),this._v("\nSecurity will be covered in DMIT2018.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When we create the controller, one can place all of the interface into one"),t("br"),this._v("\nphysical file and class. This would made maintenance hazardless. Use the same"),t("br"),this._v("\nlogical reasons for separating out multiple classes from one physical file and"),t("br"),this._v("\nout of one class to more logical classes that has been in the pass. Each entity"),t("br"),this._v("\nwill have their own controller in its own physical file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Setup")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[n("p",[e._v("Create a folder called NorthwindPages for sample pages")])]),n("li",[n("p",[e._v("Download ProductCRUD startup WebPage and extract files into NorthwindPages."),n("br"),e._v("\nRefresh folder.")])]),n("li",[n("p",[e._v("Create a web.sitemap with 3 root nodes (Home, Contact and About) and a drop"),n("br"),e._v("\ndown menu which will contain the coded samples. Add ProductCRUD to drop down"),n("br"),e._v("\nmenu.")])]),n("li",[n("p",[e._v("Open site.master and alter menu to use web.sitemap. You can copy the code"),n("br"),e._v("\nfrom BasicASPX sitemaster. Rename menu to ClientServerMenu. Change My"),n("br"),e._v("\nApplication brand to ASPX Client Server.")])]),n("li",[n("p",[e._v("Run and Test menu. End on ProductCRUD")])]),n("li",[n("p",[e._v("Review contents of form (review of basic aspx controls)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Create BLL ProductController class")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v("Create a class in the BLL folder of your NorthwindSystem project called"),t("br"),this._v("\nProductController.")])]),t("li",[t("p",[this._v("Change the access privilege from the default private to public. Any class"),t("br"),this._v("\nwithout a stated access privilege defaults to private.")])]),t("li",[t("p",[this._v("Add the following namespaces:")]),t("ol",[t("li",[t("p",[this._v("using NorthwindEntities;")])]),t("li",[t("p",[this._v("using NorthwindSystem.DAL;")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Product_List")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("EntityFramework has a couple of queries that need no additional effort from you"),n("br"),e._v("\nin grabbing either all the records from a table or a single record via the"),n("br"),e._v("\nprimary key. All work to the database will go through the context class,"),n("br"),e._v("\ntherefore, we will need to create an instance of the class. To access the data"),n("br"),e._v("\nof a sql table, one uses the DbSet<T> properties associated with that table."),n("br"),e._v("\nIn this course we will use the simplest techniques in accessing the database."),n("br"),e._v("\nThe return datatype of a query for multiple records is usually IEnumerable. We"),n("br"),e._v("\nwill cast this to a List<T> to make things easier for us. The work will be"),n("br"),e._v("\nwrapped in a transaction using "),n("strong",[e._v("using(){…}")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Product_Get(int productid)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("EntityFramework has a method called "),t("strong",[this._v("Find(datatype)")]),this._v(" which can be used to"),t("br"),this._v("\nretrieve a record from the associate sql table via the context DbSet<T>"),t("br"),this._v("\nproperty.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Classroom exercise")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create the SupplierController and CategoryController classes. Add two methods to"),t("br"),this._v("\neach class. One method to return all records of the associated sql table and one"),t("br"),this._v("\nmethod to return the sql table record for a supplied primary key value.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Web page")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Required Namespaces for the Code-Behind.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("#region Additional Namespaces")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("using NorthwindEntities;")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("using NorthwindSystem.BLL;")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("#endregion")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Error Handling GetInnerException(Exception ex)")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Most times when an error is generated, we handle it using Try/Catch. This will"),n("br"),e._v("\ndisplay the error and we can determine the problem with our code and fix it."),n("br"),e._v("\nHowever, there will be times when an error is generated and tells you to view"),n("br"),e._v("\nthe Inner Exception. This can be annoying. A method has been created for your"),n("br"),e._v("\nuse to handle Catch exceptions. This method will take in an Exception datatype"),n("br"),e._v("\nand drill down until it reaches the lowest error then return it as an Exception."),n("br"),e._v("\nYou can then cast to a string and assign the result to your message label on the"),n("br"),e._v("\nform.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("try")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Fill drop down list")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The concept of placing data into a drop down list should be well understood by"),n("br"),e._v("\nyour students by this time. Review the two components: display text (visible)"),n("br"),e._v("\nand value text (hidden and associated). Filling a drop down list control will"),n("br"),e._v("\nrequire making a call to the appropriate controller class and obtaining the"),n("br"),e._v("\ntable collection (data). This collection will be sourced to the control"),n("br"),e._v("\n(.DataSource). The display and value texts will be assigned by entity property"),n("br"),e._v("\nname. Lastly, the data will be bound to the control (.DataBind()). Prompts can"),n("br"),e._v("\nalso be added to the drop down list. Although, not necessary, it is handy to"),n("br"),e._v("\nplace this code into a method so it can be called from any event handler of the"),n("br"),e._v("\nweb page.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Classroom exercise")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Create the BindSupplierList() and BindCategoryList() classes. The drop down"),t("br"),this._v("\ncontrols are SupplierList and CategoryList.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Clear Event.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Coding: Search event.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Implement the Search event. Double click the clear linkbutton on the Design"),t("br"),this._v("\nview.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('UnitPrice.Text = info.UnitPrice == null ? "0.00" :'),t("br"),this._v('\nstring.Format("{0:0.00}", info.UnitPrice);')])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('UnitsInStock.Text = info.UnitsInStock == null ? "0" :'),t("br"),this._v("\ninfo.UnitsInStock.ToString();")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('UnitsOnOrder.Text = info.UnitsOnOrder == null ? "0" :'),t("br"),this._v("\ninfo.UnitsOnOrder.ToString();")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('ReorderLevel.Text = info.ReorderLevel == null ? "0" :'),t("br"),this._v("\ninfo.ReorderLevel.ToString();")])}],i=n(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),n("p",[e._v("Moodle site.")]),n("p",[e._v("URL Student Notes")]),n("p",[e._v("Client Server Architecture")]),e._m(10),n("p",[e._v("Lesson 1: Introduction to using EnityFramework for database access.")]),e._m(11),e._m(12),e._m(13),e._m(14),n("p",[n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Entity_Framework",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Entity_Framework"),n("OutboundLink")],1)]),n("p",[n("a",{attrs:{href:"http://www.entityframeworktutorial.net/what-is-entityframework.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.entityframeworktutorial.net/what-is-entityframework.aspx"),n("OutboundLink")],1)]),e._m(15),e._m(16),e._m(17),e._m(18),e._m(19),n("p",[e._v("Business Logic:")]),e._m(20),n("p",[e._v("Transaction Processing:")]),e._m(21),n("p",[e._v("Security:")]),e._m(22),e._m(23),e._m(24),e._m(25),e._m(26),e._m(27),e._m(28),e._m(29),n("p",[e._v("//a method to return all product records from")]),n("p",[e._v("//the database to the calling method")]),n("p",[e._v("public List<Product> Product_List()")]),n("p",[e._v("{")]),n("p",[e._v("//need to connect to the Context class")]),n("p",[e._v("//this connection will be done in a transaction coding group")]),n("p",[e._v("using (var context = new NorthwindContext())")]),n("p",[e._v("{")]),n("p",[e._v("//via EnityFrame, make a request for all records,")]),n("p",[e._v("//all attributes from the specified DbSet property")]),n("p",[e._v("return context.Products.ToList();")]),n("p",[e._v("}")]),n("p",[e._v("}")]),e._m(30),e._m(31),n("p",[e._v("public Product Product_Get (int productid)")]),n("p",[e._v("{")]),n("p",[e._v("//return the record from the database via the DbSet collection")]),n("p",[e._v("//where the pkey matches the supplied value")]),n("p",[e._v("using (var context = new NorthwindContext())")]),n("p",[e._v("{")]),n("p",[e._v("return context.Products.Find(productid);")]),n("p",[e._v("}")]),n("p",[e._v("}")]),e._m(32),e._m(33),e._m(34),e._m(35),e._m(36),e._m(37),e._m(38),e._m(39),e._m(40),e._m(41),e._m(42),n("p",[e._v("{")]),n("p",[e._v("//place your code here")]),n("p",[e._v("}")]),n("p",[e._v("catch(Exception ex)")]),n("p",[e._v("{")]),n("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),n("p",[e._v("}")]),n("p",[e._v("//use this method to discover the inner most error message.")]),n("p",[e._v("//this routine has been created by the user")]),n("p",[e._v("protected Exception GetInnerException(Exception ex)")]),n("p",[e._v("{")]),n("p",[e._v("//drill down to the inner most exception")]),n("p",[e._v("while (ex.InnerException != null)")]),n("p",[e._v("{")]),n("p",[e._v("ex = ex.InnerException;")]),n("p",[e._v("}")]),n("p",[e._v("return ex;")]),n("p",[e._v("}")]),e._m(43),e._m(44),n("p",[e._v("protected void BindProductList()")]),n("p",[e._v("{")]),n("p",[e._v("//since this method will be making a call off the web page")]),n("p",[e._v("//to another class/project it needs to be placed")]),n("p",[e._v("//withn user friendly error handling")]),n("p",[e._v("try")]),n("p",[e._v("{")]),n("p",[e._v("//setup a connect to the controller that will provide")]),n("p",[e._v("//the need interface for the request")]),n("p",[e._v("ProductController sysmgr = new ProductController();")]),n("p",[e._v("//obtain the data from the controller")]),n("p",[e._v("List<Product> info = sysmgr.Product_List();")]),n("p",[e._v("//Sort of the collection")]),n("p",[e._v("//optional")]),n("p",[e._v("info.Sort((x, y) => x.ProductName.CompareTo(y.ProductName));")]),n("p",[e._v("//attach data to the drop down list")]),n("p",[e._v("ProductList.DataSource = info;")]),n("p",[e._v("//specify the display attribute and value attribute")]),n("p",[e._v('ProductList.DataTextField = "ProductName";')]),n("p",[e._v('ProductList.DataValueField = "ProductID";')]),n("p",[e._v("//bind the data to the control")]),n("p",[e._v("ProductList.DataBind();")]),n("p",[e._v("//optional prompt line")]),n("p",[e._v('ProductList.Items.Insert(0, "select ....");')]),n("p",[e._v("}")]),n("p",[e._v("catch (Exception ex)")]),n("p",[e._v("{")]),n("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),n("p",[e._v("}")]),n("p",[e._v("}")]),e._m(45),e._m(46),e._m(47),n("p",[e._v("Implement the Clear event. Double click the clear linkbutton on the Design view.")]),n("p",[e._v("protected void Clear_Click(object sender, EventArgs e)")]),n("p",[e._v("{")]),n("p",[e._v('ProductID.Text = "";')]),n("p",[e._v('ProductName.Text = "";')]),n("p",[e._v("SupplierList.SelectedIndex = 0;")]),n("p",[e._v("CategoryList.SelectedIndex = 0;")]),n("p",[e._v('QuantityPerUnit.Text = "";')]),n("p",[e._v('UnitPrice.Text = "";')]),n("p",[e._v('UnitsInStock.Text = "";')]),n("p",[e._v('UnitsOnOrder.Text = "";')]),n("p",[e._v('ReorderLevel.Text = "";')]),n("p",[e._v("Discontinued.Checked = false;")]),n("p",[e._v("}")]),e._m(48),e._m(49),n("p",[e._v("protected void Search_Click(object sender, EventArgs e)")]),n("p",[e._v("{")]),n("p",[e._v("//verify a product was selected for lookup")]),n("p",[e._v("if (ProductList.SelectedIndex == 0)")]),n("p",[e._v("{")]),n("p",[e._v('Message.Text = "Please select a product for the search";')]),n("p",[e._v("}")]),n("p",[e._v("else")]),n("p",[e._v("{")]),n("p",[e._v("try")]),n("p",[e._v("{")]),n("p",[e._v("//connect to the required controller")]),n("p",[e._v("ProductController sysmgr = new ProductController();")]),n("p",[e._v("//create a pointer for the data being returned")]),n("p",[e._v("Product info = null;")]),n("p",[e._v("//make your call")]),n("p",[e._v("info = sysmgr.Product_Get(int.Parse(ProductList.SelectedValue));")]),n("p",[e._v("//did you actually get data")]),n("p",[e._v("if (info == null)")]),n("p",[e._v("{")]),n("p",[e._v('Message.Text = "Product not found. Make another selection.";')]),n("p",[e._v("BindProductList();")]),n("p",[e._v("}")]),n("p",[e._v("else")]),n("p",[e._v("{")]),n("p",[e._v("//load the web controls with the data in my data instance")]),n("p",[e._v("ProductID.Text = info.ProductID.ToString();")]),n("p",[e._v("ProductName.Text = info.ProductName;")]),n("p",[e._v("SupplierList.SelectedValue = info.SuppierID.ToString();")]),n("p",[e._v("CategoryList.SelectedValue = info.CategoryID.ToString();")]),n("p",[e._v("QuantityPerUnit.Text = info.QuantityPerUnit;")]),e._m(50),e._m(51),e._m(52),e._m(53),n("p",[e._v("Discontinued.Checked = info.Discontinued;")]),n("p",[e._v("}")]),n("p",[e._v("}")]),n("p",[e._v("catch (Exception ex)")]),n("p",[e._v("{")]),n("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),n("p",[e._v("}")]),n("p",[e._v("}")]),n("p",[e._v("}")])])},r,!1,null,null,null);s.options.__file="lesson-1.md";t.default=s.exports}}]);