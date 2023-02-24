import { createDatabase } from "fidb/lib/database"
import { createRequestListener } from "fidb/lib/rest"
import { resolve } from "node:path"

// const path = resolve(__filename, "../../databases/test")
const path = resolve(process.cwd(), "databases/test")

console.log({ path })

export default async function (request, response) {
  const db = await createDatabase({ path })
  const listen = createRequestListener({ db })
  await listen(request, response)
}
