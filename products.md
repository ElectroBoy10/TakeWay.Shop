---
layout: default
title: Products
---

## Our Products

{% assign products = site.data.products | where_exp: "item", "item.Dispname" != null %}

{% for product in products %}
### {{ product.Dispname }}

{% if product.Outofstock %}
**Status:** Out of Stock
{% else %}
![{{ product.Dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.Filename }})
**Price:** {{ product.Price }}
{% endif %}

{% if product.Notonsaleyet %}
**Note:** This product is not on sale yet.
{% endif %}

{% endfor %}
