const ages = [21,22,23,24,25,26,27,28,29,30];
const numberofpeople = ages.length;

for(let i=0; i < numberofpeople; i++){
    if (ages[i] % 2 == 0) {
        console.log(ages[i]);
    }
}