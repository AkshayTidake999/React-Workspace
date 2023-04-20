
function ArrayListingWithMap(){

     const player = ['sachin' , 'kohli' , 'Yuraj' , 'Rohit'];
    // // map function take one function as a parameter and this function take also one parameter 
    // player.map((val)=>console.log("By Using Map Function :- "+val))

    // for(let i=0 ; i<player.length;i++){
    //     console.log("By Using For Loop :- "+player[i])
    // }
    return(
        // we can not used for loop inside the return statement but we can use map function inside return 
        <div>
            <h1>Array Listing With Map Function</h1>
            {
                //   player.map((data)=>console.log("Player Inside Return : "+data));
                player.map((data)=>
                <h1>player :-{data}</h1>)
            }      
        </div>
    )
}
export default ArrayListingWithMap;