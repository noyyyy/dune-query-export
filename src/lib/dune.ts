import axios from 'axios';

import { ResultType } from '../types/dune';

export async function getResult(
  execution_id: string,
  query_id: number,
  parameters: readonly Record<string, string>[]
): Promise<{ readonly data: ResultType } | null> {
  const body = {
    operationName: 'GetExecution',
    variables: {
      execution_id: execution_id,
      query_id: query_id,
      parameters: parameters,
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
