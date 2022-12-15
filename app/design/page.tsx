import { Template } from "../../components/common";
import { supabase } from "../../lib";

export default async function Home() {
  const { data: categories } = await supabase.from("categories").select();

  return (
    <Template categories={categories}>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
    </Template>
  );
}
