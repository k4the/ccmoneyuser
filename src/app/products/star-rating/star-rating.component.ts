import { Component, Input, OnInit } from '@angular/core';
import { PollRating } from '../poll-rating.model';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input('pollRating')
  pollRating: PollRating;
  //starRating = 'noStars';
  constructor() {}

  ngOnInit() {
    //this.starRating = this.getStarRating(this.pollRating);
  }

  private getStarRating(pollRating: PollRating): string {
    let starClass;
    const numberOfStars = 5;
    if (!pollRating.totalVotes) {
      starClass = 'noStars';
    } else if (pollRating.totalVotes && pollRating.totalVotes < 24) {
      starClass = 'noStars';
    } else {
      const maxScore = pollRating.totalVotes * numberOfStars;
      const poorScore =
        pollRating.totalVotes * (pollRating.poorPercentage / 100);
      const okScore =
        pollRating.totalVotes * (pollRating.okPercentage / 100) * 3;
      const greatScore =
        pollRating.totalVotes * (pollRating.greatPercentage / 100) * 5;
      const totalScore = poorScore + okScore + greatScore;
      const n = (totalScore * numberOfStars) / maxScore;
      const stars = Math.round(n + 0.5) - 0.5;
      starClass = this.getStarClass(stars);
    }
    return starClass;
  }

  private getStarClass(starRating: number): string {
    switch (starRating) {
      case 1:
        return 'oneStar';
      case 1.5:
        return 'oneAndAHalfStars';
      case 2:
        return 'twoStars';
      case 2.5:
        return 'twoAndAHalfStars';
      case 3:
        return 'threeStars';
      case 3.5:
        return 'threeAndAHalfStars';
      case 4:
        return 'fourStars';
      case 4.5:
        return 'fourAndAHalfStars';
      case 5:
        return 'fiveStars';
      default:
        return 'noStars';
    }
  }
}
