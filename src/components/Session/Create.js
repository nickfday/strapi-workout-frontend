// import React from 'react';

// const SessionCreate = (props) => {
//   return (
//     <div>
//       <h1>New Session</h1>
//       <button>Add Exercise</button>
//       <button>Finish Session</button>
//       <button>Cancel Session</button>
//     </div>
//   );
// };

// export default SessionCreate;

import React, { useCallback, useEffect, useState } from 'react';
import firebaseApp, { firestore } from '../../base.js';
// import { AuthContext } from './auth';

const AddPost = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const { uid, displayName, email } = firebaseApp.auth().currentUser || {};
  // const postRef = firestore.doc(`posts/${id}`);

  const handleTitleChange = (event) => {
    const { name, value } = event.target;
    setTitle(value);
  };

  const handleContentChange = (event) => {
    const { name, value } = event.target;
    setContent(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const post = {
      title,
      content,
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
      stars: 1,
      user: {
        uid,
        displayName,
        email,
      },
    };

    setTitle('');
    setContent('');
    firestore.collection('posts').add(post);
  };

  return (
    <form onSubmit={handleSubmit} className="AddPost">
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="text"
        name="content"
        placeholder="Body"
        value={content}
        onChange={handleContentChange}
      />
      <input className="create" type="submit" value="Create Post" />
    </form>
  );
};

const Post = ({ id, title, favorites, stars }) => {
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => postRef.delete();
  const star = () => postRef.update({ stars: stars + 1 });

  return (
    <div>
      {id} - {title} - {favorites} - {stars}
      <button onClick={stars}>Star</button>
      <button onClick={remove}>Remove</button>
    </div>
  );
};

const SessionCreate = (props) => {
  const user = firebaseApp.auth().currentUser;
  const [posts, setposts] = useState([]);
  // const [user, setUser] = useState(null);

  const unsubscribe = null;

  async function getFirestore() {
    firestore.collection('posts').onSnapshot((snapshot) => {
      const posts = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setposts({ ...posts });
    });
  }

  useEffect(() => {
    getFirestore();
    // return () => {
    //   this.unsubscribe();
    // };
  }, []);

  return (
    <div>
      <h1>New Session</h1>
      <button>Add Exercise</button>
      <button>Finish Session</button>
      <button>Cancel Session</button>

      <AddPost />

      {Object.values(posts).map((post) => {
        return (
          <>
            <Post id={post.id} title={post.title} />{' '}
          </>
        );
      })}

      <br />
      <br />
    </div>
  );
};

export default SessionCreate;
