export interface Vehicle {
  id: number; // Identificador único
  title: string; // Título do anúncio
  description: string; // Descrição do veículo
  user_price: number; // Preço do usuário (em valor monetário)
  brand: string; // Marca do veículo
  code_fipe: string; // Código da Tabela FIPE
  fuel: string; // Tipo de combustível (Ex: Gasolina, Etanol)
  model: string; // Modelo completo
  model_year: number; // Ano do modelo
  fipe_price: number; // Preço segundo a Tabela FIPE
  reference_month: string; // Mês de referência para o preço
  created_at: string; // Data de criação do anúncio (em formato ISO 8601)
  kilometers_driven: number; // Quilometragem do veículo
  type_of_vehicle: string; // Tipo do veículo (Ex: 1 - Carro, 2 - Moto, etc.)
  traffic_signs: string; // Sinalização de trânsito do veículo (Ex: BR4S1L)
  car_color: string; // Cor do veículo
  type_of_direction: string; // Tipo de direção (Ex: Elétrica, Hidráulica)
  gear_box: string; // Tipo de câmbio (Ex: Automático, Manual)
  engine_power: string; // Potência do motor (Ex: 2.0, 1.8, etc.)
  images: {
    // Array de imagens do anúncio
    id: number; // Identificador único da imagem
    url: string; // URL da imagem
    ad_id: number; // ID do anúncio relacionado
  }[];
}
