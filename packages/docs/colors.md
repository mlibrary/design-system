---
layout: sub-page.njk
templateEngineOverride: njk
title: Color
description: Design tokens are a tech-agnostic way to store low-level values and then use them to create the styles for your website. Use tokens instead of hard coded values to ensure a scalable, consistent, and sustainable system.
eleventyNavigation:
  key: Color
  parent: Styles
---

{{ description }}

Design tokens are available to use in your stylesheets via <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*">custom properties (MDN web docs)</a>.

{% include 'color-palettes.njk' %}
