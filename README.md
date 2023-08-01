# Adv_RCT-2

## TypeScript

What?
Why?
How?

1. Statci Language

- Java, C, C++

init a = 10;
a = "str" ❌

2.  Dynamic Language

- PHP Ruby JS

let a = 10;
a = "str"

Compilation phase

Execution/Runtime

var a = "10" (String)
var b = "11" (String)

a+b = NAN

1. Compiled Language

Lang ---> Machine Language

2. Transpiled Language

Lang ----> Lang2 ----> Machine Language

TS ----> JS ----> Run in browser

// "10"-5 = 5 ❌

Type + Script

## Steps

1. npm init -y
2. npm install typescript
3. tsc -v / npm list -g
4. create tsconfig.json
5.

```
{
    "include":["src"],
    "exclude":["node_modules"],
    "compilerOperations":{
        "module":"CommonJS",
        "outDir":"build",
        "target":"ES2017",
        "declaration":true,
        "sourceMap":true
    }
}


```

5. In package.json add this script
   "build":"tsc --watch"

6. create a file index.ts within src
7. npm run build
