const initState = {
  posts: [
    { id: 1, title: "tit 1", body: "body 1" },
    { id: 2, title: "tit 2", body: "body 2" },
    { id: 3, title: "tit 3", body: "body 3" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type == "DELETE_POST") {
    let newPosts = state.posts.filter(post => {
      return action.id !== post.id;
    });
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
