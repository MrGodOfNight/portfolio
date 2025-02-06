import { loadData } from "@/app/_utils/loadData"
import { useLanguage } from "@/app/_contexts/LanguageContext"
import ResumeContent from "@/app/_components/ResumeContent";

export default async function Resume() {
  const data = await loadData("resume")

  return <ResumeContent data={data} />
}
