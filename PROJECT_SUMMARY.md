# GitHub Build Radiator - Static Web Application

## Project Overview
A frontend-only web application that creates a visual dashboard showing GitHub repository build statuses. Runs entirely in the browser with no backend required.

## Intended Use
Users visit the hosted web app, configure it with their GitHub repositories, and view a real-time dashboard of build statuses. Perfect for displaying on monitors in development areas or for personal productivity.

## Core Functionality
- Add/remove GitHub repositories to monitor
- Display current build status (success, failed, in progress) for each repo
- Show GitHub Actions workflow results
- Auto-refresh build statuses at configurable intervals
- Visual indicators (colors, icons) for quick status recognition

## User Workflow
1. User visits the static site
2. Provides GitHub Personal Access Token for API access
3. Configures which repositories to monitor
4. Views dashboard with real-time build statuses
5. Configuration persists in browser local storage

## Technical Approach
- **Frontend**: React single-page application
- **Data Source**: Direct calls to GitHub REST/GraphQL APIs
- **Storage**: Browser localStorage for user configuration
- **Hosting**: Static site
- **Authentication**: User-provided GitHub Personal Access Token

## Key Features
- No server setup required - just open the website
- Responsive dashboard layout
- Configurable refresh intervals
- Repository grouping/filtering

## Deployment
Single static build that can be hosted anywhere, with simple setup instructions for users to get their GitHub token.