---
layout: layout.njk
eleventyNavigation:
  key: Components
  order: 2
templateEngineOverride: njk,md
---

# Components

The Design System makes it easy to implement and use its components across any framework or no framework at all. We accomplish this by using standardized web platform APIs and Web Components.

{% for component in components %}

## {{ component.name }}

{{ component.description }}

[View <span class="visually-hidden">{{ component.name }}</span> docs]({{ component.name | slug }})

{% endfor %}