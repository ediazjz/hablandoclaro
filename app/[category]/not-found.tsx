import { Template } from "../../components/common";
import { supabase } from "../../lib";

export default async function NotFound() {
  const { data: categories } = await supabase
    .from("categories")
    .select("name, slug")
    .order("id", { ascending: true });

  return (
    <Template categories={categories}>
      <h1>Looks Like there are no categories with this name</h1>
    </Template>
  );
}
