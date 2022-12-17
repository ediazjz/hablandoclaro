import { supabase } from "../../../lib";

async function getData(paramsSlug: string) {
  const { data: post } = await supabase
    .from("post")
    .select("title, thumbnailImage, description")
    .eq("slug", paramsSlug)
    .limit(1);

  if (post?.length === 0) {
    return {
      title: "Post not found",
      description: "This category does not seems to exist",
      thumbnailImage:
        "https://res.cloudinary.com/ediazjz/image/upload/v1671155525/hablandoclaro/notFoundPost_qss6hd.png",
    };
  }

  return post?.[0];
}

export default async function Head({ params }: { params: { slug: string } }) {
  const post = await getData(params.slug);

  return (
    <>
      <title>{`${post?.title} | Hablando claro`}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={post?.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
