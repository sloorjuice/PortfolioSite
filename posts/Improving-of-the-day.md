---
title: "Lots of Improvements to OFTHEDAY!"
date: "2025-04-30"
description: "Adding the last page, books. A new swipe to open menu feature on mobile. Subtle but pretty gradient background."
---
- Today the first thing i did was get started wih the simple swipe to open menu feature. To make the swiping work anywhere I had to put the code in Layout.tsx. The only problem is that my metadata was being exported from layout so I had to make a new file "metadata.ts" to handle it instead. I then used react-swipeable to make the function.

![alt text](/images/blog-images/code2.png)
<br/><br/>
- Now that ive gotten warmed up I was ready to move on to my next task, Joke Of The Day! I used a the simple and easy joke-api, no api key needed. I created this awesome JokeCard Component that hides the punchline behind a button that must be pressed to reveal, I think its pretty fun.

![alt text](/images/blog-images/code3.png)
<br/><br/>
- After that I created a nice component for the background so now I can have this sick blue under glow.

![alt text](/images/blog-images/underglow.png)
<br/><br/>
- Last and not least is my books page, I added a new function "getBookOfTheDay" which uses the Google Play Books API which I chose because there's no api keys and its simple and easy. From there it was real easy to add to the book page using the dailycard component ive already set up! I think it came out awesome!
<br/><br/>
- Check it all out on the website and on github!