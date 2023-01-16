import { ResultType } from '../types/dune';
import fs from 'fs';
// import { stringify } from 'csv-stringify';

export async function saveData(fileName: string, data: ResultType) {
  const columns = data.data.get_execution.execution_succeeded.columns;
  fs.writeFileSync(fileName, columns.join(','));
  fs.appendFileSync(fileName, '\n');

  data.data.get_execution.execution_succeeded.data.forEach((x) => {
    const arr = [];
    // console.log(columns,x);

    for (const c of columns) {
      arr.push(x[c]);
    }
    fs.appendFileSync('./data.csv', arr.join(','));
    fs.appendFileSync('./data.csv', '\n');
  });
}
