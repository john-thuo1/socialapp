### Social APP  


## Introduction

## Testing instructions

Follow the below instructions to get you started
```
git clone <this project link>
cd server
npm install
npm start
cd ../client
npm install
npm start

```


## Posting 
Ensure you have registered and logged in to post.
Prior to posting, click on the 3 dots beside any post in the application.
This populates the edit post form on your upper right. Do a slight change, e.g change title of the given post.
After you are done, submit the post.
Only after doing this can you post. It is an error we did not manage to solve due to the time given.
However, in future versions of the web application, we will solve the issue.

### Application Endpoints

1.router.get('/', getPosts);  <br />
2.router.post('/', auth, PostValidation(), validate, createPost);  <br />
3.router.patch('/:id',auth, updatePost);  <br />
4.router.delete('/:id', auth, deletePost); <br />
5.router.patch('/:id/likePost', likePost); <br />
6.router.patch('/:id/dislikePost', dislikePost);
