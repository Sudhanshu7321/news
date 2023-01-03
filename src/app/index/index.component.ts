import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../service/news.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  news: any[] = [];
  sport: any[] = [];
  // direction: string;
  date: Date = new Date();
  test: any[] = [
    {
      "status": "success",
      "totalResults": 3,
      "results": [
        {
          "title": "Perform or perish: Telecom Minister Ashwini Vaishnaw approves forced retirement of 10 senior DoT officials over doubtful integrity",
          "link": "https://www.opindia.com/2022/12/10-senior-dot-officials-sacked-over-doubtful-integrity/",
          "keywords": [
            "Government and Policy",
            "News Reports",
            "ashwini Vaishnaw",
            "department of telecom",
            "Good governance",
            "railway ministry"
          ],
          "creator": [
            "OpIndia Staff"
          ],
          "video_url": null,
          "description": "Telecom Minister has approved forced retirement for 10 senior DoT personnel for doubtful integrity keeping with his zero-tolerance policy towards corruption.",
          "content": "In line with his perform or perish policy as well as zero tolerance for corruption, Telecom Minister Ashwini Vaishnaw on Saturday approved the forced retirement of 10 officials of the Department of Telecom (DoT) including a joint secretary. It is notable that this is the first time that DoT officials have been pushed into retirement under section 56 (J) under Pension Rule 48 of CCS (Pension) Rules, 1972. Reportedly, the Telecom Minister has approved forced retirement for 10 senior DoT personnel for doubtful integrity keeping with his zero-tolerance policy towards corruption. Among the DoT officers given forced retirement, nine were working at the Director level while one was working at the joint secretary rank. Notably, this is not the first time that Ashwini Vaishnaw has approved the forced retirement of inefficient or corrupt officials.  In September this year, a Senior Bharat Sanchar Nigam Limited (BSNL) official was caught napping in a meeting chaired by the Telecom Minister and was made to take voluntary retirement.   Vaishnaw had asked BSNL employees to work hard and turn things around following the announcement of the Rs 1.64 lakh crore relief package. To compete with private telcos, the minister instructed employees to abandon their “Sarkari attitude” and focus on customer satisfaction. In August this year, Minister Vaishnaw was heard saying in an audio clip from his first meeting with the BSNL employees, that those who cannot perform can take voluntary retirement and go home. “In this competitive industry, only your performance can save you. I want to see the results in the next 24 months, so you either perform or perish,” the Minister said.  Ashwini Vaishnaw, who also holds the Railway portfolio, has approved the forced retirement of approximately 40 railway officials for non-performance and questionable integrity, including a secretary-level officer and two special secretary-level officers. In November it was reported that around 139 railway officers were to take voluntary retirement while 38 officers were terminated from service.  Reportedly, on November 23, two senior officials of the railways were sacked after they were caught taking bribe in two incidents. In one case an official was caught by the CBI taking bribe of Rs 5 lakh in Hyderabad. In another case, an official in Ranchi was caught taking bribe of Rs 3 lakh.  Notably, under the Voluntary Retirement Scheme (VRS) employees are paid a salary equivalent to two months’ pay for each year of service remaining.",
          "pubDate": "2022-12-24 14:20:26",
          "image_url": null,
          "source_id": "opindia",
          "country": [
            "india"
          ],
          "category": [
            "top"
          ],
          "language": "english"
        },
        {
          "title": "CBI lodges FIR against Kolkata-based firm in <span class='webrupee'>₹</span>4,000-crore bank fraud case",
          "link": "https://www.livemint.com/news/india/cbi-lodges-fir-against-kolkata-based-firm-in-rs-4-000-crore-bank-fraud-case-11671810234517.html",
          "keywords": null,
          "creator": [
            "Swati Luthra"
          ],
          "video_url": null,
          "description": "The probe agency said searches were conducted at 16 locations, including Nagpur, Mumbai, Ranchi, Kolkata, Durgapur, Ghaziabad, Vishakhapatnam, etc.",
          "content": null,
          "pubDate": "2022-12-23 16:20:33",
          "image_url": "https://images.livemint.com/img/2022/12/23/1600x900/0be2a77c-72ff-11ed-9470-6981fab06e1e_1670067673221_1671812246392_1671812246392.jpg",
          "source_id": "livemint",
          "country": [
            "india"
          ],
          "category": [
            "top"
          ],
          "language": "english"
        },
        {
          "title": "On This Day in 2004: MS Dhoni makes international debut against Bangladesh in Chattogram",
          "link": "https://www.firstpost.com/firstcricket/sports-news/on-this-day-2004-ms-dhoni-international-debut-11860711.html",
          "keywords": [
            "First Cricket News"
          ],
          "creator": [
            "FP Trending"
          ],
          "video_url": null,
          "description": "On This Day in 2004: MS Dhoni makes international debut against Bangladesh in Chattogram",
          "content": "When Mahendra Singh Dhoni headed back to the pavilion for a golden duck in his very first international appearance, one could hardly imagine that the long haired boy, coming from a small town, would once bring every major cricketing accolade to the country. On 23 December 2004, Dhoni donned the Indian kit for the first time during an ODI game against Bangladesh in Chattogram. Though there were high expectations from him owing to his domestic numbers, the wicketkeeper-batter only managed to connect a single delivery with his bat.Under the captaincy of Sourav Ganguly, India was reeling at 180 runs at a loss of 5 wickets when Dhoni came to the crease, joining hands with Mohammad Kaif. The adrenaline rush was quite evident as he went on to attempt a quick single on the first ball. However, he fell just short of the white line when Bangladesh keeper Khaled Mashud rattled the stumps. There was no sign of frustration and Dhoni calmly left the ground.Though the first chapter ended in disappointment, the rest of the story was phenomenal. It did not take much time for the Ranchi boy to develop himself into one of the greatest finishers history has ever seen. MS Dhoni, arguably the sharpest mind of modern-day sports, bid adieu to international cricket on 15 August 2020.Even if his entry into the sport was not worth remembering, the farewell certainly was. In his 16 year-long international career, Captain Cool decorated his trophy cabinet with the T20 World Cup (2007), ICC World Cup (2011) and ICC Champions Trophy (2013). He emerged to be the first-ever and only captain to lift all major ICC trophies.India also achieved some tremendous feats in both white and red-ball cricket during the Dhoni era. He led the Men in Blue to become the world’s No 1 Test side in 2009 and ensured they remained at the top for almost 600 days. Dhoni also recorded 21 Test victories on home soil, the most by any Indian skipper so far.Looking at his individual tally, the legendary finisher was named the ICC ODI player of the year two consecutive times, in 2008 and 2009. Throughout his illustrated career, Dhoni has played 350 ODIs and 90 Tests and registered 10773 and 4876 runs, respectively. He also has an excellent record in T20Is having scored 1617 runs in 98 games.Read all the Latest News, Trending News, Cricket News, Bollywood News, India News and Entertainment News here. Follow us on Facebook, Twitter and Instagram.",
          "pubDate": "2022-12-23 07:44:46",
          "image_url": "https://images.firstpost.com/fpimages/380x285/fixed/jpg/2020/08/DhoniF6401.jpg",
          "source_id": "firstpost",
          "country": [
            "india"
          ],
          "category": [
            "sports"
          ],
          "language": "english"
        }
      ],
      "nextPage": null
    }
  ];

  constructor(private newsService: NewsService) {
    this.newsService.getSportNews().subscribe(
      (res: any) => {
        this.sport = res.articles;
      },
      (err) => {
        alert('Error in API');
      }
    );
    this.newsService.getNews().subscribe(
      (res: any) => {
        this.news = res.articles;
      },
      (err) => {
        alert('Error in API');
      }
    );
  }



  ngOnInit(): void {
  }

}
