import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function VolumePage() {
  const router = useRouter();
  const volume = volumes.find((volume) => volume.slug === router.query.slug);
  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === router.query.slug
  );
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) return null;
  return (
    <div>
      <Link href="./volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} - {book.title}
          </li>
        ))}
      </ul>
      <div>
        <Image
          src={volume.cover}
          width={140}
          height={230}
          alt={`cover of ${volume.title}`}
        ></Image>
      </div>
      {previousVolume && (
        <Link href={`/volumes/${previousVolume.slug}`}>
          ← {previousVolume.title}
        </Link>
      )}
      {nextVolume && (
        <Link href={`/volumes/${nextVolume.slug}`}>→ {nextVolume.title}</Link>
      )}
    </div>
  );
}
