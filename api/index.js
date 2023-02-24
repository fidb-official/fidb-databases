import { createDatabase } from "fidb/lib/database"
import { createRequestListener } from "fidb/lib/rest"
import { resolve } from "node:path"

const PREFIX = resolve(__filename, "../databases/")

const PATH = "test"

export default async function (request, response) {
  const db = await createDatabase({ path: resolve(PATH) })
  const listen = createRequestListener({ db })
  await listen(request, response)
}
