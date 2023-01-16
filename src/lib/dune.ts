import axios from 'axios';
import { ResultType } from '../types/dune';

export async function getResultID(queryNumber: number) {
  const body = {
    operationName: 'GetResult',
    variables: {
      error_id: '00000000-0000-0000-0000-000000000000',
      result_id: queryNumber,
    },
    query:
      'query GetResult($query_id: Int!, $parameters: [Parameter!]) {  get_result_v2(query_id: $query_id, parameters: $parameters) {    job_id    result_id    error_id    __typename  }}',
  };

  const endpoint = 'https://app-api.dune.com/v1/graphql';

  const res = await axios.request({
    method: 'POST',
    url: endpoint,
    data: body,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64; rv:104.0) Gecko/20100101 Firefox/104.0',
    },
  });

  console.log(res.data, res.headers);
}

export async function getResult(
  execution_id: string,
  query_id: string
): Promise<{ data: ResultType } | null> {
  const body = {
    operationName: 'GetExecution',
    variables: {
      parameters: [],
      execution_id: execution_id,
      query_id: query_id
    },
    query:
      'query GetExecution($execution_id: String!, $query_id: Int!, $parameters: [Parameter!]!) {  get_execution(    execution_id: $execution_id    query_id: $query_id    parameters: $parameters  ) {    execution_queued {      execution_id      execution_user_id      position      execution_type      created_at      __typename    }    execution_running {      execution_id      execution_user_id      execution_type      started_at      created_at      __typename    }    execution_succeeded {      execution_id      runtime_seconds      generated_at      columns      data      __typename    }    execution_failed {      execution_id      type      message      metadata {        line        column        hint        __typename      }      runtime_seconds      generated_at      __typename    }    __typename  }}',
  };

  const endpoint = 'https://app-api.dune.com/v1/graphql';

  const res = await axios.request({
    method: 'POST',
    url: endpoint,
    data: body,
    headers: {
      'User-Agent':
        'Mozilla/5.0 (X11; Linux x86_64; rv:104.0) Gecko/20100101 Firefox/104.0',
    },
  });

  return res;
}
