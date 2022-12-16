import { supabase } from "../../lib";

async function getData(paramsCategory: string) {
  const { data: category } = await supabase
    .from("categories")
    .select("name, description")
    .eq("slug", paramsCategory)
    .limit(1);

  if (category?.length === 0) {
    return {
      name: "Category not found",
      description: "This category does not seems to exist",
    };
  }

  return category?.[0];
}

export default async function Head({
  params,
}: {
  params: { category: string };
}) {
  const category = await getData(params.category);

  return (
    <>
      <title>{`${category?.name} | Hablando claro`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={category?.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
