import { loadData } from "@/app/_utils/loadData"
import { notFound } from "next/navigation"
import ProjectContent from "@/app/_components/ProjectContent";

interface ProjectParams {
  slug: string;
}

const projects = [
  { slug: 'my-resume' },
  { slug: 'work-time' },
  { slug: 'astramed' },
  { slug: 'hota' },
];

export default async function Project({ params }: { params: ProjectParams }) {
  const data = await loadData(`projects/${params.slug}`);
  if (!data) {
    notFound();
  }
  return <ProjectContent data={data} />;
}

export async function generateStaticParams(): Promise<ProjectParams[]> {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}