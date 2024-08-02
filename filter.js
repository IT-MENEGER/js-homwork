function filter(arr,  callback) {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i],i, arr)){
            res.push(arr[i]);
        }
    }
    return res;
}


let res = filter(
    [22, 32, 25, 54, 4, 2],
    (number) => {
       return number < 5;   
    }
)

console.log(res);
