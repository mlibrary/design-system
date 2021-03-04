---
layout: sub-page.njk
templateEngineOverride: njk
title: Web Components
eleventyNavigation:
  key: Web Components
---

<ul class="cards" style="--card-min-width: 260px;">
  {% for component in components %}
    {% include 'component-card.njk' %}
  {% endfor %}
</ul>
