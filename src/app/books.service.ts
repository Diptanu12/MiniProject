import { Book } from "./books";


export class BooksService{
   books: Book []=[
        {
            id: 101, name:'Think And Grow Rich', author: ' Napoleon Hill ', type:'Paper Book',
            price: 318, rating: 3.5, image:'https://m.media-amazon.com/images/I/411OtAf040L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg', description : "Think and Grow Rich has been called the Granddaddy of All Motivational Literature. It was the first book to boldly ask, What makes a winner? The man who asked and listened for the answer, Napoleon Hill, is now counted in the top ranks of the world's winners himselfhe most famous of all teachers of success spent a fortune and the better part of a lifetime of effort to produce the Law of Success philosophy that forms the basis of his books and that is so powerfully summarized in this one."
          },
          {
            id: 102, name:'Everything Is F*cked', author: ' Mark Manson ', type:'Paper Book',
            price: 754, rating: 4.5, image:'https://m.media-amazon.com/images/I/51Gn2JFKIZL._SX325_BO1,204,203,200_.jpg', description : "We live in an interesting time. Materially, everything is the best it’s ever been—we are freer, healthier and wealthier than any people in human history. Yet, somehow everything seems to be irreparably and horribly f*cked—the planet is warming, governments are failing, economies are collapsing, and everyone is perpetually offended on Twitter. At this moment in history, when we have access to technology, education and communication our ancestors couldn’t even dream of, so many of us come back to an overriding feeling of hopelessness."
          },
          {
            id: 103, name:'How to Win Friends', author: 'Dale Carnegie', type:'Paper Book',
            price: 365, rating: 4.0, image:'https://m.media-amazon.com/images/I/51TYGq2X7rL._SX322_BO1,204,203,200_.jpg', description : "Winning friends in the competitive world of today is one of life's biggest challenges. In fact it is an art. How to Win Friends and Influence People explains that nowadays people select friends and one should have distinguished qualities to make someone want to befriend you. It sounds quite materialistic but it is visible everywhere and in every walk of life. Influencing someone through one's personality is one of the mechanisms of gaining friends. This needs to be inculcated and practised. This book provides the basic skills through which one can attract people and capture their goodwill and attention."
          },
          {
            id: 104, name:'The Power of Mind', author: ' Joseph Murphy', type:'Paper Book',
            price: 485, rating: 4.5, image:'https://m.media-amazon.com/images/I/51QnuLIY2uL._SX322_BO1,204,203,200_.jpg', description : "This book can bring to your notice the innate power that the sub-conscious holds. We have some traits which seem like habits, but in reality these are those traits which are directly controlled by the sub-conscious mind, vis-à-vis your habits or your routine can be changed if you can control and direct your sub-conscious mind positively. To be able to control this 'mind power' and use it to improve the quality of your life is no walk in the park. This is where this book acts as a guide and allows you to decipher the depths of the sub-conscious."
          },
          {
            id: 105, name:'Energize Your Mind', author: ' Gaur Gopal Das', type:'Paper Book',
            price: 415, rating: 4.0, image:'https://m.media-amazon.com/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg', description : "In this book, bestselling author and life coach Gaur Gopal Das decodes how the mind works. He combines his anecdotal style with analytical research to teach us how to discipline our mind for our greater well-being. Throughout this book, he provides interactive exercises, meditation techniques and worksheets to help us take charge of our mind."
          },
          {
            id: 106, name:'Atomic Habits', author: 'James Clear ', type:'Paper Book',
            price: 256, rating: 4.5, image:'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg', description : "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights    "
          },
          {
            id: 107, name:'Lest She Forgets', author: 'Lisa Malice', type:'Paper Book',
            price: 458, rating: 4.0, image:'https://images-us.bookshop.org/ingram/9780744307153.jpg?height=500&v=v2-7cb2d79af2086cefa5588496d8251c01', description : "After surviving a car crash, a young woman wakes from a coma with amnesia, a battered face, and no identity. Horrific flashbacks and nightmares convince her psychiatrist that a repressed tragedy is the source of her memory loss. Her efforts to track down clues to her identity reveal a suspicious stalker following her every inquiry, hot on her trail for some dark reason. Her best defense against a forgotten killer is terrifyingly locked inside her head."
          },
          {
            id: 108, name:'Girl Among Crows', author:"Brendon Vayo", type:'Paper Book',
            price: 658, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9780744306552.jpg?height=500&v=v2', description : "When two boys disappear from her hometown, Daphne Gauge sees eerie parallels to her brother's disappearance 30 years earlier. What her husband dismisses as graffiti, Daphne fears are symbols harkening to an ancient Norse god. Digging more deeply, she uncovers evidence of the town's belief that sacrifice endows wealth and power. Is this more than a bloodthirsty urban myth"
          },
          {
            id: 109, name:'The Tiger Moms Tale', author: 'Diptanu', type:'Paper Book',
            price: 748, rating: 4.0, image:'https://images-us.bookshop.org/ingram/9780593198728.jpg?height=500&v=v2', description : "A tender, humorous, and page-turning debut about a Vietnamese Canadian family in Toronto who will do whatever it takes to protect their no-frills nail salon after a new high end salon opens up—even if it tears the family apart. Perfect for readers of Olga Dies Dreaming and The Fortunes of Jaded Women"
          },
          {
            id: 110, name:'Sunshine Nails', author: ' Mai Nguyen', type:'Paper Book',
            price: 458, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9781668010495.jpg?height=500&v=v2-76a55cc48cd4631e1236914e7e723792', description : "When two boys disappear from her hometown, Daphne Gauge sees eerie parallels to her brother's disappearance 30 years earlier. What her husband dismisses as graffiti, Daphne fears are symbols harkening to an ancient Norse god. Digging more deeply, she uncovers evidence of the town's belief that sacrifice endows wealth and power. Is this more than a bloodthirsty urban myth"
          },
          {
            id: 111, name:'Dial a for Aunties', author: 'Jesse Q. Sutanto', type:'Paper Book',
            price: 145, rating: 3.5, image:'https://images-us.bookshop.org/ingram/9780593333037.jpg?height=500&v=v2', description :"A collection of refreshingly honest and hilarious essays from Southern Living columnist Elizabeth Passarella about navigating change--whether emotional or logistical--and staying sane during life's unexpected twists and turns."
          },
          {
            id: 112, name:'Ugly Couch Anyway', author: ' Elizabeth Passarella', type:'Paper Book',
            price: 325, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9781400219018.jpg?height=500&v=v2-6c3737cf425735d3fadb21f6812aee50', description : "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights    "
          },
          {
            id: 113, name:'Emerging  Darkness', author: 'Brianna Ladapo', type:'Paper Book',
            price: 748, rating: 4.0, image:'https://images-us.bookshop.org/ingram/9781510777842.jpg?height=500&v=v2-d0a8e75c10e447309c72d8016d51f301', description : "This book is about the divine personal journey from the darkness into the light, and the collective journey we have undertaken as human beings, incarnated on earth at this spectacular moment of transformation, to move out of the separation consciousness that keeps us locked into patterns of conflict, suffering, and destructive behavior."
          },
          {
            id: 114, name:'Midlife Battle Cry', author: 'Dawn Barton', type:'Paper Book',
            price: 265, rating: 3.5, image:'https://images-us.bookshop.org/ingram/9780785294825.jpg?height=500&v=v2-e9f42757d39e0cf0823eee8bb5dbc4f3', description : "In a culture where so many people think of middle age as a downward slope into comfy sneakers and quiet, meaningless existence, we can redefine the second half of life, shaping it into decades of fulfillment, fun, strength, and purpose."
          },
          {
            id: 115, name:'Catalog Home', author: 'Diptanu', type:'Paper Book',
            price: 358, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9781645842552.jpg?height=500&v=v2', description : 'In this book all about home design. room design and interior drawung , sketchup'
          },
          {
            id: 116, name:'Mighty Red Riding ', author: 'Wallace West', type:'Paper Book',
            price: 854, rating: 3.0, image:'https://images-us.bookshop.org/ingram/9780316628358.jpg?height=500&v=v2', description : "The moral of the story 'Little Red Riding Hood is that we should never trust strangers. Even a very friendly stranger may have bad intentions'. The sweet little girl, Little Red Riding Hood, finds herself in danger because she talks to the sly wolf and naively points out the direction of her grandmother's house"
          },
          {
            id: 117, name:'The Shining', author: '	Stephen King', type:'Paper Book',
            price: 415, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9780307743657.jpg?height=500&v=v2-494f3b84d48adf490985b0066c53b94e', description : "The Shining is a 1977 horror novel by American author Stephen King. It is King's third published novel and first hardback bestseller; its success firmly established King as a preeminent author in the horror genre. The setting and characters are influenced by King's personal experiences, including both his visit to The Stanley Hotel in 1974 and his struggle with alcoholism. The novel was adapted into a 1980 film and a 1997 miniseries. The book was followed by a sequel, Doctor Sleep, published in 2013, which in turn was adapted into a film of the same name in 2019."
          },
          {
            id: 118, name:'Our Missing Hearts', author: 'Celeste Ng', type:'Paper Book',
            price: 545, rating: 4.0, image:'https://images-us.bookshop.org/ingram/9780593492543.jpg?height=500&v=v2-0c22a8ac1e9a0d3829ef3d6ea0ea650', description :"Our Missing Hearts' by Celeste Ng Our Missing Hearts is the story of 12-year-old Bird, a quest to find his mother and the power of small acts of rebellion. Saddled by grief, this quasi-dystopian novel is ultimately propelled by hope."
          },
          {
            id: 119, name:'The Hotel Nantucke', author: 'Elin Hilderbrand', type:'Paper Book',
            price: 412, rating: 4.5, image:'https://images-us.bookshop.org/ingram/9780316258982.jpg?height=500&v=v2-ebbd31b55282005226cd9d4b11973856', description : "Synopsis. After a tragic fire in 1922 that killed 19-year-old chambermaid, Grace Hadley, The Hotel Nantucket descended from a gilded age gem to a mediocre budget-friendly lodge to inevitably an abandoned eyesore—until it's purchased and renovated top to bottom by London billionaire, Xavier Darling."
          },
          {
            id: 120, name:'The Island', author: 'Adrian McKinty', type:'Paper Book',
            price: 526, rating: 4.0, image:'https://images-us.bookshop.org/ingram/9780316531290.jpg?height=500&v=v2-7858f37b06cd5651d07d0c01b4dbeafe', description : 'An American familys trip to see koalas and Australian wildlife becomes a life-and-death situation after they kill an innocent woman in a car crash and her family seeks revenge'
          }
     

         
          
          
        
    ]

    getbooks(){
        return this.books;
    }
}