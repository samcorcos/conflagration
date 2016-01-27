let postListData = [
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is the title of the post!",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "1"
  },
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is a really long title for a post. How long do we want to allow? We should limit this.",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "2"
  },
  {
    upvotes: Math.floor(Math.random() * 100),
    thumbnail: "url",
    title: "This is the title of the post! this is way too long. i want to see what happens when i write something that goes into the third line",
    author: {
      username: "Bobby Tables",
      profile: "url"
    },
    timestamp: (new Date).getTime(),
    comments: Math.floor(Math.random() * 10),
    id: "3"
  }
]

let commentListData = [
  {
    author: {
      profile: "url",
      username: "Bobby Tables",
      points: Math.floor(Math.random() * 1000),
      badge: "url"
    },
    upvotes: Math.floor(Math.random() * 100),
    timestamp: (new Date).getTime(),
    body: "This is the body of the post. Not every post will have stuff written here. It's entirely up to the author. Sometimes people might want to go on a long rant here and maybe explain some of what is going on in the link they provided. There are plenty of reasons to want to add content here.",
    id: "1",
    replyTo: null
  },
  {
    author: {
      profile: "url",
      username: "Johnny Tables",
      points: Math.floor(Math.random() * 1000),
      badge: "url"
    },
    upvotes: Math.floor(Math.random() * 100),
    timestamp: (new Date).getTime(),
    body: "I think this is a good idea",
    id: "2",
    replyTo: null
  },
  {
    author: {
      profile: "url",
      username: "Cam Newton",
      points: Math.floor(Math.random() * 1000),
      badge: "url"
    },
    upvotes: Math.floor(Math.random() * 100),
    timestamp: (new Date).getTime(),
    body: "+1",
    id: "3",
    replyTo: "2"
  }
]

let userData = {
  username: "Sam Corcos",
  contact: "sam@learnphoenix.io",
  social: [
    { platform: "twitter", link: "twitter.com/samcorcos" },
    { platform: "google", link: "twitter.com/samcorcos" },
    { platform: "facebook", link: "twitter.com/samcorcos" }
  ],
  badge: "admin",
  password: "password"
}

export { postListData, commentListData, userData }
