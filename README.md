# mongoose-crud



## List of Routes:

| Route                                               | HTTP   | Body                                                         | Description                                  |
| --------------------------------------------------- | ------ | ------------------------------------------------------------ | -------------------------------------------- |
| <span style="color:#0000ff">/members</span>         | GET    |                                                              | Find all members info                        |
| <span style="color:#0000ff">/members/:id</span>     |        |                                                              | Find member by ID                            |
| <span style="color:#0000ff">/members</span>         | POST   | name:String(required)<br /><br />address:String(required)<br />zipcode:String(required)<br />email:String(required)<br />phone:String(required) | Create a new member                          |
| <span style="color:#0000ff">/members/:id</span>     | PUT    | name:String<br /><br />address:String<br />zipcode:String<br />email:String<br />phone:String | Update a new member                          |
| <span style="color:#0000ff">/members/:id</span>     | DELETE |                                                              | Delete a member                              |
| <span style="color:#0000ff">/books</span>           | GET    |                                                              | Find all books info                          |
| <span style="color:#0000ff">/books/:id</span>       | GET    |                                                              | Find a book by ID                            |
| <span style="color:#0000ff">/books</span>           | POST   | isbn:String<br />title:String<br />author:String<br />category:String<br />stock:Number | Create new book                              |
| <span style="color:#0000ff">/books/:id</span>       | PUT    | isbn:String<br />title:String<br />author:String<br />category:String<br />stock:Number | Update a book info                           |
| <span style="color:#0000ff">/books/:id</span>       | DELETE |                                                              | Delete a book                                |
| <span style="color:#0000ff">/transaction</span>     | GET    |                                                              | Find all transactions info                   |
| <span style="color:#0000ff">/transaction/:id</span> | GET    |                                                              | Find a transaction by ID                     |
| <span style="color:#0000ff">/transaction</span>     | POST   | member:String<br />due_date:Date<br />booklist:String        | Create a new transaction                     |
| <span style="color:#0000ff">/transaction/:id</span> | PUT    | in_date:Date                                                 | Update transaction in_date(return book date) |
| <span style="color:#0000ff">/transaction/:id</span> | DELETE |                                                              | Delete a transaction                         |

## Usage

Make sure you have Node.js and npm installed in your computer, and then run this commands in both client and server folders:

```
$npm install
```

```
$nodemon app
```

 Access via http://localhost:3000/