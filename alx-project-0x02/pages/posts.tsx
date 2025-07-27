import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from JSONPlaceholder API
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          title: post.title,
          content: post.body,
          userId: post.userId,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch posts:', err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>
        {loading ? (
          <p className="text-gray-600">Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </div>
    </>
  );
}