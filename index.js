const http = require('http')

// // Using the createServer function we can actually create a basic http server using http module
// This function returns a server object, and takes a callback as an argument.
// This function created a server object but didn't start the server

const PORT = 3000;
const server = http.createServer(function listener(request, response){
       /**
     * request -> we will be able to details of incoming http request -> object
     * response -> we will be able to configure what response we need to send
     *             for an incoming http request -> object
     */
    // this callback is kind of listener function that is goind to collect
    // every http request that we will make our server
    
    // if someone hit my server then they will get 
    // console.log('incoming request details', req);
    // console.log('response details', res);
    // console.log("welcome to my server");

    if(request.url  == '/home'){
        console.log(request.method);
        response.end('welcome to home'); 
        // response.end({msg:'ok'}); ❌❌
        
        /**
         * to send the data chunk by chunk  using write
         */
        response.write('first response');
        response.write('second response');
        response.end('last response');

    }
    response.sendFile(dir)
    console.log('request received'); 
    
    // send html code or json from this setup
    // ✅
});

server.listen(PORT, function exec(){
     // once we succesfully boot up the server on the given port, this callback will be
    // executed.
    console.log('sever is succesfully set up for http server at port : ', PORT);
});

