# Fork of jor1k

jor1k is a OpenRISC 1000 emulator written in JavaScript running Linux.

Oldbsd is intended to become an emdaptation of
* "Twenty Years of Berkeley Unix: From AT&T-Owned to Freely Redistributable"
* "The Daemon, the GNU, and the Penguin"

and other tales of UNIX/BSD lore running in simh in linux in jor1k in javascript in your browser.


##emdaptation
[em-d-uh p-tey-shuh n] 

noun
* 1.
the state of being emdapted; running in an emulator.
* 2.
something produced by emulating:
an emdaptation of a UNIX history book.

Origins: Word play on emscripten, embiggen, emulating, adapting



### Experiments and fun with CI and jor1k, mostly unfinished

![jor1k](http://www.oldbsd.org/ss.png)

* Automated installation of UNIX v6 on [oldbsd](http://www.oldbsd.org)
* Flat [vt100] glass tty (http://www.hit2000.nl/jor1k/demos/crt2.html)
* Bulged / pinched [ADM-3a] (http://www.hit2000.nl/jor1k/demos/crt.html)

![jor1k](http://www.oldbsd.org/ss2.png)

* Experiment of the [day] (http://www.minac.nl/l/jor1k/demos/2ttys.html) - 2 model 33 teletypes
* This fork. Anything outside demos/2ttys.html will break.

[![Build Status](https://travis-ci.org/dugoh/jor1k.svg?branch=master)](https://travis-ci.org/dugoh/jor1k)
[![Sauce Test Status](https://saucelabs.com/buildstatus/dugoh)](https://saucelabs.com/u/dugoh)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/dugoh.svg)](https://saucelabs.com/u/dugoh)

* An attempt to pipe this through Travis-CI and Saucelabs
