(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{404:function(t,e,s){t.exports=s.p+"assets/img/image009.18c021c9.png"},405:function(t,e,s){t.exports=s.p+"assets/img/image011.ed913b1a.png"},406:function(t,e,s){t.exports=s.p+"assets/img/image013.22226333.png"},407:function(t,e,s){t.exports=s.p+"assets/img/image015.450c7790.png"},408:function(t,e,s){t.exports=s.p+"assets/img/image017.3ae4d1fa.png"},409:function(t,e,s){t.exports=s.p+"assets/img/image019.0f4a385b.png"},410:function(t,e,s){t.exports=s.p+"assets/img/image021.d88ecae0.png"},411:function(t,e,s){t.exports=s.p+"assets/img/image023.2eea8abe.png"},412:function(t,e,s){t.exports=s.p+"assets/img/image025.83e05377.png"},413:function(t,e,s){t.exports=s.p+"assets/img/image027.56b48c31.png"},414:function(t,e,s){t.exports=s.p+"assets/img/image029.56140b49.png"},415:function(t,e,s){t.exports=s.p+"assets/img/image031.07a688b9.png"},416:function(t,e,s){t.exports=s.p+"assets/img/image033.c06c74c1.png"},417:function(t,e,s){t.exports=s.p+"assets/img/image035.daf80b6b.png"},418:function(t,e,s){t.exports=s.p+"assets/img/image037.48a2d7a7.png"},419:function(t,e,s){t.exports=s.p+"assets/img/image039.8e1c71e5.png"},420:function(t,e,s){t.exports=s.p+"assets/img/image041.fd0aff12.gif"},496:function(t,e,s){"use strict";s.r(e);var r=s(42),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"setting-up-client-server-in-visual-studio-part-1-of-9"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-client-server-in-visual-studio-part-1-of-9"}},[t._v("#")]),t._v(" Setting Up Client-Server in Visual Studio Part 1 of 9")]),t._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE")]),t._v(" "),r("p",[t._v("The content in this demo is obsolete. Use the Entity Framework library as demonstrated in class.")])]),t._v(" "),r("p",[t._v("This is the first in a series of hands-on tutorials are designed to demonstrate how to build a web application that uses a Client-Server architecture and that persists information in a database. Each tutorial will walk the reader through steps to build upon a specific web application scenario based upon the Northwind Traders database.")]),t._v(" "),r("p",[t._v("There are nine tutorials in this package. Each hands-on tutorial has a Starter Kit folder with all of the required material to begin the tutorial and a Solution folder with the final product of the tutorial.")]),t._v(" "),r("h2",{attrs:{id:"setup-in-visual-studio"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-in-visual-studio"}},[t._v("#")]),t._v(" Setup in Visual Studio")]),t._v(" "),r("ul",[r("li",[t._v("Estimated time: 15-20 minutes.")]),t._v(" "),r("li",[t._v("Parts:\n"),r("ol",[r("li",[t._v("Part 1 – Setting up the Solution"),r("br"),t._v("\nThis part walks through the basics of creating a Visual Studio solution with three projects.")]),t._v(" "),r("li",[t._v("Part 2 – Adding External Resources"),r("br"),t._v("\nThis part prepares the solution for later tutorials by adding references to additional DLLs.")])])])]),t._v(" "),r("h3",{attrs:{id:"purpose"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#purpose"}},[t._v("#")]),t._v(" Purpose")]),t._v(" "),r("p",[t._v("This tutorial will lead you through the steps to set up a Web Site in Visual Studio with a Client-Server Architecture. This solution will be the foundation for a series of tutorials in creating Client-Server Web Sites. The supporting database is the modified Northwind Traders database for this course (NorthwindExtended).")]),t._v(" "),r("p",[t._v("The solution will contain the following projects.")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("NorthwindEntities")]),t._v(" – This is a Class Library which will hold all the Custom Business Objects (aka: Business Entities) used by the other two projects.")]),t._v(" "),r("li",[r("strong",[t._v("NorthwindSystem")]),t._v(" – This is a Class Library which will hold the BLL and DAL code for the system.")]),t._v(" "),r("li",[r("strong",[t._v("Website")]),t._v(" – This is an ASP.NET Web Site which will act as the front end or client of the system.")])]),t._v(" "),r("h3",{attrs:{id:"setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),r("p",[t._v('As part of setting up the solution, you will need third-party libraries (DLLs) to support the DAL in later tutorials. The Starter Kit folder contains a folder called "Extra Libraries" which will be used in Part 2 of this tutorial.')]),t._v(" "),r("p",[r("img",{attrs:{src:s(404),alt:"screenshot"}})]),t._v(" "),r("h3",{attrs:{id:"part-1-setting-up-the-solution"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-1-setting-up-the-solution"}},[t._v("#")]),t._v(" Part 1 – Setting up the Solution")]),t._v(" "),r("p",[t._v("The goal of this part is to demonstrate how to set up a multi-project solution in Visual Studio.")]),t._v(" "),r("ol",[r("li",[r("strong",[t._v("Create NorthwindEntities")]),t._v(' – Start Visual Studio and create a (Visual C#) Class Library project called NorthwindEntities. Create the project using the path "C:\\DMIT\\152\\YourName" and be sure to set the name of the solution to "Northwind Traders by YourName".'),r("br"),r("img",{attrs:{src:s(405),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Create NorthwindSystem")]),t._v(" – Add another new Class Library project to the solution (File->Add->New Project…) and name it NorthwindSystem."),r("br"),r("img",{attrs:{src:s(406),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Create Website")]),t._v(' – Add a new ASP.NET Web Site to the solution (File->Add->New Web Site…) and set the location to "C:\\DMIT\\152\\YourName\\Northwind Traders by YourName\\Website".'),r("br"),r("img",{attrs:{src:s(407),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Check Your Solution Folder")]),t._v(" – Check that the projects in the solution are correctly organized.")]),t._v(" "),r("li",[t._v('In the Solution Explorer, right-click on the solution name and select "Open Folder in Windows Explorer".'),r("br"),r("img",{attrs:{src:s(408),alt:"screenshot"}})]),t._v(" "),r("li",[t._v("You should see three folders (one for each project) inside your solution folder."),r("br"),r("img",{attrs:{src:s(409),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Clean Up")]),t._v(' – Delete the Class1.cs files from the NorthwindEntities and NorthwindSystem projects. Then, right-click the Website and select "Set as Startup Project".'),r("br"),r("img",{attrs:{src:s(410),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Wire Up")]),t._v(" – This step is all about ensuring that the projects have the correct references to each other.")]),t._v(" "),r("li",[t._v('Right-click the NorthwindSystem project and select "Add References…" to open the Add Reference dialog box. From the Projects tab, select the NorthwindEntities project and click OK.'),r("br"),r("img",{attrs:{src:s(411),alt:"screenshot"}})]),t._v(" "),r("li",[t._v('Right-click the Website and select "Add Reference…" to open the Add Reference dialog box. Select the "Projects" tab and select both the NorthwindSystem project and the NorthwindEntities project; then click OK.'),r("br"),r("img",{attrs:{src:s(412),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Build Solution")]),t._v(' – From the Build menu, select "Build Solution" (or click [Ctrl] + b). This will compile all the projects and ensure that the DLLs from the class libraries are copied to the appropriate projects. When you are done, click "Save All" from the File menu.'),r("br"),r("img",{attrs:{src:s(413),alt:"screenshot"}})]),t._v(" "),r("li",[r("strong",[t._v("Check Your Solution")]),t._v(' – Check your solution by selecting each Class Library project in the Solution Explorer and clicking the "Show All" icon. Then expand each folder. Your results should look like this.'),r("br"),r("img",{attrs:{src:s(414),alt:"screenshot"}})])]),t._v(" "),r("h3",{attrs:{id:"part-2-adding-external-resources"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#part-2-adding-external-resources"}},[t._v("#")]),t._v(" Part 2 – Adding External Resources")]),t._v(" "),r("p",[t._v("In order for this application to connect with the database, we will make use of a few third-party libraries and a core library from the .NET Framework. This part of the tutorial walks through setting up the references to these libraries.")]),t._v(" "),r("ol",[r("li",[r("p",[r("strong",[t._v("Getting Started")]),t._v(" – Open the solution from the previous tutorial. Download the third-party DLLs for this tutorial.")])]),t._v(" "),r("li",[r("p",[r("strong",[t._v("Adding Enterprise Library 5.0")]),t._v(" – Add references to the supporting libraries by following these steps")])]),t._v(" "),r("li",[r("p",[t._v('Right-click the NorthwindSystem project and selecting "Add Library Package Reference…" or "Manage NuGet Packages…".'),r("br"),r("img",{attrs:{src:s(415),alt:"screenshot"}}),r("br"),r("img",{attrs:{src:s(416),alt:"screenshot"}})])]),t._v(" "),r("li",[r("p",[t._v('Search for the EnterpriseLibrary.Data package by selecting the Online set of packages and entering the package name in the search box. Then, click the "Install" button.'),r("br"),r("img",{attrs:{src:s(417),alt:"screenshot"}})])]),t._v(" "),r("li",[r("p",[t._v('A number of additional libraries may be required. When prompted, accept the terms for all these libraries by clicking "I Accept".'),r("br"),r("img",{attrs:{src:s(418),alt:"screenshot"}})])]),t._v(" "),r("li",[r("p",[t._v("The package(s) should be installed; installed packages have a green checkmark beside them. You may close the Manage NuGet Packages dialog."),r("br"),r("img",{attrs:{src:s(419),alt:"screenshot"}})])])]),t._v(" "),r("h3",{attrs:{id:"summary"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),r("p",[t._v("In this hands-on tutorial, you created a multi-project solution from scratch that uses a Client-Server Architecture. At this point, the Visual Studio solution is an empty shell. This solution makes use of MS Enterprise Library 5.0 DLLs for supporting the Data Access Layer. The presentation layer is an ASP.NET Website.")]),t._v(" "),r("h4",{attrs:{id:"discussion-points"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#discussion-points"}},[t._v("#")]),t._v(" Discussion Points")]),t._v(" "),r("p",[t._v("The following questions are designed to help you review key aspects of this tutorial.")]),t._v(" "),r("ul",[r("li",[t._v("What these libraries are for? (see http://msdn.microsoft.com/en-us/library/ff632023.aspx for details)\n"),r("ol",[r("li",[r("strong",[t._v("Microsoft.Practices.EnterpriseLibrary.Data.dll")]),t._v(" – This library will provide resources for accessing the database. The easiest way to install this library is to use the NuGet Package Manager, which will help resolve any dependencies on other DLLs.")])])])]),t._v(" "),r("p",[t._v("Figure 1 - See "),r("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/ff664422(v=pandp.50).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://msdn.microsoft.com/en-us/library/ff664422(v=pandp.50).aspx"),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:s(420),alt:"Enterprise Library"}})])])}),[],!1,null,null,null);e.default=i.exports}}]);