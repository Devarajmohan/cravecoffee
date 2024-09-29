$(document).ready(function() {
    var cartItems = [];

    function updateCart() {
        var cartContainer = $("#cartItems");
        cartContainer.empty();
        var total = 0;
        var itemCount = 0;

        cartItems.forEach(function(item, index) {
            total += item.price * item.quantity;
            itemCount += item.quantity;  // Count the total number of items

            cartContainer.append(`
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="details">
                        <div class="name">${item.name}</div>
                        <div class="price">$${item.price}</div>
                    </div>
                    <div class="cart-controls">
                        <div class="quantity">
                            <a href="#" class="quantity__minus" data-index="${index}"><span>-</span></a>
                            <input name="quantity" type="text" class="quantity__input" value="${item.quantity}">
                            <a href="#" class="quantity__plus" data-index="${index}"><span>+</span></a>
                        </div>
                        <button class="remove-item" data-index="${index}" >
                <i class="fa fa-trash-o" style="font-size:25px "></i>
            </button>
                    </div>
                </div>
            `);
        });

        $("#cartTotal").text("Total: $" + total);
        $("#cart-count").text(itemCount);  // Update the cart count badge
        if (itemCount === 0) {
            $("#cart-count").text(0);
            cartContainer.append("<p>Your cart is empty.</p>");
        }
    }

    $(".quantity__plus").click(function(event) {
        event.preventDefault();
        var input = $(this).closest(".quantity").find(".quantity__input");
        var value = parseInt(input.val(), 10);
        input.val(value + 1);
    });

    $(".quantity__minus").click(function(event) {
        event.preventDefault();
        var input = $(this).closest(".quantity").find(".quantity__input");
        var value = parseInt(input.val(), 10);
        if (value > 0) input.val(value - 1);
    });

    $(".buy-button").click(function() {
        var item = $(this).closest(".item");
        var name = item.data("name");
        var price = item.data("price");
        var quantity = parseInt(item.find(".quantity__input").val(), 10);
        var imageSrc = item.find("img").attr("src");

        if (quantity > 0) {
            var existingItem = cartItems.find(function(i) {
                return i.name === name;
            });

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cartItems.push({ name: name, price: price, quantity: quantity, image: imageSrc });
            }

            updateCart();
        }
    });

    $("#cart-icon").click(function() {
        $("#cart").toggle();
    });

    $("#cartItems").on("click", ".quantity__plus", function(event) {
        event.preventDefault();
        var index = $(this).data("index");
        cartItems[index].quantity++;
        updateCart();
    });

    $("#cartItems").on("click", ".quantity__minus", function(event) {
        event.preventDefault();
        var index = $(this).data("index");
        if (cartItems[index].quantity > 0) {
            cartItems[index].quantity--;
            if (cartItems[index].quantity === 0) {
                cartItems.splice(index, 1);
            }
            updateCart();
        }
    });

    $("#cartItems").on("click", ".remove-item", function() {
        var index = $(this).data("index");
        cartItems.splice(index, 1);
        updateCart();
    });

    $("#close-cart").click(function() {
        $("#cart").hide();
    });

    $("#checkout-button").click(function() {
        alert("Proceeding to checkout. Total: $" + $("#cartTotal").text().split("$")[1]);
    });
});
