import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface Blog {
  _id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  images?: string[];
  readTime?: string;
}

interface BlogDetailProps {
  blog: Blog | null;
  onBack: () => void;
}

const BlogDetail = ({ blog, onBack }: BlogDetailProps) => {
  if (!blog) return null;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center gap-6 text-muted-foreground mb-6">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {blog.createdAt
            ? new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })
            : "No Date"}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {blog.readTime || "5 min read"}
        </div>
      </div>

      {/* Blog Images Gallery */}
      {blog.images && blog.images.length > 0 && (
        <img
          src={blog.images[0]} // cover image
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}

      {/* Show More Images Button */}
      {blog.images && blog.images.length > 1 && (
        <Button
          variant="outline"
          className="mb-6"
          onClick={() => window.location.href = `/gallery?blogId=${blog._id}`}
        >
          Show More Images →
        </Button>
      )}

      <p className="text-lg leading-relaxedc pt-2 pb-10">{blog.content}</p>
      <Button variant="ghost" onClick={onBack} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
        Back to Blogs
      </Button>
    </div>
  );
};

export default BlogDetail;
