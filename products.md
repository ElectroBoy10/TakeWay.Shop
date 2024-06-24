---
layout: default
title: Products
---

## Our Products

{% assign products = site.data.products %}

### Available Products
{% for product in products.Products %}
### {{ product.dispname }}

{% if product.outofstock %}
**Status:** Out of Stock
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}

### Not-in-Stock Products
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

{% if product.outofstock %}
**Status:** Out of Stock
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}
