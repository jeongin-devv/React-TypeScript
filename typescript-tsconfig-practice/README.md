# TypeScript tsconfig.json custom Practice

tsconfig.json

```javascript
{
  // TypeScript를 적용할 디렉토리 
  "include": [
    "src"
  ],
  // 컴파일 옵션
  "compilerOptions": {
    // 파일을 내보낼 디렉토리
    "outDir": "build",
    // 내보낸 파일이 지원할 ES version
    "target": "ES6",
    // 어떠한 환경에서 Typescript를 적용할 것인가
    // "DOM" : 브라우저 환경
    "lib": ["ES6", "DOM"]
  }
}
```