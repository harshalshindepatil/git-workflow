async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const posts = await response.json();

    
    posts.slice(0, 5).forEach(post => {
      console.log(`Post #${post.id}: ${post.title}`);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
