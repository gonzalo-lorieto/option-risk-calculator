import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Option risk calculator";
  price: number;
  strike: number;
  bid: number;

  cost: number = 0;
  profit: number = 0;
  interest: number = 0;

  calculate(): void {
    this.calculateCost();
    this.calculateProfit();
    this.calculateInterest();
  }

  private calculateCost(): void {
    if (this.price >= 0 && this.strike >= 0 && this.bid >= 0) {
      this.cost = this.price - this.bid;
    }
  }

  private calculateProfit(): void {
    if (this.price >= 0 && this.strike >= 0 && this.bid >= 0) {
      this.profit = this.strike - this.cost;
    }
  }

  private calculateInterest(): void {
    if (this.price >= 0 && this.strike >= 0 && this.bid >= 0) {
      this.interest = (this.profit * 100) / this.cost;
    }
  }
}
