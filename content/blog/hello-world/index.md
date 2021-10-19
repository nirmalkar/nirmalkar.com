---
title: How to set up your mac like a pro (as a developer)
date: "2021-10-19T22:12:03.284Z"
description: "Hello World"
---

<!--
This is my first post on my new fake blog! How exciting!

I'm sure I'll write a lot more interesting things in the future.

Oh, and here's a great quote from this Wikipedia on -->

<!-- [salted duck eggs](https://en.wikipedia.org/wiki/Salted_duck_egg). -->

<!-- > A salted duck egg is a Chinese preserved food product made by soaking duck
> eggs in brine, or packing each egg in damp, salted charcoal. In Asian
> supermarkets, these eggs are sometimes sold covered in a thick layer of salted
> charcoal paste. The eggs may also be sold with the salted paste removed,
> wrapped in plastic, and vacuum packed. From the salt curing process, the
> salted duck eggs have a briny aroma, a gelatin-like egg white and a
> firm-textured, round yolk that is bright orange-red in color. -->

![Chinese Salty Egg](https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=10)

**Let's start with IDE**

-   I personally like vs code as my default IDE. It has a large set of extensions, BTW VS Code extensions let you add languages, debuggers, and tools to your installation to support your development workflow.
-   Download vscode: follow this link to download visual studio code.

[https://code.visualstudio.com/docs?dv=osx](https://code.visualstudio.com/docs?dv=osx)

I**nstall vscode to the path**

-   Launch VS Code.
-   Open the **Command Palette** (Cmd+Shift+P) and type 'shell command' to find the **Shell Command: Install 'code' command in PATH** command.

**Homebrew**

-   Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple's operating system macOS as well as Linux.
-   Run this command on your terminal.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Do you think your terminal looks ugly and boring?

then install Iterm replacement for a terminal with zsh.

**Terminal Application(iterm)**

-   iTerm is a replacement for Terminal. Currently, iterm2 is available
-   to install it using brew:

```bash
brew install --cask iterm2
```

-   download and install iterm terminal
    [https://iterm2.com/downloads.html](https://iterm2.com/downloads.html)

**Zshell**

-   The Z shell is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting. Zsh is an extended Bourne shell with many improvements, including some features of Bash, ksh, and tcsh.
-   run this command on you terminal.

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew doctor
```

-   then run this command on your terminal to install zsh.

```bash
brew install zsh
```

**OhMyZsh**

-   Oh My Zsh is an open-source, community-driven framework for managing your Zsh configuration.
-   It comes bundled with thousands of helpful functions, helpers, plugins and themes.

-   copy and run this command on your terminal

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

-   open the file on vs code

```bash
code ~/.zshrc
```
