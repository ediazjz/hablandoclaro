import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/sharp-solid-svg-icons";
import Image from "next/image";

import { truncateText } from "../../lib";
import { Button, ButtonLink } from "../common";

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
    <article className="mb-6 w-full break-inside-avoid-column bg-zinc-800 xl:mb-8">
      <div className="relative z-10 block aspect-video w-full">
        <Image src={thumbnailImage} alt="foto" fill />
      </div>

      <div className="p-4">
        <span
          className="smoll mb-4 block w-fit border px-3 py-1"
          style={{
            borderColor: categories.color,
            color: categories.color,
          }}
        >
          {categories.name}
        </span>

        <h1 className="h4 mb-2 leading-none text-zinc-50">{title}</h1>

        <p className="mb-6">{truncateText(description)}</p>

        <div className="flex w-full items-center justify-between">
          <ButtonLink
            href={`${categories.slug}/${slug}`}
            variant="primary-outlined"
            text="Read more"
          />

          <Button
            type="button"
            variant="ghost"
            icon={<FontAwesomeIcon icon={faShareNodes} className="h-6 w-6" />}
            className="px-1 sm:px-2 md:px-2 xl:px-2"
          />
        </div>
      </div>
    </article>
  );
};
