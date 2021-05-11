const Pizzas = [
    {   
        id:1,
        name: "Italian Pizza",
        price: 14.5,
        description: "Mozarella & Parmagiano",
        img: "https://images.pexels.com/photos/4913349/pexels-photo-4913349.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:2,
        name: "Jabugo Ham",
        price: 20.5,
        description: "Jabugo ham & Cheese",
        img: "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:3,
        name: "Cesar",
        price: 10,
        description: "Cesar sauce, Toasts",
        img: "https://images.pexels.com/photos/4288045/pexels-photo-4288045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:4,
        name: "Pizza BBQ",
        price: 8,
        description: "Bacon, BBQ sauce",
        img: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:5,
        name: "Pizza Swiss",
        price: 18,
        description: "swiss cheeses",
        img: "https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:6,
        name: "Greek Pizza",
        price: 15,
        description: "Feta cheese, Olives",
        img: "https://images.pexels.com/photos/5695913/pexels-photo-5695913.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    }
];
const Soups = [
    {
        id:7,
        qty: 0,
        name: "Spinach Soup",
        price: 15,
        description: "Spinach, Chicken stock",
        img: "https://images.pexels.com/photos/5175517/pexels-photo-5175517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:8,
        qty: 0,
        name: "Tomato Soup",
        price: 12,
        description: "Celery, Olive oil",
        img: "https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:9,
        qty: 0,
        name: "Manchow Soup",
        price: 20,
        description: "Vegetables, creame",
        img: "https://images.pexels.com/photos/1618888/pexels-photo-1618888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:10,
        qty: 0,
        name: "Pasta Salad",
        price: 16,
        description: "Pasta, Arugula",
        img: "https://images.pexels.com/photos/4577454/pexels-photo-4577454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:11,
        qty: 0,
        name: "Cracking Cobb Salad",
        price: 15,
        description: "Chicken thighs, Avocado",
        img: "https://images.pexels.com/photos/936611/pexels-photo-936611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:12,
        qty: 0,
        name: "Best Broccoli Salad",
        price: 13,
        description: "Broccoli, Dried cranberries",
        img: "https://images.pexels.com/photos/3872368/pexels-photo-3872368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
];
const Desserts = [
    {
        id:13,
        qty: 0,
        name: "Chocolate Plate",
        price: 13,
        description: "Vanilla sticks",
        img: "https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:14,
        qty: 0,
        name: "Jamaican Strawberry",
        price: 15,
        description: "Golden syrup, Cinnamon",
        img: "https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:15,
        qty: 0,
        name: "Ille Flotantte",
        price: 12,
        description: "Vanilla pod, Rhubard",
        img: "https://images.pexels.com/photos/2103945/pexels-photo-2103945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:16,
        qty: 0,
        name: "Mango Smoothie",
        price: 14,
        description: "Nut milk, Ice cubes",
        img: "https://images.pexels.com/photos/2103962/pexels-photo-2103962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:17,
        qty: 0,
        name: "Vanilla Icecream",
        price: 10,
        description: "Toned milk, White sugar",
        img: "https://images.pexels.com/photos/5060895/pexels-photo-5060895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:18,
        qty: 0,
        name: "Chocolate Fantasy",
        price: 12,
        description: "Coffee beans",
        img: "https://images.pexels.com/photos/2677814/pexels-photo-2677814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
];
const Indian = [
    {
        id:19,
        qty: 0,
        name: "Grilled Kebabs",
        price: 25,
        description: "Passata, Ginger, Garlic",
        img: "https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:20,
        qty: 0,
        name: "BBQ Beef Short Ribs",
        price: 27,
        description: "Caraway seeds, cabbage",
        img: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:21,
        qty: 0,
        name: "Southern Chicken",
        price: 21,
        description: "Chicken drumsticks, Ayenne",
        img: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:22,
        qty: 0,
        name: "Fried Rice",
        price: 26,
        description: "Carrots, Capsicum",
        img: "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:23,
        qty: 0,
        name: "Noodles",
        price: 23,
        description: "Cabbage, Capsicum",
        img: "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        id:24,
        qty: 0,
        name: "Garlic Mushroom",
        price: 25,
        description: "Garlic, Mushroom",
        img: "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
];
export default Pizzas;
export {Pizzas,Soups,Desserts,Indian};