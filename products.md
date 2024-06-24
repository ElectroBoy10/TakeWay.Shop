---
layout: products
title: Products
---

## (Back to main page)[https://electroboy10.github.io/TakeWay.github.io/]

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

