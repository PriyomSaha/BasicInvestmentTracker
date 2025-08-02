export const getRandomQuote = () => {
  const quotes = [
    {
      quote: "If you’re saving, you’re succeeding.",
      author: "Steve Burkholder",
    },
    {
      quote: "A penny saved is a penny earned.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Try to save something while your salary is small; it’s impossible to save after you begin to earn more.",
      author: "Jack Benny",
    },
    {
      quote:
        "More people should learn to tell their dollars where to go instead of asking them where they went.",
      author: "Roger Babson",
    },
    {
      quote:
        "The bitterness of poor quality remains long after the sweetness of low price is forgotten.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Too many people spend money they haven’t earned to buy things they don’t want to impress people they don’t like.",
      author: "Will Rogers",
    },
    {
      quote:
        "Money doesn’t buy elegance. You can take an inexpensive sheath, add a pretty scarf, gray shoes and a wonderful bag, and it will always be elegant.",
      author: "Carolina Herrera",
    },
    {
      quote: "Frugality includes all the other virtues.",
      author: "Cicero",
    },
    {
      quote:
        "If you think nobody cares if you’re alive, try missing a couple of car payments.",
      author: "Earl Wilson",
    },
    {
      quote:
        "Do not save what is left after spending; instead spend what is left after saving.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Saving must become a priority, not just a thought. Pay yourself first.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Keep your eyes on the price when spending; don’t regret later to find that you have nothing for tomorrow.",
      author: "Auliq Ice",
    },
    {
      quote: "He who buys what he does not need steals from himself.",
      author: "Swedish Proverb",
    },
    {
      quote: "Enough is better than too much.",
      author: "Dutch Proverb",
    },
    {
      quote:
        "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind.",
      author: "T.T. Munger",
    },
    {
      quote:
        "Don’t tell me where your priorities are. Show me where you spend your money and I’ll tell you what they are.",
      author: "James W. Frick",
    },
    {
      quote:
        "Look everywhere you can to cut a little bit from your expenses. It will all add up to a meaningful sum.",
      author: "Suze Orman",
    },
    {
      quote: "Never spend your money before you have it.",
      author: "Thomas Jefferson",
    },
    {
      quote:
        "A budget is telling your money where to go instead of wondering where it went.",
      author: "John C. Maxwell",
    },
    {
      quote:
        "Many folks think they aren’t good at earning money, when what they don’t know is how to use it.",
      author: "Frank A. Clark",
    },
    {
      quote:
        "The way to stop financial joyriding is to arrest the chauffeur, not the automobile.",
      author: "Woodrow Wilson",
    },
    {
      quote: "Every time you borrow money, you’re robbing your future self.",
      author: "Nathan W. Morris",
    },
    {
      quote:
        "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
      author: "Ayn Rand",
    },
    {
      quote:
        "Wealth consists not in having great possessions, but in having few wants.",
      author: "Epictetus",
    },
    {
      quote:
        "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed.",
      author: "Edmund Burke",
    },
    {
      quote:
        "The cost of a thing is the amount of what I call life which is required to be exchanged for it, immediately or in the long run.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "If you wish to get rich, save what you get. A fool can earn money; but it takes a wise man to save and dispose of it to his own advantage.",
      author: "Brigham Young",
    },
    {
      quote:
        "A penny here and a dollar there, placed at interest, goes on accumulating, and in this way, the desired result is attained. It requires some training, perhaps, to accomplish this economy, but when once used to it, you will find there is more satisfaction in rational saving than in irrational spending.",
      author: "P.T. Barnum",
    },
    {
      quote:
        "Time well-spent results in more money to spend, more money to save, and more time to vacation.",
      author: "Zig Ziglar",
    },
    {
      quote:
        "My favorite things in life don’t cost any money. It’s really clear that the most precious resource we all have is time.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we’ve got 24 hours each.",
      author: "Christopher Rice",
    },
    {
      quote: "Time is money. Wasted time means wasted money means trouble.",
      author: "Shirley Temple",
    },
    {
      quote:
        "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
      author: "Thomas Edison",
    },
    {
      quote:
        "Time is more value than money. You can get more money, but you cannot get more time.",
      author: "Jim Rohn",
    },
    {
      quote:
        "Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      quote:
        "Time is free, but it’s priceless. You can’t own it, but you can use it. You can’t keep it, but you can spend it. Once you’ve lost it you can never get it back.",
      author: "Harvey Mackay",
    },
    {
      quote: "The trouble is, you think you have time.",
      author: "Buddha",
    },
    {
      quote:
        "There’s only one thing more precious than our time and that’s who we spend it on.",
      author: "Leo Christopher",
    },
    {
      quote:
        "The greatest gift you can give someone is your time because when you give your time, you are giving a portion of your life that you will never get back.",
      author: "Unknown",
    },
    {
      quote:
        "You will never find time for anything. If you want time, you must make it.",
      author: "Charles Brixton",
    },
    {
      quote: "Time is precious. Make sure you spend it with the right people.",
      author: "Unknown",
    },
    {
      quote: "We all make time for what we feel is important in our lives.",
      author: "Unknown",
    },
    {
      quote: "The two most powerful warriors are patience and time.",
      author: "Leo Tolstoy",
    },
    {
      quote: "Time has a wonderful way of showing us what really matters.",
      author: "Unknown",
    },
    {
      quote:
        "Always make time for things that make you feel happy to be alive.",
      author: "Unknown",
    },
    {
      quote:
        "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
      author: "Paul Samuelson",
    },
    {
      quote: "Small amounts saved daily add up to huge investments in the end.",
      author: "Margo Vader",
    },
    {
      quote:
        "It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
      author: "Robert Kiyosaki",
    },
    {
      quote:
        "You don’t have to see the whole staircase; just take the first step.",
      author: "Martin Luther King, Jr.",
    },
    {
      quote:
        "By definition, saving for anything requires us to not get things now so that we can get bigger ones later.",
      author: "Jean Chatzky",
    },
    {
      quote: "The rich invest in time, the poor invest in money.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Everyone wants a piece of land. It’s the only sure investment, it can never depreciate like a car or a washing machine.",
      author: "Russel Sage",
    },
    {
      quote: "In any investment, you expect to have fun and make money.",
      author: "Michael Jordan",
    },
    {
      quote:
        "An investor without investment objectives is like a traveler without a destination.",
      author: "Unknown",
    },
    {
      quote: "Sometimes your best investments are the ones you don’t make.",
      author: "Donald Trump",
    },
    {
      quote: "Invest in yourself, you can afford it, trust me.",
      author: "Rashon Carraway",
    },
    {
      quote:
        "The price of a commodity will never go to zero. When you invest in commodities futures, you are not buying a piece of paper that says you own an intangible of a company that can go bankrupt.",
      author: "Jim Rogers",
    },
    {
      quote:
        "Wealthy people invest first and spend what’s left and broke people spend first and invest what’s left.",
      author: "Unknown",
    },
    {
      quote:
        "Earn as much as you can, save as much as you can, invest as much as you can, give as much as you can.",
      author: "John Wesley",
    },
    {
      quote: "90% of all millionaires become so through owning real estate.",
      author: "Andrew Carnegie",
    },
    {
      quote: "Goodness is the only investment that never fails.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "If you buy things you do not need, soon you will have to sell things you need.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Wise spending is part of wise investing. And it’s never too late to start.",
      author: "Rhonda Katz",
    },
    {
      quote:
        "The wisest rule in investment is: when others are selling, buy. When others are buying, sell.",
      author: "Jonathan Sacks",
    },
    {
      quote:
        "If you do not know how to care for money, money will stay away from you.",
      author: "Robert T. Kiyosaki",
    },
    {
      quote: "The biggest risk of all is not taking one.",
      author: "Mellody Hobson",
    },
    {
      quote:
        "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn’t, pays it.",
      author: "Albert Einstein",
    },
    {
      quote:
        "I suppose my formula might be: Dream, diversify and never miss an angle.",
      author: "Walt Disney",
    },
    {
      quote:
        "With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future.",
      author: "Carlos Slim Helu",
    },
    {
      quote:
        "Divide your portion to seven, or even to eight, for you do not know what misfortune may occur on the earth.",
      author: "King Solomon",
    },
    {
      quote: "An investment in knowledge pays the best interest.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "The stock market is a device for transferring money from the impatient to the patient.",
      author: "Warren Buffett",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "The circulation of confidence is better than the circulation of money.",
      author: "James Madison",
    },
    {
      quote: "Money is usually attracted, not pursued.",
      author: "Jim Rohn",
    },
    {
      quote:
        "There is no monopoly on becoming a millionaire. If you’re jealous of those with more money, don’t just sit there and complain—do something to make more money yourself.",
      author: "Gina Rinehart",
    },
    {
      quote:
        "Financial fitness is not a pipe dream or a state of mind. It’s a reality if you are willing to pursue it and embrace it.",
      author: "Will Robinson",
    },
    {
      quote:
        "At least eighty percent of millionaires are self-made. That is, they started with nothing but ambition and energy, the same way most of us start.",
      author: "Brian Tracy",
    },
    {
      quote:
        "Money is multiplied in practical value depending on the number of W’s you control in your life: what you do, when you do it, where you do it, and with whom you do it.",
      author: "Tim Ferriss",
    },
    {
      quote:
        "I’m a great believer in luck, and I find the harder I work the more I have of it.",
      author: "Thomas Jefferson",
    },
    {
      quote:
        "The key factor that will determine your financial future is not the economy; the key factor is your philosophy.",
      author: "Jim Rohn",
    },
    {
      quote:
        "Academic qualifications are important and so is financial education. They’re both important and schools are forgetting one of them.",
      author: "Robert Kiyosaki",
    },
    {
      quote:
        "I believe that through knowledge and discipline, financial peace is possible for all of us.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "It all comes down to this: if your subconscious ‘financial blueprint’ is not ‘set’ for success, nothing you learn, nothing you know, and nothing you do will make much of a difference.",
      author: "T. Harv Eker",
    },
    {
      quote:
        "The only way you will ever permanently take control of your financial life is to dig deep and fix the root problem.",
      author: "Suze Orman",
    },
    {
      quote: "Money is better than poverty, if only for financial reasons.",
      author: "Woody Allen",
    },
    {
      quote:
        "Before you can become a millionaire, you must learn to think like one. You must learn how to motivate yourself to counter fear with courage. Making critical decisions about your career, business, investments and other resources conjures up fear, fear that is part of the process of becoming a financial success.",
      author: "Thomas J. Stanley",
    },
    {
      quote:
        "You can be a victim or you can be rich, but you can’t be both. Listen up! Every time, and I mean every time, you blame, justify, or complain, you are slitting your financial throat.",
      author: "T. Harv Eker",
    },
    {
      quote:
        "A big part of financial freedom is having your heart and mind free from worry about the what-ifs of life.",
      author: "Suze Orman",
    },
    {
      quote:
        "Financial peace isn’t the acquisition of stuff. It’s learning to live on less than you make, so you can give money back and have money to invest. You can’t win until you do this.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "It is not the man who has too little, but the man who craves more, that is poor.",
      author: "Seneca",
    },
    {
      quote:
        "Empty pockets never held anyone back. Only empty heads and empty hearts can do that.",
      author: "Norman Vincent Peale",
    },
    {
      quote:
        "You must gain control over your money or the lack of it will forever control you.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "Wealth, after all, is a relative thing since he that has little and wants less is richer than he that has much and wants more.",
      author: "Charles Caleb Colton",
    },
    {
      quote:
        "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy.",
      author: "George Lorimer",
    },
    {
      quote: "Know what you own, and know why you own it.",
      author: "Peter Lynch",
    },
    {
      quote:
        "I’m not that lazy, but I don’t need that much money. I lead a fairly simple life.",
      author: "Karl Pilkington",
    },
    {
      quote:
        "Dogs have no money. Isn’t that amazing? They’re broke their entire lives. But they get through. You know why dogs have no money? … No pockets.",
      author: "Jerry Seinfeld",
    },
    {
      quote: "Money may not buy happiness, but it can damn well give it!",
      author: "Freddie Mercury",
    },
    {
      quote:
        "Success is not just making money. Success is happiness. Success is fulfillment; it’s the ability to give.",
      author: "Adam Neumann",
    },
    {
      quote:
        "Let us not be satisfied with just giving money. Money is not enough, money can be got, but they need your hearts to love them. So, spread your love everywhere you go.",
      author: "Mother Teresa",
    },
    {
      quote:
        "Making money is a happiness. And that’s a great incentive. Making other people happy is a super-happiness.",
      author: "Muhammad Yunus",
    },
    {
      quote:
        "For me, money is not my definition of success. Inspiring people is a definition of success.",
      author: "Kanye West",
    },
    {
      quote: "Greed is not a financial issue. It’s a heart issue.",
      author: "Andy Stanley",
    },
    {
      quote: "The trick is to stop thinking of it as ‘your’ money.",
      author: "IRS auditor",
    },
    {
      quote:
        "We make a living by what we get, but we make a life by what we give.",
      author: "Winston Churchill",
    },
    {
      quote: "No one has ever become poor by giving.",
      author: "Anne Frank",
    },
    {
      quote:
        "Giving is not just about making a donation. It is about making a difference.",
      author: "Kathy Calvin",
    },
    {
      quote: "Life is a boomerang. What you give, you get.",
      author: "Unknown",
    },
    {
      quote: "We rise by lifting others.",
      author: "Robert Ingersoll",
    },
    {
      quote:
        "Only by giving are you able to receive more than you already have.",
      author: "Jim Rohn",
    },
    {
      quote: "Do come and good will come to you.",
      author: "Unknown",
    },
    {
      quote: "Giving opens the way for receiving.",
      author: "Florence Scovel Shinn",
    },
    {
      quote: "When you learn, teach. When you get, give.",
      author: "Maya Angelou",
    },
    {
      quote: "It’s not how much we give, but how much love we put into giving.",
      author: "Mother Teresa",
    },
    {
      quote:
        "Formal education will make you a living; self-education will make you a fortune.",
      author: "Jim Rohn",
    },
    {
      quote:
        "What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us.",
      author: "Julia Cameron",
    },
    {
      quote:
        "If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know and start charging for it.",
      author: "Kim Garst",
    },
    {
      quote: "Fortune sides with him who dares.",
      author: "Virgil",
    },
    {
      quote:
        "Never confuse the size of your paycheck with the size of your talent.",
      author: "Marlon Brando",
    },
    {
      quote: "Do what you love and the money will follow.",
      author: "Marsha Sinetar",
    },
    {
      quote:
        "Find out what you like doing best, and get someone to pay you for doing it.",
      author: "Katharine Whitehorn",
    },
    {
      quote:
        "The most common way people give up their power is by thinking they don’t have any.",
      author: "Alice Walker",
    },
    {
      quote:
        "If you don’t feel it, flee from it. Go where you are celebrated, not merely tolerated.",
      author: "Paul F. Davis",
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      quote: "If opportunity doesn’t knock, build a door.",
      author: "Milton Berle",
    },
    {
      quote: "Nothing will work unless you do.",
      author: "Maya Angelou",
    },
    {
      quote: "If you’re going through hell, keep going.",
      author: "Winston Churchill",
    },
    {
      quote: "The future depends on what you do today.",
      author: "Mahatma Gandhi",
    },
    {
      quote:
        "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Start by doing what is necessary, then do what is possible, and suddenly you are doing the impossible.",
      author: "Francis of Assisi",
    },
    {
      quote:
        "Live like you’ll die tomorrow, work like you don’t need the money, and dance like nobody’s watching.",
      author: "Bob Fosse",
    },
    {
      quote:
        "I’m not motivated by money or power or fame. In the end, it doesn’t bring much happiness. The only thing that is driving me is self-satisfaction, self-validation.",
      author: "William Clay Ford, Jr.",
    },
    {
      quote:
        "A treasure is to be valued for its own sake and not for what it will buy.",
      author: "Graham Greene",
    },
    {
      quote: "There are people who have money and people who are rich.",
      author: "Coco Chanel",
    },
    {
      quote:
        "A wise person should have money in their head, but not in their heart.",
      author: "Jonathan Swift",
    },
    {
      quote: "I don’t want to make money. I just want to be wonderful.",
      author: "Marilyn Monroe",
    },
    {
      quote: "All the money in the world can’t buy you back good health.",
      author: "Reba McEntire",
    },
    {
      quote: "Friends and good manners will carry you where money won’t go.",
      author: "Margaret Walker",
    },
    {
      quote:
        "For I don’t care too much for money, for money can’t buy me love.",
      author: "The Beatles",
    },
    {
      quote: "Wealth is not his that has it, but his that enjoys it.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote:
        "The real measure of your wealth is how much you’d be worth if you lost all your money.",
      author: "Unknown",
    },
    {
      quote:
        "Too many people measure how successful they are by how much money they make or the people that they associate with. In my opinion, true success should be measured by how happy you are.",
      author: "Richard Branson",
    },
    {
      quote: "Money is a terrible master but an excellent servant.",
      author: "P.T. Barnum",
    },
    {
      quote:
        "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
      author: "Philip Fisher",
    },
    {
      quote:
        "Not everything that can be counted counts, and not everything that counts can be counted.",
      author: "Albert Einstein",
    },
    {
      quote:
        "There is a gigantic difference between earning a great deal of money and being rich.",
      author: "Marlene Dietrich",
    },
    {
      quote: "Money grows on the tree of persistence.",
      author: "Japanese Proverb",
    },
    {
      quote:
        "Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. 1.",
      author: "Warren Buffett",
    },
    {
      quote: "Being rich is having money; being wealthy is having time.",
      author: "Margaret Bonanno",
    },
    {
      quote: "The greatest wealth is to live content with little.",
      author: "Plato",
    },
    {
      quote: "Don’t let your mouth write no check that your tail can’t cash.",
      author: "Bo Diddley",
    },
    {
      quote:
        "People are living longer than ever before, a phenomenon undoubtedly made unnecessary by the 30-year mortgage.",
      author: "Doug Larson",
    },
    {
      quote:
        "Debts are like children – begot with pleasure, but brought forth with pain.",
      author: "Moliere",
    },
    {
      quote:
        "Chains of habit are too light to be felt until they are too heavy to be broken.",
      author: "Warren Buffett",
    },
    {
      quote: "Good times are when people make debts to pay in bad times.",
      author: "Robert Quinlin",
    },
    {
      quote: "I’m in debt. I am a true American.",
      author: "Balki Bartokomous",
    },
    {
      quote:
        "Wars in old times were made to get slaves. The modern implement of imposing slavery is debt.",
      author: "Ezra Pound",
    },
    {
      quote: "Content makes poor men rich; discontent makes rich men poor.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "Debt gives you the ability to look like you’re winning when you’re not.",
      author: "Dave Ramsey",
    },
    {
      quote:
        "The man who never has money enough to pay his debts has too much of something else.",
      author: "James Lendall Basford",
    },
    {
      quote: "When prosperity comes, do not use all of it.",
      author: "Confucius",
    },
    {
      quote: "A man who pays his bills on time is soon forgotten.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "Money, like emotions, is something you must control to keep your life on the right track.",
      author: "Natasha Munson",
    },
    {
      quote:
        "But you have to do what you dream of doing even while you’re afraid.",
      author: "Arianna Huffington",
    },
    {
      quote: "To contract new debts is not the way to pay old ones.",
      author: "George Washington",
    },
    {
      quote: "Diligence is the mother of good luck.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "All you need is the plan, the road map, and the courage to press on to your destination.",
      author: "Earl Nightingale",
    },
    {
      quote: "Nothing wrong with making money.",
      author: "Adam Levine",
    },
    {
      quote:
        "Without continual growth and progress, such words as improvement, achievement, and success have no meaning.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "The challenge is not to pick the best investment. The challenge is to pick the right investment.",
      author: "Don Connelly",
    },
    {
      quote:
        "The desire of gold is not for gold. It is for the means of freedom and benefit.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "Don’t tell me what you value, show me your budget, and I’ll tell you what you value.",
      author: "Joe Biden",
    },
    {
      quote: "If saving money is wrong, I don’t want to be right!",
      author: "William Shatner",
    },
    {
      quote:
        "Money is good for nothing unless you know the value of it by experience.",
      author: "P.T. Barnum",
    },
    {
      quote:
        "The goal isn’t more money. The goal is living life on your terms.",
      author: "Chris Brogan",
    },
    {
      quote: "To get rich, you have to be making money while you’re asleep.",
      author: "David Bailey",
    },
    {
      quote:
        "People say that money is not the key to happiness, but I figured if you have enough money, you can have a key made.",
      author: "Joan Rivers",
    },
    {
      quote:
        "Everyone knows at least one ‘know-it-all’. If you want to invest well, don’t be a know-it-all.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Financial struggle is often the direct result of people working all their lives for someone else.",
      author: "Robert Kiyosaki",
    },
    {
      quote: "We generate fears while we sit. We overcome them by action.",
      author: "Dr. Henry Link",
    },
    {
      quote:
        "Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.",
      author: "Anne Sweeney",
    },
    {
      quote:
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
      author: "Colin Powell",
    },
    {
      quote:
        "Debt is like any other trap, easy enough to get into, but hard enough to get out of.",
      author: "Josh Billings",
    },
    {
      quote:
        "It’s pointless to set goals if you are not going to try to hit them.",
      author: "Don Connelly",
    },
    {
      quote:
        "It’s quite easy to spend $20,000 getting two people to Europe for two weeks. The same $20,000 invested at a reasonable rate of return over several years makes the opportunity cost of going to Europe prohibitive.",
      author: "Don Connelly",
    },
    {
      quote:
        "Rich people act in spite of fear. Poor people let fear stop them.",
      author:
        "The Power of Thinking Like the Rich – The Message of Rich Dad Poor Dad",
    },
    {
      quote:
        "You can’t always visualize the reward, but you can believe in the sacrifice if the vision is strong enough.",
      author: "Don Connelly",
    },
    {
      quote:
        "Financial security and independence are like a three-legged stool resting on savings, insurance and investments.",
      author: "Brian Tracy",
    },
    {
      quote:
        "What separates the winners from the losers is how a person reacts to each new twist of fate.",
      author: "Donald Trump",
    },
    {
      quote: "The difference between succeeding and failing is consistency.",
      author: "Don Connelly",
    },
    {
      quote: "I feel that luck is preparation meeting opportunity.",
      author: "Oprah Winfrey",
    },
    {
      quote:
        "People who are enthusiastic make more money than people who are not enthusiastic. Choose to be enthusiastic.",
      author: "Don Connelly",
    },
    {
      quote:
        "Predicting the future with any degree of Certainty is impossible. The key is to react accordingly to any situation as it arises.",
      author: "Don Connelly",
    },
    {
      quote:
        "Buy at the point of maximum pessimism; sell at the point of maximum optimism.",
      author: "Sir John Templeton",
    },
    {
      quote:
        "Whether socks or stocks, I like buying quality merchandise when it is marked down.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Having information on investing is one thing. Knowing what to do with it is something else entirely.",
      author: "Don Connelly",
    },
    {
      quote:
        "The day I was born, the Dow Jones Industrial Average closed at 188.58. The day I graduated from high school, the Dow closed at 716.49. The day I turned sixty five, the Dow closed at 10,522.59. Here we are over 17,000. The long term trend is obvious.",
      author: "Don Connelly",
    },
    {
      quote:
        "When someone pays you a commission for a purchase, it’s not to purchase that product; it’s to know which product to purchase.",
      author: "Don Connelly",
    },
    {
      quote:
        "Doctors know needles hurt. They give shots nonetheless. Why? Because they know that little bit of discomfort up front leads to miracles down the road.",
      author: "Don Connelly",
    },
    {
      quote:
        "Getting out with the idea of getting back in later is trying to outsmart the market. It’s hard to outsmart something that doesn’t always make sense.",
      author: "Don Connelly",
    },
    {
      quote:
        "Only buy something that you’d be perfectly happy to hold if the market shut down for 10 years.",
      author: "Warren Buffett",
    },
    {
      quote:
        "There is nothing wrong with changing a plan when the situation has changed.",
      author: "Seneca",
    },
    {
      quote:
        "If you are standing on the platform when the train has pulled away, it’s not going to back up for you. When a bull market takes off, it’s not going to back up for you.",
      author: "Don Connelly",
    },
    {
      quote:
        "If you totally want to reduce risk, take no risk. Bury the money. Then you’ve got no risk at all.",
      author: "Don Connelly",
    },
    {
      quote:
        "As people and Financial Advisors, we can’t change the inevitable. But we can play on the thing we do have and that’s our attitude.",
      author: "Don Connelly",
    },
    {
      quote:
        "You can make EXCUSES and earn SYMPATHY, OR you can make MONEY and earn ADMIRATION. The choice is always yours…",
      author: "Manoj Arora",
    },
    {
      quote:
        "Do not focus on money, instead focus on a problem that needs to be solved for the world. Money will follow you as a bi-product.",
      author: "Manoj Arora",
    },
    {
      quote:
        "The stock market is a giant distraction to the business of investing.",
      author: "Jack Bogle",
    },
    {
      quote: "Money often costs too much.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "It’s how you deal with failure that determines how you achieve success.",
      author: "David Feherty",
    },
    {
      quote:
        "I love money. I love everything about it. I bought some pretty good stuff. Got me a $300 pair of socks. Got a fur sink. An electric dog polisher. A gasoline powered turtleneck sweater. And, of course, I bought some dumb stuff, too.",
      author: "Steve Martin",
    },
    {
      quote:
        "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.",
      author: "Warren Buffett",
    },
    {
      quote:
        "Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery.",
      author: "Charles Dickens",
    },
    {
      quote:
        "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years.",
      author: "Warren Buffett",
    },
    {
      quote: "A nickel ain’t worth a dime anymore.",
      author: "Yogi Berra",
    },
    {
      quote:
        "It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages.",
      author: "Henry Ford",
    },
    {
      quote:
        "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you.",
      author: "Maya Angelou",
    },
    {
      quote:
        "Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing.",
      author: "J. Paul Getty",
    },
    {
      quote:
        "If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability.",
      author: "Henry Ford",
    },
    {
      quote:
        "I made my money the old-fashioned way. I was very nice to a wealthy relative right before he died.",
      author: "Malcolm Forbes",
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      author: "Steve Jobs",
    },
    {
      quote:
        "The individual investor should act consistently as an investor and not as a speculator.",
      author: "Ben Graham",
    },
    {
      quote: "I’m so poor I can’t even pay attention.",
      author: "Ron Kittle",
    },
    {
      quote: "No matter how hard you hug your money, it never hugs back.",
      author: "H. Jackson Brown, Jr.",
    },
    {
      quote:
        "A bargain is something you can’t use at a price you can’t resist.",
      author: "Franklin Jones",
    },
    {
      quote: "My formula for success is rise early, work late, and strike oil.",
      author: "J.P. Getty",
    },
    {
      quote:
        "Inflation is when you pay fifteen dollars for the ten-dollar haircut you used to get for five dollars when you had hair.",
      author: "Sam Ewing",
    },
    {
      quote:
        "I have enough money to last me the rest of my life, unless I buy something.",
      author: "Jackie Mason",
    },
    {
      quote: "I’ve been rich and I’ve been poor. Rich is better.",
      author: "Sophie Tucker",
    },
    {
      quote:
        "If women didn’t exist, all the money in the world would have no meaning.",
      author: "Aristotle Onassis",
    },
    {
      quote:
        "Every day I get up and look through the Forbes list of the richest people in America. If I’m not there, I go to work.",
      author: "Robert Orben",
    },
    {
      quote: "If you can count your money, you don’t have a billion dollars.",
      author: "J. Paul Getty",
    },
    {
      quote:
        "If there is anyone to whom I owe money, I’m prepared to forget it if they are.",
      author: "Errol Flynn",
    },
    {
      quote: "Money is something you have to make in case you don’t die.",
      author: "Max Asnas",
    },
    {
      quote: "Always borrow money from a pessimist. He won’t expect it back.",
      author: "Oscar Wilde",
    },
    {
      quote:
        "If only God would give me some clear sign! Like making a large deposit in my name at a Swiss bank.",
      author: "Woody Allen",
    },
    {
      quote: "I’m spending a year dead for tax reasons.",
      author: "Douglas Adams",
    },
    {
      quote: "I like my money where I can see it, hanging in my closet.",
      author: "Carrie Bradshaw",
    },
    {
      quote: "All I ask is the chance to prove that money can’t make me happy.",
      author: "Spike Milligan",
    },
    {
      quote:
        "A fool and his money are lucky enough to get together in the first place.",
      author: "Gordon Gekko",
    },
    {
      quote: "You can be young without money, but you can’t be old without it.",
      author: "Tennessee Williams",
    },
    {
      quote: "Fortune befriends the bold.",
      author: "Emily Dickinson",
    },
    {
      quote: "Beware of little expenses; a small leak will sink a great ship.",
      author: "Benjamin Franklin",
    },
    {
      quote:
        "A simple fact that is hard to learn is that the time to save money is when you have some.",
      author: "Joe Moore",
    },
    {
      quote:
        "The question isn’t at what age I want to retire, it’s at what income.",
      author: "George Foreman",
    },
    {
      quote:
        "Pursuing your passion is fulfilling and leads to financial freedom.",
      author: "Robert G. Allen",
    },
    {
      quote:
        "When you understand that your self-worth is not determined by your net-worth, then you’ll have financial freedom.",
      author: "Suze Orman",
    },
    {
      quote:
        "The way to wealth is as plain as the way to market. It depends chiefly on two words, industry and frugality.",
      author: "Benjamin Franklin",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      quote:
        "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      quote:
        "Success is not just about what you accomplish in your life, it’s about what you inspire others to do.",
      author: "Unknown",
    },
    {
      quote:
        "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      quote:
        "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston S. Churchill",
    },
    {
      quote:
        "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote: "Believe you can and you’re halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "Stay committed to your decisions, but stay flexible in your approach.",
      author: "Tony Robbins",
    },
    {
      quote:
        "We all have dreams. But in order to make dreams come into reality, it takes an awful lot of determination, dedication, self-discipline, and effort.",
      author: "Jesse Owens",
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington",
    },
    {
      quote:
        "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      author: "Leonardo da Vinci",
    },
    {
      quote:
        "Here’s to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They’re not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can’t do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
      author: "Rob Siltanen",
    },
    {
      quote: "I have not failed. I’ve just found 10,000 ways that won’t work.",
      author: "Thomas A. Edison",
    },
    {
      quote:
        "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston S. Churchill",
    },
    {
      quote:
        "The only way to achieve the impossible is to believe it is possible.",
      author: "Charles Kingsleigh",
    },
    {
      quote: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      quote:
        "Success is not how high you have climbed, but how you make a positive difference to the world.",
      author: "Roy T. Bennett",
    },
    {
      quote:
        "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      quote: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      quote:
        "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      quote:
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer",
    },
    {
      quote:
        "Success is not about how much money you make, but the difference you make in people’s lives.",
      author: "Michelle Obama",
    },
    {
      quote:
        "Success is not about being the best. It’s about always getting better.",
      author: "Behdad Sami",
    },
    {
      quote:
        "Success is not the absence of failure; it’s the persistence through failure.",
      author: "Aisha Tyler",
    },
    {
      quote: "Success is not defined by what you have, but by what you give.",
      author: "Unknown",
    },
    {
      quote:
        "Success is not about what you accomplish in your life, but what you inspire others to do.",
      author: "Unknown",
    },
    {
      quote: "Success is not about the destination, but the journey.",
      author: "Unknown",
    },
    {
      quote: "Success is not about how much you have, but how much you give.",
      author: "Unknown",
    },
    {
      quote: "Success is not about being perfect, but about making progress.",
      author: "Unknown",
    },
    {
      quote: "Success is not about what you have, but who you are becoming.",
      author: "Unknown",
    },
    {
      quote: "Success is not about the accolades, but the impact you make.",
      author: "Unknown",
    },
    {
      quote: "Success is not about the money, but the legacy you leave behind.",
      author: "Unknown",
    },
    {
      quote: "Success is not about the applause, but the lives you touch.",
      author: "Unknown",
    },
    {
      quote:
        "Success is not about the recognition, but the fulfillment you find in your work.",
      author: "Unknown",
    },
    {
      quote:
        "Success is not about the fame, but the joy of doing what you love.",
      author: "Unknown",
    },
    {
      quote:
        "Success is not about the awards, but the satisfaction of a job well done.",
      author: "Unknown",
    },
    {
      quote:
        "Success is not about the money, but the freedom to live life on your own terms.",
      author: "Unknown",
    },
    {
      quote: "90% of all millionaires become so through owning real estate.",
      author: "Andrew Carnegie",
    },
    {
      quote: "The best investment on Earth is earth.",
      author: "Louis Glickman",
    },
    {
      quote:
        "Real estate is the best investment in the world because it is the only thing they aren’t making any more of.",
      author: "Will Rogers",
    },
    {
      quote: "Buy land, they’re not making it anymore.",
      author: "Mark Twain",
    },
    {
      quote:
        "Landlords grow rich in their sleep without working, risking or economizing.",
      author: "John Stuart Mill",
    },
    {
      quote:
        "Real estate provides the highest returns, the greatest values and the least risk.",
      author: "Armstrong Williams",
    },
    {
      quote:
        "Owning a home is a keystone of wealth – both financial affluence and emotional security.",
      author: "Suze Orman",
    },
    {
      quote: "The major fortunes in America have been made in land.",
      author: "John D. Rockefeller",
    },
    {
      quote:
        "Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised.",
      author: "Russell Sage",
    },
    {
      quote: "In any market condition, real estate is a good investment.",
      author: "Donald Trump",
    },
    {
      quote: "The best time to buy a home is always five years ago.",
      author: "Ray Brown",
    },
    {
      quote:
        "Real estate is not just about property; it’s about people and relationships.",
      author: "Unknown",
    },
    {
      quote:
        "Money doesn’t buy elegance. You can take an inexpensive sheath, add a pretty scarf, gray shoes and a wonderful bag, and it will always be elegant.",
      author: "Carolina Herrera",
    },
    {
      quote: "I don’t need a lot of money. I just want to be wonderful.",
      author: "Marilyn Monroe",
    },
    {
      quote:
        "I don’t have a bank account because I don’t know my mother’s maiden name.",
      author: "Paula Poundstone",
    },
    {
      quote: "I don’t have any money, but I have a lot of ideas.",
      author: "Unknown",
    },
    {
      quote: "I don’t need a lot of money. I just want to be happy.",
      author: "Unknown",
    },
    {
      quote:
        "I don’t need a lot of money. I just want to be able to do what I love.",
      author: "Unknown",
    },
    {
      quote:
        "I don’t need a lot of money. I just want to be able to travel and see the world.",
      author: "Unknown",
    },
    {
      quote:
        "I don’t need a lot of money. I just want to be able to spend time with my family.",
      author: "Unknown",
    },
    {
      quote:
        "I don’t need a lot of money. I just want to be able to help others.",
      author: "Unknown",
    },
    {
      quote:
        "I don’t need a lot of money. I just want to be able to live life on my own terms.",
      author: "Unknown",
    },
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
