---
layout: default
publish: true
title: Web Form Controls
sortorder: 02
---
# ASP.Net Web Form Controls

Web form controls serve to render content or assist other web form controls in rendering content. They can be accessed programmatically to affect their behavior and edit their content. Web form controls are also known as asp.net controls. They appear on the aspx page has markup tags prefixed by the text `asp:`, as in the following example. 

```html
<asp:Label id="Label1">First Name</asp:Label> 
<aspLTextBox id="FirstName" /> 
```

Every asp.net roll on a webpage can be assigned a unique ID. In the aspx page, this ID is an attribute on the tag. In the code behind of the page, this ID is effectively the variable name by which the control can be programmatically manipulated. In actuality, every asp.net control placed on a page will exist as a property of the class that acts as the code-behind of the page: In *WAP* projects, this property is generated in the .designer.cs file. In *websites*, which do not have designer files, the property is dynamically added to the class by the web server behind the scenes. Because each control is associated with a property of the class, they must have unique names (or IDs).

All asp.net controls inherit a large amount of their functionality from a base class called `Control`. This Base Class exposes a number of properties and methods that are common to all asp.net controls. In addition, many controls inherit from other common base classes because they share common characteristics. Together, these classes form a hierarchy tree leveraging the power of object-oriented programming.

