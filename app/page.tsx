import { loadData } from "@/app/_utils/loadData"
import HomeContent from "./_components/HomeContent"

export default async function Home() {
  const data = await loadData("home")

  return <HomeContent data={data} />
}