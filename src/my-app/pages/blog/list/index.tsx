import * as React from 'react';
import { Link } from 'react-router-dom';

import * as PostApi from '@/my-app/api/network/post';
import { IPost } from '@/my-app/interfaces/post';

const PageBlog = () => {
  const [posts, setPosts] = React.useState<IPost[]>();

  // FIXME: Cách làm dở ẹc
  React.useEffect(() => {
    (async () => {
      const posts = await PostApi.find();
      setPosts(posts.data);
    })();
  }, []);

  if (!posts) return null;

  return (
    <>
      {posts.map((post: IPost) => {
        return (
          <div key={post.id}>
            <Link to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default PageBlog;
