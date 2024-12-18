import Image from "next/image";
import { Home } from "../types/pages/home.types";
import { urlFor } from "@/sanity/lib/image";
import PortableText from "../atoms/content/PortableText";



export default function HomeView({ data }: { data: Home }) {
    return(
        <div>
            <h1>{data.title}</h1>

            <Image
                src={urlFor(data.image.url).url()}
                alt={data.image.alt}
                height={500}
                width={500}
            />

            <div className="prose prose-xl">
                <PortableText value={data.entry} />
            </div>
        </div>
    )
}