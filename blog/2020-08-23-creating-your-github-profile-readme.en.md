---
title: Creating your GitHub profile README
description: 'Tips on content, design and how to create your profile README.md'
date: '2020-08-22 08:12:24'
image: /assets/img/simple_octocat_computer.png
category: Markdown
background: '#353b48'
---
![]()

A few months ago, GitHub launched a feature that allows its users to use a specific README file to improve the way they interact with the community. I liked a lot, since it offers a great way to show your personality and what you're up to.

If you just want to know how to do it, jump to the **GitHub Profile README** section, if you want to understand a bit about what I'm talking about, keep on reading. :)

## The README file

README files are commonly included in software releases. They may have variant names like ReadMe, READ.ME and its translations, like LEAME (es) and LEIAME (pt). The name is usually written in capital letters to make it stand in the highest level possible inside the the directory structure it contained.

The objective of the README file is to contain information about what is being delivered. Common topics are:

* Configuration, installation and operation instructions
* Copyright and Licensing information
* Troubleshooting
* Credits
* Changelog

Adding a README to repositories is a common practice. Usually there's a brief explanation about the project, how to use and any other info the developer believe it's important, like being open for contributions, if it's still being maintained, etc.

These files are traditionally created in plain text (.txt mostly, but sometimes with no file extension at all), but for repositories in the internet the Markdown (.md or .markdown file extension) is preferred, it's easy to use and the result is great!

## Markdown vs GitHub Markdown

Markdown is a markup language, just like HTML, but it's way more legible when not rendered, and provides a certain pattern and clean look when rendered. Unfortunately, unlike HTML, Markdown does not have a worldwide pattern, the closest to that is [CommonMark][1]. There's the basic implementation, and after that, many companies created and implemented their own styles and  functionalities. GitHub is one of them, creating the [GitHub Flavored Markdown (GFM)][2], which accepts much of the [CommonMark][1] implementation, but have some tweaks.

## GitHub Profile README

The Profile README is meant to be used describe a little more about yourself, your account or anything you believe it's interesting to be presented to the person visiting your GitHub profile, much like a software README.

### The difference

The print below shows a profile without the Profile README...

![An example of GitHub Profile without Profile README](/assets/img/markdown_before.png "My account without Profile README")

... and this is how it looks after I added the file:

![GitHub Profile with Profile README](/assets/img/markdown_after.png "My account with the README file")

To use this feature, we need to:

* Create a new repository with the exact same name of your account.
* Make the repository public.
* Create a file named README.md

Complicated? Not at all! When creating a new repository inside GitHub, we're presented the following page, where we can do almost everything we need.

![Printscreen of the new repository function inside GitHub](/assets/img/markdown_new_repo.png "Creating a new repository")

As you can see, GitHub already tell us that this repository is ":sparkles: special :sparkles:". Just mark as public and initialize with a README, and we're good to go!

After that we can click at the README file, click on the edit button, and we can edit the file without even downloading it! Nice isn't? We can change it anywhere, any time, all we need is a browser and internet connection. :)

## Writing stuff down

Ok, we created our Profile README. Now what?

Now we write anything we want! Like I said, we can change it anytime we want, and the effect is immediate, we're free to use our immagination! With Markdown we can use links, images, tables, and with [GFM][2] we have access to some unique features, like syntax highlighting, username mentions, task list and [emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)!

In my profile I wanted to write a bit about myself, my nicknames, my professional status and what I'm working on. There's also links to my main social media, blog and resume.

[This awesome repository](https://github.com/kautukkundan/Awesome-Profile-README-templates) have a lot of templates where we can get ideas to build our own awesome profile README.

Feel free to contact me to show what you've created! I would love to see it!

[1]: https://commonmark.org/) "CommonMark"
[2]: https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown "GitHub Flavoured Markdown"
