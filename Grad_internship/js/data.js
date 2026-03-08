const scholarships = [

{
  id: 1,
  name: "Global Scholars Program",
  country: "USA",
  stream: "Business",
  level: "PG",
  funding: "$50,000",
  deadline: "July"
},

{
  id: 2,
  name: "UK Excellence Award",
  country: "UK",
  stream: "STEM",
  level: "PG",
  funding: "Full Funding",
  deadline: "August"
},

{
  id: 3,
  name: "Canadian Merit Scholarship",
  country: "Canada",
  stream: "Business",
  level: "UG",
  funding: "$30,000",
  deadline: "June"
},

{
  id: 4,
  name: "Germany Research Grant",
  country: "Germany",
  stream: "STEM",
  level: "PhD",
  funding: "Full Funding",
  deadline: "May"
},

{
  id: 5,
  name: "France Academic Award",
  country: "France",
  stream: "Law",
  level: "PG",
  funding: "$20,000",
  deadline: "April"
},

{
  id: 6,
  name: "STEM Innovators Grant",
  country: "USA",
  stream: "STEM",
  level: "PG",
  funding: "$40,000",
  deadline: "September"
}

]


localStorage.setItem("scholarships", JSON.stringify(scholarships))