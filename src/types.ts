export interface Especialidade {
  id: string;
  tag: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  beneficios: string[];
  indicacoes: string[];
  duracaoSessao: string;
  imagemUrl: string;
  icone: string;
}

export interface DepoimentoRecuperacao {
  id: string;
  paciente: string;
  idadeProfissao: string;
  diagnostico: string;
  tempoRecuperacao: string;
  depoimento: string;
  resultadoChave: string;
  avatarUrl: string;
  avaliacao: number;
}

export interface PilarMetodologia {
  numero: string;
  fase: string;
  titulo: string;
  descricao: string;
  itens: string[];
}

export interface AgendamentoDados {
  nome: string;
  telefone: string;
  email: string;
  especialidade: string;
  regiaoDor: string;
  periodoPreferencia: string;
  descricaoSintomas: string;
  comoNosConheceu?: string;
}

export interface MetricItem {
  valor: number;
  sufixo: string;
  label: string;
  descricao: string;
}
