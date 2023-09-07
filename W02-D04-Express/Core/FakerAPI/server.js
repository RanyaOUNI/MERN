
//Bring Express
// Import Faker
const express = require("express");
const {faker} = require('@faker-js/faker');

const PORT = 8000


// Invoke Express (execute the function express) and save the return in variable called app 
const app = express();

// MIDDLEWARE TO MAKE OUR SERVER READ JSON 
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// Function Create User
const CreateUser = () => {

    const FakeUser = {
        id: faker.string.uuid(),
        FirstName:faker.person.firstName(),
        LastName:faker.person.lastName(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        password:faker.internet.password(),

    };

    return FakeUser;

}

app.get("/user", (req, res)=> {
    res.send(CreateUser())
})
app.get("/api/users/new", (req, res)=> {
    res.json(CreateUser())
})
const FakeUser =CreateUser();
console.log(FakeUser);


// Function Create Company
const CreateCompany = () => {
    const FakeCompany = {
        CompanyID: faker.string.uuid(),
        Name:faker.company.name(),
        address : {
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country ()
            }

    };
    return FakeCompany;

}

app.get("/api/company", (req, res)=> {
    res.json(CreateCompany())
})
 
app.get("/api/companies/new", (req, res)=> {
    res.json(CreateCompany())
})


//********************/


// Run the server

app.listen(PORT, ()=>{
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})