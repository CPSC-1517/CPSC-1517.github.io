(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{202:function(t,e,s){t.exports=s.p+"assets/img/image041.fd0aff12.gif"},203:function(t,e,s){t.exports=s.p+"assets/img/image009.18c021c9.png"},204:function(t,e,s){t.exports=s.p+"assets/img/image011.ed913b1a.png"},205:function(t,e,s){t.exports=s.p+"assets/img/image013.22226333.png"},206:function(t,e,s){t.exports=s.p+"assets/img/image015.450c7790.png"},207:function(t,e,s){t.exports=s.p+"assets/img/image017.3ae4d1fa.png"},208:function(t,e,s){t.exports=s.p+"assets/img/image019.0f4a385b.png"},209:function(t,e,s){t.exports=s.p+"assets/img/image021.d88ecae0.png"},210:function(t,e,s){t.exports=s.p+"assets/img/image023.2eea8abe.png"},211:function(t,e,s){t.exports=s.p+"assets/img/image025.83e05377.png"},212:function(t,e,s){t.exports=s.p+"assets/img/image027.56b48c31.png"},213:function(t,e,s){t.exports=s.p+"assets/img/image029.56140b49.png"},214:function(t,e,s){t.exports=s.p+"assets/img/image031.07a688b9.png"},215:function(t,e,s){t.exports=s.p+"assets/img/image033.c06c74c1.png"},216:function(t,e,s){t.exports=s.p+"assets/img/image035.daf80b6b.png"},217:function(t,e,s){t.exports=s.p+"assets/img/image037.48a2d7a7.png"},218:function(t,e,s){t.exports=s.p+"assets/img/image039.8e1c71e5.png"},292:function(t,e,s){"use strict";s.r(e);var i=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"setting-up-client-server-in-visual-studio-part-1-of-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-client-server-in-visual-studio-part-1-of-9","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting Up Client-Server in Visual Studio Part 1 of 9")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("OBSOLETE")]),e("p",[this._v("The content in this demo is obsolete. Use the Entity Framework library as demonstrated in class.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"setup-in-visual-studio"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup-in-visual-studio","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup in Visual Studio")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Estimated time: 15-20 minutes.")]),e("li",[this._v("Parts:\n"),e("ol",[e("li",[this._v("Part 1 – Setting up the Solution"),e("br"),this._v("\nThis part walks through the basics of creating a Visual Studio solution with three projects.")]),e("li",[this._v("Part 2 – Adding External Resources"),e("br"),this._v("\nThis part prepares the solution for later tutorials by adding references to additional DLLs.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"purpose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#purpose","aria-hidden":"true"}},[this._v("#")]),this._v(" Purpose")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("strong",[this._v("NorthwindEntities")]),this._v(" – This is a Class Library which will hold all the Custom Business Objects (aka: Business Entities) used by the other two projects.")]),e("li",[e("strong",[this._v("NorthwindSystem")]),this._v(" – This is a Class Library which will hold the BLL and DAL code for the system.")]),e("li",[e("strong",[this._v("Website")]),this._v(" – This is an ASP.NET Web Site which will act as the front end or client of the system.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(203),alt:"screenshot"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"part-1-–-setting-up-the-solution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-1-–-setting-up-the-solution","aria-hidden":"true"}},[this._v("#")]),this._v(" Part 1 – Setting up the Solution")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("strong",[t._v("Create NorthwindEntities")]),t._v(' – Start Visual Studio and create a (Visual C#) Class Library project called NorthwindEntities. Create the project using the path "C:\\DMIT\\152\\YourName" and be sure to set the name of the solution to "Northwind Traders by YourName".'),i("br"),i("img",{attrs:{src:s(204),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Create NorthwindSystem")]),t._v(" – Add another new Class Library project to the solution (File->Add->New Project…) and name it NorthwindSystem."),i("br"),i("img",{attrs:{src:s(205),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Create Website")]),t._v(' – Add a new ASP.NET Web Site to the solution (File->Add->New Web Site…) and set the location to "C:\\DMIT\\152\\YourName\\Northwind Traders by YourName\\Website".'),i("br"),i("img",{attrs:{src:s(206),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Check Your Solution Folder")]),t._v(" – Check that the projects in the solution are correctly organized.")]),i("li",[t._v('In the Solution Explorer, right-click on the solution name and select "Open Folder in Windows Explorer".'),i("br"),i("img",{attrs:{src:s(207),alt:"screenshot"}})]),i("li",[t._v("You should see three folders (one for each project) inside your solution folder."),i("br"),i("img",{attrs:{src:s(208),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Clean Up")]),t._v(' – Delete the Class1.cs files from the NorthwindEntities and NorthwindSystem projects. Then, right-click the Website and select "Set as Startup Project".'),i("br"),i("img",{attrs:{src:s(209),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Wire Up")]),t._v(" – This step is all about ensuring that the projects have the correct references to each other.")]),i("li",[t._v('Right-click the NorthwindSystem project and select "Add References…" to open the Add Reference dialog box. From the Projects tab, select the NorthwindEntities project and click OK.'),i("br"),i("img",{attrs:{src:s(210),alt:"screenshot"}})]),i("li",[t._v('Right-click the Website and select "Add Reference…" to open the Add Reference dialog box. Select the "Projects" tab and select both the NorthwindSystem project and the NorthwindEntities project; then click OK.'),i("br"),i("img",{attrs:{src:s(211),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Build Solution")]),t._v(' – From the Build menu, select "Build Solution" (or click [Ctrl] + b). This will compile all the projects and ensure that the DLLs from the class libraries are copied to the appropriate projects. When you are done, click "Save All" from the File menu.'),i("br"),i("img",{attrs:{src:s(212),alt:"screenshot"}})]),i("li",[i("strong",[t._v("Check Your Solution")]),t._v(' – Check your solution by selecting each Class Library project in the Solution Explorer and clicking the "Show All" icon. Then expand each folder. Your results should look like this.'),i("br"),i("img",{attrs:{src:s(213),alt:"screenshot"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"part-2-–-adding-external-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#part-2-–-adding-external-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Part 2 – Adding External Resources")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[i("p",[i("strong",[t._v("Getting Started")]),t._v(" – Open the solution from the previous tutorial. Download the third-party DLLs for this tutorial.")])]),i("li",[i("p",[i("strong",[t._v("Adding Enterprise Library 5.0")]),t._v(" – Add references to the supporting libraries by following these steps")])]),i("li",[i("p",[t._v('Right-click the NorthwindSystem project and selecting "Add Library Package Reference…" or "Manage NuGet Packages…".'),i("br"),i("img",{attrs:{src:s(214),alt:"screenshot"}}),i("br"),i("img",{attrs:{src:s(215),alt:"screenshot"}})])]),i("li",[i("p",[t._v('Search for the EnterpriseLibrary.Data package by selecting the Online set of packages and entering the package name in the search box. Then, click the "Install" button.'),i("br"),i("img",{attrs:{src:s(216),alt:"screenshot"}})])]),i("li",[i("p",[t._v('A number of additional libraries may be required. When prompted, accept the terms for all these libraries by clicking "I Accept".'),i("br"),i("img",{attrs:{src:s(217),alt:"screenshot"}})])]),i("li",[i("p",[t._v("The package(s) should be installed; installed packages have a green checkmark beside them. You may close the Manage NuGet Packages dialog."),i("br"),i("img",{attrs:{src:s(218),alt:"screenshot"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"summary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Summary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"discussion-points"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discussion-points","aria-hidden":"true"}},[this._v("#")]),this._v(" Discussion Points")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("What these libraries are for? (see http://msdn.microsoft.com/en-us/library/ff632023.aspx for details)\n"),e("ol",[e("li",[e("strong",[this._v("Microsoft.Practices.EnterpriseLibrary.Data.dll")]),this._v(" – This library will provide resources for accessing the database. The easiest way to install this library is to use the NuGet Package Manager, which will help resolve any dependencies on other DLLs.")])])])])}],r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._m(1),i("p",[t._v("This is the first in a series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.")]),i("p",[t._v("There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.")]),t._m(2),t._m(3),t._m(4),i("p",[t._v("This tutorial will lead you through the steps to set up a Web Site in Visual Studio with a Client-Server Architecture. This solution will be the foundation for a series of tutorials in creating Client-Server Web Sites. The supporting database is the modified Northwind Traders database for this course (NorthwindExtended).")]),i("p",[t._v("The solution will contain the following projects.")]),t._m(5),t._m(6),i("p",[t._v('As part of setting up the solution, you will need third-party libraries (DLLs) to support the DAL in later tutorials. The Starter Kit folder contains a folder called "Extra Libraries" which will be used in Part 2 of this tutorial.')]),t._m(7),t._m(8),i("p",[t._v("The goal of this part is to demonstrate how to set up a multi-project solution in Visual Studio.")]),t._m(9),t._m(10),i("p",[t._v("In order for this application to connect with the database, we will make use of a few third-party libraries and a core library from the .NET Framework. This part of the tutorial walks through setting up the references to these libraries.")]),t._m(11),t._m(12),i("p",[t._v("In this hands-on tutorial, you created a multi-project solution from scratch that uses a Client-Server Architecture. At this point, the Visual Studio solution is an empty shell. This solution makes use of MS Enterprise Library 5.0 DLLs for supporting the Data Access Layer. The presentation layer is an ASP.NET Website.")]),t._m(13),i("p",[t._v("The following questions are designed to help you review key aspects of this tutorial.")]),t._m(14),i("p",[t._v("Figure 1 - See "),i("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/ff664422(v=pandp.50).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://msdn.microsoft.com/en-us/library/ff664422(v=pandp.50).aspx"),i("OutboundLink")],1),i("br"),i("img",{attrs:{src:s(202),alt:"Enterprise Library"}})])])},i,!1,null,null,null);a.options.__file="tutorial-1-visualstudio.md";e.default=a.exports}}]);