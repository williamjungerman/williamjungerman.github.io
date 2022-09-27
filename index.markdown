---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# Minimalist default layout: https://github.com/BDHU/minimalist/blob/main/_layouts/default.html
layout: default
title: "William Jungerman"
---

## About me
Hi! I'm a PhD candidate in economics at the University of Minnesota, Twin Cities. My fields of interest are Macroeconomics and Labor Economics.

<!-- My CV is available [here](){:target="_blank"}. -->

---

## Research

### Working Papers
Coming soon.

### Work in progress
Coming soon. 

### Publications
<!-- 
**[Brexit, the City of London, and the prospects for portfolio investment](/assets/papers/EichengreenJungermanLiu2019.pdf){:target="_blank"}** \
(with [Barry Eichengreen](https://eml.berkeley.edu/~eichengr/){:target="_blank"} and Mingyang (Chris) Liu)
{: class="no-margins"}
<details>
    <summary>Abstract (click to expand)</summary>
    This paper examines the international financial consequences of Brexit. It first pro- vides a survey of the still limited literature on EU membership and international capital flows. It then provides new estimates of the impact of Brexit on cross-border investment utilizing data from the IMF’s Consolidated Portfolio Investment Survey. It lastly provides a comparative analysis of these same issues using data on cross- border capital flows from the BIS. The conclusion is that the impact on cross-border capital flows to and from the UK is likely to be substantial.
</details>

<br/>
{: class="no-margins"}
-->

{% for pub in site.data.publications %}
  **[{{pub.title}}]({{pub.link}}){:target="_blank"}** \
  (with {% for author in pub.coauthors %} {% if author.link %}[{{ author.name }}]({{ author.link }}){:target="_blank"}{% else %}{{ author.name }}{% endif %}{% unless forloop.last %}, {% endunless %}{% endfor %}) \
  *{{ pub.publication }}*
  <!-- This applies apply the no-margins class to prev paragraph to remove margins -->
  {: class="no-margins"}
  <details>
      <summary>Abstract (click to expand)</summary>
      {{ pub.abstract }}
  </details>

  <!-- This creates line break to space out items; need the no-margins class also since this gets automatically wrapped with a <p> which by default has extra margins -->
  <br/>
  {: class="no-margins"}
{% endfor %}


---
## Teaching

### University of Minnesota, Twin Cities 
- ECON 4211 Principles of Econometrics, Instructor: Fall 2020, Spring 2021, Fall 2021, Spring 2022
- ECON 4261 Introduction to Econometrics, Instructor: Summer 2020
- ECON 4751 Financial Economics, Instructor: Summer 2021
- ECON 3101 Intermediate Microeconomics, Teaching Assistant: Fall 2019, Spring 2020
- ECON 1102 Intro to Macroeconomics, Teaching Assistant: Spring 2019
- ECON 4968 Uncertainty and Information, Teaching Assistant: Fall 2018

---

## Contact

**E-mail** \
junge076 at umn dot edu \
    william dot jungerman at gmail dot com

**Mailing Address** \
4-101 Hanson Hall \
1925 Fourth Street South \
Minneapolis, MN 55455
