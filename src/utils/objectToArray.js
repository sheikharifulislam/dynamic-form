function objectToArray(data) {
    return Object.keys(data).map((key) => ({ name: key, ...data[key] }));
}

export default objectToArray;
