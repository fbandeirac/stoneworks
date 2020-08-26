---
title: Controlling device brightness on linux mint
description: Tips on how to control the brightness of your devices in Ubuntu based systems.
date: '2020-08-25 12:17:00'
image: /assets/img/brightness.png
category: Others
background: '#bdc3c7'
---
# The burning feeling

Lately I've been spending much more time in front of the computer than before, with the COVID-19 pandemic my eyes doesn't have much relief from staring at screens and a few days ago, I started to feel my eyes burning. I spent the weekend as away from screens as I could, and it got better. At Monday night, after I started working on my personal computer and the pain came back. That day I left my work computer turned on, and so I noticed that the screen from my work computer were way softer than my personal one, with a bright blinding light. I never noticed it before, don't ask me how. Maybe it was only noticeably after my eyes got into so much strain, I have no idea.

## Where did they hide the brightness manager?

Linux Mint is great, I really love it! It's fast, reliable, a lot of things work out of the box, a lot of things doesn't but there's a HUGE community to help, yeah... it's great... but you know... sometimes... somethings... they're just... weird.

I've spent around 10 minutes searching at every possible menu and configuration for a way to manage the brightness of my laptop screen. Then I decided to search online, and I've found that it's located in the Power Management.. Widget!

I disabled it when I installed the distro, because my battery is dead there's some years by now, and the costs of a new one are insane. The Power Management Configuration only have the brightness level for when the computer is idle. I wonder if the menus are different on desktops.

So, I discovered the [**brightnessctl**][1] application, which is a great application! I can't test right now because I don't have a fancy setup full of colors, but this app detected a lot of devices in my computer, and I believe we're able to control the lighting of all of them with it.

It's used on command-line, and for the ones who are afraid of it, don't be. This one is super easy, and what I liked the most, it's available on the official repository, so it's usually safe.

## Installing brightnessctl

The program is available in other distros too, like Alpine, Arch, Fedora and others. The program syntax is the same, but installation and running will probably be different in non ubuntu/debian distros. 

The program runs from a terminal, but don't worry, the syntax is simple and it doesn't have a million command options.

To install, just go to your software manager, search for brightnessctl and install, or from a terminal, run:
```
sudo apt update && apt install brightnessctl
```
To use it very simple, the syntax is `brightnessctl [options] [operation] [value]`.

Below is the list of what I though to be the most important options:
```
  -l, --list			list devices with available brightness controls.
  -n, --min-value		set minimum brightness, defaults to 1.
  -s, --save			save state in a temporary file.
  -r, --restore			restore previous state.
  -h, --help			print the help list.
  -d, --device=DEVICE		specify device name (can be a wildcard).
  -c, --class=CLASS		specify device class.
```
The full list is available with the `brightnessctl -h` command.

The first thing we need to do first is to know what devices do we have, so run:
```
sudo brightnessctl -l
```
The result in this example is:
```
Available devices:
Device 'radeon_bl0' of class 'backlight':
	Current brightness: 255 (100%)
	Max brightness: 255

Device 'input4::capslock' of class 'leds':
	Current brightness: 0 (0%)
	Max brightness: 1

Device 'input4::scrolllock' of class 'leds':
	Current brightness: 0 (0%)
	Max brightness: 1
```

What does that means? The first device is my laptop screen, with the radeon name (my graphics card) and the 'backlight' class. The second and third devices are indicator leds from my keyboard when the capslock and scrolllock are turned on, they have the 'leds' class. 

We can change the device settings by device name OR by class! So if we wanted to light up all the leds at once, we could just run:
```
sudo brightnessctl -c led -s 100%
```
To set the screen to 50% of max level, we would run:
```
sudo brightnessctl -d radeon_bl0 -s 50%
```
The -c stands for class and -d for device, the values can be set with percentage, specific value or delta.

From my findings, the official repository is [this][1]. There you can find more explanations about the usage, how to set permissions to work without sudo, and get the most recent version.

[1]: (https://github.com/Hummer12007/brightnessctl)
