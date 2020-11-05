const trillisos = (a, b) => {

    const resultado = [0,0]

    for(let i = 0; i < a.length; i++) {

        if(a[i] > b[i]){

            resultado[0]+=1
        
        } else if (b[i] > a[i] ) {
        
            resultado[1]+=1
        } 
    }

    return resultado


}

console.log(trillisos([0,1,2], [3,4,2]));