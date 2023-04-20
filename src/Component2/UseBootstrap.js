import Button from 'react-bootstrap/Button';
function UseBootstrap(){
    return(
        <div>
            <h3>Update Data</h3>
            <Button variant="primary" onClick={()=>alert("Data Update Successfully....")}>Update Data</Button>{' '}
        </div>
    )
}
export default UseBootstrap;