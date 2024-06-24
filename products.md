---
layout: default
title: Products
---

## Our Products

{% assign products = site.data.products %}

### Available Products
{% for product in products.Products %}
### {{ product.dispname }}

{% if product.Note and product.Note[0] != '!' %}
**Note:** {{ product.Note }}
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}

### Not-in-Stock Products
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

{% if product.Note and product.Note[0] != '!' %}
**Note:** {{ product.Note }}
{% else %}
![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}
{% endif %}

{% endfor %}
