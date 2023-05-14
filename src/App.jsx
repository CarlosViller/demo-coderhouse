import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  return (
    <main>
      <h1>Consumiendo APIs 🚀</h1>

      {posts && (
        <div className="container">
          {posts.map((post) => (
            <div className="bubble" key={post.id}>
              {post.body}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default App;
