# 一様化

連続時間マルコフ連鎖から離散時間マルコフ連鎖を得る手法

$X(t)$を連続時間マルコフ連鎖として、$Q$をその[[生成作用素]]とする。このとき、仮定として
$$\sup_{i\in\mathcal S}(-q_{i,i})<\infty$$
が成り立つとする。これをみたすとき**一様化可能である**という。
そのうえで、
$$\lambda \ge \sup_{i\in\mathcal S}(-q_{i,i})$$
を定める。

$N(t)$を強度が$\lambda$であるポアソン過程として、$Y_n$を推移確率行列が
$$K=I+\frac{Q}{\lambda}$$
になる離散時間マルコフ連鎖であるとすると、
$$Z(t)  = Y_{N(t)}$$
は一様マルコフ連鎖であり、その生成作用素が$Q$になる。

## 一様化の逆

一様化の逆の操作で連続時間マルコフ連鎖を得ることができる。

その一例として、離散時間マルコフ連鎖とポアソン過程から連続時間マルコフ連鎖を作ってみる。
