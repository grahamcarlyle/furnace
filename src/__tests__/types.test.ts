import type {
  GitHubRepository,
  WorkflowRun,
  Workflow,
  BuildStatus,
  RepositoryBuildStatus,
} from "../types/github";

describe("GitHub Types", () => {
  test("GitHubRepository interface structure", () => {
    const repo: GitHubRepository = {
      id: 123,
      name: "test-repo",
      full_name: "user/test-repo",
      owner: {
        login: "user",
        avatar_url: "https://avatars.githubusercontent.com/u/123",
      },
      private: false,
      html_url: "https://github.com/user/test-repo",
      description: "Test repository",
      created_at: "2023-01-01T00:00:00Z",
      updated_at: "2023-01-02T00:00:00Z",
      pushed_at: "2023-01-03T00:00:00Z",
      default_branch: "main",
    };

    expect(repo.id).toBe(123);
    expect(repo.name).toBe("test-repo");
    expect(repo.owner.login).toBe("user");
  });

  test("BuildStatus type values", () => {
    const statuses: BuildStatus[] = [
      "success",
      "failure",
      "in_progress",
      "queued",
      "cancelled",
      "unknown",
    ];

    statuses.forEach((status) => {
      expect(typeof status).toBe("string");
    });
  });

  test("WorkflowRun interface has required fields", () => {
    const workflowRun: Partial<WorkflowRun> = {
      id: 456,
      name: "CI",
      status: "completed",
      conclusion: "success",
    };

    expect(workflowRun.id).toBe(456);
    expect(workflowRun.status).toBe("completed");
    expect(workflowRun.conclusion).toBe("success");
  });
});
