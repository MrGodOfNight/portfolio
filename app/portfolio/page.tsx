import { loadData } from "@/app/_utils/loadData"
import PortfolioContent from "@/app/_components/PortfolioContent";

export default async function Portfolio() {
  const data = await loadData("portfolio")

  return <PortfolioContent data={data} />
}