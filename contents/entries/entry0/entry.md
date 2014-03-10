


#SpaceTime Programming Language
The Spacetime Operating Language


***SpaceTime***
#### - is a Functional Reactive Programming (FRP) language
#### - employs Lazy evaluation strategy
#### - runs on JavaScript Engines (browsers & node.js)
#### - is written in JavaScript

##Hello world
---

<textarea id = "input1"
style = "height:80px;width: 500px;font-size:20px;color:#00ff00;background-color:#000000;padding:10px;overflow:scroll"
></textarea>
<br>
Evaluation<br>
<textarea id = "evaluation1" disabled style = "height:200px;width: 500px;font-size:20px;color:#00ff00;background-color:#000000;padding:10px; overflow:scroll"></textarea>
<br>
Console<br>
<textarea id = "console1" disabled style = "height:200px;width: 500px;font-size:20px;color:#00ff00;background-color:#000000;padding:10px; overflow:scroll"></textarea>

You can try&nbsp;<font
style = "color:#00ff00;background-color:#000000;">1(+(2))</font>&nbsp;instead of&nbsp;<font style = "color:#00ff00;background-color:#000000;">"Hello world"</font>&nbsp; .


##Foundation
---

*Inspired by John McCarthy's LISP*

*SpaceTime* is founded on an inverted data structure of
[Singly linked list](http://en.wikipedia.org/wiki/Singly_linked_list#Singly_linked_list) and [S-expression](http://en.wikipedia.org/wiki/S-expression).

###Pair

![001](http://localhost:18080/contents/img/001.svg)

This is the fundamental unit of *SpaceTime*.
`Pair` has a pair of hands to point a pair of any objects.

---
###Pair points a pair of objects

![](http://localhost:18080/contents/img/pairab.png)

Now, a `Pair` points objects: `a` and `b`.

---
###Pair notation
![](http://localhost:18080/contents/img/pairabnotation.png)

When a `Pair` points objects: `a` and `b`, it's expressed as **{a b}** in `Pair notation`.

---
###Pair can point itself

![](http://localhost:18080/contents/img/emptypairentity.png)

---
###Empty Pair

![](http://localhost:18080/contents/img/emptypairnotation.png)



When a Pair points itself, since it's a form of [Self-reference](http://en.wikipedia.org/wiki/Self-reference), an  [Infinite recursion](http://en.wikipedia.org/wiki/Infinite_loop#Infinite_recursion) occurs.

Accordingly, the `Pair notaion` is { { {...} {...} } { {...} {...} } }, so we simply express the entity as **{ }**, and let's call it `Empty Pair`.

---
###Push Pair

![](http://localhost:18080/contents/img/push5.png)

A `Pair` can point another `Pair` so that we can joint `Pair`s.

Now let a `pair` point another `Pair` and `5` by each hands.
Let's call this special action `Push`.

In this case, we `push` 5 to an `Empty Pair`.

The `Pair notation` is **{ {} 5 }**.


---
###Push another Pair

![](http://localhost:18080/contents/img/push2.png)

In the same manner, we can `push` another `Pair`.

We `push` `2` to the previous sequence.

The `Pair notation` is **{ { {} 5 } 2 }**.

---
###Push to any sequence

![](http://localhost:18080/contents/img/push7.png)

---
###Sequence

![](http://localhost:18080/contents/img/sequence527.png)

Here, *SpaceTime* explicitly defines a term `Sequence` for this form.
Please note this is the same term and meaning of [Sequence](http://en.wikipedia.org/wiki/Sequence) in Mathematics.

At the same time, instead of `Pair notation` : { { { {} 5 } 2 } 7 }, it can be simply expressed as **( 5 2 7 )**.

---
###Push function

![](http://localhost:18080/contents/img/function5.png)

A `Pair` can point `function`.

Accordingly, we can `push` `function` to any `Sequence`.

In this case, we `push` a `function` to **(5)**.

---
###A case of Push function

![](http://localhost:18080/contents/img/plus52.png)

When we push a `function` : `plus2` to **(5)**, the result is **(7)**.

---
###Function is Sequence

![](http://localhost:18080/contents/img/functionissequence.png)

The `function` : `plus2` is fundamentally some `Sequence`.

`plus2` consists of a `Sequence` : **( plus (2) )**.

**(2)** is an `attribute Sequence` of the `function`.

---
###Evaluation of a Sequence containing a function

![](http://localhost:18080/contents/img/fullsequence527.png)

**( 5 (plus (2)) )** is equivalent to **(7)**.

---
### Everything is function and Sequence

![](http://localhost:18080/contents/img/think53.png)

![](http://localhost:18080/contents/img/actually53is.png)
![](http://localhost:18080/contents/img/so3isfunction.png)
![](http://localhost:18080/contents/img/so3isfunction2.png)

Everything is `function` in *SpaceTime*.

In this case, `3` is a `function` that maps a source : **( 5 )** to a target : **( 5 3 )**.

Consequently, since `function` is `Sequence` in *SpaceTime*, everything is `Sequence` in *SpaceTime*.

Therefore, `3` is a `function` and at the same time, is a `Sequence`.

However, `3` is `3`. There is no other way to express than just `3` in *SpaceTime*.



---
###Every Sequence is a result of function to `Empty Pair`

![](http://localhost:18080/contents/img/so5isalsofunction.png)

---
###Function composition

![](http://localhost:18080/contents/img/functioncomposition.png)

[Function composition](http://en.wikipedia.org/wiki/Function_composition) is naturally expressed in a form :
**( *source function fucnction )** in *SpaceTime*.

Please note the `source` = **( 1 )** as a `Sequence`, not 1.

---
###1 +2 +3 = 6

![](http://localhost:18080/contents/img/plus123.png)

*SpaceTime* has a short-cut notation : **+** corresponding to `plus` function.

---
###1 +(2 +3) = 6

![](http://localhost:18080/contents/img/plust1and23.png)

( 1 (+ ( 2 (+ ( 3 ) ) ) ) )  =  ( 6 )

---
###Indefinite sequence

![](http://localhost:18080/contents/img/naturaltake10.png)

*SpaceTime* employes an [evaluation strategy](http://en.wikipedia.org/wiki/Evaluation_strategy) : [lazy evaluation, or call-by-need](http://en.wikipedia.org/wiki/Lazy_evaluation).

Accordingly, *SpaceTime* can deal with Indefinite sequence such as [Natural number](http://en.wikipedia.org/wiki/Natural_number).

---
###I/O (Input and Output)

![](http://localhost:18080/contents/img/console5.png)

[I/O](http://en.wikipedia.org/wiki/Input/output) does not affect the evaluation context of *SpaceTime* directly, so that it can preserve [Functional programming](http://en.wikipedia.org/wiki/Functional_programming) paradigm.

*SpaceTime* employes [FRP](http://en.wikipedia.org/wiki/Functional_reactive_programming) or `SpaceTime Programming paradigm`.

---
###Hello world

![](http://localhost:18080/contents/img/helloworld.png)

---
###Hello world twice

![](http://localhost:18080/contents/img/helloworld2.png)

---
###Map any Sequence to the console

![](http://localhost:18080/contents/img/fibconsole.png)

---




\[----entry1-----](http://localhost:18080/contents/entries/entry1/entry.html)
