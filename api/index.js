import { createDatabase } from "fidb/lib/database"
import { createRequestListener } from "fidb/lib/rest"
import { resolve } from "node:path"

const PREFIX = resolve(__filename, "../databases/")

const FILE = "test"

export default async function (request, response) {
  const path = resolve(PREFIX, FILE)
  const db = await createDatabase({ path })
  const listen = createRequestListener({ db })
  await listen(request, response)
}
