# Code Review 

A new full stack developer just arrived in your team. In the context of an e-commerce
application, with a product catalog, they were asked to implement a price calculator
which must follow this general rule:

> Each product is composed of items of different materials. The total price
> is computed from the sum of every items, and for every "Solid" or "Liquid" material
> having a Weight and a Dimension as the sum of the Material's Cost times Interest.

This new developer opens a Pull Request, with the code in this repository.
Please provide any feedback that seem relevant to you regarding (but not limited to):
- General coding style
- Best practices

## Back (Nest.js)

- [ ] [product-controller](./back/products/product-controller.ts)
- [ ] [calculate-price](./back/products/calculate-price.ts)
- [ ] [ProductRepository](./back/products/infrastructure/ProductRepository.ts)

## Front (Angular)

- [ ] [product.component.ts](./front/products/product.component.ts)