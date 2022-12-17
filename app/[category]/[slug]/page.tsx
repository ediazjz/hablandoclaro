import { notFound } from "next/navigation";
import { TemplateListing } from "../../../components/common";
import { Card } from "../../../components/post";
import { supabase } from "../../../lib";

export async function generateStaticParams() {
  const { data: posts } = await supabase
    .from("posts")
    .select("slug, categories (slug)")
    .order("created_at", { ascending: false });

  return posts?.map((post) => ({
    category: post.categories.slug,
    slug: post.slug,
  }));
}

async function getData(paramsSlug: string) {
  const { data: post } = await supabase
    .from("post")
    .select("*, categories (name, color)")
    .eq("slug", paramsSlug)
    .limit(1);

  console.log(post);

  if (post?.length === 0) {
    notFound();
  }

  return post?.[0];
}

export default async function Home({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = await getData(params.slug);

  return <h1>gola</h1>;
}
