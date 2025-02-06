import fs from "fs/promises"
import path from "path"

export async function loadData(page: string) {
  const filePath = path.join(process.cwd(), "data", `${page}.json`)
  const fileContents = await fs.readFile(filePath, "utf8")
  return JSON.parse(fileContents)
}

