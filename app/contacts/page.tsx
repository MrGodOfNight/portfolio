import { loadData } from "@/app/_utils/loadData"
import ContactsContent from "@/app/_components/ContactsContent";

export default async function Contacts() {
  const data = await loadData("contacts")

  return <ContactsContent data={data} />
}