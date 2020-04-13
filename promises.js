const promise = new Promise((resolve,reject) =>{
    resolve('Success');
    //reject('Erron in Promise')
})
.then(value =>{
    console.log(value);
    return 1
})
.then(value =>{
    console.log(value);
    return 2
})
.then(value =>{
    console.log(value);
})
.catch(err =>{
    console.log(err);
});