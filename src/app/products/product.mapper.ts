import { Product } from './product.model';
import { PollRating } from './poll-rating.model';
import { Fuel } from './fuel.model';
import { Company } from './company.model';

export class ProductMapper {
  constructor() {}

  mapProductFromJson(json: any): Product {
    const product = {
      id: json._id,
      name: json.name,
      totalYearlyCost: json.totalYearlyCost,
      totalMonthlyCost: json.totalMonthlyCost,
      fuelType: json.fuelType ? json.fuelType : null,
      isGreen: json.isGreen ? json.isGreen : false,
      isTopPick: json.isTopPick ? json.isTopPick : false,
      cashback: json.cashback,
      earlyExitFee: json.earlyExitFee,
      discountRate: json.discountRate,
      rateType: json.rateType,
      fixedFor: json.fixedFor,
      paymentMethod: json.paymentMethod,
      message: json.message ? json.message : null,
      company: json.company ? this.mapCompanyFromJson(json.company) : null,
      gas: json.gas ? this.mapFuelFromJson(json.gas) : null,
      electricity: json.electricity ? this.mapFuelFromJson(json.electricity) : null,
    };
    return new Product(product);
  }

  mapCompanyFromJson(json: any): Company {
    const company = {
      id: json._id,
      name: json.name,
      logoUrl: json.logoUrl,
      message: json.message ? json.message : null,
      warningMessage: json.warningMessage ? json.warningMessage : null,
      regions: json.regions ? json.regions : [],
      isBig: json.isBig,
      pollRating: json.pollRating ? this.mapPollRatingFromJson(json.pollRating) : null
    };
    return new Company(company);
  }

  mapPollRatingFromJson(json: any): PollRating {
    const pollRating = {
      great: json.great ? json.great : 0,
      ok: json.ok ? json.ok : 0,
      poor: json.poor ? json.poor : 0,
      starClass: json.starClass ? json.starClass : null,
      greatPercentage: json.greatPercentage ? json.greatPercentage : 0,
      okPercentage: json.okPercentage ? json.okPercentage : 0,
      poorPercentage: json.poorPercentage ? json.poorPercentage : 0,
      totalVotes: json.totalVotes ? json.totalVotes : 0,
      feedbackMessage: json.feedbackMessage ? json.feedbackMessage : null,
      limitedFeedbackMessage: json.limitedFeedbackMessage ? json.limitedFeedbackMessage : null
    };
    return new PollRating(pollRating);
  }

  mapFuelFromJson(json: any): Fuel {
    const fuel = {
      yearlyCost: json.yearlyCost,
      monthlyCost: json.monthlyCost ? json.monthlyCost : null,
      economy7: json.economy7,
      unitRate: json.unitRate,
      discountRate: json.discountRate ? json.discountRate : null,
      standingCharge: json.standingCharge ? json.standingCharge : null
    };
    return new Fuel(fuel);
  }
}
