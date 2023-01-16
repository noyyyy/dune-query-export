export declare type ResultType = {
  readonly data: {
    readonly get_execution: {
      readonly execution_queued: any;
      readonly execution_running: any;
      readonly execution_succeeded: {
        readonly execution_id: string;
        readonly runtime_seconds: number;
        readonly generated_at: string;
        readonly columns: readonly string[];
        readonly data: any;
      };
    };
  };
};
