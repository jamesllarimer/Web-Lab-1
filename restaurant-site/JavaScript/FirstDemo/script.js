// menu section
window.addEventListener('load', () => {
    if(window.document.title === 'Menu' ){
        renderMenu();
    }
})
window.addEventListener('load', () => {
    if(window.document.title === 'Reservations' ){
        setUpResEvents();
        console.log('Reservations loaded');
    }
})

const MENU_ITEMS = [
    // Breakfast
    {
        id: 1,
        name: "Poke Sallet Scramble",
        description: "Eggs scrambled with properly prepared poke greens, bacon, and onion. Don't worry, we know how to cook it right.",
        price: 16,
        category: "Breakfast"
    },
    {
        id: 2,
        name: "Squirrel Gravy & Biscuits",
        description: "Slow-braised squirrel in a rich brown gravy poured over two hand-rolled buttermilk biscuits.",
        price: 13,
        category: "Breakfast"
    },
    {
        id: 3,
        name: "Country Ham Steak",
        description: "A thick-cut salt-cured ham steak pan-fried in its own drippings, served with red-eye gravy and a biscuit.",
        price: 15,
        category: "Breakfast"
    },
    {
        id: 4,
        name: "Ramp Butter Biscuits",
        description: "Flaky buttermilk biscuits brushed with wild ramp compound butter.",
        price: 5,
        category: "Breakfast"
    },
    {
        id: 5,
        name: "Skillet Cornbread",
        description: "A wedge of cast iron cornbread. No sugar. Don't ask.",
        price: 5,
        category: "Breakfast"
    },
    {
        id: 6,
        name: "Sawmill Gravy & Eggs",
        description: "Creamy white pepper gravy ladled over a split biscuit, served alongside two eggs cooked your way.",
        price: 12,
        category: "Breakfast"
    },
    {
        id: 7,
        name: "Cornmeal Mush",
        description: "Stone-ground cornmeal cooked slow and thick, served with a pat of butter and a drizzle of sorghum syrup.",
        price: 8,
        category: "Breakfast"
    },
    {
        id: 8,
        name: "Stack of Flannel Cakes",
        description: "Three thick buckwheat pancakes served with wild blackberry preserves and real butter. No maple syrup — this ain't Vermont.",
        price: 10,
        category: "Breakfast"
    },

    // Lunch
    {
        id: 9,
        name: "The Holler Bowl",
        description: "Soup beans slow-cooked all day with a smoked ham hock, served over crumbled cornbread in a cast iron crock.",
        price: 14,
        category: "Lunch"
    },
    {
        id: 10,
        name: "Granny's Vegetable Soup",
        description: "A whatever's-in-the-garden vegetable soup with a cornbread dumpling on top.",
        price: 7,
        category: "Lunch"
    },
    {
        id: 11,
        name: "Shucky Bean Soup",
        description: "A smoky, slow-simmered pot of leather britches beans with ham and potatoes.",
        price: 8,
        category: "Lunch"
    },
    {
        id: 12,
        name: "Kilt Lettuce",
        description: "Fresh garden lettuce wilted with hot bacon grease and a splash of apple cider vinegar.",
        price: 4,
        category: "Lunch"
    },
    {
        id: 13,
        name: "Fried Taters & Onions",
        description: "Cast iron skillet potatoes fried crispy with sweet onion and black pepper.",
        price: 4,
        category: "Lunch"
    },
    {
        id: 14,
        name: "Pinto Bean Sandwich",
        description: "Smashed pinto beans seasoned with fatback and onion, piled high on toasted light bread. A coal country classic.",
        price: 8,
        category: "Lunch"
    },
    {
        id: 15,
        name: "Tomato Gravy Plate",
        description: "A thick, tangy tomato gravy made from garden tomatoes and bacon drippings, served over a split biscuit with a side of fried taters.",
        price: 10,
        category: "Lunch"
    },
    {
        id: 16,
        name: "Fried Baloney Sandwich",
        description: "Thick-cut bologna scored and fried in a cast iron skillet until the edges curl up, served on light bread with yellow mustard.",
        price: 9,
        category: "Lunch"
    },

    // Dinner
    {
        id: 17,
        name: "Fried Catfish Platter",
        description: "Three fillets of cornmeal-crusted catfish fried golden, served with hushpuppies and comeback sauce.",
        price: 16,
        category: "Dinner"
    },
    {
        id: 18,
        name: "Catfish Muddle",
        description: "A thick, peppery catfish stew with potatoes and onions, a Low Country tradition that crept up the mountains.",
        price: 9,
        category: "Dinner"
    },
    {
        id: 19,
        name: "Leather Britches",
        description: "Dried and slow-simmered green beans cooked with fatback. Worth the wait.",
        price: 6,
        category: "Dinner"
    },
    {
        id: 20,
        name: "Cracklins",
        description: "Thick-cut fried pork skin with fat still on. Not for the faint of heart.",
        price: 5,
        category: "Dinner"
    },
    {
        id: 21,
        name: "Venison Pot Roast",
        description: "Slow-braised whitetail roast with root vegetables and wild onions, served over a bed of creamy mashed potatoes.",
        price: 18,
        category: "Dinner"
    },
    {
        id: 22,
        name: "Chicken & Dumplings",
        description: "Free-range chicken simmered all afternoon with hand-rolled flat dumplings in a rich, cloudy broth. The real kind.",
        price: 15,
        category: "Dinner"
    },
    {
        id: 23,
        name: "Smothered Pork Chop",
        description: "A bone-in pork chop pan-fried and smothered in caramelized onion gravy, served with leather britches and skillet cornbread.",
        price: 17,
        category: "Dinner"
    },
    {
        id: 24,
        name: "Ramps & Fatback",
        description: "Wild ramps sautéed low and slow with fatback until tender and fragrant. Seasonal. No substitutions.",
        price: 11,
        category: "Dinner"
    },

    // Drinks
    {
        id: 25,
        name: "Classic White Lightning",
        description: "Straight corn mash moonshine. Unaged, uncut, unapologetic.",
        price: 8,
        category: "Drinks"
    },
    {
        id: 26,
        name: "Apple Pie Shine",
        description: "Moonshine blended with fresh apple cider, cinnamon, and brown sugar. Goes down dangerously easy.",
        price: 9,
        category: "Drinks"
    },
    {
        id: 27,
        name: "Blackberry Holler",
        description: "Wild blackberry moonshine with a hint of vanilla. Sweet but it'll sneak up on you.",
        price: 9,
        category: "Drinks"
    },
    {
        id: 28,
        name: "Peach Orchard",
        description: "Sun-ripened peach moonshine, smooth and summery.",
        price: 9,
        category: "Drinks"
    },
    {
        id: 29,
        name: "Switchel",
        description: "Apple cider vinegar, ginger, molasses, and cold branch water. The original mountain sports drink.",
        price: 4,
        category: "Drinks"
    },
    {
        id: 30,
        name: "Sassafras Tea",
        description: "Brewed from real sassafras root. The flavor that inspired root beer. Sweet or unsweet.",
        price: 4,
        category: "Drinks"
    },
    {
        id: 31,
        name: "Latte",
        description: "Busch Light",
        price: 2,
        category: "Drinks"
    },
    {
        id: 32,
        name: "Champagne",
        description: "Miller High Life",
        price: 2,
        category: "Drinks"
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
        let tableDiv = document.createElement("div");
        let table = document.createElement("table");
        let caption = document.createElement("caption");
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        thead.innerHTML = ` 
        <tr>
            <th scope="col">Item</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
        </tr>`
        caption.innerHTML = `${category.category}`;
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
            row.innerHTML = `
            <th scope="row">${categoryItem.name}</th>
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
        table.classList.add("table", "table-bordered", "table-striped", "caption-top", "mt-4");
        tableDiv.classList.add("table-responsive");
    })
}


function setUpResEvents(){
    let form = document.getElementById("reservationForm");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

       clearAlerts();


        let formData = new FormData(e.target);
        let entries = {}
        for(const entry of formData.entries()){
            entries[entry[0]] = entry[1];
        }
        let errors = validateForm(formData.entries());
        if(errors.length > 0){

            errors.forEach(error => {
               appendAlert(error.message, "danger");
            })

        }else{
            appendAlert("Submission successfully added!", "success");
            renderReservation(entries);
            setTimeout(() => {
                clearAlerts();
            }, 5000);
        }


    })

    form.addEventListener("reset", (e) => {

    })
}

function renderReservation(formData){
    const formResult = document.getElementById('form_result')
    formResult.innerHTML = ``
    for (const [key, value] of Object.entries(formData)) {
        let p = document.createElement("p")
        p.textContent = `${key}: ${value}`;
        formResult.appendChild(p);
    }

    console.log(JSON.stringify(formData));
    }
    function validateForm(entries){
    console.log("validate form")

        let errors = [];
    entries.forEach(entry => {
        let key = entry[0];
        let value = entry[1];
        switch (key) {
            case "name":
                if(value.length < 1 || value.length > 20){
                    console.log(key, value);
                    let error = {
                        input: entry[0],
                        message: `${entry[0]} is required and must be less than 21 characters.`
                    }
                    errors.push(error)
                }
                break;
                case "email":
                    console.log(key, value);
                    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if (regex.test(value)) {
                        console.log("Valid Email address");
                    } else {
                        let error = {
                            input: key,
                            message: `${value} is not a valid email address.`
                        }
                        errors.push(error)
                    }
                    break;
                    case "party-size":
                        console.log(key, value);
                        if(value < 1 && value.length > 8){
                            let error = {
                                input: key,
                                message: `${value} is required and must be less than 8.`
                        }
                        errors.push(error)
                        }else{
                            console.log("valid Party Size");
                        }
                        break;
            case "date":
                console.log(key, value);
                let todaysDate = new Date().getTime();
                if(todaysDate > value || !value){
                    let error = {
                        input: key,
                        message: `The date provided must be a future date.`
                    }
                    errors.push(error)
                }
                break;
                case "time":
                    let todaysTime = new Date(value).getTime();
                    if(!value){
                        let error = {
                            input: key,
                            message: `A time is required.`
                        }
                        errors.push(error)
                    }
                    break
            case "seating-preference":
                if(!value){
                    let error = {
                        input: key,
                        message: `Please select a seating preference.`
                    }
                    errors.push(error)
                }
                break;
            default:
                console.log(key, value);
                break;

        }
    })

        return errors;

    }

const appendAlert = (message, type) => {
    const alertSection = document.getElementById('alert-section')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertSection.append(wrapper)
}

function clearAlerts(){
    const alertList = document.querySelectorAll('.alert');
    //Clear out any existing alerts
    alertList.forEach(alertElement => {
        const alertInstance = bootstrap.Alert.getOrCreateInstance(alertElement);
        alertInstance.close();
    })
}