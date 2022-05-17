---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
tags: []
categories: []
featured: false
draft: false

# Registration currently open
registration_open: true

# Schedule page publish date (NOT publication's date).
publishDate: {{ .Date }}

# Publication name and optional abbreviated publication name.
course_title: "{{ replace .Name "-" " " | title }}"

instructors:
- name:
  institution:
  email:

# Start and end dates
# course_start: 2022-09-01
course_start: {{ .Date | time.Format "2006-01-02" }}
course_end: {{ .Date | time.Format "2006-01-02" }}

# Course number at home institution
course_number: ""

# Section/Catalog number
section_number: ""

# Course Code at Home institution
section_code: ""

prerequisites:
#  - A course in Probability Theory and Stochastic Processes

# Course Abstract
# abstract : |
abstract: ""

# Course Website
# course_website: 

# syllabus_txt: |
#   syllabus goes here
#
# syllabus_pdf:

image:
  caption: ""
  focal_point: ""
  preview_only: false

---
