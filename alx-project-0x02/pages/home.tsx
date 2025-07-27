import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { useState } from 'react';
import { Post } from '@/interfaces';
import Header from '@/components/layout/Header';



export default function Home() {

    const [posts, setPosts] = useState<Post[]>([
    { title: 'Welcome!', content: 'This is a default post.' },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <Header />
        <div className="p-8">
        <h1 className="text-4xl font-bold mb-8 text-neutral-200">Welcome to the Home Page</h1>

        <Card
            title="Getting Started"
            content="Learn how to set up and navigate through our platform with ease."
        />

        <Card
            title="Powerful Features"
            content="Our application offers robust tools to help you succeed."
        />

        <Card
            title="Join Our Community"
            content="Connect with others and grow together. Sign up now!"
        />

        <button
            onClick={() => setModalOpen(true)}
            className="mb-6 px-4 py-2 bg-blue-300 text-black rounded hover:bg-blue-500"
        >
            Add New Post
        </button>

        <PostModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={handleAddPost}
        />

        {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
        ))}
        </div>
    </>
  );
}