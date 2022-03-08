<p align="center">
  <a href="" rel="noopener">
 <img src="./github/GraphQL.png" alt="Project logo"></a>
</p>

<h3 align="center">Case study: GraphQL</h3>

<div align="center">
    <a href="https://yuki2dev-study-graphql.vercel.app/">
    <img alt="Website" src="https://img.shields.io/static/v1?message=visit%20now&color=1d4ed8&label=website&labelColor=121212&logo=vercel&style=for-the-badge"/>
    </a>
    <br> 
    <img alt="Vercel Website deploy status" src="https://img.shields.io/github/deployments/KeysHD/rodizio2o/Production%20%E2%80%93%20rodizio2o-api?label=website&logo=vercel&style=for-the-badge&labelColor=121212">
</div>

---

<p align="center"> Case study: Simple GraphQL + GraphCMS application
    <br> 
</p>

## 📝 Table of Contents
- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>
Simple project using GraphQL and GraphCMS with the main objectives of learning GraphQL and use a Content Management System like GraphCMS.

## 🏁 Getting Started <a name = "getting_started"></a>

### Installing
```
yarn install
```

### Setup
Change the GraphCMS url on `/src/libs/urql.ts`
```js
import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from "urql";


const isServerSide = typeof window === 'undefined';
const ssrCache = ssrExchange({ isClient: !isServerSide });

const client = createClient({
    url: "<YOUR_GRAPHCMS_CONTENT_ENDPOINT_API>",
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange]
})


export { client, ssrCache };
```

### Running
Run the development enviroment
```
yarn dev
```

Access `localhost:3000`

## 🚀 Deployment <a name = "deployment"></a>
Deploy on vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FKeysHD%2Fstudy-graphql)

## ⛏️ Built Using <a name = "built_using"></a>

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✍️ Authors <a name = "authors"></a>
- [@Yuki2dev](https://github.com/KeysHD)