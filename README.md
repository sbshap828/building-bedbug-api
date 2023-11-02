
This Is A Specialized API That Links Managed Buildings to One of The NY City Open Data Bases 


Introduction

in my previous job, we were always checking on compliance issues. NYC has many hundreds of compliance requiurements and NYC opendata keeps track of some but not all of these issues. 

https://data.cityofnewyork.us/Housing-Development/Bedbug-Reporting/wz6d-d3jb



This API lists the following information from our records:

The building address
The building section/block number
City multiple dwelling registration (MDR)
City building department id (BIN)
The building community board number
A picture of the building

From opendata we pull
city calls our MDR = registrtion_id
registration_id
filing_date iterates and picks last file date,
filing_period_start_date:
filing_period_end_date: 
infested_dwelling_unit_count:,
eradicated_unit_count:
number of apartmments

See below for a snippet of the JSON format:



How to Use

The below link will take you to the full array of the city data base I used.



???https://nytimes-book-api.herokuapp.com/books
Looking up a book by title

To search for a book by title, use the below endpoint followed by the book title.

https://nytimes-book-api.herokuapp.com/books/title
For example, if you wanted to look up the book titled 'Tomorrow, and Tomorrow, and Tomorrow' you would use the link below.

https://nytimes-book-api.herokuapp.com/books/title/Tomorrow, and Tomorrow, and Tomorrow
Which should display the below:

Tomorrow, and Tomorrow, and Tomorrow

Looking up a book by author

To search for a book by author, use the below endpoint followed by the book author.

https://nytimes-book-api.herokuapp.com/books/author
For example, if you wanted to look up the book written by Harlan Coben you would use the link below.

https://nytimes-book-api.herokuapp.com/books/author/harlan coben
Which should display the below:

To search for a book by its ranking in the Best Seller List, use the below endpoint followed by the book's rank.

https://nytimes-book-api.herokuapp.com/books/rank
For example, if you wanted to look up the 3rd book in the ranking you would use the link below.

https://nytimes-book-api.herokuapp.com/books/rank/3
Which should display the below:

3rd book in rank

CRUD Functionality

To read (GET) all the books in the list:

Use the below endpoint with an API platform, ie. Postman. Make sure to have the GET setting selected.

https://nytimes-book-api.herokuapp.com/books
Make sure you have the same selections as the below screenshot.

Postman Get Screenshot

To create (POST) a new building or bedbug report (bedbug would not go to city database):


To update (PUT) or delete (DELETE):

Use the same endpoint on an API platform, ie. Postman. Make sure to switch to the appropriate HTTP verb. Any sort of update or deletion will require the id of the book that you are updating or deleting.

For example, if you wanted to update 'Hang The Moon' because it's moved in the ranking. You would use the below endpoint with the id that correlates to 'Hang the Moon'.

https://nytimes-book-api.herokuapp.com/books/6436c8e02dc8794112af741b
If you are updating a book make sure you have the same selections as the below screenshot.

Postman Put Screenshot

If you need to delete a book make sure you have the same selections as the below screenshot.

Postman Delete Screenshot

Installation

If you would like to use this API for your own project follow the steps below:

Install a Code Editor of your choice. I use VS Code

Fork and clone this repository

Intialize npm (node package manager) in your terminal by typing in the below

npm i
To create a localized version of the database, the data must be seeded first. Seeding the data takes it from it's raw JSON format and formats it into an easy to read model. I have made a custom script for this step so you can type the below in your terminal.
npm run db:seed
To keep your connection to the local database I have created a custom script for that as well. Type the below next in your terminal.
npm run dev
The API will be visible in your local host 4000. You can copy the below code and paste it in your browser
http://localhost:3000/buildings



Resources

NY Times Developer Network
Postman
Node
Express
Mongoose
MongoDB
JSON
Node Fetch
JSON Viewer Google Chrome Extenstion
VS Code

