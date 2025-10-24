import { Status } from "../../types";

export const issues = [
  {
    id: 1,
    title: "Login page fails to authenticate user",
    description:
      "Users report that the login page occasionally rejects valid credentials due to a session timeout mismatch. The issue seems intermittent and often occurs when multiple tabs are open simultaneously. Investigation shows potential cookie synchronization issues.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-28T09:15:00Z"),
    updatedAt: new Date("2025-09-28T09:45:00Z"),
  },
  {
    id: 2,
    title: "Image upload not working on mobile devices",
    description:
      "Several users have experienced failures when attempting to upload images from mobile browsers. The upload button becomes unresponsive after file selection. Testing indicates the issue is related to mobile Safari and the multipart/form-data boundary handling.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-09-26T14:10:00Z"),
    updatedAt: new Date("2025-09-28T10:30:00Z"),
  },
  {
    id: 3,
    title: "Dashboard charts not loading correctly",
    description:
      "The analytics dashboard intermittently fails to render charts. The API returns valid JSON, but chart rendering libraries throw type errors. Initial inspection suggests that null values in the dataset are causing rendering issues.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-20T08:20:00Z"),
    updatedAt: new Date("2025-09-22T12:00:00Z"),
  },
  {
    id: 4,
    title: "Password reset emails not being sent",
    description:
      "Users who attempt to reset their passwords are not receiving reset links. Mailgun logs show successful requests, but no actual emails are delivered. This might be related to a DNS configuration issue in the email service domain.",
    status: Status.CLOSED,
    createdAt: new Date("2025-08-18T10:00:00Z"),
    updatedAt: new Date("2025-08-19T11:30:00Z"),
  },
  {
    id: 5,
    title: "Slow checkout process during peak hours",
    description:
      "The checkout process becomes noticeably slower when traffic spikes above 500 concurrent users. Database logs show increased latency in transaction commits. Optimization of database indexes and connection pooling is recommended.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-09-30T17:40:00Z"),
    updatedAt: new Date("2025-10-01T09:20:00Z"),
  },
  {
    id: 6,
    title: "Search results returning incomplete data",
    description:
      "Product search queries sometimes return fewer results than expected. Analysis shows Elasticsearch index lag between 1 to 2 hours. The problem affects recently added products and may require more frequent reindexing.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-24T16:25:00Z"),
    updatedAt: new Date("2025-09-25T08:40:00Z"),
  },
  {
    id: 7,
    title: "Payment gateway returning invalid response",
    description:
      "Several users reported failed transactions with “Invalid signature” errors. After examining logs, it appears the issue occurs when order amounts are modified mid-checkout. The payment provider’s API may not be handling updates gracefully.",
    status: Status.CLOSED,
    createdAt: new Date("2025-09-10T09:00:00Z"),
    updatedAt: new Date("2025-09-12T14:30:00Z"),
  },
  {
    id: 8,
    title: "Notification bell not updating after reading alerts",
    description:
      "After marking notifications as read, the bell icon still displays unread counts until a full page reload occurs. This indicates a missing WebSocket or state update event. Implementing a reactive store update should resolve this.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-09-29T11:10:00Z"),
    updatedAt: new Date("2025-09-30T08:50:00Z"),
  },
  {
    id: 9,
    title: "Dark mode color contrast issues",
    description:
      "In dark mode, certain text elements such as buttons and placeholders have insufficient contrast, reducing accessibility compliance. Adjusting the color palette to meet WCAG AA standards is necessary.",
    status: Status.OPEN,
    createdAt: new Date("2025-10-02T13:25:00Z"),
    updatedAt: new Date("2025-10-03T10:15:00Z"),
  },
  {
    id: 10,
    title: "Admin users unable to export CSV reports",
    description:
      "The export functionality on the admin dashboard crashes after exporting large datasets (>10,000 rows). Logs indicate heap memory exhaustion in the Node.js process. Pagination or stream-based exports are recommended.",
    status: Status.CLOSED,
    createdAt: new Date("2025-08-30T08:15:00Z"),
    updatedAt: new Date("2025-09-01T09:00:00Z"),
  },
  {
    id: 11,
    title: "Broken links on documentation page",
    description:
      "Multiple internal links on the developer documentation site lead to 404 pages. The issue likely originated from a recent reorganization of route paths without corresponding redirects.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-25T10:00:00Z"),
    updatedAt: new Date("2025-09-26T15:45:00Z"),
  },
  {
    id: 12,
    title: "User avatars not updating after upload",
    description:
      "When users upload a new profile picture, the change is not reflected immediately. Cached images in the CDN seem to persist beyond the expected invalidation time. Reviewing cache headers and versioned URLs could help.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-09-21T09:45:00Z"),
    updatedAt: new Date("2025-09-23T14:25:00Z"),
  },
  {
    id: 13,
    title: "API documentation missing latest endpoints",
    description:
      "Developers report that the public API documentation does not list recently added endpoints. The OpenAPI spec file in production has not been regenerated after the latest deployment.",
    status: Status.CLOSED,
    createdAt: new Date("2025-09-05T07:00:00Z"),
    updatedAt: new Date("2025-09-06T12:30:00Z"),
  },
  {
    id: 14,
    title: "Profile page layout breaking on smaller screens",
    description:
      "On devices under 360px width, the profile header overlaps with the bio section. This regression appeared after switching to a new CSS grid layout. The issue can be resolved with updated responsive breakpoints.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-23T08:10:00Z"),
    updatedAt: new Date("2025-09-23T12:00:00Z"),
  },
  {
    id: 15,
    title: "Two-factor authentication prompt not appearing",
    description:
      "Users who have enabled two-factor authentication report that the OTP prompt occasionally fails to load. This may be due to a race condition in the authentication middleware during redirect handling.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-09-29T07:40:00Z"),
    updatedAt: new Date("2025-10-01T11:10:00Z"),
  },
  {
    id: 16,
    title: "Product reviews not saving correctly",
    description:
      "Customers submitting reviews sometimes encounter a 500 error. Database logs show constraint violations on foreign keys linking reviews to orders. This likely happens when guest users attempt to post reviews without authentication.",
    status: Status.CLOSED,
    createdAt: new Date("2025-08-22T15:00:00Z"),
    updatedAt: new Date("2025-08-24T10:10:00Z"),
  },
  {
    id: 17,
    title: "Server logs flooded with warning messages",
    description:
      "Production logs have accumulated thousands of identical warning messages due to unhandled promise rejections in one of the background workers. The issue does not cause failures but makes log analysis difficult.",
    status: Status.IN_PROGRESS,
    createdAt: new Date("2025-10-01T09:00:00Z"),
    updatedAt: new Date("2025-10-02T08:30:00Z"),
  },
  {
    id: 18,
    title: "User session expires too early",
    description:
      "Some users report being logged out after only 5 minutes of inactivity despite the session timeout being configured to 30 minutes. This might be due to a reverse proxy resetting cookies incorrectly.",
    status: Status.OPEN,
    createdAt: new Date("2025-09-27T08:30:00Z"),
    updatedAt: new Date("2025-09-28T07:50:00Z"),
  },
  {
    id: 19,
    title: "Tag filtering not working in blog section",
    description:
      "Clicking on category tags in the blog section does not update the post list. The front-end seems to fire a request, but the API ignores the filter parameter. Adding query parameter validation should fix this.",
    status: Status.CLOSED,
    createdAt: new Date("2025-09-14T09:40:00Z"),
    updatedAt: new Date("2025-09-16T12:30:00Z"),
  },
  {
    id: 20,
    title: "Broken image thumbnails on home page carousel",
    description:
      "Some image thumbnails in the home page carousel fail to load on slower connections. The cause seems to be incomplete lazy-loading logic that does not retry failed requests.",
    status: Status.OPEN,
    createdAt: new Date("2025-10-03T08:10:00Z"),
    updatedAt: new Date("2025-10-04T09:00:00Z"),
  },
];
