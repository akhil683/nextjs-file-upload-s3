import Uploader from "@/components/Uploader";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen max-w-xl mx-auto">
      <h1 className="text-3xl text-center py-6 text-orange-400">File Upload</h1>
      <Uploader />
    </div>
  );
}
