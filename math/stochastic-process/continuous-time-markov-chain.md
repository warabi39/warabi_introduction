# 連続時間マルコフ連鎖

## 定義

$\mathcal S$は高々可算な集合として、これを状態集合とする

このとき、$\mathcal S$値連続時間確率過程$\{X(t)\}$が**連続時間マルコフ連鎖**であるとは、$\forall n \in \mathbb N_0$と $0\le s_1< s_2< \cdots < s_n<t$ 、 $h\in\mathbb R_+$ に対して、
$$P(X(s_1)=i_1,X(s_2)=i_2,...,X(s_n)=i_n,X(t)=i)>0$$
と
$$P(X(t+h)=j\mid X(s_1)=i_1,...,X(s_n)=i_n,X(t)=i)=P(X(t+h)=j\mid X(t)=i)$$
が成り立つ事をいう。この式の右辺、つまり
$$P(X(t+h)=j\mid X(t)=i)$$
が$t$に依存しないとき**斉時**なマルコフ連鎖であるという。

## 推移確率行列関数

上で書いているとおり、斉時ならば$t$によらず
$$P(X(t+h)=j\mid X(t)=i)$$
が成り立つので、
$$p_{ij}(h) = P(X(t+h)=j\mid X(t)=i)$$
とおいて行列を定義することで推移確率を表すことができる。行列の各成分は1変数関数になっていて
$$P(t) =\left(p_{ij}(t)\right)_{i,j\in\mathcal S}$$
のように行列関数になる。

## 状態の確率分布

$X(t)$を連続時間マルコフ連鎖として、$P(t)$を推移確率行列関数とする。
$\alpha (t)$を時刻$t$における各状態の確率分布を表す確率ベクトルとすると、
$$\alpha (t) =\alpha (0)P(t)$$
が成り立つ。

## チャップマンコルモゴロフの公式

推移確率行列関数$P(t)$について
$$P(s+t)=P(s)P(t)$$
が成り立つ。これは離散でも成り立っていたもの。いかにもコーシーの関数方程式の匂いがする。

## 滞在時間

時刻$t$でのある状態からその状態に居続ける時間を考える。滞在時間を
$$\tau(t) = \inf \{s>t\mid X(s)\neq X(t)\}$$
で定義する。これに対して、ある$a_i\in [0,\infty]$が存在して
$$P(\tau(0)>u\mid X(0)=i)=e^{-a_iu}$$
が成り立つ。つまり、**同じ状態に居座り続ける確率は指数関数的に減衰する**ということ。$a_i$の値によって分類できて

- $a_i\in (0,\infty)$なら滞在時間は指数分布に従う
- $a_i =0$なら永久に状態$i$にとどまる（これを**吸収状態**という）
- $a_i=\infty$なら状態$i$での滞在は瞬間的

この$a_i$の値は[生成作用素](./generator.md)$Q$の$(i,i)$成分$q_{ii}$が有限の値を取る場合
$$a_i = q_i = -q_{ii}$$
となる。つまり、滞在時間が従う分布を$Q$行列で表すと、
$$P(\tau(0)>u\mid X(0)=i)=e^{q_{ii}u}$$
となる。
