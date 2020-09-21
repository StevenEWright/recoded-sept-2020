# Designs for the Bulletin Board Project

This website frontend uses:

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [jQuery](https://jquery.com/)

## Client Side Web Service Mocks

- [javascripts/mocks.js](javascripts/mocks.js)

This file contains some javascript functions that would normally talk to a server, but let us test our frontend code without one.

The mocks assume a single user exists:

- **username:** `test`
- **password:** `123`

## Styles

- [stylesheets/styles.css](stylesheets/styles.css)

Contains all the styles for the site.

## Pages

### Landing Page

- [index.html](index.html)
- [javascripts/index.js](javascripts/index.js)

A landing page and the sign-in/sign-up page. Any user who isn't logged in should be brought to this page no matter where else they tried to go. On successful login or sign-up, the user should be brought to `post_list.html`.

### Post Listings

- [post_list.html](post_list.html)

A page design for the "Recent Posts" and "Trending Posts" pages. With the exception of the page title and selected navigation bar item, these two pages look the same. They each display a list of post titles, along with the date the post was created, an excerpt of the post's body, the name of the user who posted the message, and the number of upvotes the post has received. Each item in the list is a link to view the post.

### Viewing a Post

- [view_post.html](view_post.html)
- [javascripts/view_post.js](javascripts/view_post.js)

A "Post" page (where the user arrives after clicking a post in the "Recent Posts" page). This page displays a complete post (its title, creation date, author, number of upvotes, and body). It allows users to upvote a post if they haven't done so already, or, remove their upvote otherwise.

### Creating a Post

- [create_post.html](create_post.html)
- [javascripts/create_post.js](javascripts/create_post.js)

The "Create Post" page that allows users can create new posts for the Bulletin Board. When the user successfully submits a new post they should be brought to `view_post.html`.
