import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps, PostsPageProps } from '@/interfaces';
import { GetStaticProps } from 'next';


export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();

    const posts: PostProps[] = data.map((post: any) => ({
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};


export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>
        {posts.length === 0 ? (
          <p className="text-gray-600">No posts found.</p>
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

