# Captain Jonny's Blog

This project is a basic blog interface that handles full CRUD operation with a relational database. The backend for this project is written in Ruby as a Sinatra App and can be found here: https://github.com/sjamescarter/phase-3-sinatra-react-project.

## Database
The database is comprised of two tables, posts and comments, that have a one to many relationship where a post has many comments. The schema is as follows:

### posts
```
id          varchar
author      string
title       string
body        text
created_at  timestamp
updated_at  timestamp
```

### comments
```
id          varchar
name        string
comment     text
post_id     integer
created_at  timestamp
updated_at  timestamp
```

## Video
Find a video walk-through of my project here: https://watch.screencastify.com/v/9jO4qTrs1O2Ri6dcziEI.