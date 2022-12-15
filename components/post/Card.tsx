import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  slug: string;
  description: string;
  thumbnailImage: string;
  categories: any;
}

export const Card = ({
  title,
  slug,
  description,
  thumbnailImage,
  categories,
}: Props) => {
  return (
    <article className="h-96 w-full border-2 border-zinc-100">
      <Link href={slug}>
        <h1 className="h3">{title}</h1>

        <p>{description}</p>

        <span
          className={"border"}
          style={{ borderColor: categories.color, color: categories.color }}
        >
          {categories.name}
        </span>

        <div className="relative z-10 block h-48 w-full">
          <Image src={thumbnailImage} alt="foto" fill />
        </div>
      </Link>
    </article>
  );
};
