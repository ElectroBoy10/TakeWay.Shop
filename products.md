---
layout: products
title: Products
---

## [Back to main page](https://electroboy10.github.io/TakeWay.github.io/)

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

/*## Want to get Details or want to Order?
[Order on WhatsApp](https://wa.me/27656772625?text=Hello%20%F0%9F%98%81%0AIs%20the%20%28item%20names%20e.g.%2C%20jaffels%2C%20burger%2C%20etc.%29%20available%3F%20If%20so%2C%20can%20I%20order%20%28amount%29%20of%20%28product%20name%29%20and%20%28amount%29%20of%20%28product%20name%29%3F)*/
