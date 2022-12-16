import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/sharp-solid-svg-icons";
import Image from "next/image";
import { ButtonLink, TemplateNotFound } from "../../components/common";
import { supabase } from "../../lib";

export default async function NotFound() {
  const { data: categories } = await supabase
    .from("categories")
    .select("name, slug")
    .order("id", { ascending: true });

  return (
    <TemplateNotFound categories={categories}>
      <Image
        // src="https://res.cloudinary.com/ediazjz/image/upload/v1671155524/hablandoclaro/notFound_eayade.png"
        // alt="Pen drawing of a man lost in a city"
        // src="https://res.cloudinary.com/ediazjz/image/upload/v1671155525/hablandoclaro/notFoundPost_qss6hd.png"
        // alt="Pen drawing of a man lost in a library"
        src="https://res.cloudinary.com/ediazjz/image/upload/v1671155525/hablandoclaro/notFoundCategory_wgi98s.png"
        alt="Pen drawing of a man lost in a park"
        width={1024}
        height={1024}
        className="mb-8 max-h-80 max-w-xs"
      />

      <span className="text-[8rem] font-medium">404</span>

      <h1 className="h4 mb-6 block w-1/2 text-center">
        It seems like the page your were looking for doesn&apos;t exist yet!
      </h1>

      <ButtonLink
        href="/"
        text="Take me home"
        variant="primary-outlined"
        icon={<FontAwesomeIcon icon={faHome} className="h-4 w-4" />}
      />
    </TemplateNotFound>
  );
}
