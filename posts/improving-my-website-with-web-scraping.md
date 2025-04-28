---
title: "Improving my Website with Web Scraping"
date: "2025-04-28"
description: "I added a Word Of The Day to OfTheDay.World by Web Scrapping Dictionary.com"
---

Today was my first time really using web scraping and I'm really happy about how useful of a tool this is!
My teacher gave me the idea when I was working on [OfTheDay!](https://www.oftheday.world/) and I couldn't find a good API to use for the Word of The Day.
I thought it would be hard or load slow but it was actually really easy!
I just used jsdom which takes a website and allows me to pick specific html classes to get the text from and return it. I used [dictionary.com](https://www.dictionary.com) since they have a pretty good word of the day with definition. The only problem is if the devs at [dictionary.com](https://www.dictionary.com) update the classnames I'll have to update it in my code, not a huge deal. The code below is how I added it to my website, see more on my github!

![alt text](/images/blog-images/code.png)
 