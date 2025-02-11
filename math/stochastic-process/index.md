# 確率過程

$(\Omega, \mathcal F, P)$を確率空間として、$T$を空でない集合とする

パラメータ$t\in T$をもつS値確率変数の族$\{X_t(\omega)\}_{t\in T}, \omega \in \Omega$のことを**確率過程**という。
パラメータ$T$によって次のような大まかな分類がある

- **離散時間確率過程**：$T=\mathbb N_0$または$T=\mathbb Z$など
  - パラメータの集合が高々加算
- **連続時間確率変数**：$T=\mathbb R_+$または$T=\mathbb R$など
  - パラメータの集合が非可算

さらに、$X_t$の取り得る値の集合$\mathcal S$のことを**状態空間**といい、状態空間が$\mathcal S$であるような確率過程のことを**S値確率過程**という。

確率過程を定めたときに、パラメータ$t\in T$を固定すると$X_t(\omega)$は$\mathcal S$値確率変数になっている。これは定義から明らか。
$\omega \in \Omega$を固定すると、$\{X_t(\omega)\}_{t\in T}$は$T$から$S$への関数になっている。これを**標本路**という。標本を固定することで時間発展によって状態がどのように変わるのかが分かるので、これを標本路と呼んでいる感じ。**標本関数**とも呼ぶ。

## 遷移確率

確率過程を考えなくても定義できるもの

$(\Omega, \mathcal F, P)$を確率空間、$(E,\mathcal E)$を可測空間とする。
関数$p:E\times \mathcal E \to [0,1]$が次の性質をみたすとき、**遷移確率**という。

- $x\in E$を固定する。このとき$(E, \mathcal E, p(x,\cdot))$は確率空間である
- $A\in \mathcal E$を固定する。このとき$p(\cdot, A): E\to [0,1]$は$(E, \mathcal E)$-可測関数である

### 1つめの条件について

状態空間の値を$x\in E$と固定している。この$x$は**現在の状態を表している**。今ある状態を固定したときに、次にどのような状態に行くのか（どのような事象になるのか）の確率が$p(x, \cdot)$で与えられている。

具体的には、今の状態が$x\in E$であるとき、次の瞬間に$A\in \mathcal E$になる確率は
$$p(x,A):いまxで次の瞬間Aになる確率$$
となっている。

### 2つめの条件について

状態空間の可測集合を$A\in \mathcal E$に固定している。じゃあこの$A$は何者？

まず、$p(\cdot, A) :E \to [0,1]$は可測関数になっているということで、可測集合の逆像が可測集合になっている。結局何なのかよくわからない

## 確率過程のいろいろ

確率過程の主要な特性は

- 状態空間$E$
- パラメータ集合$T$
- 確率変数$X_n$の分布
など

- 離散時間
  - 離散状態空間
    - [マルコフ連鎖](./markov-chain.md)
- 連続時間
  - 離散状態空間
    - 連続時間マルコフ連鎖
      - ポアソン過程
      - ブラウン運動
