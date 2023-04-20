import Table from 'react-bootstrap/Table';

function ListWithBootstrap(){

    const playerInfo =[
        {name : "Akshay" , email: "akshay99@dev.com" , contact : 9887655447},
        {name : "Vikky" , email: "vikky77@dev.com" , contact : 8832437723},
        {name : "Nikhil" , email: "nikhil33@dev.com" , contact : 9346234623},
        {name : "Prathmesh" , email: "prathmesh11@dev.com" , contact : 7779984623}
    ]
    return(
        <div>
            <h1>List With Bootstrap</h1>
            <Table striped bordered hover>  {/*  Table written like that */}
            <tbody>        {/* striped bordered hover this is bootstrap class  */}
            <tr>
                <td>Name</td>
                <td>Email Id</td>
                <td>Contact No</td>
            </tr>
                {
                    playerInfo.map((data,i) =>
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>

                    </tr>
                   ) 
                }
                </tbody>
            </Table>
        </div>
    )
}
export default ListWithBootstrap;