---
title: Aspect Ratio Calculator
topic: Tools
tags:
 - Tools
---

<p>Use this aspect ratio calculator to calculate a new width or height while maintaining the original aspect ratio.</p>

<div class="flex flex-row mb-4">

  <div class="flex flex-col w-3/7 md:w-auto align-center text-center">
    <label>Width</label>
    <input id="arcX1" class="my-4" type="number" value="1920" min="1" step="1" tabindex="1">
    <input id="arcX2" class="w-full" type="number" value="" min="1" step="1" placeholder="New width" tabindex="3">
  </div>

  <div class="mx-4 w-1/7 md:w-auto text-center">x</div>

  <div class="flex flex-col w-3/7 md:w-auto align-center text-center">
    <label>Height</label>
    <input id="arcY1" class="my-4" type="number" value="1080" min="1" step="1" tabindex="2">
    <input id="arcY2" type="number" value="" min="1" step="1" placeholder="New height" tabindex="4">
  </div>

</div>

<div>
  Aspect Ratio: <span id="arcRatioInteger" class="font-bold"></span> or <span id="arcRatioDecimal" class="font-bold"></span>
</div>

{% if helpers.environment === "development" %}
  <script src="js/arc.js" defer></script>
{% else %}
  <script src="js/arc.min.js" defer></script>
{% endif %}
