---
layout: default
publish: true
image: images/books-1845614_1280.jpg
title: Lab Requirements
sortorder: 1
---
# CPSC1517 Project Specs

> ***Star-TED*** Database - A simple database for a post-secondary school.

## Overview

This document outlines the marking guide and general requirements for the lab. Each student is expected to select one scenario from the catalogue of scenarios developed for the ***Star-TED*** database. Every student in the class is required to select a different scenario, so that the details of each student’s lab are unique. For that scenario, the student must complete three fully-functional forms:

*	Form A – Single item Create/Read/Update/Delete.
*	Form B – GridView Lookup with Code-Behind.
*	Form C – GridView Lookup with ObjectDataSource controls.

Your instructor will provide information on

*	Where to access the catalogue of scenarios
*	Where to obtain the database
*	Any additional information on submitting/demonstrating the lab

## The Deliverables

A detailed marking guide is provided at the end of this document. For this lab, the student must demonstrate their working Visual Studio solution in **three** parts (listed below). Each demonstration of the student’s scenario must be presented to the instructor **in-class** in order to gain the marks for that part.

*	**Part 1:** 10 % –  Due: First class of week 12
  *	Initial solution with documentation and navigation
*	**Part 2:** 15 % – Due: Second class of week 14
  * Form A
*	**Part 3:** 10 %  – Due: Second class of week 15
  * Forms B and C
  
Your instructor will provide specific dates on each deliverable.

> ***Late labs or failure to demonstrate in-class will receive a mark of zero for each affected part.***

## The Visual Studio Solution

Your solution must be a client-server solution consisting of multiple projects as outlined in the course. The Presentation Layer portion is to be an ASP.NET web application. The BLL and DAL portions of the system are to be placed in a separate class library project. Likewise, the entities of the system must be in their own separate class library project.

## The Star-TED Database

The database supplied for this lab is an SQL Server database named “StarTED”. The following is a sample of the connection string that may be used for the Presentation Layer.


```xml
  <connectionStrings>
    <add name="StarTedDb"
         connectionString="Data Source=.;Initial Catalog=StarTED;Integrated Security=True"
         providerName="System.Data.SqlClient" />
  </connectionStrings>
```

## The Forms

There are three web forms for the core functionality of this project (described below). You must name the forms `FormA.aspx`, `FormB.aspx`, and `FormC.aspx`. In addition, you must have a `Default.aspx` web form at the root of your web application that acts as the lab documentation for your selected scenario. All of these forms must share the same Master Page, which must provide navigation among all the pages in your web application.

### Master Page

Your master page must contain the following elements:

* Site Navigation – Links to all the pages in the web application (use the Menu control).
* Scenario Title – The number and name of the scenario (e.g.: G1 – Reservations by Group).
* Student Name – Your first and last name.

### Default Page

Your default (home) page must contain the following elements (each with their own heading):

* **Form Description** – A brief description of each form in the solution, identifying the name of the form and its purpose, along with any unique constraints or characteristics of the form’s behaviour.
* **Known Bugs** – A bulleted list of all the known bugs and incomplete portions of the lab.
* **Entity Relationship Diagram** - The ERD diagram (from the lab selection) of your selected scenario.
* **Class Diagrams** – Class Diagram images of the BLL and Entities, showing the full method/property signatures of each class.
* **Stored Procedures** – A bulleted list of all the stored procedures used in your project.

### Form A – Single Item CRUD

This form is similar to the cumulative results of concepts demonstrated in the Data Access CRUD topics and exercises. In this form, the student must provide a means to

* Lookup and display a single row of data from a table
* Insert new rows of data into a table
* Update an existing row of data in a table
* Delete (or mark as inactive/not current) a row of data in a table

#### Handling Large Data Sets

For most of the scenarios, you will need to perform your look up in two steps. The reason for this is because there are far too many rows of data to put in a single drop-down list. For example, with thousands of *Students* in the database, it is impractical to fill a drop-down and expect a user to find the student they wish to edit. In these situations, a two-step selection process makes the form more managable by the user.

1. First, gather user input to send to the supplied stored procedure so as to produce a "short-list" of items to select from. You can display this short list in either a `DropDownList`, `GridView` or `RadioButtonList` control.
2. The second step is where the user can select a single item in the short list to edit.

Also note that many of the scenarios will require you to have this two-stage selection process not only for choosing the row of data to edit, but also for selecting a related item as the foreign-key reference for the entity you are editing.

#### Other Considerations

Depending on the scenario and the table, the Delete functionality may not be a physical removal of a row of data. This is because some tables have triggers or other constraints that prevent the removal of existing rows. In these cases where a row cannot be deleted (excluding foreign key constraints preventing removal), the table will have some means of flagging the row as being inactive or not current.

For example, in the Employee table, a foreign key constraint prevents any rows from being deleted. However, that table has a nullable column called "ReleaseDate" which can be set to indicate that the person is not currently employed. For advice on how to deal with these situations, please consult your instructor.

### Form B – Search & Display with a GridView

This form is similar to the concepts demonstrated in the Data Access GridView topic and exercise. In this form, the student must display multiple rows of data using a customized GridView that shows the columns/properties in the selected scenario. Note that all column headers **must** present user-friendly text (as opposed to the default title-cased property names of the entity). The form must perform some kind of lookup or search functionality. The GridView must implement paging, with the page size being set to between 10 and 25 rows per page (as appropriate for your scenario).

### Form C – ObjectDataSource Search & Display with a GridView

This form is similar to the concepts demonstrated in the Data Bound Controls topic and exercise. In this form, the student must use a GridView to display multiple rows of data. All fields of the displayed entity must be used, unless otherwise specified in your scenario. The GridView must implement paging, with the page size being set to between 10 and 25 rows per page (as appropriate for your scenario).

For the GridView control, all foreign key information must be displayed/editiable via a DropDownList that displays appropriate information to the user while representing the value for the foreign key.

The controls in this form **must** be populated using ObjectDataSource controls only (no code-behind can be used to populate the forms).

BLL methods used by this form **must** be exposed for discovery to the Object Data Source: Configure Data Source wizard.

---

# Marking Guides

Each deliverable part is cumulative, building on previous deliverable parts of the solution. For each deliverable, any and all supporting functionality of previous deliverables must function correctly in order to gain marks for the demonstrated deliverable.

> Your instructor is free to make changes and/or additions to this lab and its marking guide(s). ***You*** are responsible to make sure that you are up-to-date with all the changes/additions made by your instructor.

## **Part 1** – Scenario Number: ________

This portion of the lab consists of the structured solution, documentation, and functioning code for required entities and DAL layer.

* Lab Documentation (Web Form)
  * [ ] Requested Lab documentation placed as the home page for the web application (Default.aspx)
  * [ ] List of known bugs & incomplete portions of lab
  * [ ] Entity Relationship Diagram of selected scenario
  * [ ] Class diagram file of Entities in class library (Display Full Signature) as well as exported image(s) on the Default page
  * [ ] Class diagram file of Application class library (Display Full Signature) as well as exported image(s) on the Default page
* Project Architecture & Code Quality
  * [ ] Client-Server architecture (three projects inside a single solution)
  * [ ] Master Page with functioning site-master based navigation, Scenario Title and student’s name
  * [ ] Appropriate Entity CRUD class 
  * [ ] Requested annotation for Entity CRUD class (Table, Key, NotMapped, DatabaseGeneration)
  * [ ] Appropriate validation annotation for Entity CRUD class (Required, StringLength)
  * [ ] Appropriate Entity support classes 
  * [ ] Requested annotation for Entity support classes (Table, Key, NotMapped, DatabaseGeneration)
  * [ ] DAL class with appropriate code for all the required tables
  * [ ] Proper references have been setup between projects.
* Form A – Single Item CRUD
  * [ ] Blank form with title of selected option in the student’s scenario.
  * [ ] Content page Title set to CRUD -StartTED
* Form B – GridView Lookup with Code-Behind
  * [ ] Blank form with title of selected option in the student’s scenario.
  * [ ] Content page Title set to Query -StartTED
* Form C – GridView/FormView CRUD (must not use code-behind to populate controls)
  * [ ] Blank form with title of selected option in the student’s scenario.
  * [ ] Content page Title set to ODS -StartTED
* Site.master Menu
  * [ ] working web.sitemap has been created with Home, About, Contact and Form page entires.
  * [ ] Site.master has been modified to use web.sitemap.
  * [ ] Menu displays correctly and works, includes your name in the menu brand.
* Configuration
  * [ ] a separate web config file setup for connection strings (includes given default string and required connection string for the database.
  * [ ] web.config file uses the separate web config connection strings file.
  * [ ] web.config file uses Contexts tag for surpressing dynamic table creation by EntityFramework.
  * [ ] Your DbContext class references proper connection string.

## **Part 2** – Scenario Number: ________

This portion of the lab consists of a functioning Form A, demonstrating Single Item CRUD supported by code-behind on the form and the BLL.

* Lab Documentation (Web Form)
  * [ ] List of known bugs & incomplete portions of lab
*Project Architecture & Code Quality
  * [ ] Proper & consistent use of exceptions and exception handling
  * [ ] Separate BLL classes coded for all the required tables
  * [ ] BLL method(s) required for all form queries
  * [ ] BLL method required for Add
  * [ ] BLL method required for Update
  * [ ] BLL method(s) required for Delete
* Form A – Single Item CRUD
  * [ ] Form correctly populates DropDownList controls on Page_Load event
  * [ ] Form correctly applies an appropriate search technique (use of filter where requested)
  * [ ] Form correctly looks up and displays a single item
  * [ ] Form does not use DataSource controls to fill/populate data-bound controls
  * [ ] Form uses disabled (non-editable) controls for all data that is not related to Add/Update functionality
  * [ ] Form correctly uses Validation controls for client-side validation of Add/Update functionality
  * [ ] Form correctly uses Validation controls for server-side validation of Add/Update functionality
  * [ ] Form correctly adds data to a database
  * [ ] Form correctly gives up-to-date feedback on whether the add was successful or not
  * [ ] Form correctly refreshes the web page display whether the add was successful or not
  * [ ] Form correctly updates data in the database
  * [ ] Form correctly gives up-to-date feedback on whether the update was successful or not
  * [ ] Form correctly refreshes the web page display whether the update was successful or not
  * [ ] Form correctly performs Delete of data (or equivalent) in the database
  * [ ] Form correctly gives up-to-date feedback on whether the attempted delete (as applicable) is successful
  * [ ] Form correctly refreshes the web page display whether the delete was successful or not
  * [ ] Messages correctly identifies items on the web page.

## **Part 3** – Scenario Number: ________

This portion of the lab consists of the functioning Forms B and C and the related BLL components.

* Lab Documentation (Web Form)
  * [ ] List of known bugs & incomplete portions of lab
* Project Architecture & Code Quality
  * [ ] Proper & consistent use of exceptions and exception handling
  * [ ] Separate BLL classes coded for all the required tables
  * [ ] BLL methods exposed for discovery
* Form B – GridView Lookup with Code-Behind
  * [ ] Form correctly handles Page_Load event to populate DropDownList controls
  * [ ] Form correctly applies an appropriate search technique (use of filter where requested)
  * [ ] Form correctly performs Lookup and binds data to a GridView control
  * [ ] GridView control uses column headers with meaningful names (not auto-generated)
  * [ ] GridView control uses appropriate alignment and formating for displayed data
  * [ ] GridView control displayes correct data
  * [ ] GridView control has paging implemented
  * [ ] Form does not use DataSource controls to fill/populate data-bound controls
* Form C – GridView/FormView CRUD (must not use code-behind to populate controls)
  * [ ] BLL methods set up for Data Bound controls (DataObject and DataObjectMethod attributes)
  * [ ] Form correctly applies an appropriate search technique (use of filter where requested)
  * [ ] Form correctly performs Lookup and binds data to a GridView control
  * [ ] Form uses DataSource control(s) to supply data to the GridView
  * [ ] GridView control uses column headers with meaningful names (not auto-generated)
  * [ ] GridView control uses appropriate alignment and formating for displayed data
  * [ ] GridView correctly displays data in the form
  * [ ] GridView control has paging implemented
  * [ ] GridView control uses template columns with DropDownList control

