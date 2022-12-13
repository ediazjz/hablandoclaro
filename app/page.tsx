import Image from "next/image";

import { Template } from "../components/common";
import { supabase } from "../lib";

export default async function Home() {
  const { data: posts } = await supabase.from("posts").select();

  return (
    <Template>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
      <div className="h-96 w-full">hola</div>
    </Template>
  );
}
