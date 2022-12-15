import { Template } from "../components/common";
import { Card } from "../components/post";
import { supabase } from "../lib";

export default async function Home() {
  const { data: posts } = await supabase.from("posts").select();
  const { data: categories } = await supabase.from("categories").select();

  return (
    <Template categories={categories}>
      <Card />
    </Template>
  );
}
