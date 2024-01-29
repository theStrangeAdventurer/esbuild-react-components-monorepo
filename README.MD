# how to reproduce ?
- `nvm use && npm ci`
- `npm run dts -ws --if-present` - This will run the "dts-buddy"  in "packages/button" and an error message should appear in the console:

```sh
parsing tsconfig.json failed during parseJsonConfigFileContent
 error TS6053: File '@esbuild-libs/tsconfig' not found.
```

- `npm run dts-ts -ws --if-present` -  This will run the "tsc -p ./tsconfig.json" script in "packages/button" and everything will be fine and you should see dist/index.d.ts 

```sh
> @esbuild-libs/button@0.1.0 dts-ts
> tsc
# Success (you can check packages/button/dist/index.d.ts file)
```


