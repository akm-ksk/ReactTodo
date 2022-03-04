# Memo

## 改善したいこと
・レンダリングの最適化
・テンプレートのの最適化

### レンダリングの最適化
・App.tsxから再レンダリングされている
→ リスト内(TodoList.tsx,EndList.tsx)から再レンダリングされるようにしたい

#### グローバルなステートの管理
・useContext + useState
・Redux
この辺で出来そうな気がする。
useContextの理解不足
Redux 未学習

#### ステートの見直し
解決できる？出来ない気がする



### テンプレートのの最適化
・hookにできるところをhookにする
・attomsの Buttonを一つにまとめられないか？