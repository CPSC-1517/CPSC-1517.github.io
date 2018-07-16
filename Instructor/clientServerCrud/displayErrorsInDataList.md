**Coding: Update WebPage general error handling**:

Update the way we can handle and display error messages. This will enable your
webpage to nicely handle various types of errors whether they are generated from
your code, entity annotations for EntityFramework or system errors. The key to
this is each error is treated as a single string. Each error is loaded to a
global List\<string\>. The list is then passed to a display method along with
the appropriate bootstrap css alert.

**Coding: Update current WebPage: Form**

Replace:

\<asp:Label ID="Message" runat="server" \>\</asp:Label\>

With:

\<asp:DataList ID="Message" runat="server"\>

\<ItemTemplate\>

\<%\# Container.DataItem %\>

\</ItemTemplate\>

\</asp:DataList\>

**Coding: Update current WebPage: Code-Behind**

Add: List\<string\> and replace clearing of Message control

List\<string\> errormsgs = new List\<string\>();

protected void Page_Load(object sender, EventArgs e)

{

Message.DataSource = null;

Message.DataBind();

if (!Page.IsPostBack)

{

BindProductList();

BindSupplierList();

BindCategoryList();

}

}

Replace: All

catch (Exception ex)

{

Message.Text = GetInnerException(ex).Message.ToString();

}

With:

catch (Exception ex)

{

errormsgs.Add(GetInnerException(ex).ToString());

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

Replace: All user type messages

Message.Text = "Please select a product for the search";

With:

errormsgs.Add("Please select a product for the search");

LoadMessageDisplay(errormsgs, "alert alert-warning");

**Coding: ADD WebPage general method for displaying errors**:

//use this method to load a DataList with a variable

//number of message lines.

//each line is a string

//the strings (lines) are passed to this routine in

// a List\<string\>

//second parameter is the bootstrap cssclass

protected void LoadMessageDisplay(List\<string\> errormsglist, string cssclass)

{

Message.CssClass = cssclass;

Message.DataSource = errormsglist;

Message.DataBind();

}

**Coding: Different Exception Catches**

Controller EntityFramework execution catch:

Namespaces:

using System.Data.Entity.Infrastructure;

using System.Data.Entity.Core;

catch (DbUpdateException ex)

{

UpdateException updateException = (UpdateException)ex.InnerException;

if (updateException.InnerException != null)

{

errormsgs.Add(updateException.InnerException.Message.ToString());

}

else

{

errormsgs.Add(updateException.Message);

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}

Controller EntityFramework entity Validation catch:

Namespace:

using System.Data.Entity.Validation;

catch (DbEntityValidationException ex)

{

foreach (var entityValidationErrors in ex.EntityValidationErrors)

{

foreach (var validationError in entityValidationErrors.ValidationErrors)

{

errormsgs.Add("Error: " + validationError.ErrorMessage);

}

}

LoadMessageDisplay(errormsgs, "alert alert-danger");

}
