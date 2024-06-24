---
layout: default
title: Products
---

## Our Products

{% assign products = site.data.products %}

### Available Products
{% for product in products.Products %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}

{% unless product.Note contains '!' %}
**Note:** {{ product.Note | remove: '!' }}
{% endunless %}

{% endfor %}

### Not-in-Stock Products
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }})
**Price:** {{ product.price }}

{% unless product.Note contains '!' %}
**Note:** {{ product.Note | remove: '!' }}
{% endunless %}

{% endfor %}
