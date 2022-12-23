const http = require("http");
const fs = require("fs");
const signup = require("./node-api/signup");

const route = (path,status_code,type,response)=>{
    fs.readFile(path,(error,data)=>{
        response.writeHead(status_code,{
            "Content-Type" : type
        });
        response.write(data);
        response.end()
    })
}

const server = http.createServer((request,response)=>{
    if(request.url == "/")
    {
        let path = "html/homepage.html";
        let status_code = 200;
        let type = "text/html"
        route(path,status_code,type,response)
    }
    else if(request.url == "/js/homepage.js"){
        let path = "js/homepage.js";
        let status_code = 200;
        let type = "text/js";
        route(path,status_code,type,response)
    }
    else if(request.url == "/js/not-found.js"){
        let path = "js/not-found.js";
        let status_code = 200;
        let type = "text/js";
        route(path,status_code,type,response)
    }
    //node-api routing
    else if(request.url == "/api/signup"){
        signup.results(request,response);
      
    }
    else{
        let path = "html/not-found.html";
        let status_code = 404;
        let type = "text/html";
        route(path,status_code,type,response)
    }
});

server.listen(8080)