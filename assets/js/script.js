document.addEventListener('DOMContentLoaded', () => {
    const price = 300000;
    let quantity = 0;

    const priceElement = document.querySelector('#price');
    const quantityElement = document.querySelector('#quantity');
    const totalElement = document.querySelector('#total');

    const updateTotal = () => {
        const total = (price * quantity).toLocaleString('en');
        totalElement.innerHTML = total;
    };

    document.querySelector('#increase').addEventListener('click', () => {
        quantity++;
        quantityElement.innerHTML = quantity;
        updateTotal();
    });

    document.querySelector('#decrease').addEventListener('click', () => {
        if (quantity > 0) {
            quantity--;
            quantityElement.innerHTML = quantity;
            updateTotal();
        }
    });
});
