### React

npm create vite@latest

  cd music_frontend
  npm install
  npm run dev

npm i react-router-dom

npm i @heroicons/react

npm install @headlessui/react

### Tailwind

https://tailwindcss.com/docs/guides/vite

Follow above link to install Tailwind CSS

### Run

npm run dev

这里upload, 先把image 和 audio stream发给firebase, 然后拿到return的URL后再储存在form中, 最后再向MongoDB提交. 



## 修改

1.增加在detail page可以现场修改

2.在detail page delete的时候, 目前只delete MongoDB, 之后增加Delete FireBase的API (目前image和audio没有被一起delete) √, 通过后端改好了

3.增加web 网页登录系统, 只能授权的email才能登录





### GIT

// push to remote
git push -u origin main

git pull origin main

//witch to the feature branch 

git checkout feature-branch 

//Merge changes from main into feature-branch 



### Backend

npm init -y

npm i express nodemon

MongoDB User:
Pia8tAYZXhyu3eKf


npm install mongodb
npm i cors
npm install dotenv
npm i mongoose

### Postman:

http://localhost:5555/books

{
  "title": "1984",
  "author": "George Orwell",
  "isbn": "9780451524935",
  "year": 1949,
  "description": "A dystopian novel set in a totalitarian society ruled by Big Brother."
}

{
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "isbn": "9780141439518",
  "year": 1813,
  "description": "A romantic novel that charts the emotional development of the protagonist, Elizabeth Bennet."
}

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "year": 1925,
  "description": "A story about the young and mysterious millionaire Jay Gatsby and his quixotic passion for Daisy Buchanan."
}

{
  "title": "Moby Dick",
  "author": "Herman Melville",
  "isbn": "9781503280786",
  "year": 1851,
  "description": "A novel that follows the narrative of Captain Ahab's obsessive quest to kill the white whale, Moby Dick."
}

{
  "title": "The Catcher in the Rye",
  "author": "J.D. Salinger",
  "isbn": "9780316769488",
  "year": 1951,
  "description": "A story about the adolescent life of Holden Caulfield, his confusion, and his alienation from society."
}


