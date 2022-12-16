import { notFound } from "next/navigation";
import { Template } from "../../components/common";
import { Card } from "../../components/post";
import { supabase } from "../../lib";

export async function generateStaticParams() {
  const { data: categories } = await supabase
    .from("categories")
    .select("slug")
    .order("id", { ascending: true });

  return categories?.map((category) => ({
    category: category.slug,
  }));
}

async function getData(paramsCategory: string) {
  const { data: category } = await supabase
    .from("categories")
    .select("name, description")
    .eq("slug", paramsCategory)
    .limit(1);

  if (category?.length === 0) {
    notFound();
  }

  const { data: categories } = await supabase
    .from("categories")
    .select("name, slug")
    .order("id", { ascending: true });
  const { data: posts } = await supabase
    .from("posts")
    .select(
      "id, title, slug, description, thumbnailImage, categories (name, color)"
    )
    .eq("category", paramsCategory);

  return { categories, posts };
}

export default async function Home({
  params,
}: {
  params: { category: string };
}) {
  const { categories, posts } = await getData(params.category);

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
