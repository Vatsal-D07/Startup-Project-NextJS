import { client } from "@/sanity/lib/client";
import SearchForm from "../../components/SearchForm";
import StartupCard , {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch , SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  // const posts = await client.fetch(STARTUPS_QUERY);
  // console.log(JSON.stringify(posts , null , 2))
  const params = { search : query || null}

  const session = await auth();

  console.log(session?.id);
  
  const {data : posts} = await sanityFetch({query : STARTUPS_QUERY , params})

  return (
    <>
      <section className="pink_container">
        <div className="flex justify-center heading">"Post Your Startup, Find Inspiration – Uncover the Future of Innovation!"</div>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for ${query}` : "All StartUps"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startup Found</p>
          )}
        </ul>
      </section>
      <SanityLive/>
    </>
  );
}
