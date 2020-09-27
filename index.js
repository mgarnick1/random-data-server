var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var hostname = "127.0.0.1";
var cors = require("cors");

var app = express();

app.get('/', function(req, res) {
  res.send('sample data')
});

app.get("/people", function (req, res) {
  res.send({
    people: [
      {
        id: 1,
        job_title: "Business Systems Development Analyst",
        last_name: "Glendon",
        email: "Farge",
        gender: "Male",
        ssn: "546-21-6210"
      },
      {
        id: 2,
        job_title: "Payment Adjustment Coordinator",
        last_name: "Daryle",
        email: "Kopelman",
        gender: "Female",
        ssn: "546-03-1186"
      },
      {
        id: 3,
        job_title: "Technical Writer",
        last_name: "Braden",
        email: "Burland",
        gender: "Female",
        ssn: "607-40-2083"
      },
      {
        id: 4,
        job_title: "Nuclear Power Engineer",
        last_name: "Shelby",
        email: "Braybrookes",
        gender: "Male",
        ssn: "138-86-5789"
      },
      {
        id: 5,
        job_title: "Automation Specialist II",
        last_name: "Sol",
        email: "Thackray",
        gender: "Male",
        ssn: "801-13-0127"
      },
      {
        id: 6,
        job_title: "Pharmacist",
        last_name: "Rickert",
        email: "Costi",
        gender: "Male",
        ssn: "439-33-2908"
      },
      {
        id: 7,
        job_title: "Recruiting Manager",
        last_name: "Eben",
        email: "Cluse",
        gender: "Male",
        ssn: "810-20-1629"
      },
      {
        id: 8,
        job_title: "Analog Circuit Design manager",
        last_name: "Timofei",
        email: "Summerscales",
        gender: "Male",
        ssn: "869-64-4512"
      },
      {
        id: 9,
        job_title: "Assistant Manager",
        last_name: "Gustave",
        email: "Betteridge",
        gender: "Female",
        ssn: "221-75-3055"
      },
      {
        id: 10,
        job_title: "Compensation Analyst",
        last_name: "Borden",
        email: "Gisbye",
        gender: "Female",
        ssn: "899-25-7548"
      },
      {
        id: 11,
        job_title: "Web Designer II",
        last_name: "Ignatius",
        email: "Gilchrist",
        gender: "Male",
        ssn: "739-42-7503"
      },
      {
        id: 12,
        job_title: "Clinical Specialist",
        last_name: "Horatius",
        email: "Cellone",
        gender: "Female",
        ssn: "291-25-4999"
      },
      {
        id: 13,
        job_title: "Staff Scientist",
        last_name: "Jessie",
        email: "Ledes",
        gender: "Female",
        ssn: "217-92-9463"
      },
      {
        id: 14,
        job_title: "VP Product Management",
        last_name: "Hermy",
        email: "Giffon",
        gender: "Male",
        ssn: "156-23-0283"
      },
      {
        id: 15,
        job_title: "Mechanical Systems Engineer",
        last_name: "Bradley",
        email: "Carbery",
        gender: "Female",
        ssn: "213-75-9313"
      },
      {
        id: 16,
        job_title: "Junior Executive",
        last_name: "Fredric",
        email: "Kowal",
        gender: "Female",
        ssn: "304-95-6595"
      },
      {
        id: 17,
        job_title: "Operator",
        last_name: "Rene",
        email: "Sabathe",
        gender: "Male",
        ssn: "887-86-1052"
      },
      {
        id: 18,
        job_title: "Analog Circuit Design manager",
        last_name: "Herold",
        email: "Murray",
        gender: "Male",
        ssn: "568-24-0275"
      },
      {
        id: 19,
        job_title: "VP Sales",
        last_name: "Lucian",
        email: "Rhodef",
        gender: "Female",
        ssn: "291-88-3369"
      },
      {
        id: 20,
        job_title: "Tax Accountant",
        last_name: "Leigh",
        email: "Sprules",
        gender: "Female",
        ssn: "154-63-0798"
      },
      {
        id: 21,
        job_title: "Geological Engineer",
        last_name: "Rance",
        email: "Schoolcroft",
        gender: "Female",
        ssn: "543-25-5786"
      },
      {
        id: 22,
        job_title: "Media Manager II",
        last_name: "Hazlett",
        email: "Fourcade",
        gender: "Female",
        ssn: "277-06-9617"
      },
      {
        id: 23,
        job_title: "Compensation Analyst",
        last_name: "Redford",
        email: "Dankov",
        gender: "Male",
        ssn: "426-88-1016"
      },
      {
        id: 24,
        job_title: "Registered Nurse",
        last_name: "Kerby",
        email: "Clegg",
        gender: "Female",
        ssn: "883-49-7745"
      },
      {
        id: 25,
        job_title: "Analog Circuit Design manager",
        last_name: "Berky",
        email: "Hallibone",
        gender: "Male",
        ssn: "737-51-9883"
      },
      {
        id: 26,
        job_title: "Analog Circuit Design manager",
        last_name: "Jeth",
        email: "Ley",
        gender: "Female",
        ssn: "616-20-1955"
      },
      {
        id: 27,
        job_title: "VP Marketing",
        last_name: "Townie",
        email: "Lamasna",
        gender: "Female",
        ssn: "642-57-9783"
      },
      {
        id: 28,
        job_title: "Research Associate",
        last_name: "Maje",
        email: "Flippini",
        gender: "Male",
        ssn: "869-02-8222"
      },
      {
        id: 29,
        job_title: "Financial Advisor",
        last_name: "Mikol",
        email: "O'Fielly",
        gender: "Female",
        ssn: "367-59-1633"
      },
      {
        id: 30,
        job_title: "Executive Secretary",
        last_name: "Jerry",
        email: "Squibb",
        gender: "Female",
        ssn: "395-18-7883"
      },
      {
        id: 31,
        job_title: "Community Outreach Specialist",
        last_name: "Gamaliel",
        email: "Porcas",
        gender: "Female",
        ssn: "599-52-5103"
      },
      {
        id: 32,
        job_title: "Legal Assistant",
        last_name: "Bancroft",
        email: "Fernant",
        gender: "Female",
        ssn: "694-53-2418"
      },
      {
        id: 33,
        job_title: "Physical Therapy Assistant",
        last_name: "Birch",
        email: "McMurthy",
        gender: "Female",
        ssn: "584-43-4865"
      },
      {
        id: 34,
        job_title: "Librarian",
        last_name: "Iosep",
        email: "Duffrie",
        gender: "Female",
        ssn: "373-22-7122"
      },
      {
        id: 35,
        job_title: "Librarian",
        last_name: "Ellwood",
        email: "Fulford",
        gender: "Male",
        ssn: "355-44-2128"
      },
      {
        id: 36,
        job_title: "Senior Developer",
        last_name: "Miller",
        email: "Mangham",
        gender: "Male",
        ssn: "439-50-6282"
      },
      {
        id: 37,
        job_title: "Biostatistician III",
        last_name: "Crosby",
        email: "Gealy",
        gender: "Male",
        ssn: "570-40-7994"
      },
      {
        id: 38,
        job_title: "Clinical Specialist",
        last_name: "Konstantin",
        email: "Butterwick",
        gender: "Female",
        ssn: "710-88-4433"
      },
      {
        id: 39,
        job_title: "Marketing Assistant",
        last_name: "Tedmund",
        email: "Delooze",
        gender: "Female",
        ssn: "658-60-0488"
      },
      {
        id: 40,
        job_title: "Programmer Analyst II",
        last_name: "Vanya",
        email: "Ruffles",
        gender: "Female",
        ssn: "856-58-9324"
      },
      {
        id: 41,
        job_title: "Chemical Engineer",
        last_name: "Tobe",
        email: "Follan",
        gender: "Female",
        ssn: "780-38-7981"
      },
      {
        id: 42,
        job_title: "Paralegal",
        last_name: "Pavlov",
        email: "Crosswaite",
        gender: "Female",
        ssn: "404-06-0596"
      },
      {
        id: 43,
        job_title: "Senior Cost Accountant",
        last_name: "Brnaby",
        email: "Gebb",
        gender: "Male",
        ssn: "145-37-3852"
      },
      {
        id: 44,
        job_title: "Office Assistant IV",
        last_name: "Pacorro",
        email: "Moscrop",
        gender: "Male",
        ssn: "835-62-7819"
      },
      {
        id: 45,
        job_title: "Chemical Engineer",
        last_name: "Andrew",
        email: "Havelin",
        gender: "Male",
        ssn: "631-69-4889"
      },
      {
        id: 46,
        job_title: "Speech Pathologist",
        last_name: "Natty",
        email: "Vye",
        gender: "Female",
        ssn: "639-66-4904"
      },
      {
        id: 47,
        job_title: "Computer Systems Analyst II",
        last_name: "Sigismond",
        email: "Bonallick",
        gender: "Male",
        ssn: "421-43-5638"
      },
      {
        id: 48,
        job_title: "Community Outreach Specialist",
        last_name: "Izak",
        email: "Urvoy",
        gender: "Female",
        ssn: "229-40-6519"
      },
      {
        id: 49,
        job_title: "Nuclear Power Engineer",
        last_name: "Freddy",
        email: "Kopje",
        gender: "Male",
        ssn: "242-50-7315"
      },
      {
        id: 50,
        job_title: "Structural Analysis Engineer",
        last_name: "Trever",
        email: "Tookill",
        gender: "Male",
        ssn: "552-04-1919"
      }
    ]
  })
})

app.use(cors());

app.use(bodyParser.json());

app.listen(3002, function() {
  /* use this app as the point of entry using the port. */
  console.log("Express server listening on port 3002");
});
