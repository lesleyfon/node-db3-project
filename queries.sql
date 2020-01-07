-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
--Display the ProductName and CategoryName for all products in the database. Returns 77 records.
SELECT ProductName, CategoryName FROM Product
JOIN Category 
on Product.CategoryId = Category.Id
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT O.Id, Shipper.CompanyName  from "Order" as O
JOIN Shipper 
On O.ShipVia = Shipper.Id
where ShippedDate <= "2012_08_09"
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
