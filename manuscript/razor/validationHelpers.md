---
title: Validation Helpers
description: Razor Validation Helpers
---
# Razor Validation Helpers

- Methods on the `Validation` property of the `WebPage` base class applied to all Razor pages:
  - `.RequireField(string field, string errorMessage)`
  - `.Add(string field, params IValidator[] validators)` and `.Add(IEnumerable<string> fields, params IValidator[] validators)`
- Static methods on the `Validator` factory class for creating different kinds of validators
  - `.StringLength(int maxLength, int minLength=0, string errorMessage = null)`
  - `.Range(`double minValue, double maxValue, string errorMessage = null)`
  - `.Decimal(string errorMessage = null)`
  - `.Integer(string errorMessage = null)`
  - `.Url(string errorMessage = null)`
  - `.DateTime(string errorMessage = null)`
- `@Html.ValidationSummary()` and `@Html.ValidationMessage()`


# Showing Images

```charp
@{
    Page.Title = "Manage Categories";
    Layout = "~/_SiteLayout.cshtml";

    var db = Database.Open("NW");
    var queryAllCategories = "SELECT CategoryID, CategoryName FROM Categories ORDER BY CategoryName";

    string categoryId = "1";
    var queryOneCategory = "SELECT CategoryID, CategoryName, Description, Picture, PictureMimeType FROM Categories WHERE CategoryID = @0";
    var foundCategory = db.QuerySingle(queryOneCategory, categoryId);
}

<div>
    <h1>Manage Categories</h1>

    <img src="data:@foundCategory.PictureMimeType;base64,@Convert.ToBase64String(foundCategory.Picture)" />
</div>
```
