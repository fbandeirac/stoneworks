---
title: 'Frontend, backend, full-stack. Developers and their conflicts'
description: >-
  About the conflicts between development fields and my vision about the
  full-stack role.
date: '2020-11-16 05:13:02'
image: /assets/img/drake_dev.png
category: Career
background: '#079992'
---
Since the day I decided on the development career I stumbled on many different words and expressions, some I would just say that they are weird, especially for a non-native English speaker. While trying to make sense of a bunch of these words, I faced a brand new problem: which career I would take. Sometime later I discovered that this hole is waaaaay deeper than I thought, but let's leave this matter for another post, the 'easy' part was deciding between Frontend and Backend careers.

## Frontend x Backend

Putting things simply, Frontend is the part of a software that the user sees and interacts with. Some examples are the applications on your mobile, the 'page' where you check your bank account on your computer, an online shop, etc.

Backend is the part of a software that the users (usually) never even see, and they are usually addressed as 'the servers', so the server of your bank is a backend application (don't mix the computer server with the application server, the computer server is the machine, the application server is the software), the server of your game, search engine, etc.

<details>
<sumary>
Click here for a little explanation on why things are done like that:
</sumary>

You might be asking 'Why do things like that? You now have two pieces of software to take care of! It seems so complicated to do things like that!', well, I did, and I found out that this is part of a field called Software Architecture. Yes, it is more complicated. Yes, it is harder to maintain (not always). Yes, there are a few drawbacks, but the benefits are great!

One of the benefits of this model is that we have 2 specialized fields. The Frontend is specialized in user interaction, controls, buttons, colours, sizes, among many other details and related fields that change the user experience. The Backend is specialized in the business model, it communicates with the Frontend sending and receiving data. It's responsible for data validation, business model validation, heavy processing and database communication.

Also, can you imagine the size of an application if it had to be delivered with both server and client for everyone? Not only that, the consumption of device resources like RAM and CPU processing time would rise above the clouds! Having an application server prevents these problems by sending the users only the minimum required for operation, so the application can run on a wider variety of devices, even the older ones. An easy way to understand this is by comparing any modern spreadsheet application (LibreOffice, Excel, etc) with Google Sheets. I know, is not a fair comparison, but it's enough to grasp the concept.

Opening a new Google spreadsheet with disabled cache transfers a total of 8.99 MB, while the installation of Excel is inside a bundle that takes about 16GB last time I checked. LibreOffice is very smaller comparing to MS Office, taking around 1.5GB for the full package. That's a big difference, And the reason why this happens is that MSOffice and LibreOffice are full packaged applications, all the code and rules for formatting, using and creating dictionaries, converting, exporting and importing data, while on Google Sheet, only the spreadsheet application was downloaded, and only the frontend part of it! The backend is spread through the world in some Google servers, and when we edit the spreadsheet in the browser, this data is sent by the Frontend to the application server which processes the changes made.

I don't know if you paid attention to this detail 'with disabled cache', I said that because disabling cache forces the application to download everything again, caching is amazing and saves time, resources and money. Creating a new spreadsheet with cache enabled downloaded only 722Kb because all of the other resources the application will need are already stored in the computer cache.

Also, if a bug is found, and it resides on the server-side, it can be fixed with minimum impact to the user, if any at all. Usually, the user needs to download the fix, or the whole bundle again, install and hope it doesn't break anything. With this model, the user only needs to update when there's a fix on the client application.

And as I said, there are some drawbacks to this model too, if there's an issue with the internet connection, or the server itself, the application is virtually useless. There are some ways to mitigate these problems, but in some situations, there's nothing that can be done.

</details>

Ok, we talked about what is a frontend, a backend, the advantages and disadvantages of each one, but what is a full-stack?

Well, full-stack is a word that has started many wars, and the reason is that, mostly, frontend and backend developers don't like them. At all.

Before we dive into this matter, let me tell you about the long-lasting conflict between frontend and backend developers.

Frontend and backend developers usually live in very distinct worlds and tend to dislike each other. It's something like the problem with engineers and interior designers.

The designer says: Let's remove this horrendous column from here!, to which the engineers replies: There's no way this column will be taken down! It's part of the structure, if we remove it, the house will collapse!, the designer then replies: Well, you're the engineer, why don't you find a way to remove this column and keep the house in one piece?, the engineer then uses the same strategy: Well, because you're the designer, and I bet you can find a way to make this horrendous column something nice and pretty... and the discussion goes on and on.

This happens because they don't understand each other concerns and priorities, and if they had some meetings before, probably they wouldn't have this kind of problem. The same occurs with frontend and backend developers, who develop things according to the specifications they get, and when it comes the time to combine frontend and backend into a fully working application... the pieces don't fit. It's like having a team to develop the car body, and another the engine, and when it comes the time to assemble, the engine is too big, the size and position of the bolts are different, one blames the other and then the war begins.

But at some point, a new kind of developer appeared, a person who could wear two different shoes and feel no shame, some even say that they are reminiscent of the long-gone webmasters. The _full-stack_... **dramatic lightning sounds**

## Full-stack or Full-of-sh*t?

The full-stack is nothing more than a person who studies and understands the backend AND the frontend sides of the application. Some devs really take it to the heart and say things like: "there's no such thing as full-stack" and "full-stack are scammers, no one can do everything!". In my humble opinion, the reason for all this rage is a mix of fear, ignorance and ego.

Yeah, there are some buzzwords around like dev 10x, 100x, 1000x, dev ninja, rocket dev and akin, and many companies are buying them. The reason for that is simple: overall, companies' top priority is money. They want to spend as little as possible and gain as much as they can. So if they have 2 devs that cost them 300k/year and there's this guy who convinces them that he can do the job of these 2 devs for 200k/year, well... It's easy math.

The thing is, this full-stack person master of the universe, he may do the job of 2, 3 devs for a while, but not for long. It's insane, the developer job is a creative job, it requires understanding and studying of a variety of problems and solutions, thousands of words and talks and insights to understand how to best tackle diverse problems, and we still have so much to discover and improve!

The developer job is always evolving, and that's what makes this job so hard and fascinating.

So yeah, calling these devs scammers may be suitable, but I don't believe it's right. I believe they're just inexperienced, even because I've never heard of a dev 10kw ninja transformer with more than 30 years old. They're usually young professionals who believe they're the best in the world, the most special unicorn ever.

My dear reader, I'll tell you that when burnout strikes, it gives you no warning, It comes fast as lightning and the effects can stay for a long time. And you don't even need to be a super dev like that to be struck by this lightning.

So, the full-stack is a monstrosity that should be banned from this existence? I don't think so... and no, it's not because I consider myself a full-stack... or it is?

Let me introduce to you my vision of what's the role of a full-stack developer, his pros and cons.

Full-stack developers have a very interesting role, he is the bridge between teams and roles.

The full-stack is not someone who intends to steal anyone's job, that's not a full-stack, that's just a very stupid person who has no empathy, and will have serious problem in his personal and professional life in the future with this attitude.

A developer full-stack is a generalist, is the person that will help wherever and whenever needed, tackling due tasks, improving delivery schedule, attending meetings with the client and transmitting the outcome to the teams, helping with the integration os the frontend and backend teams, translating each team's slangs and concerns, finally, removing any rough edges between teams and products. The main downside of a full-stack is that with its flexibility, there's the loss of specific knowledge. A full-stack developer will take much longer to reach a certain knowledge level on React, for example, than a front-end dev, also, will probably take some time longer to complete harder tasks. Also, the full-stack is not perfectly balanced, they will always have some more experience and affinity with the frontend or backend, a language or another, it's cyclic and varies according to the kind of project they worked on recently, and for how long. Another downside is that most companies have that wrong idea of a full-stack, so when you get a full-stack job, they will mistake you for an entire IT department. Be careful with that.

I hope you enjoyed the reading and that I was able to show you a different perspective.
