import fs from 'fs';

import { ResultType } from '../types/dune';

export async function saveData(fileName: string, data: ResultType) {
  const columns = data.data.get_execution.execution_succeeded.columns;
  fs.writeFileSync(fileName, columns.join(','));
  fs.appendFileSync(fileName, '\n');

  data.data.get_execution.execution_succeeded.data.forEach((x) => {
    // eslint-disable-next-line functional/no-let
    let arr = [];

    columns.forEach((c) => {
      arr = [...arr, x[c]];
    });

    fs.appendFileSync('./data.csv', arr.join(','));
    fs.appendFileSync('./data.csv', '\n');
  });
}
