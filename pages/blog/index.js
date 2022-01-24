import POSTS from "../../queries/posts";
import client from "../../apollo";
import Posts from "../../components/homepage/Posts";

const PostsIndex = ({ posts }) => {
  return (
    <>
      <Posts postList={posts.data} />
    </>
  );
};

export async function getStaticProps(ctx) {
  const { data } = await client.query({
    query: POSTS,
  });

  return {
    props: data,
    revalidate: 1,
  };
}

export default PostsIndex;
