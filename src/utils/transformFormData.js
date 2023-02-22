function transformFormData(data) {
    return Object.keys(data).reduce((acc, key) => {
        acc[key] = {
            name: key,
            value: "",
            ...data[key],
        };

        return acc;
    }, {});
}

export default transformFormData;
