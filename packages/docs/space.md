---
layout: sub-page.njk
templateEngineOverride: njk
title: Space
description: Design tokens are a tech-agnostic way to store low-level values and then use them to create the styles for your website. Use tokens instead of hard coded values to ensure a scalable, consistent, and sustainable system.
eleventyNavigation:
  key: Space
  parent: Styles
---

<p>Use the spacing tokens to create a visual balance that makes your website easier to scan. These space tokens should be used for all padding, margin and position coordinates.</p>

<table>
  <tr>
    <th>Preview</th>
    <th>CSS custom property</th>
    <th>Value</th>
  </tr>
  {% for token in space %}
    <tr>
      <td>
        <div style="background: var(--color-neutral-300); height: {{token.value}}; width: {{token.value}}; box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);"></div>
      </td>
      <td>
        <code>var(--{{token.name}})</code>
      </td>
      <td>
        <code>{{token.value}}</code>
      </td>
    </tr>
  {% endfor %}
</table>
