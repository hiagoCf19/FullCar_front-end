class Ad {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public user_id: number,
    public user_price: number,
    public brand: string,
    public code_fipe: string,
    public fuel: string,
    public model: string,
    public model_year: number,
    public fipe_price: number,
    public reference_month: string,
    public created_at: Date,
    public kilometers_driven: number,
    public type_of_vehicle: string,
    public traffic_signs: string,
    public car_color: string,
    public type_of_direction: string,
    public gear_box: string,
    public engine_power: string
  ) { }
  static formatPrice(price: number): string {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(price);
  }
}
export default Ad;
