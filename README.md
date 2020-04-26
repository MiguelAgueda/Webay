# Webay

## Setup

### Backend

clone WebayBackendAPI into root folder

from `WebayBackendAPI/` execute `pip3 install -r requirements.txt`

### Frontend

from `frontend/` execute `npm install`

then, execute `npm run build` to build output files.

## Running the Program

From the root folder, execute `python3 WebayBackendAPI/main.py`

# Webay - Initial Project Proposal

## Introduction

### Project Description:

Webay is an open-source webstore backend. Currently, developers can access functions for adding/modifying/deleting listings, sorting listings based on price, as well as searching through listing titles for specific items. Other segments such as a forum and webpage requests are being worked on to make the finished project a website.

### Objective/Purpose:

The purpose of creating this website is to learn how to implement search algorithms in an actual use-case situation, and to create a completed webstore to further understanding of web development.
We will learn to implement a browser-based text editor for marking up forum posts.
We will also like to create a data structure that allows for the logical ordering of forum posts.
A forum can be thought of as a tree-like structure, with the parent post at the root of the tree,
and child posts being sub-nodes within the tree.

## Background/Related studies

### Background knowledge that led to inspiration:

One of the members of our group was keen on building a functional webstore. We decided to use this project's deadline as motivation to both start and finish this project in a timely manner.
Our group is well versed with a wide range of programming languages.
This is perfect for creating a webstore application in which many programming
frameworks can be put to use. The backend server can be run using Python or C++
for data management. Javascript can be used to create a user interface via the web browser.

### Summaries and notes from your sources (e.g., research papers):

## Methods

### Your implementation plan (e.g., using open-source libraries or algorithms that you've found from research articles):

Our project will be implemented using Vuejs for the front end and Python standard
libraries along with the web library Flask for the backend.
We also plan to use the Python standard library Clink for foreign functions in
C++ and use its standard libraries.
We will also use online articles about sorting algorithms and best practices.

### What other sources would be available (e.g., Github, StackOverflow, etc):

Official Python Docs, Official Python Flask Docs, Official JavaScript Docs,
Official Vuejs Docs, Official C++ Docs, Github, StackOverflow, YouTube,
Learn Python the Hard Way (3rd, Zed Shaw), Python Crash Course (Matthes)
Effective Modern C++ (Meyers)

## Discussion

### Potential Challenges that you expect to see:

We expect to face challenges in implementing web server requests to a database backend. We also expect challenges maintaining data integrity of the large amounts of listing and user information.
Keeping a logical order of forum postings has the largest potential, as we see it,
for causing issues.
Forum posts must be displayed in some logical order, based upon the post's status
as a reply to another post or as a root post on it's own.
We forsee the maintaining and mutating of this ordering as our biggest challenge.

### What you expect to learn from this project:

We expect to learn how to implement web requests to a server.
We also expect to learn how to implement better search algorithms now that we
have covered search algorithms in lecture.

## Reference

### Your resources, at least two academic articles (e.g., book or research paper):

Official Python Documentation

Learning Python the Hard Way 3rd ed., Zed Shaw
Effective Modern C++, Scott Meyers

Official Vuejs Documentation

Official Flask Documentation

# Webay - Final Submission
