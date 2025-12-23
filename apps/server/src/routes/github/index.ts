/**
 * GitHub routes - HTTP API for GitHub integration
 */

import { Router } from 'express';
import { validatePathParams } from '../../middleware/validate-paths.js';
import { createCheckGitHubRemoteHandler } from './routes/check-github-remote.js';
import { createListIssuesHandler } from './routes/list-issues.js';
import { createListPRsHandler } from './routes/list-prs.js';
import { createValidateIssueHandler } from './routes/validate-issue.js';

export function createGitHubRoutes(): Router {
  const router = Router();

  router.post('/check-remote', validatePathParams('projectPath'), createCheckGitHubRemoteHandler());
  router.post('/issues', validatePathParams('projectPath'), createListIssuesHandler());
  router.post('/prs', validatePathParams('projectPath'), createListPRsHandler());
  router.post('/validate-issue', validatePathParams('projectPath'), createValidateIssueHandler());

  return router;
}
