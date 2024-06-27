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

{% if product.versions %}
#### Versions:
<ul class="product-versions">
  {% for version in product.versions %}
    <li>{{ version }}</li>
  {% endfor %}
</ul>
{% endif %}

{% endfor %}

---<br>

### !! NOT Available !!
{% for product in products['Not-in-stock'] %}
### {{ product.dispname }}

![{{ product.dispname }}]({{ '/assets/images/products/' | relative_url }}{{ product.filename }}){:class="product-image"}
**Price:** {{ product.price }}

{% if product.versions %}
#### Versions:
<ul class="product-versions">
  {% for version in product.versions %}
    <li>{{ version }}</li>
  {% endfor %}
</ul>
{% endif %}

{% endfor %}

---

## Want to order or ask a Question WhatsApp me
[WhatsApp +27 65 677 2625](https://wa.me/27656772625/)

## Need up to date info on what I sell
[Album link](https://share.samsungcloud.com/sharedalbum/6JN1UIcZI4)
