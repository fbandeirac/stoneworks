---
title: Shrinking image sizes
description: >-
  How to use TinyPNG/TinyJPEG to shrink image sizes without (or minimal) quality
  loss.
date: '2020-08-30 01:41:00'
image: /assets/img/tinijpg.png
category: Images
background: '#079992'
---
The technology is evolving at such a fast pace, most of the time we don't even have the time to assimilate properly the current status and something new appears to keep us constantly amazed.

I'm from the time when a floppy disk with 1.44 MB of storage was an amazing innovation, a smaller device with around the double of the capacity of the floppies I knew! I remember when my dream was to have a HD with 1 TB of storage, where I could save everything I ever wanted, and never would go through the painful decision of choosing what file to delete so I could save a new song or image. I had the luck to grow with early access to internet, I lived in a big city (São Paulo), and there were tons of free internet providers on the dial up era, the internet was VERY slow, but it worked. I learned about T1, and my goal for adult age was being rich enough (T1 plans were very expensive at the time) to afford it.

Twenty years later, my cellphone memory and connection speed are way higher than I could ever dream as a teenager. And the funny part is, I still worry about file size and connection speed. As a developer, I need to worry about resource consumption on the tech side, and delivering a great experience on the user side, so I need to think about all the use cases. I know that access to a good internet connection is not something you find everywhere in the world, and the same applies to good devices. On top of that, most internet plans for mobile devices are paid per band switch, and image sizes have a huge impact on that.

So, how to tackle this problem?

These are some techniques used to solve this problem:

* Combine similar colors, reducing the color depth of the image.
* Remove unnecessary metadata.
* Crop the image.
* Convert to another file format/compression.

The fastest and easiest way I've found is to use a very versatile tool called [TinyPNG][1].

## TinyPNG

TinyPNG is a tool for shrinking images with some nicee options like resizing, detection of area of interest, saving at Amazon S3, Google Cloud and DropBox, and a few more tricks. There's a web implementation, add-ons for several CMS and tools, and an API for our development needs.

TinyPNG has an almost identical twin, TinyJPEG. They're different only at the index page and link names, but they function the same. I'm referring only as TinyPNG because that's the e-mail address they provide for contact.

## Basic usage - WEB

The basic usage is pretty simple, at the top of the index screen you will find a place to click and select (or drag and drop from your file explorer) up to 20 images with a maximum size of 5MB/each. After uploading they process the images and make it available to download, also some interesting info about the images are shown, like size before/after and compressing percentage of individual files and total files. If there's many images, you can download them all in a zip file.

![TinyPNG Web Interface](/assets/img/test.png "TinyPNG Web Interface")
