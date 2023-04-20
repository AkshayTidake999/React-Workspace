
function ArrayListingWithMap2(){
    const studentInfo = [
        {
            name : "Akshay" , email : "akshay@dev.com" , contact : 9876677992
        },
        {
            name : "Prathmeh" , email : "prathmesh@dev.com" , contact : 998763346
        },
        {
            name : "Nikhil" , email : "nikhil@dev.com" , contact : 9900077535
        },
        {
            name : "Vicky" , email : "vicky@dev.com" , contact : 9934336637
        }
    ]
    return(
        <div>
            <h1>Array Listing With Map</h1>
            <tr>
                    <td>Name</td>
                    <td>Email ID</td>
                    <td>Contact No.</td>

                </tr>
            <table border="1">
                {
                    studentInfo.map((data)=>
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>

                    </tr>
                    )
                }
            </table>
        </div>
    )
}


export default ArrayListingWithMap2;