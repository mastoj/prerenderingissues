# Steps to reproduce issue

1. `pnpm install`
2. `pnpm run build`

During the build you will see the log `==> Loader called` twice, and I expected it to show 0 times based on this from the next.js documentation:

> The dynamicIO flag is an experimental feature in Next.js that causes data fetching operations in the App Router to be excluded from pre-renders unless they are explicitly cached

I assume this also applies to all async operations if not explicitly cached.