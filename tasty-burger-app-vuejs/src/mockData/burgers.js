export default [
  {
    id: 1,
    name: 'Cheese Burger',
    weight: '520g',
    imgUrl: 'https://bulma.io/images/placeholders/1280x960.png',
    price: {
      amount: 4.15,
      isOffer: true,
    },
    ingredients: {
      bread: {
        id: 2343,
        type: 'White',
      },
      meat: [{ type: 'Beef', amount: 1 }],
      cheese: [{ type: 'Cheddar', amount: 3 }],
      vegetables: [
        { type: 'lettuce', amount: 1 },
        { type: 'tomato', amount: 1 },
        { type: 'relish', amount: 1 },
      ],
      sauce: [
        { type: 'French', ammout: 1 },
        { type: 'Ketchup', ammout: 1 },
        { type: 'Mayonaise', ammout: 1 },
      ],
    },
  },
  {
    id: 2,
    name: 'Whooper Burger',
    weight: '700g',
    imgUrl: 'https://bulma.io/images/placeholders/1280x960.png',
    price: {
      amount: 14.15,
      isOffer: false,
    },
    ingredients: {
      bread: {
        id: 6246,
        type: 'White',
      },
      meat: [{ type: 'Pork', amount: 2 }],
      cheese: [{ type: 'Cheddar', amount: 1 }],
      vegetables: [
        { type: 'lettuce', amount: 1 },
        { type: 'tomato', amount: 2 },
        { type: 'relish', amount: 1 },
      ],
      sauce: [
        { type: 'Ketchup', ammout: 1 },
        { type: 'Mayonaise', ammout: 1 },
      ],
    },
  },
  {
    id: 3,
    name: 'Vegan Burger',
    weight: '300g',
    imgUrl: 'https://bulma.io/images/placeholders/1280x960.png',
    price: {
      amount: 6.15,
      isOffer: false,
    },
    ingredients: {
      bread: {
        id: 3466,
        type: 'Vegan Bread',
      },
      meat: [{ type: 'No meet', amount: 0 }],
      cheese: [],
      vegetables: [
        { type: 'lettuce', amount: 3 },
        { type: 'tomato', amount: 2 },
        { type: 'relish', amount: 1 },
      ],
      sauce: [
        { type: 'Ketchup', ammout: 1 },
      ],
    },
  },
  {
    id: 4,
    name: 'Big Meech Burger',
    weight: '500g',
    imgUrl: 'https://bulma.io/images/placeholders/1280x960.png',
    price: {
      amount: 11.15,
      isOffer: true,
    },
    ingredients: {
      bread: {
        id: 2355,
        type: 'White with Sesame',
      },
      meat: [{ type: 'Bacon', amount: 1 }, { type: 'Ham', amount: 1 }],
      cheese: [{ type: 'Feta', amount: 1 }],
      vegetables: [
        { type: 'tomato', amount: 2 },
        { type: 'relish', amount: 1 },
      ],
      sauce: [
        { type: 'Ketchup', ammout: 1 },
        { type: 'Mayonaise', ammout: 1 },
      ],
    },
  },
  {
    id: 5,
    name: 'Big Fish Burger',
    weight: '400g',
    imgUrl: 'https://bulma.io/images/placeholders/1280x960.png',
    price: {
      amount: 17.15,
      isOffer: true,
    },
    ingredients: {
      bread: {
        id: 6235,
        type: 'White with Sesame',
      },
      meat: [{ type: 'Salmon', amount: 2 }],
      cheese: [{ type: 'Feta', amount: 1 }],
      vegetables: [
        { type: 'tomato', amount: 2 },
        { type: 'relish', amount: 1 },
      ],
      sauce: [
        { type: 'Ketchup', ammout: 1 },
        { type: 'Mayonaise', ammout: 1 },
      ],
    },
  },
];
