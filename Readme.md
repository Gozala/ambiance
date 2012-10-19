# Ambiance

Ambiance is a simple, but fully hackable code editor. It uses HTML and it's
friends for rendering and [nodejs][] for everything else.


## Motivation

I have being using [vim][] as a primary editor for a long time & it's great!
Although in a lot of cases it's being easier to start prototyping in
[jsfiddle][] or [jsbin][]! It's just very often one needs small little
hack to assist with a given task, but cost of doing is usually higher then
the benefit. What if we could change that by dropping cost for quick hacks ?

More and more I find myself embedding web based code editors to empower myself
with quick interactive loop when doing different experiments:

### Wisp editor

[wisp][] is a language with macros that compiles to human-readable JavaScript.
It's compiler is written in [wisp][] itself, in this process of writing wisp
compiler in wisp, it was extremely useful to have a live view of compiled JS
as wisp code was typed. So I hacked up a small interactive page with an
[embedded editor][try wisp] displaying JS code that's being typed will compile
too. Not to say that everyone now can [try wisp][] right in the browser to
get a taste of it.

### Prose

[Prose][] is an experimental take on [Literate programming][], where you
basically write markdown with a some code blocks that can by in arbitrary
languages. Languages are identified via [shebang][] in head of code block.
Most interestingly compiler is compiled to js from [readme.md][prose compiler]
file written in prose. Using any editor to do this was really painful so I
cooked up [codemirror][] mode and simple page, to write compiler in.

## Solution

Ambiance is code editor that uses HTML and it's friends for rendering and
[nodejs][] for everything else. This makes it as hackable as web is! Not only
that, editor is just bunch of little plugins, editor component is provided by
[codemirror plugin](https://github.com/Gozala/codemirror-ambiance-plugin),
(BTW there is no reason not to have [ace][] plugin that could be installed
to replace it), that command line interface is provided by
[gcli plugin](https://github.com/Gozala/gcli-ambiance-plugin) and even code
that reads and writes files to disk is a
[plugin](https://github.com/Gozala/fs-ambiance-plugin). And plugins are just
an [npm][] packages, wanna create one ? You got all the goods from npm wanna
share just publish to npm!


## Screenshots

![](http://f.cl.ly/items/291W3B0P2W0Q2a0j1h2U/Screen%20Shot%202012-10-18%20at%2022.46.58%20.png)
![](http://f.cl.ly/items/3P471q2T0k3E2Y1d061b/Screen%20Shot%202012-10-18%20at%2022.47.23%20.png)

## Try

There is several ways you can try this thing out, but be aware it's very
unstable and far from being finished (any help is welcome BTW).

#### Download

If you're a mac user you can just [download][downloads] `.dmg` file.

#### Use node-webkit

Alternatively you can use [node-webkit][], to do that you'll need to first
[download](https://github.com/rogerwang/node-webkit#downloads) a bulid.

Then download ambiance:
```sh
git clone https://github.com/Gozala/ambiance.git && cd ambiance
npm install
```

Finally ether [run with node-webkit](https://github.com/rogerwang/node-webkit/wiki/How-to-run-apps)

```sh
nw .
```

Or [make a bulid](https://github.com/rogerwang/node-webkit/wiki/How-to-package-and-distribute-your-apps)
of your own.

## Credits

All the credits got to an amazing open source projects without which this would
not be possible:

[nodejs][], [node-webkit][], [npm][], [codemirror][], [gcli][]

And to [Svengraph](http://svengraph.deviantart.com/) who made beautiful icon
with [cc](http://creativecommons.org/licenses/by-nd/3.0/) license that editor
is using.


[npm]:https://npmjs.org/
[nodejs]:http://nodejs.org/
[vim]:http://www.vim.org/
[codemirror]:http://codemirror.net/
[try wisp]:http://jeditoolkit.com/wisp/
[wisp]:https://github.com/Gozala/wisp
[prose]:http://jeditoolkit.com/prose/
[Literate programming]:http://en.wikipedia.org/wiki/Literate_programming
[shebang]:http://en.wikipedia.org/wiki/Shebang_%28Unix%29 
[prose compiler]:https://github.com/gozala/prose
[jsfiddle]:http://jsfiddle.net/
[jsbin]:http://jsbin.com/
[node-webkit]:https://github.com/rogerwang/node-webkit
[GCLI]:https://github.com/mozilla/gcli
[ace]:http://ace.ajax.org/
[downloads]:https://github.com/Gozala/ambiance/downloads
