import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

export default function About() {
  return (
    <>
        <Header />
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">
                About Page
            </h1>

            <div className="flex flex-col gap-4">
                <Button label="Small & Rounded-sm" size="small" shape="rounded-sm" />
                <Button label="Medium & Rounded-md" size="medium" shape="rounded-md" />
                <Button label="Large & Rounded-full" size="large" shape="rounded-full" />
            </div>
        </div>
    </>
  );
}