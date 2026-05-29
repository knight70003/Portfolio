Tushar Verma - Portfolio Website

A personal portfolio website showcasing skills, projects, and professional information for a Computer Science postgraduate and Backend Developer.

Table of Contents

Overview
Features
Tech Stack
Project Structure
Installation
Customization
Deployment
Sections Overview
Contributing
License
Overview

This is a personal portfolio website for Tushar Verma, a Computer Science postgraduate specializing in backend development, Python, and building real-world applications. The site showcases skills, projects, and professional information in a modern, responsive design.

Features

Hero Section - Eye-catching intro with typing animation About Section - Brief professional introduction Skills Section - Visual skill bars with progress indicators Responsive Design - Works on all screen sizes Animated Elements - Smooth scroll and skill bar animations Icon Integration - Font Awesome icons for visual appeal Clean & Modern UI - Professional and minimal design

Tech Stack

Frontend - HTML5, CSS3, JavaScript Icons - Font Awesome 6.4.0 Animations - Pure JavaScript Deployment - Static hosting (GitHub Pages, Netlify, Vercel)

Project Structure

portfolio/ ├── index.html # Main HTML file ├── style.css # Stylesheet ├── images/ # Project images (optional) ├── favicon.ico # Website favicon └── README.md # This file

Installation

No Build Required

This is a static HTML/CSS/JS website. No node_modules or build process needed.

Step 1: Clone the Repository

git clone <your-repo-url> cd portfolio

Step 2: Open in Browser

Simply open index.html in your web browser:

Option 1: Drag and drop
Drag index.html into Chrome/Firefox
Option 2: Local server (Python)
python -m http.server 8000

Option 3: Live Server (VS Code)
Install Live Server extension and click "Go Live"
Customization

Changing Personal Information

Edit index.html to update:

Name: Change "Tushar Verma" throughout the file
Title: Update the hero subtitle
About content: Modify the about section paragraphs
Adding New Skills

Add a new skill-card div in the skills section:

<div class="skill-card"> <i class="fab fa-language"></i> <h3>New Skill</h3> <div class="skill-bar"> <div class="skill-progress" data-width="80"></div> </div> </div>
Updating Skill Progress

Change the data-width attribute in skill-progress:

<div class="skill-progress" data-width="90"></div>
Adding Projects Section

Add a new section after skills:

<section id="projects"> <h1>Projects</h1> <div class="projects-grid"> <!-- Project cards here --> </div> </section>
Changing Colors

Edit style.css to modify the color scheme:

:root { --primary-color: #your-color; --secondary-color: #your-color; --text-color: #your-color; }

Deployment

Deploying to GitHub Pages

Create a GitHub repository

Push your code: git init git add . git commit -m "Initial commit" git remote add origin <your-repo-url> git push -u origin main

Go to Repository Settings

Enable GitHub Pages

Select main branch and save

Your site will be live at: https://yourusername.github.io/repo-name

Deploying to Render

https://portfolio-qubs.onrender.com

Sections Overview

Hero Section

Features a "typing-demo" animation that types out the name. Modify the JavaScript section to change the text:

const text = "Your Name Here";

About Section

Contains professional introduction and background. Update the paragraphs between the <p> tags.

Skills Section

Displays technical skills with animated progress bars. Each skill has:

Icon (from Font Awesome)
Skill name
Progress bar (data-width controls percentage)
Footer

Simple copyright footer. Edit or remove as needed.

Contributing

Feel free to fork this template and customize it for your own portfolio!

Fork the repository
Create a new branch (git checkout -b feature/your-feature)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature/your-feature)
Open a Pull Request
