import client from "../../apollo";
import POSTS from "../../queries/posts";
import POST from "../../queries/post";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import styled from "styled-components";

const PostContainer = styled.div`
  width: 100%;
  padding: 5rem 25rem;
`;

const PostHeader = styled.div`
  width: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 56px;
    letter-spacing: 0.25rem;
  }
`;

const PostContent = styled.div`
  margin: 2rem 0 0 0;

  h1,
  h2,
  h3 {
    margin-left: 2rem;
  }

  p {
    code {
      border-radius: 3px;
      background: #03a9f4;
      padding: 0.1rem 0.2rem;
    }
  }

  pre {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 70%;
      border-radius: 10px;
      position: unset !important;
    }
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
`;

const BlockquoteContainer = styled.blockquote`
  background: rgba(100, 100, 100, 1);
  border-left: 0.35rem solid rgba(27, 196, 184, 1);
  padding: 1rem;
`;

const StyledLink = styled.a`
  color: #03a9f4;
  font-weight: bold;

  :hover {
    text-decoration: underline;
  }
`;

const Code = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={materialDark}
      language={match[1]}
      showLineNumbers={true}
      PreTag="div"
      {...props}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  ) : (
    <code {...props}>{children}</code>
  );
};

const Blockquote = ({ node, children, ...props }) => {
  return <BlockquoteContainer {...props}>{children}</BlockquoteContainer>;
};

const PostPage = ({ posts }) => {
  const { title, publishedAt, content } = posts.data[0]?.attributes;
  return (
    <PostContainer>
      <PostHeader>
        <h1>{title}</h1>
        <h4>{new Date(publishedAt).toDateString()}</h4>
      </PostHeader>
      <PostContent>
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw]}
          components={{
            code: Code,
            blockquote: Blockquote,
            a({ node, children, href }) {
              return <StyledLink href={href}>{children}</StyledLink>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  );
};

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: POST,
    variables: { slug: params.slug },
  });

  return {
    props: data,
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: POSTS,
  });

  return {
    paths:
      data.posts.data?.map((post) => `/blog/${post.attributes.slug}`) || [],
    fallback: true,
  };
}

export default PostPage;
