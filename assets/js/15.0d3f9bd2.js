(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{175:function(e,t,a){e.exports=a.p+"assets/img/264267b26bd8f36c32924ae697119434.264267b2.png"},264:function(e,t,a){"use strict";a.r(t);var r=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[r("strong",[e._v("Objectives:")])]),r("p",[r("strong",[e._v("Discuss:")])]),r("blockquote",[r("p",[e._v("Displaying multiple records (WebGrid vs Table).")])]),r("blockquote",[r("p",[e._v("Using multiple pages for processing.")])]),r("p",[r("strong",[e._v("Code:")])]),r("blockquote",[r("p",[e._v("Create a multiple record query.")])]),r("blockquote",[r("p",[e._v("Create dynamic drop down list.")])]),r("blockquote",[r("p",[e._v("Passing data between pages using Get")])]),r("ul",[r("li",[r("p",[e._v("Response.Redirect with arguments,")])]),r("li",[r("p",[e._v("Request.QueryString[]")])])]),r("blockquote",[r("p",[e._v("Load a webgrid (default)")])]),r("p",[r("strong",[e._v("Resources: Student")])]),r("p",[e._v("Moodle site.")]),r("p",[e._v("URL Student Notes")]),r("p",[e._v("doc Basic Search Techniques")]),r("p",[r("strong",[e._v("Resources: Instructor")])]),r("p",[e._v("Lesson 2: Search and Display of multi-record database query.")]),r("p",[r("strong",[e._v("Concepts:")])]),r("ol",[r("li",[r("p",[e._v("Creating a dropdownlist dynamically from database data")])]),r("li",[r("p",[e._v("QuerySingle vs Query vs QueryValue execution")])]),r("li",[r("p",[e._v("Passing data between webpages")])]),r("li",[r("p",[e._v("Difference between requirements for displaying multiple records from a"),r("br"),e._v("\nquery:Table vs WebGrid")])])]),r("p",[r("strong",[e._v("Coding:Query Page")])]),r("ul",[r("li",[r("p",[e._v("Open the file containing your website menu (_Menu.cshtml).")])]),r("li",[r("p",[e._v("Create a new menu item in the DropDownMenu area DB Samples for a multiple"),r("br"),e._v("\nrecord query which uses a context page called"),r("br"),e._v("\n/DBPages/MultiRecordQuery.cshtml.")])]),r("li",[r("p",[e._v("Create two content pages called MultiRecordQuery.cshtml and"),r("br"),e._v("\nMultiRecordWebGrid.cshtml within the DBPages folder.")])]),r("li",[r("p",[e._v("Set your Title, Layout and banner section on your new pages.")])])]),r("p",[e._v("This page will load a dropdown list <Select> with data from the Categories"),r("br"),e._v("\ntable. The ddl will have a prompt line. The process will test for a selection."),r("br"),e._v("\nIf no selection made: appropriate error message. If a slection was made then the"),r("br"),e._v("\nresults will be tested. An empty collection (.Count() == 0) will cause an"),r("br"),e._v("\nappropriate message. A collection with contents will cause a transfer to page"),r("br"),e._v("\ntwo of the query which contains the webgrid. The webgrid could be displayed on"),r("br"),e._v("\nthis first page but the design of the lesson is to include page to page transfer"),r("br"),e._v("\nof data.")]),r("p",[e._v("The second page, webgrid, will use Request.QueryString[] to access the passed"),r("br"),e._v("\ndata. A test will be done for null on the receiving value. If the content page"),r("br"),e._v("\nwas called without data being passed, maybe it was by a hacker. If the value is"),r("br"),e._v("\nnull then the first is recalled. If a value was passed, then the query is"),r("br"),e._v("\nre-executed on this page and the result dumped into a webgrid. Customizing the"),r("br"),e._v("\nwebgrid will be done in the next lesson.")]),r("p",[e._v("Start the page by retrieving all of the Categories records for the dropdownlist."),r("br"),e._v("\nThe Query( ) method has been used because many records are expected to be"),r("br"),e._v("\nreturned. It is nice to have this collection sorted. The collection needs two"),r("br"),e._v("\nvalues: a text display value (CategoryName) and an associate data value"),r("br"),e._v("\n(CategoryID). This collection will be used to load the dropdownlist.")]),r("p",[e._v("The dropdownlist has a prompt line added as the first entry. The foreach loop is"),r("br"),e._v("\nexecuted for each category record in the collection. For each category record,"),r("br"),e._v("\nan <option> tag is created using the record’s text display field and data"),r("br"),e._v("\nvalue field. Remember, you can reference these fields using the [index] or"),r("br"),e._v("\nproperty technique. Yes you can mix the two.")]),r("p",[e._v("The post processing ensures that a category was selected. A query using the"),r("br"),e._v("\nselected category list value has been postponed just to demonstrate the queries"),r("br"),e._v("\ndo NOT always have to be done in the first coding block. Testing of a Query( )"),r("br"),e._v("\ncollection is done using .Count() == 0 (different then QuerySingle which is"),r("br"),e._v("\nresults == null).")]),r("p",[e._v("Page redirection is done using the Response.Redirect(“pagename”) command. In"),r("br"),e._v("\nthis demonstration we wish to also pass an argument value to the next page. To"),r("br"),e._v("\nindicate that arguments are attached to the url address (page), following the"),r("br"),e._v("\npagename with a question (?) mark. Next the argument is created. This consists"),r("br"),e._v("\nof two parts: argument label and argument value (label=value). In older browser"),r("br"),e._v("\nthe total length of the url was 256 characters; now it is 3000 characters. If"),r("br"),e._v("\nyou have multiple arguments to pass, separate each argument group with an"),r("br"),e._v("\nampersand (& such as arg1=value&arg2=value …). It is important to note that the"),r("br"),e._v("\nlabel and value will be in "),r("strong",[e._v("plain text")]),e._v(" when it is seen in the url of the next"),r("br"),e._v("\npage. Therefore, "),r("strong",[e._v("due consideration")]),e._v(" needs to be used with what is passed"),r("br"),e._v("\nusing this technique.")]),r("p",[r("img",{attrs:{src:a(175),alt:""}})]),r("p",[e._v("@{")]),r("p",[e._v('Page.Title = "Multi-Query";')]),r("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),r("p",[e._v('var categorylist = Request.Form["CategoryList"];')]),r("p",[e._v("if (categorylist == null)")]),r("p",[e._v("{//the first time the content page is activated")]),r("p",[e._v("// the categorylist will be null because there was")]),r("p",[e._v("// no CategoryList in existence yet")]),r("p",[e._v("//it the value to a unknown value of the appropriate")]),r("p",[e._v("// datatype")]),r("p",[e._v("//Zero was chosen because primary keys are never zero.")]),r("p",[e._v('categorylist = "0";')]),r("p",[e._v("}")]),r("p",[e._v('var db = Database.Open("NWDB");')]),r("p",[e._v("//get the data for the dropdownlist")]),r("p",[e._v("//this needs to be done prior using the collection")]),r("p",[e._v("// in the loop under the <Select> tag")]),r("p",[e._v('var ddlcommand = "SELECT CategoryID, CategoryName "')]),r("p",[e._v('+ "FROM Categories "')]),r("p",[e._v('+ "ORDER BY CategoryName";')]),r("p",[e._v("var ddlResults = db.Query(ddlcommand);")]),r("p",[e._v("}")]),r("p",[e._v("@section banner{")]),r("p",[e._v('<span style="font-size:xx-large"><strong>Database: Mutliple Record'),r("br"),e._v("\nQuery</strong></span>}")]),r("p",[e._v("<div>")]),r("p",[e._v("@if (IsPost)")]),r("p",[e._v("{")]),r("p",[e._v("//user did not select a region, ddl still sitting on the prompt line")]),r("p",[e._v('if (categorylist.Equals("0"))')]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:firebrick">Make a select of a category.</span></p>')]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("//demonstration")]),r("p",[e._v("//accessing the database for the product list can be delayed until")]),r("p",[e._v("// the user has pressed the submit button")]),r("p",[e._v('var querycommand = "SELECT ProductName "')]),r("p",[e._v('+ "FROM Products "')]),r("p",[e._v('+ "WHERE CategoryID = @0";')]),r("p",[e._v("var results = db.Query(querycommand, categorylist);")]),r("p",[e._v("if (results.Count() == 0)")]),r("p",[e._v("{")]),r("p",[e._v('<p><span style="color:firebrick">No products for this'),r("br"),e._v("\ncategory.</span></p>")]),r("p",[e._v("}")]),r("p",[e._v("else")]),r("p",[e._v("{")]),r("p",[e._v("//pass a value from this content pass to the indicated page")]),r("p",[e._v("//? indicates argument(s) are to follow")]),r("p",[e._v("//an argument is made up of a label=value")]),r("p",[e._v("//multiple arguments are separated by a &")]),r("p",[e._v("//this uses the Get posting so the value will appear")]),r("p",[e._v("// on the url")]),r("p",[e._v('Response.Redirect("MultiRecordWebGrid.cshtml?cid=" + categorylist);')]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v("}")]),r("p",[e._v('<form id="theForm" action="" method="post">')]),r("p",[e._v('<div class="row">')]),r("p",[e._v('<div class="col-sm-offset-3">')]),r("p",[e._v('<label id="forCategoryList">Select a Category:</label><br />')]),r("p",[e._v('<select id="CategoryListID" name="CategoryList">')]),r("p",[e._v('<option value="0">select...</option>')]),r("p",[e._v("@foreach (var item in ddlResults)")]),r("p",[e._v("{")]),r("p",[e._v("//loop through the collection of records")]),r("p",[e._v("// in ddlResults")]),r("p",[e._v("//create a line in the ddl for each item")]),r("p",[e._v("// in ddlResults")]),r("p",[e._v("//referencing of the data items on each row")]),r("p",[e._v("// is done using the [index] technique")]),r("p",[e._v("// one could have used properties .CategoryID and")]),r("p",[e._v("// .CategoryName")]),r("p",[e._v('<option value="@item[0]">@item[1]</option>')]),r("p",[e._v("}")]),r("p",[e._v("</select>&nbsp; ")]),r("p",[e._v('<button type="submit" name="formButton" value="submit"')]),r("p",[e._v('class="btn btn-primary">')]),r("p",[e._v("Search")]),r("p",[e._v("</button>")]),r("p",[e._v("</div>")]),r("p",[e._v("</div>")]),r("p",[e._v("</form>")]),r("p",[e._v("</div>")]),r("p",[r("strong",[e._v("Coding:WebGrid Page")])]),r("p",[e._v("This content page will not appear on the menu. It is to be called only by the"),r("br"),e._v("\nQuery page. This page will be expecting a value to be passed to it. This value"),r("br"),e._v("\nwill be retrieved using Request.QueryString[“arglabel”]. The value supplied will"),r("br"),e._v("\nbe captured as a string. If the arglabel was not passed to the page, its value"),r("br"),e._v("\nwill be null. You can test this value against null. If the value is null, then"),r("br"),e._v("\nyou can redirect yourself back to the query page for a proper value.")]),r("p",[e._v("The page uses the passed value to obtain the necessary data from the database.")]),r("p",[e._v("The passed value is used to obtain the category name from the Categories table."),r("br"),e._v("\nThe query used here is QueryValue() which expects to return a single value (not"),r("br"),e._v("\nrecord) from the sql query.")]),r("p",[e._v("Next, the passed value is used to obtain the Product records for the category."),r("br"),e._v("\nThis collection is then placed in a display. The display of multiple records can"),r("br"),e._v("\nbe done using two basic techniques: dynamically create a <table> or use a"),r("br"),e._v("\ncontrol called a WebGrid (which creates the table for you). Unless you wish"),r("br"),e._v("\nsomething other than a standard grid table, WebGrid is very convenient. Create"),r("br"),e._v("\nan instance of WebGrid assigning the collection to it then display the instance.")]),r("p",[e._v("It should be noted that this display does not use a form. Paging is an integral"),r("br"),e._v("\npart of the WebGrid.")]),r("p",[e._v("@{")]),r("p",[e._v('Page.Title = "WebGrid";')]),r("p",[e._v('Layout = "~/_LayoutMenu.cshtml";')]),r("p",[e._v("//rid is the argument label from the sending page")]),r("p",[e._v("//QueryString returns either null (if argument did not exists) or")]),r("p",[e._v("// a string value")]),r("p",[e._v('var categoryid = Request.QueryString["cid"];')]),r("p",[e._v("if (string.IsNullOrEmpty(categoryid))")]),r("p",[e._v("{")]),r("p",[e._v('Response.Redirect("MultiRecordQuery.cshtml");')]),r("p",[e._v("}")]),r("p",[e._v('var db = Database.Open("NWDB");')]),r("p",[e._v('var scalarcommand = "SELECT CategoryName "')]),r("p",[e._v('+ "FROM Categories "')]),r("p",[e._v('+ "WHERE CategoryID = @0";')]),r("p",[e._v("//QueryValue returns a single value (not a record) from the query")]),r("p",[e._v("//this value will be used in titling the WebGrid display")]),r("p",[e._v("var categoryname = db.QueryValue(scalarcommand, categoryid);")]),r("p",[e._v('var querycommand = "SELECT ProductID, ProductName, UnitPrice, UnitsInStock,'),r("br"),e._v('\nDiscontinued "')]),r("p",[e._v('+ "FROM Products "')]),r("p",[e._v('+ "WHERE CategoryID = @0 "')]),r("p",[e._v('+ "ORDER BY 2";')]),r("p",[e._v("var results = db.Query(querycommand, categoryid);")]),r("p",[e._v("//create an instance of WebGrid")]),r("p",[e._v("//notice the collection is passed at the time of instantiation")]),r("p",[e._v("var gridinstance = new WebGrid(results);")]),r("p",[e._v("}")]),r("p",[e._v("@section banner{")]),r("p",[e._v('<span style="font-size:xx-large"><strong>Database:'),r("br"),e._v("\nWebGrid</strong></span>}")]),r("p",[e._v("<div>")]),r("p",[e._v('<div class="col-sm-offset-3">')]),r("p",[e._v('<span style="font-size:x-large"><strong>Products for'),r("br"),e._v("\n@categoryname</strong></span>")]),r("p",[e._v("\x3c!--Display the WebGrid instance in its default display--\x3e")]),r("p",[e._v("@gridinstance.GetHtml();")]),r("p",[e._v("</div>")]),r("p",[e._v("</div>")])])}],s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},r,!1,null,null,null);n.options.__file="lesson-2.md";t.default=n.exports}}]);