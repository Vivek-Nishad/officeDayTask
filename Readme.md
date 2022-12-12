# Instructions

- Create NestJs / NodeJs - Express Project
- Configure Database connection via Sequelize - Postgres
- Create 1 basic API with it
- API should be GET, in api query one array should be get passed as per below

example->
contactList - [“+91 1234567890”, “+911234567890”,”1234567890”,
“1234567890”,”+91 2345654323”]

And save the same array as a individual entry in db table (contacts)

Entry should be unique for example +91 1234567890 and 1234567890 should be
counted as same.

So before saving it to the db need to filter the duplicates and need below output
before saving it to db

filteredContactList - [”1234567890”,”+91 2345654323”]

Save the above in the db as described above.

Once it got saved again it does not get to inserted again for example if same array
will comes again via next API call it should not get saved in db as the numbers are
already there.

---

## To run this project enter following commands

create a database in my sql named "office_day_task" or change db configuration in config/constants.js file

npm install
npm start

### To send contactlist array make a GET request to http://localhost:5001/ and send contact list as request params

Example->
http://localhost:5001/["+91 1234566890", "+911234567890","1234567890", "1234567890 " , "+91 2345654323"]

use below link to make request

[localhost](http://localhost:5001/["+91 1234566890", "+911234567890","1234567890", "1234567890 " , "+91 2345654323"])
