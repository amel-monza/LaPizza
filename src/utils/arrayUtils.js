export function exists(array, number) {
    let result = false;
    array.forEach(i => {
        if (i === number) {
            result = true;
        }
    })

    return result;
}