const products = [
    {
        id: "fc-1888",
        name: "Flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "Power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "Time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: " Low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "Warp equalizer",
        averagerating: 5.0
    }
];

function populateProductDropdown() {
    const selectElement = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

populateProductDropdown();