---
layout: default
title: Products
---

{% assign products = site.data.products %}

### Available Products
{% for product in products.Products %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }}){:class="product-image"}
**Price:** {{ product.price }}

{% endfor %}

### !! COMING SOON !!
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }}){:class="product-image"}
**Price:** {{ product.price }}

{% endfor %}

## Want to order or ask a Question Watsapp me
[WhatsApp +27 65 677 2625](https://wa.me/27656772625?text=Hello%20%F0%9F%98%8A%0AI'm%20interested%20in%20placing%20an%20order%20for%20(product%20name)%20for%20this%20upcoming%20Friday.%20Could%20you%20please%20provide%20me%20with%20the%20pickup%20location%3F%20Also%2C%20I%20would%20appreciate%20confirmation%20once%20it's%20ready.%20Thank%20you!)
