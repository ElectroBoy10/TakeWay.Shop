---
layout: products
title: Products
---

## Our Products

{% assign products = site.data.products %}

### Available Products
{% for product in products.Products %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }}){:class="product-image"}
**Price:** {{ product.price }}

{% endfor %}

### Coming soon
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }}){:class="product-image"}
**Price:** {{ product.price }}

{% endfor %}
