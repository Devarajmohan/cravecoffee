$(document).ready(function() { var t = [];

    function a() { var a = $("#cartItems");
        a.empty(); var i = 0;
        t.forEach(function(t, n) { i += t.price * t.quantity, a.append(`
    <div class="cart-item">
        <div>${t.name} - $${t.price} </div>
        <div class="cart-controls">
            <div class="quantity">
                <a href="#" class="quantity__minus" data-index="${n}"><span>-</span></a>
                <input name="quantity" type="text" class="quantity__input" value="${t.quantity}">
                <a href="#" class="quantity__plus" data-index="${n}"><span>+</span></a>
            </div>
            <button class="remove-item" data-index="${n}">
                <i class="fa fa-trash-o" style="font-size:25px"></i>
            </button>
        </div>
    </div>
`) }), $("#cartTotal").text("Total: $" + i) }
    $(".quantity__plus").click(function(t) { t.preventDefault(); var a = $(this).closest(".quantity").find(".quantity__input"),
            i = parseInt(a.val(), 10);
        a.val(i + 1) }), $(".quantity__minus").click(function(t) { t.preventDefault(); var a = $(this).closest(".quantity").find(".quantity__input"),
            i = parseInt(a.val(), 10);
        i > 0 && a.val(i - 1) }), $(".buy-button").click(function() { var i = $(this).closest(".item"),
            n = i.data("name"),
            e = i.data("price"),
            u = parseInt(i.find(".quantity__input").val(), 10); if (u > 0) { var c = t.find(function(t) { return t.name === n });
            c ? c.quantity += u : t.push({ name: n, price: e, quantity: u }), a() } }), $("#cart-icon").click(function() { $("#cart").toggle() }), $("#cartItems").on("click", ".quantity__plus", function(i) { i.preventDefault(); var n = $(this).data("index");
        t[n].quantity++, a() }), $("#cartItems").on("click", ".quantity__minus", function(i) { i.preventDefault(); var n = $(this).data("index");
        t[n].quantity > 0 && (t[n].quantity--, 0 === t[n].quantity && t.splice(n, 1), a()) }), $("#cartItems").on("click", ".remove-item", function() { var i = $(this).data("index");
        t.splice(i, 1), a() }) });