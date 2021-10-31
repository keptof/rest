import {
  filterArrayToPrice,
  getArrayWithAListToName,
  getArraySumToProduct,
  getNewArrayByFilterToType,
  renewalQuantity,
  removeProductById,
} from '../main.js';



describe('methods for working with an array of products', () => {

  let dataProducts;

  beforeEach(() => {
    dataProducts = [
      {
        "name": "Milk",
        "price": 20,
        "quantity": 1,
        "type": 1,
        "id": 1
      },
      {
        "name": "Apple",
        "price": 10,
        "quantity": 3,
        "type": 2,
        "id": 2
      },
    ];
  });

  describe('filterArrayToPrice()', () => {
    it('returns a new array sorted by price ', () => {

      const result = filterArrayToPrice(dataProducts);

      expect(result).toEqual([

        {
          "name": "Apple",
          "price": 10,
          "quantity": 3,
          "type": 2,
          "id": 2
        },
        {
          "name": "Milk",
          "price": 20,
          "quantity": 1,
          "type": 1,
          "id": 1
        }
      ]);
    });
  });

  describe('getArrayWithAListToName()', () => {
    it('returns a new array of product names ', () => {
      const result = getArrayWithAListToName(dataProducts);
      expect(result).toEqual(
        [
          "Milk",
          "Apple"
        ]
      );
    });
  });

  describe('getArraySumToProduct', () => {
    it('returns the sum of prices of all elements of the array', () => {
      const result = getArraySumToProduct(dataProducts);
      expect(result).toEqual(50);
    });
  });

  describe('getNewArrayByFilterToType()', () => {
    it('returns a new array filtered by type', () => {
      const result = getNewArrayByFilterToType(dataProducts, 1);
      expect(result).toEqual([
        {
          "name": "Milk",
          "price": 20,
          "quantity": 1,
          "type": 1,
          "id": 1
        }
      ]);
    });
  });

  describe('renewalQuantity', () => {
    it('returns updated data on the changed quantity of the product found by id', () => {
      renewalQuantity(dataProducts, 1, 2);
      expect(dataProducts).toEqual([
        {
          "name": "Milk",
          "price": 20,
          "quantity": 2,
          "type": 1,
          "id": 1
        },
        {
          "name": "Apple",
          "price": 10,
          "quantity": 3,
          "type": 2,
          "id": 2
        }
      ]);
    });
  });

  describe('removeProductById', () => {
    it('removes data about the found product by id from the array and returns a new array ', () => {
      const result = removeProductById(dataProducts, 2);
      expect(result).toEqual([
        {
          "name": "Milk",
          "price": 20,
          "quantity": 1,
          "type": 1,
          "id": 1
        }
      ]);
    });
  });
});

