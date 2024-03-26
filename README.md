# IVF Technical test for Gaia

Given a person will go through `n` rounds of IVF treatment, on average there will be two frozen embryo transfers per fresh retrieval and every fifth round will be successful. Write a function that prints the results for each round.

Th expected input is `n` as param and function name.

The output expected is:

```
[
"FRESH",
"FROZEN",
"FROZEN",
"FRESH",
"FROZEN+LIVE_BIRTH",
"FROZEN",
"FRESH",
"FROZEN",
"FROZEN",
"FRESH+LIVE_BIRTH",
"FROZEN",
"FROZEN"
"FRESH",
"FROZEN",
"FROZEN+LIVE_BIRTH"",
"FRESH",
"FROZEN",
"FROZEN",
...
]
```

### Run

- `npm install`
- `npm test`
