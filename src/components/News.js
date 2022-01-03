import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Marquise Foster",
      title: "What to expect today — day one — at TC Sessions: Space 2021",
      description:
        "Welcome to Day One of TC Sessions: Space 2021! Get ready for two full days of programming dedicated to the visionary people forging and funding a sustainable space economy — a little something we like to call Space 2.0. Ready to join your global community of …",
      url:
        "https://techcrunch.com/2021/12/14/what-to-expect-today-day-one-at-tc-sessions-space-2021/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-724244095.jpg?w=651",
      publishedAt: "2021-12-14T17:09:01Z",
      content:
        "Welcome to Day One of TC Sessions: Space 2021! Get ready for two full days of programming dedicated to the visionary people forging and funding a sustainable space economy a little something we like … [+2637 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Sarah Perez",
      title:
        "Cash App now lets users 'gift' stock and bitcoin using their USD balance or a debit card",
      description:
        "There are already a number of ways to gift cryptocurrencies, but today Cash App will make doing so simpler with a new feature rolling out to its peer-to-peer payments app. The app, owned by Block (the company formerly known as Square) will now allow users in …",
      url:
        "https://techcrunch.com/2021/12/14/cash-app-now-lets-users-gift-stock-and-bitcoin-using-their-usd-balance-or-a-debit-card/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1236600806.jpg?w=600",
      publishedAt: "2021-12-14T17:00:46Z",
      content:
        "There are already a number of ways to gift cryptocurrencies, but today Cash App will make doing so simpler with a new feature rolling out to its peer-to-peer payments app. The app, owned by Block (th… [+2680 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Aisha Malik",
      title:
        "Apple releases 'Tracker Detect' Android app to help users discover unknown nearby AirTags",
      description:
        "Apple has released a new Android app called “Tracker Detect” to help people who don’t own Apple products to identity unexpected AirTags near them in an effort to boost privacy. If a user thinks they may be being tracked, they can use the app to scan for nearb…",
      url:
        "https://techcrunch.com/2021/12/14/apple-releases-tracker-detect-android-app-to-help-users-discover-unknown-nearby-airtags/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-14-at-11.12.35-AM-1.png?w=564",
      publishedAt: "2021-12-14T16:51:49Z",
      content:
        "Apple has released a new Android app called “Tracker Detect” to help people who don’t own Apple products to identity unexpected AirTags near them in an effort to boost privacy. If a user thinks they … [+3678 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Sarah Perez",
      title:
        "Apple launches its Siri-only Apple Music Voice Plan with iOS 15.2",
      description:
        "Apple is now rolling out access to its new, lower-cost Apple Music Voice plan, first introduced this fall at the company’s hardware event. The new service, designed largely for use with HomePod speakers or AirPods, limits consumers to accessing Apple Music us…",
      url:
        "https://techcrunch.com/2021/12/14/apple-launches-its-siri-only-apple-music-voice-plan-with-ios-15-2/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/apple-music-voice-plan.jpg?w=500",
      publishedAt: "2021-12-14T16:32:17Z",
      content:
        "Apple is now rolling out access to its new, lower-cost Apple Music Voice plan, first introduced this fall at the company’s hardware event. The new service, designed largely for use with HomePod speak… [+3756 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Emma Betuel",
      title:
        'Garner Health raises $45M Series B for "totally objective" doctor review service',
      description:
        "When you shop for a holiday gift, you probably read at least one review. Garner Health’s bet is when you look for a doctor, you’ll want to do the same thing – but you’ll find that existing reviews aren’t enough to go on.  Garner Health, founded in 2019 is a s…",
      url:
        "https://techcrunch.com/2021/12/14/garner-health-raises-45m-series-b-for-totally-objective-doctor-review-service/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/Screen-Shot-2021-12-13-at-12.19.24-PM.png?w=678",
      publishedAt: "2021-12-14T16:23:05Z",
      content:
        "When you shop for a holiday gift, you probably read at least one review. Garner Healths bet is when you look for a doctor, youll want to do the same thing but youll find that existing reviews arent e… [+6618 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Mary Ann Azevedo",
      title:
        "Staircase steps up effort to build the 'AWS Marketplace for the mortgage industry' with fresh $18M",
      description:
        "If you’ve ever had to apply for a mortgage, you know that it can be a time-consuming, expensive and often painful process — both in terms of just filling out the application and then waiting for the transaction to close. In recent years, a number of digital l…",
      url: "https://techcrunch.com/2021/12/14/staircase-raises-18-million/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/09/GettyImages-1317958548.jpg?w=604",
      publishedAt: "2021-12-14T16:00:45Z",
      content:
        "If youve ever had to apply for a mortgage, you know that it can be a time-consuming, expensive and often painful process — both in terms of just filling out the application and then waiting for the t… [+4714 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Kris Holt",
      title: "Toyota’s latest EV concepts include sports cars and a pickup",
      description:
        "Toyota now aim to roll out 30 electric vehicles by 2030, expanding on its plan to sell 15 fully electric models by 2025. It gave a taste of the future by previewing a broad range of new EV.",
      url:
        "https://techcrunch.com/2021/12/14/toyotas-latest-ev-concepts-include-sports-cars-and-a-pickup/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/FGlBk5WWYAkmub8.jpeg?w=600",
      publishedAt: "2021-12-14T15:57:22Z",
      content:
        "Toyota now aims to roll out 30 electric vehicles by 2030, expanding on its plan to sell 15 fully electric models by 2025. It gave a taste of the future by previewing a broad range of EV concepts duri… [+1993 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Christine Hall",
      title: "Pair Eyewear focuses on adult glasses as it takes in $60M",
      description:
        "If Pair’s announcement is any indication, the direct-to-consumer eyewear market is doing quite well.",
      url:
        "https://techcrunch.com/2021/12/14/pair-eyewear-focuses-in-on-adult-glasses-as-it-takes-in-60m/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/12/2104018_Blue_Client_0191.jpg?w=711",
      publishedAt: "2021-12-14T15:30:45Z",
      content:
        "Purchasing new glasses used to be about finding the right pair that would go with everything until you needed the next set. Pair Eyewear turned that on its head with magnetic frames, called Top Frame… [+3583 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Natasha Lomas",
      title:
        "Apple and Google's mobile duopoly likely to face UK antitrust action",
      description:
        "The UK’s antitrust watchdog has given the clearest signal yet that interventions under an upcoming reform of the country’s competition rules will target tech giants Apple and Google — including their duopolistic command of the mobile market, via iOS and Andro…",
      url:
        "https://techcrunch.com/2021/12/14/cma-mobile-ecosystem-market-study/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2021/03/apple-app-store-ios-2021.jpg?w=712",
      publishedAt: "2021-12-14T15:26:02Z",
      content:
        "The UK’s antitrust watchdog has given the clearest signal yet that interventions under an upcoming reform of the country’s competition rules will target tech giants Apple and Google — including their… [+8468 chars]"
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Aisha Malik",
      title: "Pinterest rolls out the option to reply to comments with videos",
      description:
        "Pinterest is the latest social media platform to roll out the option to allow users to reply to comments with videos. Users can now do so via the company’s Idea Pins feature. Pinterest launched Idea Pins earlier this year to allow creators to record and edit …",
      url:
        "https://techcrunch.com/2021/12/14/pinterest-rolls-out-the-option-to-reply-to-comments-with-videos/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2017/09/pinterest-app-icon-ios.jpg?w=710",
      publishedAt: "2021-12-14T15:21:38Z",
      content:
        "Pinterest is the latest social media platform to roll out the option to allow users to reply to comments with videos. Users can now do so via the company’s Idea Pins feature. Pinterest launched Idea … [+22367 chars]"
    }
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor from news components");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2> News Monkey top headlines</h2>
        this is a news component
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="Elon" decription="mydes" url="" />
          </div>
          <div className="col-md-3">
            <NewsItem title="Elon" decription="mydes" />
          </div>
          <div className="col-md-3">
            <NewsItem title="Elon" decription="mydes" />
          </div>
          <div className="col-md-3">
            <NewsItem title="Elon" decription="mydes" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
