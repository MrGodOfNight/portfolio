import { loadData } from "../../utils/loadData"
import { notFound } from "next/navigation"
import ProjectContent from "@/app/_components/ProjectContent";

export default async function Project({ params }: { params: { slug: string } }) {
  const data = await loadData(`projects/${params.slug}`)

  if (!data) {
    notFound()
  }

  return <ProjectContent data={data} />
}

