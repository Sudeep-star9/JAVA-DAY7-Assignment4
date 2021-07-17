const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let i=0;i<=arrayList.length;i++){
        if(i%15==0){
            console.log(i+' fizbuzz')
        }
        else if(i%3==0){
            console.log(i+" fiz")
        }
        else if(i%5==0){
            console.log(i+ ' buzz')
        }
        else{
            console.log(i)
        }
    }