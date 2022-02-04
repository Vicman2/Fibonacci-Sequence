


function fibonacciSequnece(n){
    if(n==0) return 0
    if(n==1) return 1
    return fibonacciSequnece(n-1) + fibonacciSequnece(n-2)
}

function getTheFab(m){
    console.log('Loading sequence.............')
    console.log("-----------------------------")
    for(let i = 0; i<=m; i++){
        let theMTerm = fibonacciSequnece(i)
        console.log(`${i} : ${theMTerm}`)
        console.log("-----------------------------")

    }
}

getTheFab(100)