import { useState } from 'react'

export default function App() {
  const [userName, setUserName] = useState(null);
  const [comment, setComment] = useState(null);

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: "10px"}}>
        <label htmlFor="userName">User Name</label>
        <input type="text" id="userName" onChange={(e) => setUserName(e.target.value)}/>
        <label htmlFor="comment">Comment</label>
        <textarea id="comment" onChange={(e) => setComment(e.target.value)}/>
      </form>
      <div style={{ marginTop: "20px", border: "1px solid #ccc", borderRadius: "8px", padding: "10px", textAlign: "center"}}>
        <h3>Live Preview</h3>
        <p>User Name: {userName}</p>
        <p>Comment: {comment}</p>
      </div>
    </>
  );
}
