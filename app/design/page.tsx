import { Template } from "../../components/common";
import { Card } from "../../components/post";
import { supabase } from "../../lib";

export default async function Home() {
  const { data: categories } = await supabase
    .from("categories")
    .select("name, slug")
    .order("id", { ascending: true });
  const { data: posts } = await supabase
    .from("posts")
    .select(
      "id, title, slug, description, thumbnailImage, categories (name, color)"
    )
    .eq("category", "design");

  return (
    <Template categories={categories}>
      {posts?.map((post) => (
        <Card
          key={post.id}
          title={post.title}
          slug={post.slug}
          description={post.description}
          thumbnailImage={post.thumbnailImage}
          categories={post.categories}
        />
      ))}
    </Template>
  );
}
