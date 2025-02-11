function status(request, response) {
    response.status(200).json({"status": "status page"});
}
 
export default status;