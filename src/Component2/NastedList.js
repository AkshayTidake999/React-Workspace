
import {Table, table} from 'react-bootstrap';
function NastedList(){

    const employInfo = [
        {name : "Akshay", email : "akshay@dev.com", Mobile:987765433 , Adress:[
            {
                Hn : "30A Block" , city : "Amravati" , state: "Maharasthra"
            }
        ]},
        {name : "Nikhil", email : "nikhil@dev.com", Mobile:886665456 , Adress:[
            {
                Hn : "67C Block" , city : "Akola" , state: "Maharasthra"
            }
        ]},
        {name : "Vikky", email : "vikky@dev.com", Mobile:7779999754 , Adress:[
            {
                Hn : "9B Block" , city : "Mumbai" , state: "Maharasthra"
            }
        ]},
        {name : "Prathmesh", email : "prathmesh@dev.com", Mobile:88888899 , Adress:[
            {
                Hn : "11A Block" , city : "Pune" , state: "Maharasthra"
            }
        ]}
    ]

    return(
        <div>
            <h1>Nasted Lsit</h1>
            <Table variant='dark' striped>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email Id</td>
                        <td>Mobile Number</td>
                        <td>Adress</td>
                    </tr>
                    {
                        employInfo.map((val , i)=>
                            <tr key={i}>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.Mobile}</td>
                                <td>
                                <Table  variant='dark' striped>
                                    <tbody>{
                                      val.Adress.map((addr)=>
                                      <tr>
                                        <td>{addr.Hn}</td>
                                        <td>{addr.city}</td>
                                        <td>{addr.state}</td>
                                      </tr>
                                     )}
                                      
                                     </tbody>
                                </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default NastedList;