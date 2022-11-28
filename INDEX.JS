let arr = [
    [1, 2, 3, 4, 5, 2, 1, 3],
    [3, 3, 4, 5, 6, 6, 4],
    [5, 4, 6, 3, 2, 6, 7, 6],
    [7, 5.35, 65, 7, 3, 8],
    [9, , 3, 4, 24, 5, 10]
];

for (let i = 0; i < arr.length; i++) {
    let min = [i][0];
    for (let j = 0; j < arr[i].length; j++)
        if (arr[i][j] < min) {
            min = arr[i][j];
        }
    console.log(min);
}
