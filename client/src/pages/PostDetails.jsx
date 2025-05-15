import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../services/postServices";

function PostDetails() {
  const {id}=useParams()
  const [post,setPost]=useState(null)
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')

  useEffect(()=>{
    async function fecthPost() {
      try {
        const res=await getPostById(id)
        setPost(res.data)

      } catch (error) {
          setError('Page not found')
      }finally{
        setLoading(false)
      }
      
    }
    fecthPost()
  },[id])

  if (loading) return <p>Loading.....</p>
  if (error) return <p className="danger">{error}</p>

  return (
    <div className="card shadow p-4">
      <h2 className="mb-3">{post.title}</h2>
      <p className="text-muted">By {post.author}- {new Date(post.createdAt).toLocaleDateString()} </p>
    <hr />
    <p style={{ whiteSpace: 'pre-wrap' }}>{post.body}</p>
    </div>
  );
}

export default PostDetails;
