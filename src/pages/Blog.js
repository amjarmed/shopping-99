import styles from './blog.module.css';
function Blog() {
  return (
    <>
      <h1>Blog Articles</h1>;
      <img src='https://placehold.co/300x100' alt='thumg' />
      <p className={styles.bigblue}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        doloremque amet libero dicta nulla totam harum velit aliquid deserunt
        reprehenderit quia alias, assumenda perferendis quibusdam cumque
        inventore! Unde, eveniet tenetur.
      </p>
    </>
  );
}

export default Blog;
