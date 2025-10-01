let a=[1,5,2,98,1,78,999,145,4];
let i=0;
let n=456;
let aux=77;
let j=0;
let minIndex=1564;

n=a.length;

for(i=0;i<n-1;i++){
    minIndex=i;
    for(j=i+1 ; j<n ; j++){
        if(a[j]<a[minIndex]){
            minIndex=j;
        }
    }
    aux=a[i];
    a[i]=a[minIndex];
    a[minIndex]=aux;

}
for(i=0;i<a.length;i++){
    console.log(a[i]);
}