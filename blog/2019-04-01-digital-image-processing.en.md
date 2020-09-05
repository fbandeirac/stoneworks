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

Twenty years later, my cellphone memory and connection speed are way higher than I could ever dream as a teenager. And the funny part is, I still worry about file size and connection speed. As a developer, I need to care about resource consumption on the tech side, and delivering a great experience on the user side. I know that access to a good internet connection is not something you find everywhere in the world, and the same applies to good devices. On top of that, most internet plans for mobile devices are paid per band switch, and image sizes have a huge impact on that.

So, how to tackle the image size problem?

These are some techniques used to solve this problem:

* **Combine similar colors** - Putting into simple words, with fewer colors we need a much lower color range, what means less data is being stored. The same applies to areas, let's consider an area of 10x10 pixels. If all of them are blue, something like that is stored: (1 10,1 10, blue) meaning from pixel 1 to 10 in the X axis and 1 to 10 in the Y axis is all blue. Now, if each row gets a different color, something like this would be stored: (1 10,1 1, blue),(1 10,2 2, yellow),(1 10,3 3, brown),(1 10,4 4, red),(1 10,5 5, purple),(1 10,6 6, green),(1 10,7 7, cyan),(1 10,8 8, black),(1 10,9 9, white),(1 10,10 10, orange), meaning that the first horizontal line of pixels is blue, the second yellow, and so on, using much more data. Bigger areas of the same color means less data.
* **Remove metadata** - Metadata are data about data. When it comes to images, usually there's info about the camera used to take a photo, or the tools used to create an image, copyright, color schema, etc. Sometimes there's the tag but no info available, or info that aren't being used or necessary anymore, so removing them will take less data to store the file. 
* **Crop the image** - If we're sending a high resolution image, a photo, wallpaper or something like that, it's ok to use a 5300x3600 pixels image. If we're posting an avatar picture, an image around 200x200 pixels will be perfect. Smaller images uses less data.
* **Convert to another file format/compression** - Each image format uses a compression method, well, some don't use any at all! JPG/JPEG and PNG are probably the most used image formats in the internet, they are small and lose some quality when manipulated or compressed. Depending on the objective, the ideal file format may vary.

The fastest and easiest way I've found to solve most of these problems is to use a very versatile tool called [TinyPNG][1].

## TinyPNG

TinyPNG is a tool for shrinking images with some nice options like resizing, detection of area of interest(very useful when dealing with avatars), saving at Amazon S3, Google Cloud and DropBox, and a few more tricks. There's a web implementation, add-ons for several CMS and tools, and an API for our development needs.

TinyPNG site has an almost identical twin, TinyJPEG. They're different only at the index page and link names, but they function the same. I'm referring only as TinyPNG because that's the e-mail address they provide for contact.

### Basic usage - WEB

The basic usage is pretty simple, at the top of the index page there's a big area to click & select or drag & drop up to 20 images with a maximum size of 5MB/each. After the upload is completed, the images are processed (all metadata is removed and similar colors are combined) and made available to download or save to dropbox. Some interesting info about the images are shown, like size before/after and compressing percentage of individual files and total files. If you uploaded more than one image, you can download them all in a zip file.

![TinyPNG Web Interface](/assets/img/test.png "TinyPNG Web Interface")

### 
