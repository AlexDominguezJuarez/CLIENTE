let a = [1,5,2,98,1,78,999,145,4];
let n = a.length;
let aux = 0;
let i=0;
let j=0;

for (i = 0;i<n-i;i++) {
    for (j = 0;j< n-1-i; j++) {
        if (a[j] > a[j+1]) {
            aux = a[j];
            a[j] = a[j+1];
            a[j+1] = aux;
        }
    }
}
