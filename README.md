# NxBugNextPackageJson

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Start the app

To start the development server run `pnpm nx serve nx-bug-next-package-json`. Open your browser and navigate to http://localhost:4200/. Happy coding!

# Bug

Run `pnpm nx build nx-bug-next-package-json` and check dist folder package.json file.

## Expected `dist/apps/nx-bug-next-package-json/package.json`

```json
{
  "name": "@custom-scope/nx-bug-next-package-json",
  "version": "1.2.3",
  "scripts": {
    "start": "next start"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "next": "14.0.4",
    "typescript": "5.3.3"
  }
}
```

## Bugged `dist/apps/nx-bug-next-package-json/package.json`

```json
{
  "name": "@custom-scope/nx-bug-next-package-json",
  "version": "1.2.3"
}
```
