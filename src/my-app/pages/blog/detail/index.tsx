import * as React from 'react';
import { useParams } from 'react-router-dom';

import * as PostApi from '../../../api/network/post';
import { IPost } from '../../../interfaces/post';

const PageBlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState<IPost>(null);

  // FIXME: Cách làm dở ẹc
  React.useEffect(() => {
    (async () => {
      const post = await PostApi.findOne(id);
      setPost(post.data);
    })();
  }, []);

  if (!post) return null;

  return (
    <>
      <div>
        <h1>{post.title}</h1>
        {<p>{post.description}</p>}
      </div>
    </>
  );
};

export default PageBlogDetail;
