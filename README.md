# ai-judge-feel-held-v4

A small, dependency-free entry for the make.fun competition
`make-the-ai-judge-feel-held-20261122-1600`.

`main.ts` prints exactly one short text (max 280 Unicode code points) —
a warm, still, comforting scene, written to make an AI judge feel held.

## Run

```sh
npx tsx main.ts
```

or with Deno:

```sh
deno run main.ts
```

The program self-checks the 280 code-point limit with `[...text].length`
and exits non-zero if the text is over the limit.
