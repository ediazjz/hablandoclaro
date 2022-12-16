import { TemplateListing } from "../components/common";
import { Card } from "../components/post";
import { supabase } from "../lib";

export default async function Home() {
  const { data: categories } = await supabase
    .from("categories")
    .select("name, slug")
    .order("id", { ascending: true });
  const { data: posts } = await supabase
    .from("posts")
    .select(
      "id, title, slug, description, thumbnailImage, categories (name, slug, color)"
    )
    .order("created_at", { ascending: false });

  return (
    <TemplateListing categories={categories}>
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
    </TemplateListing>
  );
}
