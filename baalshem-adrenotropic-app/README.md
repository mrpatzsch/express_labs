# Making Headlines
## Intro to Express

### Background


<img src="daily_planet.jpg">

Weclome to the daily planet, we need your superhuman developer skills to help us share news with the world. We've seen that you have some express knowledge and need you to make us a mock website as soon as possible.

## DB Set Up

To get started, you'll want to cd into the repo directory (`cd baalshem-adrenotropic-app`) and then run the following commands at a bash prompt:
```bash
createdb baalshem-adrenotropic-app
psql -d baalshem-adrenotropic-app -a -f baalshem-adrenotropic-app.sql
```

These command will initialize the database and put some starter data in for you.

You'll need to use `sequelize` to create and display articles.

## Routes

You'll need the following `article` routes:

* `get`  `/articles` to display a summary of each article.
* `get` `/articles/new` to get a form to save a new article
    - Note that this form includes a drop-down menu to select an author who writes each article.
* `post` `/articles` to save an article
* `get` `/articles/:id` to find an article by id and displaya it

You'll need the following `author` routes:

  - `get` `/authors` to display all authors in db
  - `get` `/authors/new` to render the form to add a new author
  - `post` `/authors` to save a new author
  - `get` `/authors/:id` to find an author by id in the database

You'll need the following `site` related routes:

* `get` `/` serve the homepage of your site.
* `get` `/about` serve a static about daily planet page.
* `get` `/contact` serve a static `contact` page.

## Structure

All your article related views should be in an `views/articles` folder. Each article should utilize `ejs` to render the page. Your `site` related views `index`, `about`, and `contact` should also have a folder `views/site`. 


## Bonus

Include some navigation links to help the user navigate the site.