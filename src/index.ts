import { getResult } from './lib/dune';
import { saveData } from './lib/parse';

async function main() {
  const result_id = '';
  const query_id = '';
  const res = await getResult(result_id, query_id);
  await saveData('./data.csv', res.data);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
