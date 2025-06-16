export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  private: boolean;
  html_url: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  default_branch: string;
}

export interface WorkflowRun {
  id: number;
  name: string;
  head_branch: string;
  head_sha: string;
  status: "queued" | "in_progress" | "completed";
  conclusion:
    | "success"
    | "failure"
    | "neutral"
    | "cancelled"
    | "skipped"
    | "timed_out"
    | "action_required"
    | null;
  url: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  run_started_at: string;
  workflow_id: number;
  workflow_url: string;
  repository: GitHubRepository;
  head_commit: {
    id: string;
    message: string;
    author: {
      name: string;
      email: string;
    };
  };
  actor: {
    login: string;
    avatar_url: string;
  };
}

export interface Workflow {
  id: number;
  name: string;
  path: string;
  state:
    | "active"
    | "deleted"
    | "disabled_fork"
    | "disabled_inactivity"
    | "disabled_manually";
  created_at: string;
  updated_at: string;
  url: string;
  html_url: string;
  badge_url: string;
}

export interface WorkflowRunsResponse {
  total_count: number;
  workflow_runs: WorkflowRun[];
}

export interface GitHubApiError {
  message: string;
  documentation_url?: string;
  status?: number;
}

export type BuildStatus =
  | "success"
  | "failure"
  | "in_progress"
  | "queued"
  | "cancelled"
  | "unknown";

export interface RepositoryBuildStatus {
  repository: GitHubRepository;
  latestRun: WorkflowRun | null;
  status: BuildStatus;
  lastUpdated: string;
}
