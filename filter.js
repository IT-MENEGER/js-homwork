let  filterfunction = function(arr,  callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i, arr)){
            result.push(arr[i]);
        }
    }
    return result;
}


let result = filterfunction(
    [22, 32, 25, 54, 4, 2],
    (number) => {
       return number < 5;   
    }
)

console.log(result);
