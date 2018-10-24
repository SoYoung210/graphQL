# graphQL
graphQL, Apollo(예정)
## 초기 setting
`.babelrc` 외에 몇가지 셋팅 필요

### .bablerc
```
{
  "presets": ["env", "stage-3"]
}
```

### dependencies
`npm install babel-cli babel-preset-env babel-preset-stage-3 graphql-yoga`

package.json 내용
```json
{
  "name": "movieql",
  "version": "1.0.0",
  "description": "movie api with graphQL",
  "main": "index.js",
  "repository": "https://github.com/SoYoung210/graphQL.git",
  "license": "MIT",
  "dependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-3": "^6.24.1",
    "graphql-yoga": "^1.16.7"
  },
  "scripts": {
    "start": "nodemon --exec babel-node index.js"
  }
}
```

module 설치 후에 `scripts` 부분과 `main` 부분 추가 작성 필요.
