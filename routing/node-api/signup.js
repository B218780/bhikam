exports.results = (request,response)=>{
    let formdata = "";

    request.on("data",(chunks)=>{
        formdata += chunks
    })

    request.on("end",()=>{
        console.log(formdata);
        return response.end()
    })
}