# React is Kagawa?

```command
yarn add react-is-kagawa
```

[CodeSandbox](https://codesandbox.io/s/udon-f98z8)

```tsx
const {isKagawa, open} = useConfirmIsKagawa()

useEffect(() => {
    open() // 本サービスはゲーム要素を含んでいます。あなたは香川県民ですか？
},[])
```

```tsx
const {isKagawa, open} = useGeographicallyConfirmIsKagawa()

useEffect(() => {
    /**
     * Geolocation APIを許可しなかった場合、
     * または緯度経度が香川近辺である場合のみプロンプトが開きます。
     */
    open() 
},[])
```

```tsx
const {isKagawa, open} = useStrictConfirmIsKagawa()

useEffect(() => {
    /**
     * 「本サービスはゲーム要素を含んでいます。あなたは香川県民ですか？」
     * Yes →「18歳未満ですか？」
     *    Yes →「学習目的ですか？」
     *        No → isKagawaがtrueに
     *        Yes → 「本日は既にゲームをしていますか？
     *               また本日このサービス以外にゲームを行わないことを了承しますか？」
     *          Yes → 一時間後にisKagawaがtrueに
     */
    open() 
},[])
```
