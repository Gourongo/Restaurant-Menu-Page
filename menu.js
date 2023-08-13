// all menus
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        category: "Breakfast",
        price: 12.99,
        img: "./images/buttermilk.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 2,
        title: "Sausage Sandwich With Egg",
        category: "Breakfast",
        price: 10,
        img: "./images/sausage.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 3,
        title: "Cheese Sandwich",
        category: "Breakfast",
        price: 13,
        img: "./images/Cheese.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 4,
        title: "French Slam",
        category: "Breakfast",
        price: 10,
        img: "./images/FRENCHSLAM.png",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 5,
        title: "Vegetarian Breakfast",
        category: "Breakfast",
        price: 11,
        img: "./images/veganbreakfast.webp",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 6,
        title: "Orange Chicken",
        category: "Lunch",
        price: 11.99,
        img: "./images/OrangeChicken.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 7,
        title: "Honey Chicken",
        category: "Lunch",
        price: 14,
        img: "./images/HoneyChicken.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 8,
        title: "Yakisoba",
        category: "Lunch",
        price: 10,
        img: "./images/Yakisoba.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 9,
        title: "Singapore Rice Noodle",
        category: "Lunch",
        price: 13.99,
        img: "./images/SingaporeRiceNoodle.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 10,
        title: "Mongolian Beef",
        category: "Lunch",
        price: 11.99,
        img: "./images/mongolianbeef.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 11,
        title: "Cinnamon Chocolate",
        category: "Shakes",
        price: 11,
        img: "./images/CinnamonChocolate.webp",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 12,
        title: "Vanilla special",
        category: "Shakes",
        price: 12,
        img: "./images/Vanillaspecial.webp",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 13,
        title: "Godzilla Milkshake",
        category: "Shakes",
        price: 10,
        img: "./images/GodzillaMilkshake.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 14,
        title: "Mixed Fruit Bowl",
        category: "Shakes",
        price: 12,
        img: "./images/MixedFruitBowl.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 15,
        title: "Strawberry Vodka",
        category: "Shakes",
        price: 11.99,
        img: "./images/straberryVodka.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 16,
        title: "Spaghetti",
        category: "Lunch",
        price: 10.99,
        img: "./images/spaghetti.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 17,
        title: "Large Chili Cheese Fries",
        category: "Breakfast",
        price: 9.99,
        img: "./images/ChiliCheeseFriesWeb.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    },
    {
        id: 18,
        title: "Hot Fudge Sundae",
        category: "Shakes",
        price: 8,
        img: "./images/HotFudgeSundae.jpg",
        desc: ` Lorem ipsum dolor sit amet, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat! consectetur adipisicing elit. Quae facilis error voluptatem suscipit cum quis at excepturi nisi neque sunt!`,
    }
];
// console.log(menu);

const allMenuItems = document.querySelector(".all-menuItem");
const filterBtns = document.querySelectorAll(".filter-btn");

// loded item
window.addEventListener("DOMContentLoaded", function () {
    // console.log("liton");
    displayMenuItems(menu);
});

// menuitem add to menubutton
filterBtns.forEach( function (menuBtns) {
    menuBtns.addEventListener("click", function (meniList){
        const category = meniList.currentTarget.dataset.id;
        const menuCategory = menu.filter( function (menuItem) {
            if(menuItem.category === category){
                return menuItem;
            }
        });
        if(category === "All"){
            displayMenuItems(menu);
        } else{
            displayMenuItems(menuCategory);
        }
    });
});

// loded all menu item
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        
        return `<div class="col-xxl-5 col-xl-6 col-md-8">
        <article class="menu-item d-flex mb-5">
        <img class="photo" src= ${item.img} alt= ${item.title}>
        <div class="item-info">
        <header class="d-flex mx-3 mt-2" style="justify-content: space-between;">
          <h3> ${item.title} </h3>
          <h4 class="price">$${item.price}</h4>
        </header>
        <hr class="mx-4" style="height: 2px; color: black; background-color: black;">
        <p class="item-text mx-3">
          ${item.desc}
        </p>
      </div>
      </article>
      </div>`;

    });
    displayMenu = displayMenu.join("");
    allMenuItems.innerHTML = displayMenu;
};

