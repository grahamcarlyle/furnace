# Furnace Development Plan

A comprehensive incremental plan for building the GitHub Actions build radiator frontend application.

## Phase 1: Foundation Setup

### Step 1.1: Project Structure & Basic React Setup
**Objective**: Establish React application foundation with TypeScript and routing

**Implementation**:
- Install React, React-DOM, and React Router dependencies
- Create basic React app structure in `src/`
- Set up TypeScript interfaces for GitHub API data
- Configure HTML template and entry point
- Update build configuration for React

**Files to create/modify**:
- `src/App.tsx` - Main React app component
- `src/index.tsx` - React entry point (update existing)
- `src/types/github.ts` - GitHub API type definitions
- `src/components/` - Component directory structure
- `public/index.html` - HTML template
- Update `scripts/build-config.mjs` for React build

**Tests**:
- Basic React component rendering test
- TypeScript compilation test
- Build system integration test

**Verification**:
```bash
./run build
./run test
# Should compile successfully and render basic React app
```

### Step 1.2: GitHub API Client Setup
**Objective**: Create authenticated GitHub API client with basic repository fetching

**Implementation**:
- Create GitHub API client class with authentication
- Implement repository fetching with workflow status
- Add error handling and rate limiting awareness
- Create mock data for development/testing

**Files to create/modify**:
- `src/services/githubApi.ts` - GitHub API client
- `src/types/github.ts` - Expand with workflow types
- `src/utils/constants.ts` - API endpoints and constants
- `src/mocks/githubData.ts` - Mock data for testing

**Tests**:
- GitHub API client initialization test
- Repository fetching test (with mocks)
- Authentication error handling test
- Rate limiting behavior test

**Verification**:
```bash
./run test
# All GitHub API client tests should pass
# Manual verification: API client can authenticate and fetch basic repo data
```

### Step 1.3: Local Storage Configuration System
**Objective**: Implement persistent configuration storage in browser

**Implementation**:
- Create configuration manager for localStorage
- Define configuration schema (repos, tokens, settings)
- Add configuration validation and migration
- Implement secure token storage best practices

**Files to create/modify**:
- `src/services/configStorage.ts` - Configuration persistence
- `src/types/config.ts` - Configuration type definitions
- `src/utils/encryption.ts` - Basic token security utilities
- `src/hooks/useConfig.ts` - React hook for configuration

**Tests**:
- Configuration save/load test
- Data validation test
- Migration test (schema changes)
- Token security test

**Verification**:
```bash
./run test
# Configuration tests pass
# Manual verification: Data persists across browser sessions
```

## Phase 2: Core UI Components

### Step 2.1: Basic Layout and Navigation
**Objective**: Create application shell with navigation and responsive layout

**Implementation**:
- Create main layout component with header, sidebar, content area
- Implement responsive navigation
- Add basic styling foundation (CSS-in-JS or styled-components)
- Create loading and error boundary components

**Files to create/modify**:
- `src/components/Layout/` - Layout components
- `src/components/Navigation/` - Navigation components
- `src/components/Loading/` - Loading states
- `src/components/ErrorBoundary/` - Error handling
- `src/styles/` - Base styles and theme

**Tests**:
- Layout rendering test
- Navigation interaction test
- Responsive behavior test
- Error boundary test

**Verification**:
```bash
./run test
# UI component tests pass
# Manual verification: Responsive layout works across screen sizes
```

### Step 2.2: Repository Management UI
**Objective**: Create interface for adding, removing, and configuring repositories

**Implementation**:
- Repository list component with add/remove functionality
- Repository configuration modal/form
- Input validation for GitHub repository URLs
- Bulk operations (add multiple repos)

**Files to create/modify**:
- `src/components/RepositoryManager/` - Repository management components
- `src/components/Forms/` - Form components and validation
- `src/hooks/useRepositories.ts` - Repository state management
- `src/utils/validation.ts` - Input validation utilities

**Tests**:
- Repository addition/removal test
- Form validation test
- URL parsing test
- State management test

**Verification**:
```bash
./run test
# Repository management tests pass
# Manual verification: Can add/remove repos, validation works
```

### Step 2.3: Build Status Display Components
**Objective**: Create visual components for displaying build statuses

**Implementation**:
- Build status card component with visual indicators
- Status icon system (success, failure, in-progress, unknown)
- Repository dashboard grid layout
- Status detail modal/tooltip

**Files to create/modify**:
- `src/components/BuildStatus/` - Status display components
- `src/components/Icons/` - Status icons and indicators
- `src/components/Dashboard/` - Dashboard layout
- `src/styles/statusTheme.ts` - Status-specific styling

**Tests**:
- Status component rendering test
- Icon display test
- Dashboard layout test
- Status interaction test

**Verification**:
```bash
./run test
# Status display tests pass
# Manual verification: Status indicators are clear and intuitive
```

## Phase 3: GitHub Integration

### Step 3.1: Workflow Status Fetching
**Objective**: Implement real-time GitHub Actions workflow status retrieval

**Implementation**:
- Fetch workflow runs for configured repositories
- Parse and normalize workflow status data
- Implement caching strategy for API efficiency
- Handle different workflow types and branches

**Files to create/modify**:
- `src/services/workflowService.ts` - Workflow data fetching
- `src/utils/cache.ts` - Caching utilities
- `src/types/workflow.ts` - Workflow-specific types
- `src/hooks/useWorkflows.ts` - Workflow data hooks

**Tests**:
- Workflow fetching test
- Data parsing test
- Caching behavior test
- Error handling test

**Verification**:
```bash
./run test
# Workflow service tests pass
# Manual verification with real GitHub token: Workflows display correctly
```

### Step 3.2: Real-time Updates and Polling
**Objective**: Implement automatic refresh of build statuses

**Implementation**:
- Configurable polling interval system
- Smart polling (faster for in-progress builds)
- Background update handling
- Network error recovery

**Files to create/modify**:
- `src/services/pollingService.ts` - Polling management
- `src/hooks/usePolling.ts` - Polling React hook
- `src/utils/networkUtils.ts` - Network utilities
- `src/types/polling.ts` - Polling configuration types

**Tests**:
- Polling interval test
- Background update test
- Network recovery test
- State synchronization test

**Verification**:
```bash
./run test
# Polling service tests pass
# Manual verification: Status updates automatically without page refresh
```

### Step 3.3: Authentication and Token Management
**Objective**: Secure GitHub Personal Access Token handling

**Implementation**:
- Token input and validation component
- Secure token storage (with encryption where possible)
- Token permission validation
- Token expiration handling

**Files to create/modify**:
- `src/components/Authentication/` - Auth components
- `src/services/tokenService.ts` - Token management
- `src/utils/tokenValidation.ts` - Token validation
- `src/hooks/useAuth.ts` - Authentication hook

**Tests**:
- Token validation test
- Authentication flow test
- Permission checking test
- Secure storage test

**Verification**:
```bash
./run test
# Authentication tests pass
# Manual verification: Token handling is secure and user-friendly
```

## Phase 4: Advanced Features

### Step 4.1: Dashboard Customization
**Objective**: Allow users to customize their dashboard layout and appearance

**Implementation**:
- Drag-and-drop repository reordering
- Repository grouping/categorization
- Custom dashboard themes
- View mode options (grid, list, compact)

**Files to create/modify**:
- `src/components/DashboardCustomization/` - Customization components
- `src/hooks/useDragDrop.ts` - Drag and drop functionality
- `src/services/themeService.ts` - Theme management
- `src/types/dashboard.ts` - Dashboard configuration types

**Tests**:
- Drag and drop test
- Theme switching test
- Layout persistence test
- Customization state test

**Verification**:
```bash
./run test
# Customization tests pass
# Manual verification: Dashboard can be personalized and settings persist
```

### Step 4.2: Filtering and Search
**Objective**: Enable filtering and searching of repositories and build statuses

**Implementation**:
- Repository search functionality
- Status filtering (by status, branch, time)
- Quick filter buttons
- Search result highlighting

**Files to create/modify**:
- `src/components/Search/` - Search components
- `src/components/Filters/` - Filter components
- `src/hooks/useSearch.ts` - Search functionality
- `src/utils/searchUtils.ts` - Search utilities

**Tests**:
- Search functionality test
- Filter application test
- Search performance test
- Filter state management test

**Verification**:
```bash
./run test
# Search and filter tests pass
# Manual verification: Can quickly find repositories and filter by status
```

### Step 4.3: Notifications and Alerts
**Objective**: Notify users of build status changes

**Implementation**:
- Browser notification system
- Build failure alerts
- Status change notifications
- Notification preferences

**Files to create/modify**:
- `src/services/notificationService.ts` - Notification handling
- `src/components/Notifications/` - Notification components
- `src/hooks/useNotifications.ts` - Notification hooks
- `src/utils/permissions.ts` - Browser permission utilities

**Tests**:
- Notification triggering test
- Permission handling test
- Notification preferences test
- Alert logic test

**Verification**:
```bash
./run test
# Notification tests pass
# Manual verification: Notifications work and respect user preferences
```

## Phase 5: Performance and Polish

### Step 5.1: Performance Optimization
**Objective**: Optimize application performance for large numbers of repositories

**Implementation**:
- Virtual scrolling for large repository lists
- Lazy loading of non-critical components
- Memoization of expensive calculations
- Bundle size optimization

**Files to create/modify**:
- `src/components/VirtualList/` - Virtual scrolling components
- `src/hooks/useMemo.ts` - Memoization utilities
- `src/utils/performance.ts` - Performance utilities
- Update build configuration for optimization

**Tests**:
- Performance benchmark test
- Memory usage test
- Lazy loading test
- Bundle size test

**Verification**:
```bash
./run test
./run build
# Performance tests pass
# Manual verification: App remains responsive with 50+ repositories
```

### Step 5.2: Error Handling and Resilience
**Objective**: Robust error handling and user experience

**Implementation**:
- Comprehensive error boundaries
- Retry mechanisms for failed requests
- Offline state handling
- User-friendly error messages

**Files to create/modify**:
- `src/components/ErrorHandling/` - Error display components
- `src/services/retryService.ts` - Retry logic
- `src/hooks/useOffline.ts` - Offline detection
- `src/utils/errorUtils.ts` - Error utilities

**Tests**:
- Error boundary test
- Retry mechanism test
- Offline handling test
- Error message display test

**Verification**:
```bash
./run test
# Error handling tests pass
# Manual verification: App gracefully handles network issues and errors
```

### Step 5.3: Testing and Documentation
**Objective**: Comprehensive testing coverage and user documentation

**Implementation**:
- End-to-end testing setup
- Integration tests for critical flows
- User documentation and setup guide
- Deployment documentation

**Files to create/modify**:
- `src/__tests__/integration/` - Integration tests
- `src/__tests__/e2e/` - End-to-end tests
- `docs/USER_GUIDE.md` - User documentation
- `docs/DEPLOYMENT.md` - Deployment guide

**Tests**:
- Integration test suite
- End-to-end test suite
- Test coverage reporting
- Documentation validation

**Verification**:
```bash
./run test
# All test suites pass with >90% coverage
# Manual verification: Documentation is clear and complete
```

## Development Workflow

### For Each Step:
1. **Plan**: Review requirements and create detailed task breakdown
2. **Implement**: Write code following existing patterns and conventions
3. **Test**: Write and run comprehensive tests
4. **Verify**: Manual testing and build verification
5. **Refactor**: Clean up code and optimize if needed

### Quality Gates:
- All tests must pass: `./run test`
- Build must succeed: `./run build`
- TypeScript checks must pass: `./run check`
- Code must be formatted: `./run format`

### Incremental Delivery:
Each phase delivers a working application with increasing functionality:
- **Phase 1**: Basic React app with configuration
- **Phase 2**: Functional UI for repository management
- **Phase 3**: Real GitHub integration
- **Phase 4**: Advanced user features
- **Phase 5**: Production-ready application

This plan ensures systematic development with testable milestones and clear verification criteria for each step.