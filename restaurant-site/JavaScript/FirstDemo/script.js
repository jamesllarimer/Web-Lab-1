// menu section
window.addEventListener('load', () => {
    if(window.document.title === 'Menu' ){
        renderMenu();
    }
})
const MENU_ITEMS = [
    // Vittles (Main Dishes)
    {
        category: "Vittles",
        categoryDescription: "Main Dishes",
        item: "The Holler Bowl",
        description: "Soup beans slow-cooked all day with a smoked ham hock, served over crumbled cornbread in a cast iron crock.",
        price: 14
    },
    {
        category: "Vittles",
        categoryDescription: "Main Dishes",
        item: "Squirrel Gravy & Biscuits",
        description: "Slow-braised squirrel in a rich brown gravy poured over two hand-rolled buttermilk biscuits.",
        price: 13
    },
    {
        category: "Vittles",
        categoryDescription: "Main Dishes",
        item: "Fried Catfish Platter",
        description: "Three fillets of cornmeal-crusted catfish fried golden, served with hushpuppies and comeback sauce.",
        price: 16
    },
    {
        category: "Vittles",
        categoryDescription: "Main Dishes",
        item: "Country Ham Steak",
        description: "A thick-cut salt-cured ham steak pan-fried in its own drippings, served with red-eye gravy and a biscuit.",
        price: 15
    },
    {
        category: "Vittles",
        categoryDescription: "Main Dishes",
        item: "Poke Sallet Scramble",
        description: "Eggs scrambled with properly prepared poke greens, bacon, and onion. Don't worry, we know how to cook it right.",
        price: 16
    },

    // Fixins (Sides)
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Kilt Lettuce",
        description: "Fresh garden lettuce wilted with hot bacon grease and a splash of apple cider vinegar.",
        price: 4
    },
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Fried Taters & Onions",
        description: "Cast iron skillet potatoes fried crispy with sweet onion and black pepper.",
        price: 4
    },
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Leather Britches",
        description: "Dried and slow-simmered green beans cooked with fatback. Worth the wait.",
        price: 6
    },
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Skillet Cornbread",
        description: "A wedge of cast iron cornbread. No sugar. Don't ask.",
        price: 5
    },
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Ramp Butter Biscuits",
        description: "Flaky buttermilk biscuits brushed with wild ramp compound butter.",
        price: 5
    },
    {
        category: "Fixins",
        categoryDescription: "Sides",
        item: "Cracklins",
        description: "Thick-cut fried pork skin with fat still on. Not for the faint of heart.",
        price: 5
    },

    // From the Crick (Soups)
    {
        category: "From the Crick",
        categoryDescription: "Soups",
        item: "Shucky Bean Soup",
        description: "A smoky, slow-simmered pot of leather britches beans with ham and potatoes.",
        price: 8
    },
    {
        category: "From the Crick",
        categoryDescription: "Soups",
        item: "Granny's Vegetable Soup",
        description: "A whatever's-in-the-garden vegetable soup with a cornbread dumpling on top.",
        price: 7
    },
    {
        category: "From the Crick",
        categoryDescription: "Soups",
        item: "Catfish Muddle",
        description: "A thick, peppery catfish stew with potatoes and onions, a Low Country tradition that crept up the mountains.",
        price: 9
    },

    // From the Jar (Moonshine & Drinks)
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Classic White Lightning",
        description: "Straight corn mash moonshine. Unaged, uncut, unapologetic.",
        price: 8
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Apple Pie Shine",
        description: "Moonshine blended with fresh apple cider, cinnamon, and brown sugar. Goes down dangerously easy.",
        price: 9
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Blackberry Holler",
        description: "Wild blackberry moonshine with a hint of vanilla. Sweet but it'll sneak up on you.",
        price: 9
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Peach Orchard",
        description: "Sun-ripened peach moonshine, smooth and summery.",
        price: 9
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Switchel",
        description: "Apple cider vinegar, ginger, molasses, and cold branch water. The original mountain sports drink.",
        price: 9
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Sassafras Tea",
        description: "Brewed from real sassafras root. The flavor that inspired root beer. Sweet or unsweet.",
        price: 9
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Latte",
        description: "Busch Light",
        price: 2
    },
    {
        category: "From the Jar",
        categoryDescription: "Moonshine & Drinks",
        item: "Champagne",
        description: "Miller High Life",
        price: 2
    }
];

function renderMenu (){
    //get main table div
    let tableSection = document.getElementById("tables");
    let categories = MENU_ITEMS.filter((obj, index, self) =>
        index === self.findIndex((t) => t.category === obj.category)
);
    //create a table for each category
    categories.forEach(category => {
        let table = document.createElement("table");
        let caption = document.createElement("caption");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        thead.innerHTML = ` 
        <tr>
            <th class="col">Item</th>
            <th class="col">Description</th>
            <th class="col">Price</th>
        </tr>`
        caption.innerHTML = `${category.category} <i>(${category.categoryDescription})</i>`;
        table.classList.add("table", "caption-top");
        table.appendChild(caption);
        table.appendChild(thead);

        //get menu items by category
        let categoryItems = MENU_ITEMS.filter((item) => {
            if (item.category === category.category) {
                return item;
            }
        })

        //build a row for each item
        categoryItems.forEach(categoryItem => {

            let row = document.createElement("tr")
            console.log(categoryItem)
            row.innerHTML = `
            <td class="row">${categoryItem.item}</td>
            <td>${categoryItem.description}</td>
            <td>${new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(categoryItem.price)}</td>`;
            tbody.appendChild(row);
        })

        //append tbody and to table and table to the tables div
        table.appendChild(tbody);
        tableSection.appendChild(table);
// let tableExample =`<table>
//     <caption>
//         Vittles <i>(Main Dishes)</i>
//     </caption>
//     <thead>
//     <tr>
//         <th>Item</th>
//         <th>Description</th>
//         <th>Price</th>
//     </tr>
//     </thead>
//     <tbody>
//     <tr>
//         <td>The Holler Bowl </td>
//         <td>Soup beans slow-cooked all day with a smoked ham hock, served over crumbled cornbread in a cast iron crock.</td>
//         <td>$14</td>
//     </tr>
//     <tr>
//         <td>Squirrel Gravy & Biscuits </td>
//         <td>Slow-braised squirrel in a rich brown gravy poured over two hand-rolled buttermilk biscuits. </td>
//         <td>$13</td>
//     </tr>
//     <tr>
//         <td>Fried Catfish Platter</td>
//         <td>Three fillets of cornmeal-crusted catfish fried golden, served with hushpuppies and comeback sauce. </td>
//         <td>$16</td>
//     </tr>
//     <tr>
//         <td>Country Ham Steak</td>
//         <td>A thick-cut salt-cured ham steak pan-fried in its own drippings, served with red-eye gravy and a biscuit. </td>
//         <td>$15</td>
//     </tr>
//     <tr>
//         <td>Poke Sallet Scramble</td>
//         <td>Eggs scrambled with properly prepared poke greens, bacon, and onion. <i>Don't worry, we know how to cook it right</i>. </td>
//         <td>$16</td>
//     </tr>
//     </tbody>
// </table>`
    })
}


