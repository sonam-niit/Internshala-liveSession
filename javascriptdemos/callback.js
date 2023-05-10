//passing function as parameter 
function fetchData(callback){
    setTimeout(()=>{
        console.log("data Fetched");
        callback();
    },2000)
}

function display(){
    console.log("Display the loaded Data")
}

fetchData(display); //pass display as a callback