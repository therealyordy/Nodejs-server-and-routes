const http = require("http")
const { createDeflateRaw } = require("zlib")

const server = http.createServer((req, res) =>{
    const url = req.url
    let tableData = "<table border='1'><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Address</th><th>Phone Number</th></tr>"
    if(url === '/'){
        res.write("Home Page")
        res.end()
    }
    if(url === '/message'){
        res.write("Welcome To My Message Page")
        res.end()
    }

    if(url === '/list'){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            createData(data)
            res.write('tableData')
            res.end()
        })
    
    }

    function createData(data){
        data.forEach(element => {
            tableData+= '<tr><td>${element.id}</td><td>${element.name}</td><td>${element.username}</td><td>${element.email}</td><td>${element.adress.street}</td>${element.phone}</td></tr></table>'
        });
        tableData+= '</table>'
    }


const PORT = 8090;

server.listen(PORT, ()=> console.log('server is running on port ${PORT}'))
