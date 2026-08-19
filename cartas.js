/**
 * Catalogo de cartas por tipo de slot, usado pelos <datalist> de perfil-build.html.
 *
 * SEMENTE, NAO VERDADE ABSOLUTA: esta lista foi montada a partir das cartas
 * classicas de Ragnarok e NAO foi conferida contra o servidor da guild. Confira
 * e complete antes de tratar como oficial - principalmente os slots visuais,
 * que ficaram vazios de proposito por nao existirem no RO classico.
 *
 * O campo de carta e um <input> com <datalist>: a lista so sugere, nao restringe.
 * Qualquer nome fora dela continua sendo aceito e salvo, entao a pagina funciona
 * inteira mesmo com o catalogo pela metade.
 *
 * Para editar: acrescente strings nos arrays abaixo, em ordem alfabetica. Nao
 * ha build - salvou o arquivo, recarregou a pagina, ja vale.
 */
window.CARTAS = {
  arma: [
    'Abysmal Knight', 'Andre', 'Desert Wolf', 'Doppelganger', 'Drops',
    'Hydra', 'Mummy', 'Skel Worker', 'Turtle General', 'Vadon',
  ],
  escudo: [
    'Alice', 'Golem', 'Hodremlin', 'Horn', 'Khalitzburg',
    'Maya', 'Medusa', 'Thara Frog',
  ],
  armadura: [
    'Angeling', 'Bathory', 'Dokebi', 'Evil Druid', 'Ghostring',
    'Marc', 'Pecopeco', 'Pupa', 'Swordfish',
  ],
  capa: [
    'Deviling', 'Dustiness', 'Jakk', 'Marse', 'Myst',
    'Noxious', 'Raydric', 'Whisper',
  ],
  calcado: [
    'Antique Firelock', 'Eggyra', 'Firelock Soldier', 'Green Ferus',
    'Male Thief Bug', 'Matyr', 'Sohee', 'Verit',
  ],
  acessorio: [
    'Creamy', 'Horong', 'Kobold', 'Mantis', 'Marine Sphere',
    'Phen', 'Poporing', 'Smokie', 'Yoyo', 'Zerom',
  ],
  // Slots visuais (topo, meio, baixo, traje, costas). Vazio: nao ha equivalente
  // no RO classico e nao daria para preencher sem chutar nomes.
  visual: [],
};
