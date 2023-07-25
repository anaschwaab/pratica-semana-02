type FilterCallBack<T> = (value: T, index: number, array: T[]) => boolean;

export function customFilter<T>(array: T[], callback: FilterCallBack<T>): T[] {
    const filteredArray: T[] = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            filteredArray.push(array[i]);
        }
    };

    return filteredArray;
}