import { getResult } from './lib/dune';
import { saveData } from './lib/parse';

async function main() {
  const execution_id = '01GPX71X2NHSZMVAS92ZHAFF6V';
  const parameters = [];
  const query_id = 1896085;
  const res = await getResult(execution_id, query_id, parameters);
  await saveData('./data.csv', res.data);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
