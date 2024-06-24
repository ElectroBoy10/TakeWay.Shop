---
layout: default
title: Products
---

## Our Products

{% assign products = site.data.products %}

### Available Products
{% for category in products %}
{% if category[0] == 'Products' %}
{% for product in category[1] %}
### {{ product.dispname }}

{% if product.outofstock %}
**Status:** Out of Stock
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}
{% endif %}
{% endfor %}

### Not-in-Stock Products
{% for category in products %}
{% if category[0] == 'Not-in-stock' %}
{% for product in category[1] %}
### {{ product.dispname }}

{% if product.outofstock %}
**Status:** Out of Stock
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}
{% endif %}
{% endfor %}
