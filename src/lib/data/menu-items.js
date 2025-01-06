export const menuItems = {
  appetizers: [
    {
      name: "Bruschetta",
      description: "Grilled bread topped with fresh tomatoes, basil, garlic, and olive oil.",
      price: 180,
      type: "veg",
      image: "/images/Bruschetta.jpg"
    },
    {
      name: "Calamari Fritti",
      description: "Lightly breaded and fried calamari served with marinara sauce.",
      price: 250,
      type: "non-veg",
      image: "/images/Calamari.jpeg"
    },
    {
      name: "Stuffed Mushrooms",
      description: "Mushrooms filled with a blend of cheeses, herbs, and breadcrumbs.",
      price: 200,
      type: "veg",
      image: "/images/StuffedMushrooms.jpeg"
    },
    {
      name: "Chicken Wings",
      description: "Choice of buffalo, BBQ, or honey mustard sauce, served with celery and blue cheese dip.",
      price: 280,
      type: "non-veg",
      image: "/images/Chickenwings.jpeg"
    },
    {
      name: "Spring Rolls",
      description: "Crispy vegetable and meat-filled rolls served with sweet chili sauce.",
      price: 190,
      type: "non-veg",
      image: "/images/SpringRolls.jpeg"
    }
  ],
  salads: [
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.",
      price: 220,
      type: "veg",
      image: "/images/Caesar.jpeg"
    },
    {
      name: "Greek Salad",
      description: "Mixed greens with feta cheese, Kalamata olives, cucumbers, tomatoes, red onions, and Greek dressing.",
      price: 240,
      type: "veg",
      image: "/images/GreekSalad.jpeg"
    },
    {
      name: "Cobb Salad",
      description: "Mixed greens topped with grilled chicken, bacon, avocado, hard-boiled eggs, tomatoes, and blue cheese.",
      price: 260,
      type: "non-veg",
      image: "/images/Cobbsalad.jpeg"
    },
    {
      name: "Quinoa & Roasted Vegetable Salad",
      description: "Quinoa mixed with seasonal roasted vegetables, feta cheese, and a lemon vinaigrette.",
      price: 230,
      type: "veg",
      image: "/images/QuinoaVegetable Salad.jpeg"
    }
  ],
  maincourses: {
    pasta: [
      {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta with creamy egg-based sauce, pancetta, parmesan, and black pepper.",
        price: 320,
        type: "non-veg",
        image: "/images/SpaghettiCarbonara.jpeg"
      },
      {
        name: "Fettuccine Alfredo",
        description: "Fettuccine tossed in a rich and creamy Alfredo sauce.",
        price: 300,
        type: "veg",
        image: "/images/Fettuccinealfredo.jpeg"
      },
      {
        name: "Penne Arrabbiata",
        description: "Penne pasta in a spicy tomato and garlic sauce with red chili flakes.",
        price: 280,
        type: "veg",
        image: "/images/Pennearrabbiata.jpeg"
      },
      {
        name: "Lasagna Bolognese",
        description: "Layers of pasta, rich meat sauce, béchamel, and mozzarella cheese baked to perfection.",
        price: 340,
        type: "non-veg",
        image: "/images/Lasagnabolognese.jpeg"
      }
    ],
    grillandsteak: [
      {
        name: "Grilled Ribeye Steak",
        description: "12oz ribeye cooked to your preference, served with mashed potatoes and steamed vegetables.",
        price: 580,
        type: "non-veg",
        image: "/images/GrilledRibeye.jpeg"
      },
      {
        name: "Chicken Parmesan",
        description: "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with spaghetti.",
        price: 380,
        type: "non-veg",
        image: "/images/Chicken Parmesan.jpeg"
      },
      {
        name: "Salmon Fillet",
        description: "Grilled salmon with a lemon butter sauce, accompanied by wild rice and asparagus.",
        price: 420,
        type: "non-veg",
        image: "/images/SalmonFillet.jpeg"
      },
      {
        name: "Vegetable Stir-Fry",
        description: "Assorted seasonal vegetables stir-fried in a savory soy-ginger sauce, served with jasmine rice.",
        price: 280,
        type: "veg",
        image: "/images/VegetableStir-Fry.jpeg"
      }
    ],
    burgersandsandwiches: [
      {
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, onion, and pickles on a toasted bun. Served with fries.",
        price: 320,
        type: "non-veg",
        image: "/images/ClassicCheese.jpeg"
      },
      {
        name: "BBQ Pulled Pork Sandwich",
        description: "Slow-cooked pulled pork with BBQ sauce, coleslaw, and pickles on a brioche bun.",
        price: 340,
        type: "non-veg",
        image: "/images/BBQ.jpeg"
      },
      {
        name: "Grilled Veggie Sandwich",
        description: "Grilled zucchini, bell peppers, eggplant, and mozzarella with pesto on ciabatta bread.",
        price: 280,
        type: "veg",
        image: "/images/GrilledVeggieSandwich.jpeg"
      },
      {
        name: "Turkey Club Sandwich",
        description: "Sliced turkey, bacon, lettuce, tomato, and mayo on multi-grain bread. Served with a side salad.",
        price: 300,
        type: "non-veg",
        image: "/images/TurkeyClubSandwich.jpg"
      }
    ]
  },
  desserts: [
    {
      name: "Tiramisu",
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      price: 180,
      type: "veg",
      image: "/images/Tiramisu.jpeg"
    },
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.",
      price: 200,
      type: "veg",
      image: "/images/Chocolatelava.jpeg"
    },
    {
      name: "Cheesecake",
      description: "Creamy cheesecake with a graham cracker crust. Choice of strawberry or blueberry topping.",
      price: 190,
      type: "veg",
      image: "/images/Cheesecake.jpeg"
    },
    {
      name: "Apple Pie",
      description: "Traditional apple pie served warm with a scoop of vanilla ice cream.",
      price: 170,
      type: "veg",
      image: "/images/Apple.jpeg"
    }
  ],
  beverages: {
    nonalcoholic: [
      {
        name: "Fresh Lemonade",
        description: "Freshly squeezed lemonade, available in classic or strawberry flavors.",
        price: 80,
        type: "veg",
        image: "/images/FreshLemonade.jpeg"
      },
      {
        name: "Iced Tea",
        description: "Freshly brewed black or green iced tea, sweetened or unsweetened.",
        price: 70,
        type: "veg",
        image: "/images/IcedTea.jpeg"
      },
      {
        name: "Soft Drinks",
        description: "Coke, Diet Coke, Sprite, Fanta, etc.",
        price: 60,
        type: "veg",
        image: "/images/SoftDrinks.jpeg"
      },
      {
        name: "Coffee",
        description: "Selection of brewed coffee, espresso, cappuccino.",
        price: 90,
        type: "veg",
        image: "/images/Coffee.jpeg"
      }
    ],
    alcoholic: [
      {
        name: "Craft Beer",
        description: "Local craft beers, domestic, and imported options.",
        price: 220,
        type: "veg",
        image: "/images/Craftbeer.jpeg"
      },
      {
        name: "House Wine",
        description: "Red, white, and rosé selections by the glass.",
        price: 250,
        type: "veg",
        image: "/images/HouseWine.jpeg"
      },
      {
        name: "Classic Cocktails",
        description: "Mojito, Margarita, Old Fashioned, and more.",
        price: 280,
        type: "veg",
        image: "/images/Classiccocktails.jpeg"
      },
      {
        name: "Premium Spirits",
        description: "Selection of vodka, whiskey, rum, gin, and tequila.",
        price: 300,
        type: "veg",
        image: "/images/PremiumSpirits.jpeg"
      }
    ]
  }
};