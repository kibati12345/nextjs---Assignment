import { fetchFromStrapi } from "../lib/strapi";

export async function getStaticPaths() {
  const posts = await fetchFromStrapi("posts");
  const paths = posts?.data.map((post) => ({
    params: { slug: post.attributes.slug },
  })) || [];

  return { paths, fallback: "blocking" }; // Enable ISR fallback for new content
}

export async function getStaticProps({ params }) {
  const post = await fetchFromStrapi(`posts?filters[slug][$eq]=${params.slug}&populate=*`);
  return {
    props: {
      post: post?.data[0] || null,
    },
    revalidate: 10,
  };
}

export default function Post({ post }) {
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h1>{post.attributes.title}</h1>
      {post.attributes.image?.data && (
        <img
          src={post.attributes.image.data.attributes.url}
          alt={post.attributes.title}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <p>{post.attributes.content}</p>
    </div>
  );
}
