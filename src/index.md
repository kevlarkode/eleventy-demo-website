---
title: Hello World
layout: "base.njk"
---

Hello Eleventy World!

<!-- added new post links in main page -->
{% for post in collections.featured %}

- [{{ post.data.title }}]({{ post.url }})

{% endfor %}