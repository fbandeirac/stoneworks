---
title: Device brightness on Linux Mint
description: Tips on how to control the brightness of your devices in Ubuntu-based systems.
date: '2020-08-17 12:17:00'
image: /assets/img/brightness.png
category: Others
background: '#bdc3c7'
---
# The burning feeling

Lately, I've been spending much more time in front of the computer than before, with the COVID-19 pandemic my eyes doesn't have much relief from staring at screens and a few days ago, I started to feel my eyes burning. I spent the weekend as away from screens as I could, and it got better. On Monday night, after I started working on my personal computer and the pain came back. That day I left my work computer turned on, and so I noticed that the screen from my work computer was way softer than my personal one, with a bright blinding light. I never noticed it before, don't ask me how. Maybe it was only noticeably after my eyes got into so much strain, I have no idea.

## Where did they hide the brightness manager?

Linux Mint is great, I love it! It's fast, reliable, a lot of things work out of the box, a lot of things don't but there's a HUGE community to help, yeah... it's great... but you know... sometimes... somethings... they're just... weird.

I've spent around 20 minutes searching at every possible menu and configuration for a way to manage the brightness of my laptop screen. Then I decided to search online, and I've found that it's located in the Power Management.. Widget!

I disabled it when I installed the distro since my battery is dead there's some years by now, and the costs of a new one are insane. The Power Management Configuration only has the brightness level for when the computer is idle. I wonder if the menus are different on desktops.

So, I discovered this program called [**brightnessctl**]((https://github.com/Hummer12007/brightnessctl)), which is great! I can't test some things right now because I don't have a fancy setup with colourful LEDs, but this app detected a lot of devices in my computer, and I believe we're able to control the lighting of all of them with it.

## Installing brightnessctl

The program is available at the official repositories, although a slightly older version, as usual. It's available in other distros too, like Alpine, Arch, Fedora and others, but I will stick to Ubuntu-based version because that's what I'm familiar with. The program syntax is the same, but installation commands will probably be different in non-Ubuntu/Debian distros. 

The program runs from a terminal, but don't worry, the syntax is simple and it doesn't have a million command options.

To install, just go to your software manager, search for brightnessctl and install, or from a terminal, run:

```
sudo apt update && apt install brightnessctl
```

To use it very simple, the syntax is `brightnessctl [options] [operation] [value]`.

Below is the list of what I believe are the most important options:

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

The first thing we need to do is get a list of devices available, we get that with the command:

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

Let's break these results down.

- The first device is my laptop screen, with the radeon name (my graphics card) and the 'backlight' class.
- The second and third devices are indicator LEDs from my keyboard when the capslock and scroll lock are turned on, they have the 'leds' class. 

We can change the device settings by device name OR class name. So if we wanted to light up all the LEDs at once, we could just run:

```
sudo brightnessctl -c led -s 100%
```

To set the screen brightness to 50% of max level, we would run:

```
sudo brightnessctl -d radeon_bl0 -s 50%
```

The -c stands for class and -d for device, the values can be set with percentage, specific value or delta.

As stated before, this part of LED management I couldn't try, as soon as I'm able to, I will try and post the results here.

From my findings, the official repository is [this]((https://github.com/Hummer12007/brightnessctl)). You will find a most recent version of the program there, as well as more explanations about the usage, how to set permissions to work without sudo.

Happy tweaking!
