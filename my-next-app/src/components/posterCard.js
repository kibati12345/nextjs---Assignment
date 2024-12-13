import Image from "next/image";
import Link from "next/link";
import styles from "../styles/PostCard.module.css"; // Add a CSS module for styling

export default function PostCard({ post }) {
  return (
    <div className={styles.card}>
      {/* Display Post Image */}
      {post.attributes.image?.data && (
        <Image
          src={post.attributes.image.data.attributes.url}
          alt={post.attributes.title}
          width={300}
          height={200}
          className={styles.image}
        />
      )}

      {/* Display Post Title */}
      <h2 className={styles.title}>{post.attributes.title}</h2>

      {/* Display Post Excerpt */}
      <p className={styles.excerpt}>
        {post.attributes.content.length > 100
          ? `${post.attributes.content.substring(0, 100)}...`
          : post.attributes.content}
      </p>

      {/* Read More Link */}
      <Link href={`/${post.attributes.slug}`}>
        <a className={styles.link}>Read More</a>
      </Link>
    </div>
  );
}
