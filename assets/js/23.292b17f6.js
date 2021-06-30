(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{318:function(e,t,n){e.exports=n.p+"assets/img/65a79bacad56128241e52332894cdcf0.65a79bac.png"},434:function(e,t,n){"use strict";n.r(t);var o=n(42),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[o("strong",[e._v("Objectives:")])]),e._v(" "),o("p",[o("strong",[e._v("Discuss:")])]),e._v(" "),o("blockquote",[o("p",[e._v("What is Business Logic Layer?")])]),e._v(" "),o("blockquote",[o("p",[e._v("Client Server Architecture (logical n-tiered): All table records.")])]),e._v(" "),o("blockquote",[o("p",[e._v("Client Server Architecture (logical n-tiered): Single record query.")])]),e._v(" "),o("p",[o("strong",[e._v("Code:")])]),e._v(" "),o("blockquote",[o("p",[e._v("Review web.sitemap (set up for demonstrations).")])]),e._v(" "),o("blockquote",[o("p",[e._v("BLL: List all query")])]),e._v(" "),o("blockquote",[o("p",[e._v("BLL: Single record query via primary key.")])]),e._v(" "),o("p",[o("strong",[e._v("Resources: Student")])]),e._v(" "),o("p",[e._v("Moodle site.")]),e._v(" "),o("p",[e._v("URL Student Notes")]),e._v(" "),o("p",[e._v("Client Server Architecture")]),e._v(" "),o("p",[o("strong",[e._v("Resources: Instructor")])]),e._v(" "),o("p",[e._v("Lesson 1: Introduction to using EnityFramework for database access.")]),e._v(" "),o("p",[o("strong",[e._v("Concepts:")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Quick review EntityFramework: entity definition, context class,\nentityframework")])]),e._v(" "),o("li",[o("p",[e._v("BLL controller classes:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Where does they “sit” in our logical Client Server Architecture.")])]),e._v(" "),o("li",[o("p",[e._v("What can you do in your class")])])])]),e._v(" "),o("li",[o("p",[e._v("Queries using EntityFramework")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("List All table records")])]),e._v(" "),o("li",[o("p",[e._v("Primary Key query")])])])])]),e._v(" "),o("p",[o("strong",[e._v("EntityFramework: Data Access")])]),e._v(" "),o("p",[e._v("When ASP.Net first started, users used ADO.Net to access the database. This\nrequired mounts of work, redundant setup work. As time went on, as usual, 3rd\nparty individuals attempted to reduce the amount of work needed to access the\ndatabase using ADO.Net. One popular library was Enterprise Library. This reduce\nthe redundant tedious work of using ADO.net directly. In about 2008, Microsoft\nintroduce EntityFramework to assist developers with database access. ADO.Net was\neven further removed from developer (hidden). EntityFramework is a set of\nclasses that manage your database access. One links into EntityFramework via\ninheriting its DBContext class. Using the DBSet<T> of this context class\n(where <T> is an entity definition class) and properly annotated entity\ndefinition class, database CRUD management has been greatly simplified. "),o("strong",[e._v("In\nthis course, the entity definition classes will be coded manually by the student\nso they can get a better understanding of the components needed by\nEnityFramework. Do not reverse engineer the entities. This will be covered in\nDMIT2018.")])]),e._v(" "),o("p",[o("a",{attrs:{href:"https://en.wikipedia.org/wiki/Entity_Framework",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://en.wikipedia.org/wiki/Entity_Framework"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("a",{attrs:{href:"http://www.entityframeworktutorial.net/what-is-entityframework.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.entityframeworktutorial.net/what-is-entityframework.aspx"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("EntityFramework in logical Client Server Architecture")])]),e._v(" "),o("p",[e._v("EntityFramework will manage the access of data to and from the database (aqua\ncolor). The DAL layer will contain a class which will be referred to as the\nContext class. This class will inherit DbContext from EntityFramework. The\ncommands to query, add, update and delete records will be coded in the BLL\nclasses using the DAL Context Class. The mapping of the sql tables will be done\nin the Entity classes of the Entity library. These entity classes will be used\nby the DAL, BLL and PL layers. These classes are data definitions of the sql\ntables.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(318),alt:""}})]),e._v(" "),o("p",[o("strong",[e._v("Coding: Create Controller class")])]),e._v(" "),o("p",[e._v("When creating your controller class, you are creating the interface to your\napplication. When we created the context class, we use an access privilege of\n"),o("strong",[e._v("internal")]),e._v(". This restricts the access to the context class to "),o("strong",[e._v("only")]),e._v(" other\ncalls from "),o("strong",[e._v("within")]),e._v(" the same class library. We are using this context class as\naccess to the database. Logically, therefore, we need “entrance” into the class\nlibrary. This interface (entrance) has a public access. Any user wishing to have\naccess to the database must therefore use the methods within this public\ninterface. The interface is made up of public methods. Controlling the code we\nplace in these methods means the application controls what an outside user can\nor cannot do.")]),e._v(" "),o("p",[e._v("Business Logic:")]),e._v(" "),o("p",[e._v("The controller method can contain complex business rules. These are generally\nrules that cannot be covered by simply validation (presence, datatype, range,\netc.). This logic may required multiple database queries. The Alberta Graduated\nDriver license is an example. There are several different criteria that must be\nmeet before one moves to the next level.")]),e._v(" "),o("p",[e._v("Transaction Processing:")]),e._v(" "),o("p",[e._v("The workflow to complete a process many require multiple accesses to the\ndatabase. This means using a transaction workflow which at any time could be\nlogically terminated for some reason. Consider a sale. There are several tables\nthat need to be updated: inventory, sale, and saledetail. Also, if the\ntransaction is anything but cash, external calls to verify funds need to be\nworked into the workflow. Transaction Processing will be covered in DMIT2018.")]),e._v(" "),o("p",[e._v("Security:")]),e._v(" "),o("p",[e._v("Security can be done at several levels in your application and the BLL method is\nprime place. Since all outside users wanting to access your database need to\ntravel through a public interface, checking logins and roles can be done here.\nFailure to meet proper security clearance means a simple thrown exception.\nSecurity will be covered in DMIT2018.")]),e._v(" "),o("p",[e._v("When we create the controller, one can place all of the interface into one\nphysical file and class. This would made maintenance hazardless. Use the same\nlogical reasons for separating out multiple classes from one physical file and\nout of one class to more logical classes that has been in the pass. Each entity\nwill have their own controller in its own physical file.")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Setup")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create a folder called NorthwindPages for sample pages")])]),e._v(" "),o("li",[o("p",[e._v("Download ProductCRUD startup WebPage and extract files into NorthwindPages.\nRefresh folder.")])]),e._v(" "),o("li",[o("p",[e._v("Create a web.sitemap with 3 root nodes (Home, Contact and About) and a drop\ndown menu which will contain the coded samples. Add ProductCRUD to drop down\nmenu.")])]),e._v(" "),o("li",[o("p",[e._v("Open site.master and alter menu to use web.sitemap. You can copy the code\nfrom BasicASPX sitemaster. Rename menu to ClientServerMenu. Change My\nApplication brand to ASPX Client Server.")])]),e._v(" "),o("li",[o("p",[e._v("Run and Test menu. End on ProductCRUD")])]),e._v(" "),o("li",[o("p",[e._v("Review contents of form (review of basic aspx controls)")])])]),e._v(" "),o("p",[o("strong",[e._v("Coding: Create BLL ProductController class")])]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Create a class in the BLL folder of your NorthwindSystem project called\nProductController.")])]),e._v(" "),o("li",[o("p",[e._v("Change the access privilege from the default private to public. Any class\nwithout a stated access privilege defaults to private.")])]),e._v(" "),o("li",[o("p",[e._v("Add the following namespaces:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("using NorthwindEntities;")])]),e._v(" "),o("li",[o("p",[e._v("using NorthwindSystem.DAL;")])])])])]),e._v(" "),o("p",[o("strong",[e._v("Coding: Product_List")])]),e._v(" "),o("p",[e._v("EntityFramework has a couple of queries that need no additional effort from you\nin grabbing either all the records from a table or a single record via the\nprimary key. All work to the database will go through the context class,\ntherefore, we will need to create an instance of the class. To access the data\nof a sql table, one uses the DbSet<T> properties associated with that table.\nIn this course we will use the simplest techniques in accessing the database.\nThe return datatype of a query for multiple records is usually IEnumerable. We\nwill cast this to a List<T> to make things easier for us. The work will be\nwrapped in a transaction using "),o("strong",[e._v("using(){…}")]),e._v(".")]),e._v(" "),o("p",[e._v("//a method to return all product records from")]),e._v(" "),o("p",[e._v("//the database to the calling method")]),e._v(" "),o("p",[e._v("public List<Product> Product_List()")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//need to connect to the Context class")]),e._v(" "),o("p",[e._v("//this connection will be done in a transaction coding group")]),e._v(" "),o("p",[e._v("using (var context = new NorthwindContext())")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//via EnityFrame, make a request for all records,")]),e._v(" "),o("p",[e._v("//all attributes from the specified DbSet property")]),e._v(" "),o("p",[e._v("return context.Products.ToList();")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Product_Get(int productid)")])]),e._v(" "),o("p",[e._v("EntityFramework has a method called "),o("strong",[e._v("Find(datatype)")]),e._v(" which can be used to\nretrieve a record from the associate sql table via the context DbSet<T>\nproperty.")]),e._v(" "),o("p",[e._v("public Product Product_Get (int productid)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//return the record from the database via the DbSet collection")]),e._v(" "),o("p",[e._v("//where the pkey matches the supplied value")]),e._v(" "),o("p",[e._v("using (var context = new NorthwindContext())")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("return context.Products.Find(productid);")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Classroom exercise")])]),e._v(" "),o("p",[e._v("Create the SupplierController and CategoryController classes. Add two methods to\neach class. One method to return all records of the associated sql table and one\nmethod to return the sql table record for a supplied primary key value.")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Web page")])]),e._v(" "),o("p",[o("strong",[e._v("Coding: Required Namespaces for the Code-Behind.")])]),e._v(" "),o("blockquote",[o("p",[e._v("#region Additional Namespaces")])]),e._v(" "),o("blockquote",[o("p",[e._v("using NorthwindEntities;")])]),e._v(" "),o("blockquote",[o("p",[e._v("using NorthwindSystem.BLL;")])]),e._v(" "),o("blockquote",[o("p",[e._v("#endregion")])]),e._v(" "),o("p",[o("strong",[e._v("Coding: Error Handling GetInnerException(Exception ex)")])]),e._v(" "),o("p",[e._v("Most times when an error is generated, we handle it using Try/Catch. This will\ndisplay the error and we can determine the problem with our code and fix it.\nHowever, there will be times when an error is generated and tells you to view\nthe Inner Exception. This can be annoying. A method has been created for your\nuse to handle Catch exceptions. This method will take in an Exception datatype\nand drill down until it reaches the lowest error then return it as an Exception.\nYou can then cast to a string and assign the result to your message label on the\nform.")]),e._v(" "),o("blockquote",[o("p",[e._v("try")])]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//place your code here")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("catch(Exception ex)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("//use this method to discover the inner most error message.")]),e._v(" "),o("p",[e._v("//this routine has been created by the user")]),e._v(" "),o("p",[e._v("protected Exception GetInnerException(Exception ex)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//drill down to the inner most exception")]),e._v(" "),o("p",[e._v("while (ex.InnerException != null)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("ex = ex.InnerException;")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("return ex;")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Fill drop down list")])]),e._v(" "),o("p",[e._v("The concept of placing data into a drop down list should be well understood by\nyour students by this time. Review the two components: display text (visible)\nand value text (hidden and associated). Filling a drop down list control will\nrequire making a call to the appropriate controller class and obtaining the\ntable collection (data). This collection will be sourced to the control\n(.DataSource). The display and value texts will be assigned by entity property\nname. Lastly, the data will be bound to the control (.DataBind()). Prompts can\nalso be added to the drop down list. Although, not necessary, it is handy to\nplace this code into a method so it can be called from any event handler of the\nweb page.")]),e._v(" "),o("p",[e._v("protected void BindProductList()")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//since this method will be making a call off the web page")]),e._v(" "),o("p",[e._v("//to another class/project it needs to be placed")]),e._v(" "),o("p",[e._v("//withn user friendly error handling")]),e._v(" "),o("p",[e._v("try")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//setup a connect to the controller that will provide")]),e._v(" "),o("p",[e._v("//the need interface for the request")]),e._v(" "),o("p",[e._v("ProductController sysmgr = new ProductController();")]),e._v(" "),o("p",[e._v("//obtain the data from the controller")]),e._v(" "),o("p",[e._v("List<Product> info = sysmgr.Product_List();")]),e._v(" "),o("p",[e._v("//Sort of the collection")]),e._v(" "),o("p",[e._v("//optional")]),e._v(" "),o("p",[e._v("info.Sort((x, y) => x.ProductName.CompareTo(y.ProductName));")]),e._v(" "),o("p",[e._v("//attach data to the drop down list")]),e._v(" "),o("p",[e._v("ProductList.DataSource = info;")]),e._v(" "),o("p",[e._v("//specify the display attribute and value attribute")]),e._v(" "),o("p",[e._v('ProductList.DataTextField = "ProductName";')]),e._v(" "),o("p",[e._v('ProductList.DataValueField = "ProductID";')]),e._v(" "),o("p",[e._v("//bind the data to the control")]),e._v(" "),o("p",[e._v("ProductList.DataBind();")]),e._v(" "),o("p",[e._v("//optional prompt line")]),e._v(" "),o("p",[e._v('ProductList.Items.Insert(0, "select ....");')]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("catch (Exception ex)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Classroom exercise")])]),e._v(" "),o("p",[e._v("Create the BindSupplierList() and BindCategoryList() classes. The drop down\ncontrols are SupplierList and CategoryList.")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Clear Event.")])]),e._v(" "),o("p",[e._v("Implement the Clear event. Double click the clear linkbutton on the Design view.")]),e._v(" "),o("p",[e._v("protected void Clear_Click(object sender, EventArgs e)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v('ProductID.Text = "";')]),e._v(" "),o("p",[e._v('ProductName.Text = "";')]),e._v(" "),o("p",[e._v("SupplierList.SelectedIndex = 0;")]),e._v(" "),o("p",[e._v("CategoryList.SelectedIndex = 0;")]),e._v(" "),o("p",[e._v('QuantityPerUnit.Text = "";')]),e._v(" "),o("p",[e._v('UnitPrice.Text = "";')]),e._v(" "),o("p",[e._v('UnitsInStock.Text = "";')]),e._v(" "),o("p",[e._v('UnitsOnOrder.Text = "";')]),e._v(" "),o("p",[e._v('ReorderLevel.Text = "";')]),e._v(" "),o("p",[e._v("Discontinued.Checked = false;")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[o("strong",[e._v("Coding: Search event.")])]),e._v(" "),o("p",[e._v("Implement the Search event. Double click the clear linkbutton on the Design\nview.")]),e._v(" "),o("p",[e._v("protected void Search_Click(object sender, EventArgs e)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//verify a product was selected for lookup")]),e._v(" "),o("p",[e._v("if (ProductList.SelectedIndex == 0)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v('Message.Text = "Please select a product for the search";')]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("else")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("try")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//connect to the required controller")]),e._v(" "),o("p",[e._v("ProductController sysmgr = new ProductController();")]),e._v(" "),o("p",[e._v("//create a pointer for the data being returned")]),e._v(" "),o("p",[e._v("Product info = null;")]),e._v(" "),o("p",[e._v("//make your call")]),e._v(" "),o("p",[e._v("info = sysmgr.Product_Get(int.Parse(ProductList.SelectedValue));")]),e._v(" "),o("p",[e._v("//did you actually get data")]),e._v(" "),o("p",[e._v("if (info == null)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v('Message.Text = "Product not found. Make another selection.";')]),e._v(" "),o("p",[e._v("BindProductList();")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("else")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("//load the web controls with the data in my data instance")]),e._v(" "),o("p",[e._v("ProductID.Text = info.ProductID.ToString();")]),e._v(" "),o("p",[e._v("ProductName.Text = info.ProductName;")]),e._v(" "),o("p",[e._v("SupplierList.SelectedValue = info.SuppierID.ToString();")]),e._v(" "),o("p",[e._v("CategoryList.SelectedValue = info.CategoryID.ToString();")]),e._v(" "),o("p",[e._v("QuantityPerUnit.Text = info.QuantityPerUnit;")]),e._v(" "),o("p",[e._v('UnitPrice.Text = info.UnitPrice == null ? "0.00" :'),o("br"),e._v('\nstring.Format("{0:0.00}", info.UnitPrice);')]),e._v(" "),o("p",[e._v('UnitsInStock.Text = info.UnitsInStock == null ? "0" :'),o("br"),e._v("\ninfo.UnitsInStock.ToString();")]),e._v(" "),o("p",[e._v('UnitsOnOrder.Text = info.UnitsOnOrder == null ? "0" :'),o("br"),e._v("\ninfo.UnitsOnOrder.ToString();")]),e._v(" "),o("p",[e._v('ReorderLevel.Text = info.ReorderLevel == null ? "0" :'),o("br"),e._v("\ninfo.ReorderLevel.ToString();")]),e._v(" "),o("p",[e._v("Discontinued.Checked = info.Discontinued;")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("catch (Exception ex)")]),e._v(" "),o("p",[e._v("{")]),e._v(" "),o("p",[e._v("Message.Text = GetInnerException(ex).ToString();")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")]),e._v(" "),o("p",[e._v("}")])])}),[],!1,null,null,null);t.default=r.exports}}]);