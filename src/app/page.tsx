import Link from 'next/link';
import Posts from './posts';

export default async function Page() {
  let photos = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <section className="cards-container">
      <div>
        <Link href="/notifications">View my notifications</Link>
      </div>
      {photos.map((id) => (
        <Link className="card" key={id} href={`/photos/${id}`} passHref>
          {id}
        </Link>
      ))}
      <Posts />
    </section>
  );
}
