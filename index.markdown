---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

# Minimalist default layout: https://github.com/BDHU/minimalist/blob/main/_layouts/default.html
layout: default
title: "William Jungerman"
canonical_url: https://williamjungerman.github.io/
---

## About me
Hi! I'm an Assistant Professor of Economics at the University of North Carolina, Chapel Hill. I received my PhD from the University of Minnesota in 2024.

My CV is available [here](/assets/papers/cv.pdf){:target="_blank"}. 

---

## Research

### Working papers
<ol>
{% for wp in site.data.workingpapers %}
  <li>
    <strong><a href="{{wp.link}}" target="_blank">{{wp.title}}</a></strong><br/>
    {% if wp.coauthors %}(with {% for author in wp.coauthors %} {% assign second_to_last = forloop.length | minus: 1 %} {% if author.link %}<a href="{{ author.link }}" target="_blank">{{ author.name }}</a>{% else %}{{ author.name }}{% endif %}{% if forloop.index < second_to_last %}, {% endif %}{% if forloop.index == second_to_last %}{% if forloop.length > 2 %},{% endif %} and {% endif %}{% endfor %})<br/>{% endif %}
    {% if wp.bibtex %}<a href="#" onclick="copyToClickboard('#bibtex-wp-{{ forloop.index }}'); event.preventDefault();">Copy BibTex</a><span id="bibtex-wp-{{ forloop.index }}-tooltip" class="tooltip">copied</span><br/>{% endif %}
    <div id="bibtex-wp-{{ forloop.index }}" style="display:none;">
      {{wp.bibtex}}
    </div>
    <details>
      <summary>Abstract (click to expand)</summary>
      {{ wp.abstract }}
    </details>
    <br/>
  </li>
{% endfor %}
</ol>

<!-- ### Work in progress
Production Function Estimation with Missing Data \
(with [Kyle Herkenhoff](https://sites.google.com/site/kyleherkenhoff/home?authuser=0){:target="_blank"})

Monopsony in the Antebellum South \
(with [Kyle Herkenhoff](https://sites.google.com/site/kyleherkenhoff/home?authuser=0){:target="_blank"} and [James A. Schmitz, Jr.](https://sites.google.com/site/jamesschmitzjr/){:target="_blank"}) -->

### Publications
<ol>
{% for pub in site.data.publications %}
  <li>
    <strong><a href="{{pub.link}}" target="_blank">{{pub.title}}</a></strong><br/>
    {% if pub.coauthors %}(with {% for author in pub.coauthors %} {% assign second_to_last = forloop.length | minus: 1 %} {% if author.link %}<a href="{{ author.link }}" target="_blank">{{ author.name }}</a>{% else %}{{ author.name }}{% endif %}{% if forloop.index < second_to_last %}, {% endif %}{% if forloop.index == second_to_last %}{% if forloop.length > 2 %},{% endif %} and {% endif %}{% endfor %})<br/>{% endif %}
    <em>{{ pub.publication }}</em><br/>
    {% if pub.journal_link %}<a href="{{ pub.journal_link }}" target="_blank">Journal link</a> {% endif %}
    {% if pub.bibtex %}<a href="#" onclick="copyToClickboard('#bibtex-pub-{{ forloop.index }}'); event.preventDefault();">Copy BibTex</a><span id="bibtex-pub-{{ forloop.index }}-tooltip" class="tooltip">copied</span><br/>{% endif %}
    <div id="bibtex-pub-{{ forloop.index }}" style="display:none;">
      {{pub.bibtex}}
    </div>
    <details>
      <summary>Abstract (click to expand)</summary>
      {{ pub.abstract }}
    </details>
    <br/>
  </li>
{% endfor %}
</ol>


---
## Teaching

### University of North Carolina, Chapel Hill 
- ECON 890 (Topics in Macro Labor): Fall 2025
- ECON 920 (Dissertation Workshop in Macroeconomics): Fall 2024, Spring 2025
- ECON 520 (Advanced Macroeconomics Theory): Spring 2025 (x2)

### University of Minnesota, Twin Cities 
- ECON 3951 (Economics Capstone), Instructor: Spring 2024
- ECON 4431W (International Trade), Writing Assistant: Fall 2023
- ECON 4211 (Principles of Econometrics), Instructor: Fall 2020, Spring 2021, Fall 2021, Spring 2022
- ECON 4261 (Introduction to Econometrics), Instructor: Summer 2020
- ECON 4751 (Financial Economics), Instructor: Summer 2021
- ECON 3101 (Intermediate Microeconomics), Teaching Assistant: Fall 2019, Spring 2020
- ECON 1102 (Intro to Macroeconomics), Teaching Assistant: Spring 2019
- ECON 4968 (Uncertainty and Information), Teaching Assistant: Fall 2018

---

## Contact

**E-mail** \
    william dot jungerman at gmail dot com \
    wjunger at unc dot edu 

**Mailing Address** \
University of North Carolina \
Department of Economics \
305B Gardner Hall \
Chapel Hill, NC 27599
