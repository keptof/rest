export const filterArrayToPrice = (array) => {
    const newArray = [...array].sort((a, b) => a.price - b.price);
    return newArray;
}

export const getArrayWithAListToName = (array) => array.map((element) => element.name);

export const getArraySumToProduct = (array) => {
    return array.reduce((total, element) => total + element.price * element.quantity, 0);
}

export const getNewArrayByFilterToType = (array, type) => {
    return array.filter((element) => element.type === type);
}

export const renewalQuantity = (array, id, quantity) => {
    const productsById = array.find((element) => element.id === id);
    productsById.quantity = quantity;
}

export const removeProductById = (array, id) => {
    return array.filter((element) => element.id !== id);
}