export type StatsNumericStatistic = {
  sum: number;
  sum_net: number;
  transactions: number;
  evc_fee: number;
};
export interface StatsPurchaseInterface {
  day: string;
  purchases: number;
  sum: number;
  sum_net: number;
  evc_fee: number;
}
export interface StatsCuInterface {
  count: number;
  cu_mode: string;
}
export interface StatsSolutionInterface extends StatsCuInterface {
  solution_name: string;
}
export interface StatsInterface {
  free_cu: StatsCuInterface[];
  free_cu_solution: StatsSolutionInterface[];
  last_7d: StatsNumericStatistic;
  last_24h: StatsNumericStatistic;
  last_30d: StatsNumericStatistic;
  last_365d: StatsNumericStatistic;
  paid_cu: StatsNumericStatistic;
  paid_cu_solution: StatsSolutionInterface[];
  purchases365d: StatsPurchaseInterface[];
  requests365d: StatsPurchaseInterface[];
  staff_cu: StatsCuInterface[];
  staff_cu_solution: StatsSolutionInterface[];
  this_day: StatsNumericStatistic;
  this_month: StatsNumericStatistic;
  this_week: StatsNumericStatistic;
  this_year: StatsNumericStatistic;
  top50_without_mappacks: StatsCuInterface[];
}
