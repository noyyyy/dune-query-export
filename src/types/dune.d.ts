export declare type ResultType = {
  data: {
    get_execution: {
      execution_queued: any;
      execution_running: any;
      execution_succeeded: {
        execution_id: string;
        runtime_seconds: number;
        generated_at: string;
        columns: [];
        data: any;
      }
    }
  } 
};
