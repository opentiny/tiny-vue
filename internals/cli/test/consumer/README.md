# Published declaration regression check

Build the Vue 3 packages, then check their tarballs from an isolated pnpm consumer:

```sh
pnpm build:ui button common space -v 3
pnpm -C internals/cli test
pnpm -C internals/cli test:types
```

The consumer has no workspace aliases. It checks valid component props, rejects invalid TypeScript and Vue template props, and runs with both values of `skipLibCheck`. The temporary project is removed after validation. Dependency installation requires registry access.
